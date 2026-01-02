import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);
const PAYMENT_LINK = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00';

async function sendTestRecovery() {
  console.log('Sending test recovery email to lukakalajzic@gmail.com...\n');

  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
      <h1 style="color: #2c3e50; font-weight: 400; margin-bottom: 24px;">I kept your spot open</h1>

      <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi there,</p>

      <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I noticed you tried to enroll in the Kintsugi Class a few days ago, but the payment didn't go through.</p>

      <p style="color: #34495e; line-height: 1.8; font-size: 16px;">On our end, the bank's response code said "try again" - so it seems like a temporary issue on their side, not anything wrong with your card.</p>

      <p style="color: #34495e; line-height: 1.8; font-size: 16px;">I kept your enrollment open in case you wanted to try again. We accept both <strong>cards and PayPal</strong>, so if one doesn't work, the other usually does:</p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="${PAYMENT_LINK}" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Complete Your Enrollment</a>
      </div>

      <p style="color: #34495e; line-height: 1.8; font-size: 16px;">As a reminder, you'll get:</p>
      <ul style="color: #34495e; line-height: 1.8; font-size: 16px;">
        <li>8 video lessons from beginner to advanced techniques</li>
        <li>Complete materials guide</li>
        <li>Lifetime access</li>
      </ul>

      <p style="color: #7f8c8d; line-height: 1.6; font-size: 14px; margin-top: 32px;">If you run into any issues, just reply to this email - I read every message personally and I'm happy to help.</p>

      <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Best,<br>Yuki<br>Kintsugi Class</p>

      <div style="border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <p style="color: #95a5a6; font-size: 12px; font-style: italic;">"Every broken thing is an opportunity for beauty."</p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: 'Yuki from Kintsugi Class <support@kintsugiclass.com>',
      to: 'lukakalajzic@gmail.com',
      subject: 'I kept your spot open',
      html: emailHtml,
    });

    console.log('✅ Test email sent with CORRECT payment link!');
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed:', error);
  }
}

sendTestRecovery();
