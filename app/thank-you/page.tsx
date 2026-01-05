import { Suspense } from 'react'
import PurchaseTracker from '../components/PurchaseTracker'

export const metadata = {
  title: 'Thank You - Kintsugi Class',
  description: 'Welcome to your kintsugi journey',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      {/* Track purchase via CAPI (reads session_id from URL) */}
      <Suspense fallback={null}>
        <PurchaseTracker />
      </Suspense>

      <div className="max-w-2xl text-center space-y-8">
        {/* Kanji decoration */}
        <div className="text-6xl text-gold/20 font-serif">
          金継ぎ
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-charcoal">
          Welcome to Your Practice
        </h1>

        <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
          <p>
            Thank you for joining the Kintsugi Class.
          </p>
          <p>
            Your course is ready. Click below to access it now:
          </p>
        </div>

        <a
          href="https://course.kintsugiclass.com/sign-up"
          className="inline-block bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
        >
          Access Your Course
        </a>

        <p className="text-sm text-charcoal/60">
          We've also sent a confirmation email with this link.
        </p>

        <div className="pt-8">
          <p className="text-sm text-charcoal/60">
            Questions? Email us at support@kintsugiclass.com
          </p>
        </div>

        {/* Gold decorative line */}
        <div className="pt-12">
          <div className="h-px bg-gold/30 max-w-md mx-auto"></div>
        </div>

        <p className="text-charcoal/60 italic font-light">
          "Every broken thing is an opportunity for beauty."
        </p>
      </div>
    </div>
  )
}
