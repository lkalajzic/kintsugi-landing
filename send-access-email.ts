import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// ===== EDIT THESE FOR EACH RECIPIENT =====
const TO_EMAIL = 'artforinsight@yahoo.com';
const TO_NAME = 'Janet';
// ==========================================

async function sendAccessEmail() {
  console.log(`Sending course access email to ${TO_EMAIL}...\n`);

  try {
    const result = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: TO_EMAIL,
      subject: 'Your Kintsugi Course Access',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi ${TO_NAME},</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">We've recorded the video course for Kintsugi Class. Although I refunded you, I'd like to extend access since I'm sorry for not meeting your expectations.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;"><strong>Click this link to access your course:</strong></p>
          <p style="margin: 16px 0;"><a href="https://course.kintsugiclass.com/sign-up" style="color: #C9A962; font-size: 16px;">https://course.kintsugiclass.com/sign-up</a></p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Warmly,<br>Yuki</p>
        </div>
      `,
    });

    console.log(`✅ Email sent successfully to ${TO_EMAIL}`);
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendAccessEmail();
