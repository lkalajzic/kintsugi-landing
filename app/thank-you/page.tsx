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

        {/* Clear numbered steps */}
        <div className="bg-white/80 rounded-xl p-8 text-left space-y-6 border border-gold/20">
          <h2 className="text-2xl font-medium text-charcoal text-center">How to Access Your Course:</h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</span>
              <p className="text-lg text-charcoal/80">Click the big button below</p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</span>
              <p className="text-lg text-charcoal/80">Create your account with your email or Google</p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</span>
              <p className="text-lg text-charcoal/80">Start learning kintsugi!</p>
            </div>
          </div>
        </div>

        {/* BIG button */}
        <a
          href="https://course.kintsugiclass.com/sign-up"
          className="inline-block bg-gold hover:bg-gold/90 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-colors shadow-lg"
        >
          Go to Your Course →
        </a>

        {/* Email warning - prominent */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-5 max-w-md mx-auto">
          <p className="text-amber-900">
            <span className="font-semibold">📧 Using email to sign up?</span>
            <br />
            Check your <span className="font-bold">spam</span> or <span className="font-bold">trash</span> folder for the verification email.
            <br />
            <span className="text-amber-700">Or use <span className="font-bold">Google sign-in</span> — it&apos;s instant!</span>
          </p>
        </div>

        <p className="text-charcoal/60">
          We&apos;ve also sent a confirmation email to you with this link.
        </p>

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
