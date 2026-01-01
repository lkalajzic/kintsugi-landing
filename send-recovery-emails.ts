import { Resend } from 'resend';

// Run with: npx tsx --env-file=.env.local send-recovery-emails.ts
const resend = new Resend(process.env.RESEND_API_KEY!);

// Customers who tried to buy but card was declined (bank issues)
const failedCheckoutEmails = [
  { email: 'julbox73@gmail.com', reason: 'generic_decline' },
  { email: 'kyle@kyleyoung.com', reason: 'do_not_honor' },
  { email: 'princesamme@gmail.com', reason: 'insufficient_funds' },
  { email: 'mws24153@gmail.com', reason: 'try_again_later' },
  { email: 'phoenixsavage@gmail.com', reason: 'do_not_honor' },
  { email: 'pltryan@sbcglobal.net', reason: 'do_not_honor' },
  { email: 'showandtellartist@gmail.com', reason: 'do_not_honor' },
  { email: 'ttangles@yahoo.com', reason: 'partner_insufficient_funds' },
];

// Set to true to actually send, false for dry run
const DRY_RUN = true;

// Payment link
const PAYMENT_LINK = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00';

async function sendRecoveryEmail(to: string) {
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

  if (DRY_RUN) {
    console.log(`[DRY RUN] Would send to: ${to}`);
    return { success: true, dryRun: true };
  }

  try {
    const result = await resend.emails.send({
      from: 'Yuki from Kintsugi Class <support@kintsugiclass.com>',
      to: to,
      subject: 'Your Kintsugi course enrollment - quick follow up',
      html: emailHtml,
    });

    console.log(`✅ Sent to ${to} - ID: ${result.data?.id}`);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error(`❌ Failed to send to ${to}:`, error);
    return { success: false, error };
  }
}

async function main() {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`KINTSUGI CHECKOUT RECOVERY EMAILS`);
  console.log(`Mode: ${DRY_RUN ? '🔵 DRY RUN (no emails sent)' : '🔴 LIVE (sending emails!)'}`);
  console.log(`${'='.repeat(50)}\n`);

  console.log(`Found ${failedCheckoutEmails.length} failed checkouts to recover:\n`);

  for (const customer of failedCheckoutEmails) {
    console.log(`  ${customer.email} (${customer.reason})`);
  }

  console.log(`\n${'─'.repeat(50)}\n`);

  let sent = 0;
  let failed = 0;

  for (const customer of failedCheckoutEmails) {
    const result = await sendRecoveryEmail(customer.email);
    if (result.success) sent++;
    else failed++;

    // Small delay between sends
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`COMPLETE: ${sent} sent, ${failed} failed`);
  if (DRY_RUN) {
    console.log(`\n⚠️  This was a dry run. To send for real:`);
    console.log(`    Edit send-recovery-emails.ts and set DRY_RUN = false`);
  }
  console.log(`${'='.repeat(50)}\n`);
}

main();
