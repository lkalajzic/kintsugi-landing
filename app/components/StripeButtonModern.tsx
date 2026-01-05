'use client'

import { useState } from 'react'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

export default function StripeButtonModern({ price = 47 }: { price?: number }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/track-checkout', { method: 'POST' })
      const data = await response.json()

      if (window.fbq && data.eventId) {
        window.fbq('track', 'InitiateCheckout', {
          value: 37.5,
          currency: 'EUR',
          content_name: 'Kintsugi Class',
          content_category: 'Online Course',
        }, { eventID: data.eventId })
      }
    } catch (error) {
      console.error('Failed to track checkout:', error)
    }

    window.location.href = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00'
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
