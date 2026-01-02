import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);
const PAYMENT_LINK = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00';

async function sendTest() {
  console.log('Sending EXPIRED checkout template test...\n');

  const emailHtml = `
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
  `;

  try {
    const result = await resend.emails.send({
      from: 'Yuki from Kintsugi Class <support@kintsugiclass.com>',
      to: 'lukakalajzic@gmail.com',
      subject: '[TEST] Abandoned checkout template - I kept your spot open',
      html: emailHtml,
    });

    console.log('✅ Expired checkout template sent!');
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed:', error);
  }
}

sendTest();
