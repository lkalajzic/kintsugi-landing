'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: object,
      options?: { eventID: string }
    ) => void;
  }
}

// Payment Links (USD + EUR pricing)
const PAYMENT_LINKS = {
  default: 'https://buy.stripe.com/fZufZi4me5ntgINcvE43S0e',
  newYearSale: 'https://buy.stripe.com/5kQ5kE6um8zF3W1brA43S0d',
} as const;

interface PaymentLinkButtonProps {
  variant?: 'default' | 'newYearSale';
  displayPrice?: number;
  ctaText?: string;
  valueCapi?: number;
  className?: string;
}

export default function PaymentLinkButton({
  variant = 'default',
  displayPrice = 47,
  ctaText,
  valueCapi = 37.5,
  className,
}: PaymentLinkButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Reset loader when user navigates back to the page (e.g. browser back from Stripe)
  useEffect(() => {
    const resetLoader = () => {
      if (document.visibilityState === 'visible') {
        setIsLoading(false);
      }
    };

    const resetLoaderOnPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setIsLoading(false);
      }
    };

    document.addEventListener('visibilitychange', resetLoader);
    window.addEventListener('pageshow', resetLoaderOnPageShow);

    return () => {
      document.removeEventListener('visibilitychange', resetLoader);
      window.removeEventListener('pageshow', resetLoaderOnPageShow);
    };
  }, []);

  const handleClick = () => {
    setIsLoading(true);

    // Generate eventId client-side for deduplication
    const eventId = crypto.randomUUID();

    // Fire pixel immediately (InitiateCheckout)
    if (window.fbq) {
      window.fbq(
        'track',
        'InitiateCheckout',
        {
          value: valueCapi,
          currency: 'EUR',
          content_name: 'Kintsugi Class',
          content_category: 'Online Course',
        },
        { eventID: eventId }
      );
    }

    // CAPI via sendBeacon (non-blocking)
    navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId }));

    // Redirect to payment link
    window.location.href = PAYMENT_LINKS[variant];
  };

  const defaultClassName =
    'bg-gold hover:bg-darkGold text-charcoal px-14 py-5 rounded-xl text-2xl font-semibold transition-colors disabled:opacity-70 animate-pulse-glow';
  const defaultCtaText = `Begin Your Practice - $${displayPrice}`;

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm">
          <div className="bg-cream px-10 py-8 rounded-2xl shadow-xl text-center max-w-sm mx-4">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-5" />
            <p className="text-charcoal text-xl font-medium">
              🔒 Loading Secure Stripe Checkout...
            </p>
          </div>
        </div>
      )}

      <button
        onClick={handleClick}
        disabled={isLoading}
        className={className || defaultClassName}
      >
        {isLoading ? 'Redirecting...' : ctaText || defaultCtaText}
      </button>
    </>
  );
}
