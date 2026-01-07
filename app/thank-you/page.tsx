import { Suspense } from 'react'
import PurchaseTracker from '../components/PurchaseTracker'

export const metadata = {
  title: 'Thank You - Kintsugi Class',
  description: 'Welcome to your kintsugi journey',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-12">
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

        <p className="text-xl text-charcoal/80">
          Thank you for joining the Kintsugi Class!
        </p>

        {/* BIG button */}
        <a
          href="https://course.kintsugiclass.com/sign-up"
          className="inline-block bg-gold hover:bg-gold/90 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-colors shadow-lg"
        >
          Access Your Course →
        </a>

        {/* Simple instructions */}
        <div className="bg-white/80 rounded-xl p-6 max-w-lg mx-auto border border-gold/20 text-left">
          <p className="text-lg text-charcoal/80 leading-relaxed">
            <span className="font-semibold">Click the button above</span> to access your course.
            <br /><br />
            We have also sent you a confirmation email with a link to the platform.
            <br /><br />
            That email might have ended up in your <span className="font-semibold">spam</span> or <span className="font-semibold">trash</span> folder, so check there as well.
          </p>
        </div>

        <div className="pt-4">
          <p className="text-sm text-charcoal/60">
            Questions? Email us at support@kintsugiclass.com
          </p>
        </div>

        {/* Gold decorative line */}
        <div className="pt-8">
          <div className="h-px bg-gold/30 max-w-md mx-auto"></div>
        </div>

        <p className="text-charcoal/60 italic font-light">
          "Every broken thing is an opportunity for beauty."
        </p>
      </div>
    </div>
  )
}
