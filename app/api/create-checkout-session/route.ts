import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with MoR preview header
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil; managed_payments_preview=v1' as any,
});

// Valid Kintsugi price IDs
const VALID_PRICE_IDS = [
  'price_1SsCFMIWj0la69bvd1QSZSna', // Kintsugi default ($47 USD / €47 EUR)
  'price_1Sn3OMIWj0la69bvHWo1KO4T', // Kintsugi New Year Sale
];

export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    const body = await req.json();
    const { priceId, cancelPath } = body;
    const parseTime = Date.now();

    // Validate price ID
    if (!priceId || !VALID_PRICE_IDS.includes(priceId)) {
      return NextResponse.json(
        { error: 'Invalid price ID' },
        { status: 400 }
      );
    }

    // Determine return URL based on environment
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kintsugiclass.com';

    // Use provided cancel path or default to /learn
    const cancelUrl = cancelPath ? `${baseUrl}${cancelPath}` : `${baseUrl}/learn`;

    const stripeStart = Date.now();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // MoR - Stripe becomes merchant of record and handles tax
      managed_payments: {
        enabled: true,
      },
      // Hosted checkout URLs
      success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
    } as any);
    const stripeEnd = Date.now();

    const totalTime = Date.now() - startTime;
    const stripeTime = stripeEnd - stripeStart;

    // Log timing for analysis
    console.log(`[create-checkout-session] TIMING: total=${totalTime}ms, stripe=${stripeTime}ms, parse=${parseTime - startTime}ms`);

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
      _timing: { total: totalTime, stripe: stripeTime }, // Include in response for debugging
    });
  } catch (error: any) {
    console.error('[create-checkout-session] Error:', error);

    // Return more specific error for debugging
    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
