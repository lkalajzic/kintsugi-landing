import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { addToPurchasersAudience, addToRefundsAudience, removeFromPurchasersAudience, parseFullName, type CustomerData } from '../../lib/fb-audience';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

const resend = new Resend(process.env.RESEND_API_KEY!);

const PAYMENT_LINK = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00';

// Kintsugi price IDs - only handle these
const KINTSUGI_PRICE_IDS = [
  'price_1SsCFMIWj0la69bvd1QSZSna', // Kintsugi default ($47 USD / €47 EUR)
  'price_1SRIBMIWj0la69bvC5K0xZes', // Kintsugi default OLD (USD only)
  'price_1SsCENIWj0la69bvJ8MwjsyJ', // Kintsugi NYS ($47 USD / €47 EUR)
  'price_1Sn3OMIWj0la69bvHWo1KO4T', // Kintsugi NYS OLD (USD only) - keep for past purchases
  'price_1SVCYvIWj0la69bvDzMTfYa4', // Kintsugi old ($47) - discontinued
  'price_1SVCbDIWj0la69bvGLruK7Et', // Kintsugi old ($97) - discontinued
];

/**
 * Check if customer already completed a purchase recently
 * Used to avoid sending "payment failed" emails to people who retried and succeeded
 */
async function hasRecentSuccessfulPurchase(email: string): Promise<boolean> {
  try {
    const oneHourAgo = Math.floor(Date.now() / 1000) - 3600;
    const sessions = await stripe.checkout.sessions.list({
      limit: 5,
      created: { gte: oneHourAgo },
    });

    // Filter by email and completed status
    const successfulSession = sessions.data.find(
      s => s.status === 'complete' &&
           (s.customer_details?.email === email || s.customer_email === email)
    );

    return !!successfulSession;
  } catch (error) {
    console.error('Error checking for recent purchase:', error);
    return false; // On error, proceed with sending email
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }

  // Handle async payment failed (PayPal, bank transfers, etc.)
  if (event.type === 'checkout.session.async_payment_failed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email || session.customer_email;

    if (!customerEmail) {
      console.log('Async payment failed but no email found');
      return NextResponse.json({ received: true });
    }

    // Check if this is for a Kintsugi product
    try {
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items'],
      });
      const lineItems = fullSession.line_items?.data || [];
      const isKintsugiProduct = lineItems.some(item =>
        item.price?.id && KINTSUGI_PRICE_IDS.includes(item.price.id)
      );

      if (!isKintsugiProduct) {
        console.log(`Ignoring non-Kintsugi async payment failure (no matching price IDs)`);
        return NextResponse.json({ received: true });
      }
    } catch (err) {
      console.error('Error checking price IDs for async payment failure:', err);
      // Continue anyway - better to send recovery email than miss a customer
    }

    console.log(`❌ ASYNC PAYMENT FAILED: ${customerEmail}`);

    // Check if they already succeeded with a retry
    if (await hasRecentSuccessfulPurchase(customerEmail)) {
      console.log(`[${customerEmail}] Already has successful purchase, skipping recovery email`);
      return NextResponse.json({ received: true });
    }

    try {
      await resend.emails.send({
        from: 'Yuki from Kintsugi Class <support@kintsugiclass.com>',
        to: customerEmail,
        subject: 'Your payment didn\'t go through - here\'s what to do',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #2c3e50; font-weight: 400; margin-bottom: 24px;">Your payment didn't go through</h1>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi there,</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I wanted to let you know that your payment for the Kintsugi Class didn't go through.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">On our end, the bank's response code said "try again" - so it seems like a temporary issue on their side, not anything wrong with your account.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I kept your enrollment open. We accept both <strong>cards and PayPal</strong>, so if one doesn't work, the other usually does:</p>

            <div style="text-align: center; margin: 32px 0;">
              <a href="${PAYMENT_LINK}" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Try Again</a>
            </div>

            <p style="color: #7f8c8d; line-height: 1.6; font-size: 14px; margin-top: 32px;">If you run into any issues, just reply - I read every message personally.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Best,<br>Yuki<br>Kintsugi Class</p>
          </div>
        `,
      });

      console.log(`[${customerEmail}] Recovery email sent for failed async payment`);
    } catch (error) {
      console.error(`[${customerEmail}] Failed to send recovery email:`, error);
    }

    return NextResponse.json({ received: true });
  }

  // Handle card declined (instant payment failures)
  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    // Try to get email from various sources
    const customerEmail =
      paymentIntent.receipt_email ||
      paymentIntent.last_payment_error?.payment_method?.billing_details?.email ||
      (typeof paymentIntent.last_payment_error?.payment_method === 'object'
        ? paymentIntent.last_payment_error.payment_method.billing_details?.email
        : null);

    if (!customerEmail) {
      console.log('Payment failed but no email found');
      return NextResponse.json({ received: true });
    }

    console.log(`💳 CARD DECLINED: ${customerEmail}`);

    // Check if this payment is for a Kintsugi product
    try {
      const sessions = await stripe.checkout.sessions.list({
        payment_intent: paymentIntent.id,
        limit: 1,
        expand: ['data.line_items'],
      });

      const session = sessions.data[0];
      if (session) {
        const lineItems = session.line_items?.data || [];
        const isKintsugiProduct = lineItems.some(item =>
          item.price?.id && KINTSUGI_PRICE_IDS.includes(item.price.id)
        );

        if (!isKintsugiProduct) {
          console.log(`Ignoring non-Kintsugi failed payment (no matching price IDs)`);
          return NextResponse.json({ received: true });
        }
      }
    } catch (err) {
      console.error('Error checking price IDs for failed payment:', err);
      // Continue anyway - better to send recovery email than miss a customer
    }

    // Check if they already succeeded with a retry
    if (await hasRecentSuccessfulPurchase(customerEmail)) {
      console.log(`[${customerEmail}] Already has successful purchase, skipping recovery email`);
      return NextResponse.json({ received: true });
    }

    try {
      await resend.emails.send({
        from: 'Yuki from Kintsugi Class <support@kintsugiclass.com>',
        to: customerEmail,
        subject: 'Your payment didn\'t go through - here\'s what to do',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #2c3e50; font-weight: 400; margin-bottom: 24px;">Your payment didn't go through</h1>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi there,</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I wanted to let you know that your payment for the Kintsugi Class didn't go through.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">The bank returned a code that usually means "try again" - so it's typically a temporary issue that resolves on a second or third attempt, or with a different payment method.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I kept your enrollment open. We accept both <strong>cards and PayPal</strong>, so if one doesn't work, the other usually does:</p>

            <div style="text-align: center; margin: 32px 0;">
              <a href="${PAYMENT_LINK}" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Try Again</a>
            </div>

            <p style="color: #7f8c8d; line-height: 1.6; font-size: 14px; margin-top: 32px;">If you run into any issues, just reply - I read every message personally.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Best,<br>Yuki<br>Kintsugi Class</p>
          </div>
        `,
      });

      console.log(`[${customerEmail}] Recovery email sent for declined card`);
    } catch (error) {
      console.error(`[${customerEmail}] Failed to send recovery email:`, error);
    }

    return NextResponse.json({ received: true });
  }

  // Handle abandoned checkout (session expired without payment)
  if (event.type === 'checkout.session.expired') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email || session.customer_email;

    if (!customerEmail) {
      console.log('Expired session but no email found - cannot recover');
      return NextResponse.json({ received: true });
    }

    // Check if this is for a Kintsugi product
    try {
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items'],
      });
      const lineItems = fullSession.line_items?.data || [];
      const isKintsugiProduct = lineItems.some(item =>
        item.price?.id && KINTSUGI_PRICE_IDS.includes(item.price.id)
      );

      if (!isKintsugiProduct) {
        console.log(`Ignoring non-Kintsugi expired checkout (no matching price IDs)`);
        return NextResponse.json({ received: true });
      }
    } catch (err) {
      console.error('Error checking price IDs for expired checkout:', err);
      // Continue anyway - better to send recovery email than miss a customer
    }

    console.log(`⏰ ABANDONED CHECKOUT: ${customerEmail}`);

    // Check if they already succeeded with a retry
    if (await hasRecentSuccessfulPurchase(customerEmail)) {
      console.log(`[${customerEmail}] Already has successful purchase, skipping recovery email`);
      return NextResponse.json({ received: true });
    }

    try {
      await resend.emails.send({
        from: 'Yuki from Kintsugi Class <support@kintsugiclass.com>',
        to: customerEmail,
        subject: 'I kept your spot open',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #2c3e50; font-weight: 400; margin-bottom: 24px;">I kept your spot open</h1>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi there,</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I noticed you started enrolling in the Kintsugi Class but didn't complete checkout.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">No worries - I kept your spot open in case you want to come back. We accept both <strong>cards and PayPal</strong>:</p>

            <div style="text-align: center; margin: 32px 0;">
              <a href="${PAYMENT_LINK}" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Complete Your Enrollment</a>
            </div>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">As a reminder, you'll get:</p>
            <ul style="color: #34495e; line-height: 1.8; font-size: 16px;">
              <li>8 video lessons from beginner to advanced techniques</li>
              <li>Complete materials guide</li>
              <li>Lifetime access</li>
            </ul>

            <p style="color: #7f8c8d; line-height: 1.6; font-size: 14px; margin-top: 32px;">If you had any issues or questions, just reply - I read every message personally.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Best,<br>Yuki<br>Kintsugi Class</p>
          </div>
        `,
      });

      console.log(`[${customerEmail}] Recovery email sent for abandoned checkout`);
    } catch (error) {
      console.error(`[${customerEmail}] Failed to send recovery email:`, error);
    }

    return NextResponse.json({ received: true });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Expand line items to check price IDs
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items'],
    });

    // Only handle Kintsugi purchases (check if any line item has a Kintsugi price)
    const lineItems = fullSession.line_items?.data || [];
    const isKintsugiPurchase = lineItems.some(item =>
      item.price?.id && KINTSUGI_PRICE_IDS.includes(item.price.id)
    );

    if (!isKintsugiPurchase) {
      console.log(`Ignoring non-Kintsugi purchase (no matching price IDs)`);
      return NextResponse.json({ received: true });
    }

    // Get customer details
    const customerEmail = session.customer_details?.email || session.customer_email;
    const customerName = session.customer_details?.name || 'there';
    const address = session.customer_details?.address;

    if (!customerEmail) {
      console.error('No customer email found in session');
      return NextResponse.json({ error: 'No email found' }, { status: 400 });
    }

    // Log purchase
    console.log(`🎉 NEW PURCHASE: ${customerEmail} (${customerName})`);
    console.log(`   Amount: ${session.amount_total ? session.amount_total / 100 : 'N/A'} ${session.currency?.toUpperCase()}`);
    console.log(`   Session ID: ${session.id}`);

    // Build full customer data for FB audience (better match rates)
    const { firstName, lastName } = parseFullName(customerName !== 'there' ? customerName : undefined);
    const customerData: CustomerData = {
      email: customerEmail,
      firstName,
      lastName,
      zip: address?.postal_code || undefined,
      city: address?.city || undefined,
      state: address?.state || undefined,
      country: address?.country || undefined,
    };

    // Add to FB Custom Audience for exclusion
    addToPurchasersAudience(customerData).catch(err => {
      console.error(`[${customerEmail}] Failed to add to purchasers audience:`, err);
    });

    // Send course access email
    try {
      const result = await resend.emails.send({
        from: 'Kintsugi Class <support@kintsugiclass.com>',
        to: customerEmail,
        subject: 'Your Kintsugi Course is Ready! 🎨',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #2c3e50; font-weight: 400; margin-bottom: 24px;">Welcome to Your Kintsugi Journey</h1>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi ${customerName},</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Thank you for joining the Kintsugi Class! Your course is ready and waiting for you.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;"><strong>Click this link to access your course:</strong></p>
            <p style="margin: 16px 0;"><a href="https://course.kintsugiclass.com/sign-up" style="color: #C9A962; font-size: 16px;">https://course.kintsugiclass.com/sign-up</a></p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Inside, you'll find 8 video lessons covering everything from materials to advanced repair techniques.</p>

            <p style="color: #7f8c8d; line-height: 1.6; font-size: 14px; margin-top: 32px;">Questions? Just reply to this email - we're here to help!</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Happy creating,<br>The Kintsugi Class Team</p>

            <div style="border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
              <p style="color: #95a5a6; font-size: 12px; font-style: italic;">"Every broken thing is an opportunity for beauty."</p>
            </div>
          </div>
        `,
      });

      console.log(`[${customerEmail}] Course access email sent. Resend ID: ${result.data?.id}`);
      return NextResponse.json({ received: true, emailId: result.data?.id });
    } catch (error: any) {
      console.error(`[${customerEmail}] Error sending email:`, error);
      // Still return success - they can access via thank-you page
      return NextResponse.json({ received: true, emailFailed: true })
    }
  }

  // Handle refunds and disputes - add to refunds audience for lookalike exclusion
  if (event.type === 'charge.refunded' || event.type === 'charge.dispute.created') {
    const isDispute = event.type === 'charge.dispute.created';
    const charge = isDispute
      ? (event.data.object as Stripe.Dispute).charge as Stripe.Charge
      : event.data.object as Stripe.Charge;

    // For disputes, we need to fetch the full charge if it's just an ID
    let fullCharge = charge;
    if (isDispute && typeof charge === 'string') {
      try {
        fullCharge = await stripe.charges.retrieve(charge);
      } catch (err) {
        console.error('Error fetching charge for dispute:', err);
        return NextResponse.json({ received: true });
      }
    }

    const customerEmail = fullCharge.billing_details?.email || fullCharge.receipt_email;

    if (!customerEmail) {
      console.log(`${isDispute ? 'Dispute' : 'Refund'} processed but no email found`);
      return NextResponse.json({ received: true });
    }

    // Check if this is for a Kintsugi purchase
    const paymentIntentId = typeof fullCharge.payment_intent === 'string'
      ? fullCharge.payment_intent
      : fullCharge.payment_intent?.id;

    if (paymentIntentId) {
      try {
        const sessions = await stripe.checkout.sessions.list({
          payment_intent: paymentIntentId,
          limit: 1,
          expand: ['data.line_items'],
        });

        const session = sessions.data[0];
        if (!session) {
          console.log('No session found for payment intent');
          return NextResponse.json({ received: true });
        }

        const lineItems = session.line_items?.data || [];
        const isKintsugiPurchase = lineItems.some(item =>
          item.price?.id && KINTSUGI_PRICE_IDS.includes(item.price.id)
        );

        if (!isKintsugiPurchase) {
          console.log(`Ignoring non-Kintsugi ${isDispute ? 'dispute' : 'refund'} (no matching price IDs)`);
          return NextResponse.json({ received: true });
        }
      } catch (err) {
        console.error('Error checking price IDs:', err);
        return NextResponse.json({ received: true });
      }
    }

    console.log(`${isDispute ? '⚠️ DISPUTE' : '💸 REFUND'}: ${customerEmail}`);

    // Add to refunds audience and remove from purchasers
    addToRefundsAudience(customerEmail).catch(err => {
      console.error(`[${customerEmail}] Failed to add to refunds audience:`, err);
    });
    removeFromPurchasersAudience(customerEmail).catch(err => {
      console.error(`[${customerEmail}] Failed to remove from purchasers audience:`, err);
    });

    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ received: true });
}
