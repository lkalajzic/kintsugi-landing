'use client'

import { useState } from 'react'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

export default function StripeButton({ price = 47 }: { price?: number }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#'

    if (stripePaymentLink === '#') {
      alert('Stripe payment link not configured yet. Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK to .env.local')
      return
    }

    setIsLoading(true)

    let eventId: string | null = null

    try {
      // Track InitiateCheckout via server-side CAPI
      const response = await fetch('/api/track-checkout', { method: 'POST' })
      const data = await response.json()
      eventId = data.eventId

      // Fire client-side pixel with same eventID for deduplication
      if (window.fbq && eventId) {
        window.fbq('track', 'InitiateCheckout', {
          value: 37.5,
          currency: 'EUR',
          content_name: 'Kintsugi Class',
          content_category: 'Online Course',
        }, { eventID: eventId })
      }
    } catch (error) {
      console.error('Failed to track checkout:', error)
    }

    // Redirect to Stripe
    window.location.href = stripePaymentLink
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg disabled:opacity-70"
    >
      {isLoading ? 'Redirecting...' : `Begin Your Practice - $${price}`}
    </button>
  )
}
