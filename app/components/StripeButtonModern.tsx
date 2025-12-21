'use client'

export default function StripeButtonModern({ price = 47 }: { price?: number }) {
  const handleCheckout = async () => {
    const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK
      || 'https://buy.stripe.com/eVqcN605YcPVgIN3Z843S0b'

    window.location.href = `${stripePaymentLink}?prefilled_promo_code=FOUNDING`
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
