import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

const resend = new Resend(process.env.RESEND_API_KEY!);

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

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

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

            <div style="text-align: center; margin: 32px 0;">
              <a href="https://course.kintsugiclass.com" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Access Your Course</a>
            </div>

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
