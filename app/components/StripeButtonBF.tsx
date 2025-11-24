'use client'

export default function StripeButtonBF({ price = 47 }: { price?: number }) {
  const handleCheckout = async () => {
    // BF payment link - redirects to /bf-kit
    const stripePaymentLink = 'https://buy.stripe.com/aFa3cwg4WdTZ1NTbrA43S06?prefilled_promo_code=BLACKFRIDAY'
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
