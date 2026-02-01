"use client";

import { Suspense, useState, useEffect } from "react";
import PurchaseTracker from "../components/PurchaseTracker";
import Image from "next/image";

// Upsell Timer Component
function UpsellTimer({ large = false }: { large?: boolean }) {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 0) {
    return <p className="text-lg text-charcoal/60">Offer expired</p>;
  }

  if (large) {
    return (
      <p className={`text-5xl md:text-6xl font-mono font-bold text-red-600`}>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    );
  }

  return (
    <p className="text-3xl md:text-4xl font-mono font-bold text-red-600">
      {minutes}:{seconds.toString().padStart(2, "0")}
    </p>
  );
}

export default function ThankYouPage() {
  const [showUpsell, setShowUpsell] = useState(true);

  if (!showUpsell) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-12">
        <Suspense fallback={null}>
          <PurchaseTracker />
        </Suspense>

        <div className="max-w-2xl text-center space-y-8">
          <div className="text-6xl text-gold/20 font-serif">金継ぎ</div>
          <h1 className="text-4xl md:text-5xl font-light text-charcoal">
            Welcome to Kintsugi Class
          </h1>

          {/* Big Access Button */}
          <a
            href="https://course.kintsugiclass.com/sign-up"
            className="inline-block bg-gold hover:bg-gold/90 text-white px-12 py-6 rounded-xl text-2xl md:text-3xl font-bold transition-colors shadow-lg"
          >
            Click Here To Access Your Course →
          </a>

          <div className="text-left bg-warmGray/30 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-xl md:text-2xl text-charcoal font-bold text-center">
              How to get started:
            </p>
            <ol className="space-y-3 text-lg md:text-xl text-charcoal/80 list-decimal list-inside">
              <li>
                <strong>Click the button above</strong> — it will take you to the course page
              </li>
              <li>
                <strong>Create an account</strong> — we recommend using{" "}
                <strong>&quot;Continue with Google&quot;</strong> as it is the
                easiest option
              </li>
              <li>
                <strong>Save this link</strong> — bookmark the page in your
                browser, or write down:{" "}
                <strong className="text-charcoal">course.kintsugiclass.com</strong>
              </li>
            </ol>
            <p className="text-base md:text-lg text-charcoal/60 text-center pt-2">
              We also sent you an email with these instructions. If you
              don&apos;t see it, check your <strong>spam</strong> or{" "}
              <strong>trash</strong> folder — it sometimes ends up there.
            </p>
          </div>

          <p className="text-sm text-charcoal/60">
            Questions? support@kintsugiclass.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Suspense fallback={null}>
        <PurchaseTracker />
      </Suspense>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Confirmation + Access Instructions */}
        <div className="text-center mb-8 pb-8 border-b border-charcoal/10">
          <p className="text-green-600 text-3xl md:text-4xl font-bold mb-4">
            ✓ You&apos;re in! Kintsugi Class is yours.
          </p>

          {/* Big Access Button */}
          <a
            href="https://course.kintsugiclass.com/sign-up"
            className="inline-block bg-gold hover:bg-gold/90 text-white px-12 py-6 rounded-xl text-2xl md:text-3xl font-bold transition-colors shadow-lg mb-6"
          >
            Click Here To Access Your Course →
          </a>

          <div className="max-w-2xl mx-auto space-y-4 text-left bg-warmGray/30 rounded-xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-charcoal font-bold text-center">
              How to get started:
            </p>
            <ol className="space-y-3 text-lg md:text-xl text-charcoal/80 list-decimal list-inside">
              <li>
                <strong>Click the button above</strong> — it will take you to the course page
              </li>
              <li>
                <strong>Create an account</strong> — we recommend using{" "}
                <strong>&quot;Continue with Google&quot;</strong> as it is the
                easiest option
              </li>
              <li>
                <strong>Save this link</strong> — bookmark the page in your
                browser, or write down:{" "}
                <strong className="text-charcoal">course.kintsugiclass.com</strong>
              </li>
            </ol>
            <p className="text-base md:text-lg text-charcoal/60 text-center pt-2">
              We also sent you an email with these instructions. If you
              don&apos;t see it, check your <strong>spam</strong> or{" "}
              <strong>trash</strong> folder — it sometimes ends up there.
            </p>
          </div>
        </div>

        {/* One-Time Offer Banner */}
        <div className="bg-[#22385c]/10 border-2 border-[#22385c]/30 rounded-xl p-6 mb-10 text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#22385c]">
            ⏰ ONE-TIME OFFER — For Kintsugi Students Only
          </p>
        </div>

        {/* Bridge */}
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80">
            You&apos;re clearly someone who appreciates Japanese crafts, wabi-sabi philosophy, and creating meaningful things with your hands.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80 mt-4">
            So this is <em>perfect</em> for you.
          </p>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-8 leading-tight">
          Learn The 400-Year-Old Japanese Stitching That Quiets The Mind And Creates Stunning Heirlooms
        </h2>

        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto mb-10 aspect-video">
          <Image
            src="/sashiko-upsell/p2-shippo.jpg"
            alt="Shippo pattern sashiko"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video + One Simple Zen Stitch */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-light text-center mb-6">
            One Simple Zen Stitch
          </h3>
          <p className="text-center text-xl md:text-2xl text-charcoal/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Sometimes you just need to calm your mind. Use your hands. Sashiko uses <span className="font-bold">ONE stitch</span>. The same relaxing, peaceful stitch. Over and over. Perfect for while watching TV or talking with family.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl max-w-xl mx-auto aspect-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/sashiko-upsell/hero-preview.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* What's Inside */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-light text-center mb-4">
            What&apos;s Inside Sashiko Mastery
          </h3>

          {/* Bullet points */}
          <div className="flex flex-col items-start gap-3 mb-12 text-xl md:text-2xl max-w-md mx-auto">
            <span>🎬 2-hour HD video course</span>
            <span className="font-bold text-[#22385c]">♾️ Lifetime access</span>
            <span>🛡️ 90-day money back guarantee</span>
            <span className="font-bold text-[#22385c]">✅ Beginner friendly - even if you&apos;ve never sewn before</span>
            <span>🧵 Under $20 in materials to start</span>
          </div>

          {/* All Modules - Images + Titles only */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/1introhistory.jpg" alt="The Story of Sashiko" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">1. The Story of Sashiko</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/2materials.jpg" alt="Materials & Setup" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">2. Materials & Setup</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/3the sashiko stitch.jpg" alt="The One Stitch" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">3. The One Stitch</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/p1_yamagata.jpg" alt="Yamagata" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">4. Yamagata (山形)</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/p2-shippo.jpg" alt="Shippo" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">5. Shippo (七宝)</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/p3_seigaiha.jpg" alt="Seigaiha" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">6. Seigaiha (青海波)</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/p4_asanoha.jpg" alt="Asanoha" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">7. Asanoha (麻の葉)</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/p5_non-continuous patterns.jpg" alt="Non-Continuous Patterns" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">8. Non-Continuous Patterns</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-2 aspect-video">
                <Image src="/sashiko-upsell/mending.jpg" alt="Mending" width={300} height={169} className="w-full h-full object-cover" />
              </div>
              <p className="text-base md:text-lg font-medium">9. Mending & Long-Term Care</p>
            </div>
          </div>
        </div>

        {/* PDF Bonus Section */}
        <div className="mb-12 bg-warmGray/30 rounded-xl p-6 md:p-8">
          <h3 className="text-3xl md:text-4xl font-light text-center mb-4">
            Bonus: 125 Traditional Pattern Library
          </h3>
          <p className="text-center text-xl md:text-2xl text-charcoal/70 mb-6">
            Full-size printable PDFs of 125 authentic Japanese patterns
          </p>

          {/* Both PDF Spreads */}
          <div className="space-y-4 max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-2 gap-1">
              <div className="aspect-[400/566] rounded-l shadow-md overflow-hidden">
                <Image src="/sashiko-upsell/pdf-spread-1-page-9.png" alt="Pattern library" width={400} height={566} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[400/566] rounded-r shadow-md overflow-hidden">
                <Image src="/sashiko-upsell/pdf-spread-1-page-10.png" alt="Pattern library" width={400} height={566} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="aspect-[400/566] rounded-l shadow-md overflow-hidden">
                <Image src="/sashiko-upsell/pdf-spread-2-page-15.png" alt="Pattern library" width={400} height={566} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[400/566] rounded-r shadow-md overflow-hidden">
                <Image src="/sashiko-upsell/pdf-spread-2-page-16.png" alt="Pattern library" width={400} height={566} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Value Stacking - Shortened */}
          <p className="text-2xl md:text-3xl font-bold text-charcoal mb-4">What you get...</p>
          <div className="space-y-4 text-xl md:text-2xl text-charcoal/80 mb-6">
            <p><strong className="text-[#22385c]">Research time (200+ hrs):</strong> I spent months finding, verifying, and organizing these patterns from obscure Japanese texts. At $10/hr = <span className="font-bold">$2,000 value</span></p>
            <p><strong className="text-[#22385c]">Designer cost:</strong> $1,875 to recreate every pattern pixel-perfect. True-to-size, full-page designs you can print at 100%.</p>
            <p><strong className="text-[#22385c]">Fabric saved:</strong> Skip 50+ failed projects. <span className="font-bold">$500+ in trial-and-error saved.</span></p>
          </div>

          <ul className="space-y-2 text-xl md:text-2xl text-charcoal/80 mb-6">
            <li>📐 Full-page designs - mark directly on printouts</li>
            <li>✏️ Exact drawing & stitching order instructions</li>
            <li>⭐ Difficulty ratings (1-5)</li>
            <li>🇯🇵 Japanese names + cultural meanings</li>
          </ul>

          {/* Value Total */}
          <div className="text-center bg-[#22385c]/10 rounded-lg p-4 border border-[#22385c]/20">
            <p className="text-2xl md:text-3xl font-medium">
              Total value: <span className="text-[#22385c] font-bold">$4,375+</span>
            </p>
            <p className="text-xl text-charcoal/70">FREE with your order today</p>
          </div>
        </div>

        {/* Timer + Pricing */}
        <div className="text-center mb-8">
          <p className="text-2xl md:text-3xl font-medium text-charcoal mb-2">
            One-time offer - Learn Sashiko For 90% Off - Valid only for
          </p>
          <UpsellTimer large />
        </div>

        <div className="text-center mb-6">
          <p className="text-3xl text-charcoal/60 line-through mb-1">Normally $297</p>
          <p className="text-6xl md:text-7xl font-serif text-[#22385c] mb-2">$29.99</p>
          <p className="text-xl text-charcoal/60">90% off - today only</p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <a
            href="https://buy.stripe.com/cNi3cw7yqdTZ1NTfHQ43S0g"
            className="bg-[#22385c] hover:bg-[#22385c]/90 text-white text-xl md:text-2xl font-semibold px-10 py-5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Add Sashiko Mastery — $29.99
          </a>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-sm text-charcoal/50">Secure checkout</span>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Image src="/visa.svg" alt="Visa" width={50} height={32} className="h-8 w-12" />
            <Image src="/mastercard.svg" alt="Mastercard" width={50} height={32} className="h-8 w-12" />
            <Image src="/american-express.svg" alt="American Express" width={50} height={32} className="h-8 w-12" />
            <Image src="/discover.svg" alt="Discover" width={50} height={32} className="h-8 w-12" />
            <Image src="/paypal.svg" alt="PayPal" width={50} height={32} className="h-8 w-12" />
            <Image src="/apple-pay.svg" alt="Apple Pay" width={50} height={32} className="h-8 w-12" />
            <Image src="/google-pay.svg" alt="Google Pay" width={50} height={32} className="h-8 w-12" />
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="flex justify-center mb-10">
          <div className="w-32 h-32">
            <Image
              src="/guarantee1.png"
              alt="90 Days 100% Money Back Guarantee"
              width={140}
              height={140}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-light text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-5 shadow-sm">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                What is Sashiko?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                Sashiko is a traditional Japanese stitching technique that is over 400 years old. It uses a simple running stitch to create beautiful geometric patterns. Originally used to strengthen and repair fabric, it is now practiced as a meditative craft around the world.
              </p>
            </details>

            <details className="bg-white rounded-lg p-5 shadow-sm">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Do I need special materials?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                You need a needle, thread, and fabric. That is it. Any embroidery needle works to start. The collection includes a materials guide with recommendations, but you do not need anything fancy.
              </p>
            </details>

            <details className="bg-white rounded-lg p-5 shadow-sm">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                I have never sewn before. Is this too advanced?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                No. Sashiko uses one stitch: the running stitch. If you can push a needle through fabric, you can do this. The collection starts with beginner fundamentals before moving to patterns.
              </p>
            </details>

            <details className="bg-white rounded-lg p-5 shadow-sm">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                I have been sewing for years. Is this too basic?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                The 125 patterns range from simple to complex. Even experienced stitchers discover patterns and cultural context they have never seen. If you only know 10-20 Sashiko designs, you will find over 100 new ones here.
              </p>
            </details>

            <details className="bg-white rounded-lg p-5 shadow-sm">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Is this a physical course or online?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                Online video course. You will get instant access to stream all lessons on any device. Watch at your own pace, rewind as needed.
              </p>
            </details>

            <details className="bg-white rounded-lg p-5 shadow-sm">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Can I print the patterns?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                Yes. Every pattern is designed to be printed at full size. Pin it to your fabric and stitch directly over the lines.
              </p>
            </details>

            <details className="bg-white rounded-lg p-5 shadow-sm border-2 border-[#22385c]/20">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                What if I do not like it?
              </summary>
              <p className="mt-3 text-base md:text-lg text-charcoal/80">
                Email us within 90 days for a full refund. No questions asked. You either love it or you pay nothing.
              </p>
            </details>
          </div>
        </div>

        {/* Second Pricing Section */}
        <div className="bg-warmGray/30 rounded-xl p-8 mb-10">
          <div className="text-center mb-6">
            <p className="text-2xl md:text-3xl font-medium text-charcoal mb-2">
              One-time offer - Learn Sashiko For 90% Off - Valid only for
            </p>
            <UpsellTimer large />
          </div>

          <div className="text-center mb-6">
            <p className="text-3xl text-charcoal/60 line-through mb-1">Normally $297</p>
            <p className="text-6xl md:text-7xl font-serif text-[#22385c] mb-2">$29.99</p>
            <p className="text-xl text-charcoal/60">90% off - today only</p>
          </div>

          <div className="flex justify-center mb-6">
            <a
              href="https://buy.stripe.com/cNi3cw7yqdTZ1NTfHQ43S0g"
              className="bg-[#22385c] hover:bg-[#22385c]/90 text-white text-xl md:text-2xl font-semibold px-10 py-5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Add Sashiko Mastery — $29.99
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-sm text-charcoal/50">Secure checkout</span>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Image src="/visa.svg" alt="Visa" width={50} height={32} className="h-8 w-12" />
              <Image src="/mastercard.svg" alt="Mastercard" width={50} height={32} className="h-8 w-12" />
              <Image src="/american-express.svg" alt="American Express" width={50} height={32} className="h-8 w-12" />
              <Image src="/discover.svg" alt="Discover" width={50} height={32} className="h-8 w-12" />
              <Image src="/paypal.svg" alt="PayPal" width={50} height={32} className="h-8 w-12" />
              <Image src="/apple-pay.svg" alt="Apple Pay" width={50} height={32} className="h-8 w-12" />
              <Image src="/google-pay.svg" alt="Google Pay" width={50} height={32} className="h-8 w-12" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-28 h-28">
              <Image
                src="/guarantee1.png"
                alt="90 Days 100% Money Back Guarantee"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* No Thanks Link */}
        <div className="text-center">
          <button
            onClick={() => setShowUpsell(false)}
            className="text-charcoal/50 hover:text-charcoal/70 underline text-sm"
          >
            No thanks, just take me to Kintsugi Class →
          </button>
        </div>
      </div>
    </div>
  );
}
