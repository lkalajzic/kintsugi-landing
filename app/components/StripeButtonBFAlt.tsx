'use client'

export default function StripeButtonBFAlt() {
  const handleCheckout = async () => {
    const stripePaymentLink = 'https://buy.stripe.com/aFa3cwg4WdTZ1NTbrA43S06?prefilled_promo_code=BLACKFRIDAY'
    window.location.href = stripePaymentLink
  }

  return (
    <button
      onClick={handleCheckout}
      className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg"
    >
      Yes - Teach Me Kintsugi - $47
    </button>
  )
}
