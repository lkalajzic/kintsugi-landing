import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

const customers = [
  { email: 'pr8cious.crafts@gmail.com', name: 'there' },
  { email: 'spencercl@gmail.com', name: 'there' },
  { email: 'soniamc@mac.com', name: 'there' },
];

async function sendEmails() {
  console.log('Fetching PDF from Google Drive...');
  const pdfUrl = process.env.KINTSUGI_EBOOK_URL!;
  const pdfResponse = await fetch(pdfUrl);
  const pdfBuffer = await pdfResponse.arrayBuffer();
  const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

  console.log('PDF fetched successfully. Sending emails...\n');

  for (const customer of customers) {
    try {
      await resend.emails.send({
        from: 'Kintsugi Class <support@kintsugiclass.com>',
        to: customer.email,
        subject: 'Your Kintsugi Course - Instant Access ✨',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2c3e50; margin-bottom: 20px;">Welcome to Kintsugi!</h1>

            <p style="color: #34495e; line-height: 1.6;">Hi ${customer.name},</p>

            <p style="color: #34495e; line-height: 1.6;">Thank you for your patience! Your comprehensive Kintsugi guide is attached to this email.</p>

            <div style="background: #f8f9fa; border-left: 4px solid #c9a961; padding: 20px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #2c3e50; font-size: 18px;">WHAT YOU GET TODAY:</h2>
              <ul style="color: #34495e; line-height: 1.8; padding-left: 20px;">
                <li>✓ Complete beginner-to-advanced ebook (30-50 pages)</li>
                <li>✓ Step-by-step techniques with photos</li>
                <li>✓ Materials guide with exact Amazon links</li>
                <li>✓ Philosophy and meditation practices</li>
                <li>✓ Troubleshooting and FAQs</li>
              </ul>
            </div>

            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #856404; font-size: 18px;">COMING IN 2 WEEKS (FREE BONUS):</h2>
              <ul style="color: #856404; line-height: 1.8; padding-left: 20px;">
                <li>✓ Video demonstrations of every technique</li>
                <li>✓ Master Yuki walking through each step</li>
                <li>✓ Lifetime access to future updates</li>
              </ul>
            </div>

            <p style="color: #34495e; line-height: 1.6; font-weight: bold;">Your ebook is attached to this email - check your attachments!</p>

            <p style="color: #34495e; line-height: 1.6;">Start with the ebook today. Videos will be sent to this email automatically when ready.</p>

            <p style="color: #34495e; line-height: 1.6;">Questions? Reply to this email anytime.</p>

            <div style="background: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #2e7d32; font-weight: bold;">30-Day Money-Back Guarantee</p>
              <p style="margin: 5px 0 0 0; color: #2e7d32;">If you're not happy, just let me know.</p>
            </div>

            <p style="color: #34495e; line-height: 1.6;">Best,<br>Kintsugi Class Team</p>

            <p style="color: #7f8c8d; font-size: 14px; font-style: italic; margin-top: 30px;">P.S. Post your first piece on Instagram and tag #kintsugijourney - we reshare the best ones!</p>
          </div>
        `,
        attachments: [
          {
            filename: 'Kintsugi-Beginners-Guide.pdf',
            content: pdfBase64,
          },
        ],
      });

      console.log(`✅ Email sent to ${customer.email}`);
    } catch (error) {
      console.error(`❌ Failed to send to ${customer.email}:`, error);
    }
  }

  console.log('\nAll emails sent!');
}

sendEmails();
