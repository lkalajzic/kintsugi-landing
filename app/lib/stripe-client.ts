'use client';

import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe immediately when this module loads
// This runs as soon as Stripe.js is available (via lazyOnload script)
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
