import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function replyToLinda() {
  const messageId = '1161fe67-5c54-420e-8251-0f8ab450df75';

  console.log('Sending reply to Linda...\n');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: 'lgdunlap@yahoo.com',
      subject: 'Re: Your Kintsugi Class Access ✨',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #34495e; line-height: 1.6;">Hi Linda,</p>

          <p style="color: #34495e; line-height: 1.6;">Thank you so much for your message and for giving the guide a try!</p>

          <p style="color: #34495e; line-height: 1.6;">You're right - this is a comprehensive PDF guide that walks you through the complete Kintsugi process step-by-step. We designed it to be detailed and self-contained so you can learn at your own pace.</p>

          <p style="color: #34495e; line-height: 1.6;">We're currently developing video lessons as a premium add-on for those who prefer that learning format, which would be available separately.</p>

          <p style="color: #34495e; line-height: 1.6;">That said, I completely understand if this wasn't what you were expecting! We offer a 30-day money-back guarantee, no questions asked. If you'd like a refund, just let me know and I'll process it right away.</p>

          <p style="color: #34495e; line-height: 1.6;">Either way, I appreciate your feedback!</p>

          <p style="color: #34495e; line-height: 1.6;">Best,<br>Kintsugi Class Team</p>
        </div>
      `,
      headers: {
        'In-Reply-To': messageId,
      },
    });

    if (error) {
      console.error('❌ Failed to send reply:', error);
      return;
    }

    console.log('✅ Reply sent successfully to Linda!');
    console.log('Message ID:', data?.id);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

replyToLinda();
