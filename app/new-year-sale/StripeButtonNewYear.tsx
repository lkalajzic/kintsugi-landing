'use client'

import { useState } from 'react'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

export default function StripeButtonNewYear({ price = 49 }: { price?: number }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)

    // Generate eventId client-side for deduplication
    const eventId = crypto.randomUUID()

    // Fire pixel immediately
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 41.5,
        currency: 'EUR',
        content_name: 'Kintsugi Class - New Year Sale',
        content_category: 'Online Course',
      }, { eventID: eventId })
    }

    // CAPI disabled for testing - using GTM only
    // navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId }))

    // Redirect immediately - no waiting
    window.location.href = 'https://buy.stripe.com/aFa14o3ia17d2RX67g43S0c'
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg disabled:opacity-70"
    >
      {isLoading ? 'Taking you to checkout...' : `Start learning kintsugi today for only $${price}`}
    </button>
  )
}
