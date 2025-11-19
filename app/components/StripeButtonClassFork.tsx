'use client'

export default function StripeButtonClassFork({ price = 47 }: { price?: number }) {
  const handleCheckout = async () => {
    // This payment link redirects to /kit instead of /thank-you
    const stripePaymentLink = 'https://buy.stripe.com/6oU3cwaKC9DJeAFanw43S02'
    window.location.href = stripePaymentLink
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
