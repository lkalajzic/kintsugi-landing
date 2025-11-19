import { Resend } from 'resend';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

const resend = new Resend(process.env.RESEND_API_KEY!);

const DRY_RUN = false; // Set to false to actually send emails

async function sendApologyEmails() {
  console.log(DRY_RUN ? '🔍 DRY RUN - No emails will be sent\n' : '📧 SENDING EMAILS\n');

  // Only send to these specific customers (manually updated list)
  const customers = [
    { email: 'annabelle.chevalierg@gmail.com', name: 'Annabelle' },
    { email: 'bnlkramer@gmail.com', name: 'Lesli' },
    { email: 'andrea@f2environmentaldesign.com', name: 'Andrea' },
    { email: 'sfrank42@yahoo.com', name: 'Susan' },
    { email: 'yukicoopnyc@gmail.com', name: 'Yukiko' },
    { email: 'olgapontes81@mac.com', name: 'Olga' },
    { email: 'mxt612@gmail.com', name: 'Mary' },
  ];

  console.log(`Found ${customers.length} customers to email\n`);

  // Fetch the PDF
  const pdfUrl = process.env.KINTSUGI_EBOOK_URL!;
  const pdfResponse = await fetch(pdfUrl);
  const pdfBuffer = await pdfResponse.arrayBuffer();
  const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

  console.log('PDF fetched successfully\n');
  console.log('---\n');
  console.log('EMAIL PREVIEW:');
  console.log('---\n');
  console.log('From: Kintsugi Class <support@kintsugiclass.com>');
  console.log('Subject: Your Kintsugi Class Access ✨ (Apology for delay)');
  console.log('\nBody:');
  console.log(`
Hi [Name],

We sincerely apologize for the delay in sending your Kintsugi guide!

We experienced some technical issues, but everything should be fixed now. Your guide is attached to the email.

Thank you for your patience and understanding. If you have any questions, you may reply here.

We wish you all the best on your journey,
Kintsugi Class Team
  `.trim());
  console.log('\nAttachment: Kintsugi-Beginners-Guide.pdf');
  console.log('\n---\n');

  if (DRY_RUN) {
    console.log('⚠️  DRY RUN - Would send to:');
    customers.forEach((c, i) => {
      console.log(`${i + 1}. ${c.name} (${c.email})`);
    });
    console.log('\nTo actually send, set DRY_RUN = false in the script');
    return;
  }

  // Actually send emails
  let sent = 0;
  let failed = 0;

  for (const customer of customers) {
    try {
      await resend.emails.send({
        from: 'Kintsugi Class <support@kintsugiclass.com>',
        to: customer.email,
        subject: 'Your Kintsugi Class Access ✨ (Apology for delay)',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p style="color: #34495e; line-height: 1.6;">Hi ${customer.name},</p>

            <p style="color: #34495e; line-height: 1.6;">We sincerely apologize for the delay in sending your Kintsugi guide!</p>

            <p style="color: #34495e; line-height: 1.6;">We experienced some technical issues, but everything should be fixed now. Your guide is attached to the email.</p>

            <p style="color: #34495e; line-height: 1.6;">Thank you for your patience and understanding. If you have any questions, you may reply here.</p>

            <p style="color: #34495e; line-height: 1.6;">We wish you all the best on your journey,<br>Kintsugi Class Team</p>
          </div>
        `,
        attachments: [
          {
            filename: 'Kintsugi-Beginners-Guide.pdf',
            content: pdfBase64,
          },
        ],
      });

      console.log(`✅ Sent to ${customer.email}`);
      sent++;

      // Wait 100ms between emails to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error: any) {
      console.error(`❌ Failed to send to ${customer.email}:`, error.message);
      failed++;
    }
  }

  console.log(`\n📊 Results: ${sent} sent, ${failed} failed`);
}

sendApologyEmails().catch(console.error);
