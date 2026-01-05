import { NextRequest, NextResponse } from 'next/server';
import { sendPurchaseEvent } from '../../lib/meta-capi';
import { getCheckoutSession, getStripeFees } from '../../lib/stripe-fees';
import { cookies } from 'next/headers';

/**
 * POST /api/send-purchase
 *
 * Called from thank-you page after successful purchase.
 * Fetches Stripe session data and sends Purchase event to Meta CAPI.
 *
 * This approach gives us:
 * - IP + UA from the user's browser (not Stripe's servers)
 * - Full customer data from Stripe
 * - Actual net revenue after Stripe fees
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId } = body;

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }

    // Fetch Stripe checkout session
    const session = await getCheckoutSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Check if this is a Kintsugi purchase (safety check)
    const paymentLinkId = session.payment_link as string | null;
    const KINTSUGI_PAYMENT_LINKS = [
      'plink_1SgmRrIWj0la69bvsOFfPrb4',
      'plink_1SRID9IWj0la69bvZLLLn0hT',
    ];

    if (!paymentLinkId || !KINTSUGI_PAYMENT_LINKS.includes(paymentLinkId)) {
      console.log(`[send-purchase] Ignoring non-Kintsugi purchase (payment_link: ${paymentLinkId})`);
      return NextResponse.json({ success: true, skipped: true });
    }

    // Get browser data from request (this is the user's browser!)
    const clientIpAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                           req.headers.get('x-real-ip') ||
                           null;
    const clientUserAgent = req.headers.get('user-agent') || null;

    // Read Meta cookies
    const cookieStore = await cookies();
    const fbc = cookieStore.get('_fbc')?.value || null;
    const fbp = cookieStore.get('_fbp')?.value || null;

    // Calculate net revenue (after Stripe fees)
    let netValue = (session.amount_total || 0) / 100;
    let currency = session.currency || 'usd';

    if (session.payment_intent) {
      const fees = await getStripeFees(session.payment_intent as string);
      if (fees) {
        // Use net amount in Stripe account currency (EUR)
        netValue = fees.netAmount / 100;
        currency = fees.currency;
        console.log(`[send-purchase] Stripe fees: ${fees.stripeFee / 100} ${fees.currency}, Net: ${netValue} ${fees.currency}`);
      }
    }

    // Extract customer data
    const customerData = {
      email: session.customer_details?.email || session.customer_email || null,
      phone: session.customer_details?.phone || null,
      name: session.customer_details?.name || null,
      address: session.customer_details?.address ? {
        city: session.customer_details.address.city,
        state: session.customer_details.address.state,
        postal_code: session.customer_details.address.postal_code,
        country: session.customer_details.address.country,
      } : null,
    };

    // Use session ID as event_id for deduplication
    const eventId = sessionId;
    const eventTime = Math.floor(Date.now() / 1000);

    // Send to Meta CAPI
    const result = await sendPurchaseEvent({
      eventId,
      eventTime,
      eventSourceUrl: 'https://kintsugiclass.com/thank-you',
      customerData,
      browserData: {
        clientIpAddress,
        clientUserAgent,
        fbc,
        fbp,
      },
      value: netValue,
      currency,
      orderId: sessionId,
    });

    if (result.success) {
      console.log(`[send-purchase] Purchase event sent for ${customerData.email} (event_id: ${eventId}, value: ${netValue} ${currency})`);
    } else {
      console.error(`[send-purchase] CAPI failed:`, result.error);
    }

    return NextResponse.json({
      success: result.success,
      eventId,
      value: netValue,
      currency,
    });
  } catch (error) {
    console.error('[send-purchase] Error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to send purchase event',
    }, { status: 500 });
  }
}
