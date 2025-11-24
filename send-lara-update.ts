import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function sendLaraUpdate() {
  console.log('Sending update email to Lara...\n');

  try {
    await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: 'lpkehle@yahoo.com',
      subject: 'Your Kintsugi Class - Quick Update',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #34495e; line-height: 1.6;">Hi Lara,</p>

          <p style="color: #34495e; line-height: 1.6;">Thank you so much for your enrollment! Quick heads up:</p>

          <p style="color: #34495e; line-height: 1.6;"><strong>Video lessons:</strong> We're switching to a better video platform - should be ready in 1-2 weeks.</p>

          <p style="color: #34495e; line-height: 1.6;"><strong>Kintsugi kit:</strong> We're finalizing our US fulfillment partner for faster shipping as mentioned on the website. I can send you the kit directly but it will take around 2 weeks.</p>

          <p style="color: #34495e; line-height: 1.6;"><strong>Digital book:</strong> You should have received the book, and we are working on an update with more visual examples and some other improvements based on early student feedback.</p>

          <p style="color: #34495e; line-height: 1.6;">Sorry for the inconvenience! I can offer you two options:</p>

          <p style="color: #34495e; line-height: 1.6;">
            <strong>A)</strong> I can refund the video + kit portion now, and let you know when everything's ready to reorder (at the same price you have now)<br><br>
            <strong>B)</strong> Keep your order, get early access to everything as it's ready (you'll be first in line)
          </p>

          <p style="color: #34495e; line-height: 1.6;">Either way is totally fine with me, just reply with A or B.</p>

          <p style="color: #34495e; line-height: 1.6;">Thanks for your patience!</p>

          <p style="color: #34495e; line-height: 1.6;">- Kintsugi Class</p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully to lpkehle@yahoo.com');
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendLaraUpdate();
