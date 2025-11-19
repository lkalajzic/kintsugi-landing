import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const DRY_RUN = false; // Set to false to actually send emails

const PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK!;

// Customers who had payment failures
const customers = [
  {
    email: "showandtellartist@gmail.com",
    name: "Linda",
    issue: "bank_decline", // do_not_honor x2
  },
  {
    email: "hoffp721@gmail.com",
    name: "Patricia",
    issue: "stripe_block", // highest_risk_level x2
  },
  {
    email: "nmpascal@gmail.com",
    name: "Patricia",
    issue: "bank_decline", // do_not_honor x1
  },
];

async function sendPaymentIssueEmails() {
  console.log(
    DRY_RUN ? "🔍 DRY RUN - No emails will be sent\n" : "📧 SENDING EMAILS\n"
  );

  console.log(`Found ${customers.length} customers to email\n`);

  for (const customer of customers) {
    console.log(
      `\n---\nPREVIEW: Email to ${customer.name} (${customer.email})\n---\n`
    );

    const subject = "Your Kintsugi Class payment";

    let body = "";

    if (customer.issue === "bank_decline") {
      body = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #34495e; line-height: 1.6;">Hi ${customer.name},</p>

          <p style="color: #34495e; line-height: 1.6;">I noticed you tried to enroll in our Kintsugi Class but ran into payment issues. On our end it says your bank declined the transaction. It says "do_not_honor".</p>

          <p style="color: #34495e; line-height: 1.6;">This happens sometimes with certain cards - the bank's fraud detection can be overly cautious.</p>

          <p style="color: #34495e; line-height: 1.6;">We just added PayPal as a payment option, which may help. If you're still interested, you can try again here:</p>

          <p style="text-align: center; margin: 30px 0;">
            <a href="${PAYMENT_LINK}" style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Enroll in Kintsugi Class</a>
          </p>

          <p style="color: #34495e; line-height: 1.6;">If you have any questions, feel free to reply.</p>

          <p style="color: #34495e; line-height: 1.6;">Best,<br>Kintsugi Class</p>
        </div>
      `;
    } else if (customer.issue === "stripe_block") {
      body = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #34495e; line-height: 1.6;">Hi ${customer.name},</p>

          <p style="color: #34495e; line-height: 1.6;">I looked into your failed purchase and it looks like our payment processor flagged it.</p>

          <p style="color: #34495e; line-height: 1.6;">We've added PayPal as a payment option, which may help. If you're still interested, you can try again here:</p>

          <p style="text-align: center; margin: 30px 0;">
            <a href="${PAYMENT_LINK}" style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Enroll in Kintsugi Class</a>
          </p>

          <p style="color: #34495e; line-height: 1.6;">If you have any trouble, just reply and I'll try to work something out.</p>

          <p style="color: #34495e; line-height: 1.6;">Best,<br>Kintsugi Class</p>
        </div>
      `;
    }

    console.log("Subject:", subject);
    console.log(
      "\nBody preview (first 200 chars):",
      body.substring(0, 200).replace(/\n/g, " ").trim() + "..."
    );

    if (!DRY_RUN) {
      try {
        await resend.emails.send({
          from: "Kintsugi Class <support@kintsugiclass.com>",
          to: customer.email,
          subject,
          html: body,
        });

        console.log(`✅ Sent to ${customer.email}`);

        // Wait 100ms between emails to avoid rate limits
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error: any) {
        console.error(`❌ Failed to send to ${customer.email}:`, error.message);
      }
    }
  }

  if (DRY_RUN) {
    console.log("\n⚠️  DRY RUN - Set DRY_RUN = false to actually send");
  } else {
    console.log("\n✅ All emails sent");
  }
}

sendPaymentIssueEmails().catch(console.error);
