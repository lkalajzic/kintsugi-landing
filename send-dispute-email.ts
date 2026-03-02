import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

const TO_EMAIL = 'csokolom1989@yahoo.com';
const TO_NAME = 'Michele';

async function sendDisputeEmail() {
  console.log(`Sending dispute resolution email to ${TO_EMAIL}...\n`);

  try {
    const result = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: TO_EMAIL,
      subject: 'Regarding Your Kintsugi Class Purchase',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi ${TO_NAME},</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">We received a payment dispute on your Kintsugi Class purchase from January 20th.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">We noticed you signed up and accessed the course platform, so we wanted to reach out directly. If you were unhappy with the course or it wasn't what you expected, we'd be happy to issue you a full refund.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">The only thing we'd ask is that you withdraw the dispute with your bank first. Payment disputes carry significant processing fees for small businesses like ours (often more than the purchase itself), so a direct refund is much better for both sides.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">If you could contact Citibank and let them know you'd like to cancel the dispute, we'll process your refund right away.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Please let us know if you have any questions.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Best,<br>Yuki<br>Kintsugi Class</p>
        </div>
      `,
    });

    console.log(`✅ Email sent successfully to ${TO_EMAIL}`);
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendDisputeEmail();
