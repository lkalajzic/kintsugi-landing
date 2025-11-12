import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('svix-signature');
    const svixId = req.headers.get('svix-id');
    const svixTimestamp = req.headers.get('svix-timestamp');

    // Verify webhook signature
    if (process.env.RESEND_WEBHOOK_SECRET) {
      try {
        resend.webhooks.verify({
          payload: body,
          headers: {
            'svix-id': svixId!,
            'svix-timestamp': svixTimestamp!,
            'svix-signature': signature!,
          },
          webhookSecret: process.env.RESEND_WEBHOOK_SECRET,
        });
      } catch (err) {
        console.error('Webhook verification failed:', err);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    }

    const event = JSON.parse(body);

    // Only process email.received events
    if (event.type === 'email.received') {
      const emailData = event.data;

      console.log('Received email from:', emailData.from);
      console.log('Subject:', emailData.subject);

      // Get the full email content
      const emailId = emailData.email_id;

      // Forward the email to your personal email
      await resend.emails.send({
        from: 'Kintsugi Class <support@kintsugiclass.com>',
        to: 'lukakalajzic@gmail.com',
        subject: `[Kintsugi Support] ${emailData.subject}`,
        html: `
          <div style="font-family: monospace; background: #f5f5f5; padding: 20px; border-left: 4px solid #c9a961;">
            <p><strong>From:</strong> ${emailData.from}</p>
            <p><strong>To:</strong> ${emailData.to.join(', ')}</p>
            <p><strong>Subject:</strong> ${emailData.subject}</p>
            <p><strong>Email ID:</strong> ${emailId}</p>
            <hr style="margin: 20px 0;">
            <p><em>To view the full email content and reply, check the Resend dashboard or use the Resend API to fetch email ID: ${emailId}</em></p>
          </div>
        `,
        replyTo: emailData.from,
      });

      console.log('Forwarded email to lukakalajzic@gmail.com');
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error processing received email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
