'use client'

export default function StripeButton({ price = 47 }: { price?: number }) {
  const handleCheckout = async () => {
    // For now, just redirect to a Stripe Payment Link
    // You'll replace this URL with your actual Stripe Payment Link
    const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#'

    if (stripePaymentLink === '#') {
      alert('Stripe payment link not configured yet. Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK to .env.local')
      return
    }

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
