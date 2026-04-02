import { Resend } from 'resend';
import { readFileSync } from 'fs';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function sendInvoiceEmail() {
  const pdfBuffer = readFileSync('/Users/luka/Downloads/INV-2026-001.pdf');

  console.log('Sending invoice email to nina@magnolija.si...\n');

  try {
    const result = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: 'nina@magnolija.si',
      subject: 'Your Invoice + A Gift',
      attachments: [
        {
          filename: 'INV-2026-001.pdf',
          content: pdfBuffer,
        },
      ],
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Hi Nina,</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Please find your invoice attached (INV-2026-001).</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">As a thank you for supporting our work, we'd love to give you complimentary access to our Sashiko Mastery course as well. If you're interested, you can create your free account here:</p>

          <p style="margin: 16px 0;"><a href="https://course.sashikomastery.com/sign-up" style="color: #C9A962; font-size: 16px;">https://course.sashikomastery.com/sign-up</a></p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">No strings attached. We just like sharing our craft courses with people who appreciate handmade arts.</p>

          <p style="color: #34495e; line-height: 1.8; font-size: 16px;">Warmly,<br>Yuki</p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully to nina@magnolija.si');
    console.log('Resend ID:', result.data?.id);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendInvoiceEmail();
