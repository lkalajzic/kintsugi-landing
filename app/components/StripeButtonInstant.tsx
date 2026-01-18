'use client'

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: object, options?: { eventID: string }) => void
  }
}

// Payment link with IC tracking
export default function StripeButtonInstant({ price = 47 }: { price?: number }) {
  const handleCheckout = () => {
    // Fire IC pixel (non-blocking, queues instantly)
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 38,
        currency: 'EUR',
        content_name: 'Kintsugi Class',
        content_category: 'Online Course',
      }, { eventID: crypto.randomUUID() })
    }

    window.location.href = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00'
  }

  return (
    <button
      onClick={handleCheckout}
      className="bg-gold hover:bg-darkGold text-charcoal px-14 py-5 rounded-xl text-2xl font-semibold transition-colors animate-pulse-glow"
    >
      Begin Your Practice - ${price}
    </button>
  )
}
