'use client'

// Jan 4th style - instant redirect, no tracking, no delay
export default function StripeButtonInstant({ price = 47 }: { price?: number }) {
  const handleCheckout = () => {
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
