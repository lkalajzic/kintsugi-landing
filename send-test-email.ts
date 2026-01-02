import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function sendTestEmail() {
  console.log('Sending test course access email to lukakalajzic@gmail.com...\n');

  try {
    const result = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: 'lukakalajzic@gmail.com',
      subject: 'Your Kintsugi Course is Ready! 🎨',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #2c3e50; font-weight: 400; margin-bottom: 24px;">Welcome to Your Kintsugi Journey</h1>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi Luka,</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Thank you for joining the Kintsugi Class! Your course is ready and waiting for you.</p>

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://course.kintsugiclass.com/sign-up" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Access Your Course</a>
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

    console.log('✅ Test email sent successfully to lukakalajzic@gmail.com');
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed to send test email:', error);
  }
}

sendTestEmail();
