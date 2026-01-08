'use client';

import { useState, lazy, Suspense } from 'react';
import { stripePromise } from '../lib/stripe-client';

// Lazy load the modal to reduce initial bundle size
const EmbeddedCheckoutModal = lazy(() => import('./EmbeddedCheckoutModal'));

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    // Send CAPI via sendBeacon (non-blocking, guaranteed delivery)
    navigator.sendBeacon(
      '/api/track-checkout',
      JSON.stringify({ eventId })
    );

    // Open modal instead of redirect
    setIsModalOpen(true);
    setIsLoading(false);
  };

  const defaultClassName =
    'bg-gold hover:bg-darkGold text-charcoal px-14 py-5 rounded-xl text-2xl font-semibold transition-all hover:shadow-xl hover:scale-105 disabled:opacity-70 animate-pulse-subtle shadow-lg shadow-gold/30';
  const defaultCtaText = `Begin Your Practice - $${displayPrice}`;

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={className || defaultClassName}
      >
        {isLoading ? 'Loading...' : ctaText || defaultCtaText}
      </button>

      {isModalOpen && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="bg-white px-8 py-6 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                <span className="text-gray-700">Loading checkout...</span>
              </div>
            </div>
          }
        >
          <EmbeddedCheckoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            priceId={priceId}
            fallbackPaymentLink={fallbackPaymentLink}
            stripePromise={stripePromise}
          />
        </Suspense>
      )}
    </>
  );
}
