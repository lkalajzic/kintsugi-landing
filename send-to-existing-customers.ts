import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

const customers = [
  { email: 'jlathrop@chartermi.net', name: 'Judith' },
  { email: 'jonikollman@gmail.com', name: 'Joni' },
  { email: 'goudreau802@gmail.com', name: 'Deborah' },
];

async function sendToExistingCustomers() {
  console.log('Sending course access emails to existing customers...\n');

  for (const customer of customers) {
    try {
      const result = await resend.emails.send({
        from: 'Luka <hello@lukakalajzic.com>',
        to: customer.email,
        subject: 'Your Kintsugi Course is Ready!',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi ${customer.name},</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">As promised - your Kintsugi Class is ready!</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Click below to create your account and start watching:</p>

            <div style="text-align: center; margin: 32px 0;">
              <a href="https://course.kintsugiclass.com/sign-up" style="background-color: #C9A962; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: 500;">Access Your Course</a>
            </div>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Inside you'll find 8 video lessons plus downloadable guides.</p>

            <p style="color: #7f8c8d; line-height: 1.6; font-size: 14px; margin-top: 32px;">Questions? Just reply to this email.</p>

            <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Happy creating,<br>Luka</p>
          </div>
        `,
      });

      console.log(`✅ Sent to ${customer.name} (${customer.email}) - ID: ${result.data?.id}`);
    } catch (error) {
      console.error(`❌ Failed to send to ${customer.email}:`, error);
    }
  }

  console.log('\nDone!');
}

sendToExistingCustomers();
