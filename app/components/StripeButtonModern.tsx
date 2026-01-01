'use client'

export default function StripeButtonModern({ price = 47 }: { price?: number }) {
  const handleCheckout = async () => {
    window.location.href = 'https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00'
  }

  return (
    <button
      onClick={handleCheckout}
      className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg"
    >
      Begin Your Practice - ${price}
    </button>
  )
}
