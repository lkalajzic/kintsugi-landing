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

    try {
      const startTime = Date.now();

      // Fetch the PDF from Google Drive
      console.log(`[${customerEmail}] Fetching PDF from Google Drive...`);
      const pdfUrl = process.env.KINTSUGI_EBOOK_URL!;
      const pdfResponse = await fetch(pdfUrl);

      if (!pdfResponse.ok) {
        throw new Error(`Failed to fetch PDF: ${pdfResponse.status} ${pdfResponse.statusText}`);
      }

      const pdfBuffer = await pdfResponse.arrayBuffer();
      const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
      console.log(`[${customerEmail}] PDF fetched in ${Date.now() - startTime}ms`);

      // Send the email with Resend
      console.log(`[${customerEmail}] Sending email via Resend...`);
      const emailStartTime = Date.now();

      const result = await resend.emails.send({
        from: 'Kintsugi Class <support@kintsugiclass.com>',
        to: customerEmail,
        subject: 'Your Kintsugi Class Access ✨',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p style="color: #34495e; line-height: 1.6;">Hi there,</p>

            <p style="color: #34495e; line-height: 1.6;">Your Kintsugi digital book is attached to this email - check your attachments!</p>

            <p style="color: #34495e; line-height: 1.6;">Questions? Reply to this email anytime.</p>

            <p style="color: #34495e; line-height: 1.6;">We wish you all the best on your journey,<br>Kintsugi Class Team</p>
          </div>
        `,
        attachments: [
          {
            filename: 'Kintsugi-Beginners-Guide.pdf',
            content: pdfBase64,
          },
        ],
      });

      console.log(`[${customerEmail}] Email sent in ${Date.now() - emailStartTime}ms. Total: ${Date.now() - startTime}ms. Resend ID: ${result.data?.id}`);
      console.log(`[${customerEmail}] Full Resend response:`, JSON.stringify(result));

      return NextResponse.json({ received: true, emailId: result.data?.id });
    } catch (error: any) {
      console.error(`[${customerEmail}] Error sending email:`, error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
