import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

const resend = new Resend(process.env.RESEND_API_KEY!);

const PAYMENT_LINK = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00';

// Kintsugi payment link IDs - only handle these
const KINTSUGI_PAYMENT_LINKS = [
  'plink_1SgmRrIWj0la69bvsOFfPrb4',  // main link
  'plink_1SRID9IWj0la69bvZLLLn0hT',  // older link
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

    // Only handle Kintsugi purchases
    const paymentLinkId = session.payment_link as string | null;
    if (!paymentLinkId || !KINTSUGI_PAYMENT_LINKS.includes(paymentLinkId)) {
      console.log(`Ignoring non-Kintsugi purchase (payment_link: ${paymentLinkId})`);
      return NextResponse.json({ received: true });
    }

    // Get customer email
    const customerEmail = session.customer_details?.email || session.customer_email;
    const customerName = session.customer_details?.name || 'there';

    if (!customerEmail) {
      console.error('No customer email found in session');
      return NextResponse.json({ error: 'No email found' }, { status: 400 });
    }

    // Log purchase
    console.log(`🎉 NEW PURCHASE: ${customerEmail} (${customerName})`);
    console.log(`   Amount: ${session.amount_total ? session.amount_total / 100 : 'N/A'} ${session.currency?.toUpperCase()}`);
    console.log(`   Session ID: ${session.id}`);

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

  return NextResponse.json({ received: true });
}
