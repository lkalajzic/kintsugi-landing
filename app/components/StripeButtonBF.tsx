'use client'

import { useState } from 'react'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

export default function StripeButtonBF({ price = 47 }: { price?: number }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)

    // Generate eventId client-side for deduplication
    const eventId = crypto.randomUUID()

    // Fire pixel immediately
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 37.5,
        currency: 'EUR',
        content_name: 'Kintsugi Class',
        content_category: 'Online Course',
      }, { eventID: eventId })
    }

    // Send CAPI via sendBeacon (non-blocking, guaranteed delivery)
    navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId }))

    window.location.href = 'https://buy.stripe.com/aFa3cwg4WdTZ1NTbrA43S06?prefilled_promo_code=BLACKFRIDAY'
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg disabled:opacity-70"
    >
      {isLoading ? 'Taking you to checkout...' : `Begin Your Practice - $${price}`}
    </button>
  )
}
