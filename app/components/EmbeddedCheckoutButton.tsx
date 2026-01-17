'use client';

import { useState } from 'react';

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

interface EmbeddedCheckoutButtonProps {
  priceId: string;
  displayPrice?: number;
  ctaText?: string;
  valueCapi?: number; // EUR value for CAPI tracking
  fallbackPaymentLink?: string;
  className?: string;
}

export default function EmbeddedCheckoutButton({
  priceId,
  displayPrice = 47,
  ctaText,
  valueCapi = 37.5,
  fallbackPaymentLink,
  className,
}: EmbeddedCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
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

    // CAPI disabled for testing - using GTM only
    // navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId }));

    try {
      // Create checkout session with hosted checkout
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const data = await response.json();

      // Redirect to Stripe hosted checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('[EmbeddedCheckoutButton] Checkout error:', error);
      setIsLoading(false);

      // Fallback to payment link if available
      if (fallbackPaymentLink) {
        window.location.href = fallbackPaymentLink;
      } else {
        alert('Unable to start checkout. Please try again.');
      }
    }
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
