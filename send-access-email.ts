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

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">You can access it here:</p>

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://course.kintsugiclass.com/sign-up" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Access Your Course</a>
          </div>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">– Kintsugi Class Team</p>
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
