import { NextRequest, NextResponse } from 'next/server';
import { after } from 'next/server';
import { sendInitiateCheckoutEvent } from '../../lib/meta-capi';
import { cookies } from 'next/headers';

/**
 * POST /api/track-checkout
 *
 * Called when user clicks checkout button, before redirecting to Stripe.
 * Sends InitiateCheckout event to Meta CAPI with browser data.
 */
export async function POST(req: NextRequest) {
  try {
    // Generate unique event ID for deduplication
    const eventId = `ic_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const eventTime = Math.floor(Date.now() / 1000);

    // Get browser data from request
    const clientIpAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                           req.headers.get('x-real-ip') ||
                           null;
    const clientUserAgent = req.headers.get('user-agent') || null;

    // Read Meta cookies
    const cookieStore = await cookies();
    const fbc = cookieStore.get('_fbc')?.value || null;
    const fbp = cookieStore.get('_fbp')?.value || null;

    // Get referer URL for event_source_url
    const referer = req.headers.get('referer') || 'https://kintsugiclass.com';

    // Send to Meta CAPI after response (non-blocking but guaranteed to complete)
    after(async () => {
      const result = await sendInitiateCheckoutEvent({
        eventId,
        eventTime,
        eventSourceUrl: referer,
        browserData: {
          clientIpAddress,
          clientUserAgent,
          fbc,
          fbp,
        },
        value: 37.5,      // Approximate EUR (matches Purchase currency)
        currency: 'EUR',
      });
      if (!result.success) {
        console.error(`[track-checkout] CAPI failed:`, result.error);
      }
    });

    // Return event_id for GTM deduplication
    return NextResponse.json({
      success: true,
      eventId,
      message: 'InitiateCheckout event sent',
    });
  } catch (error) {
    console.error('[track-checkout] Error:', error);
    // Don't fail the checkout flow, just log
    return NextResponse.json({
      success: false,
      error: 'Failed to track checkout',
    });
  }
}
