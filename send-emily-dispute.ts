import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function sendDisputeEmail() {
  console.log('Sending dispute email to ejs501@icloud.com...\n');

  try {
    const result = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: 'ejs501@icloud.com',
      subject: 'Quick question about your Kintsugi Class purchase',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi Emily,</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">We noticed a payment dispute on your Kintsugi Class purchase from February 7. We want to make sure everything is okay.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">If something wasn't right with the course or if the charge was unexpected, we'd love to help sort it out directly. We're happy to issue a full refund right away if that's what you'd like.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">One small thing: when disputes go through the bank, we get charged around $30 in processing fees on our end regardless of the outcome. If you're able to withdraw the dispute with your bank, we can process your refund immediately and save us both the hassle.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Just let us know what happened and we'll take care of it.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Warmly,<br>Yuki</p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully to ejs501@icloud.com');
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendDisputeEmail();
