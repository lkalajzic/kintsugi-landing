import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function confirmRefund() {
  const messageId = '95fadee3-cbe2-4784-b85d-5f7e0f289639';

  console.log('Sending refund confirmation to Linda...\n');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kintsugi Class <support@kintsugiclass.com>',
      to: 'lgdunlap@yahoo.com',
      subject: 'Re: Your Kintsugi Class Access ✨',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #34495e; line-height: 1.6;">Hi Linda,</p>

          <p style="color: #34495e; line-height: 1.6;">Your refund has been processed on our end. You should see it back in your account within 5-10 business days depending on your bank.</p>

          <p style="color: #34495e; line-height: 1.6;">Thank you for giving it a try, and I appreciate your understanding!</p>

          <p style="color: #34495e; line-height: 1.6;">Best,<br>Kintsugi Class Team</p>
        </div>
      `,
      headers: {
        'In-Reply-To': messageId,
      },
    });

    if (error) {
      console.error('❌ Failed to send confirmation:', error);
      return;
    }

    console.log('✅ Refund confirmation sent successfully to Linda!');
    console.log('Message ID:', data?.id);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

confirmRefund();
