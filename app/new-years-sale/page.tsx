"use client";

import EmbeddedCheckoutButton from "../components/EmbeddedCheckoutButton";
import CountdownTimerNewYear from "../new-year-sale/CountdownTimerNewYear";
import StickyHeaderV2 from "./StickyHeaderV2";
import Image from "next/image";

// Full CTA Section Component - reusable
function FullCTASection({ showTimer = true }: { showTimer?: boolean }) {
  return (
    <div className="space-y-8">
      {/* Timer - above price */}
      {showTimer && <CountdownTimerNewYear />}

      {/* Price with value stacking */}
      <div className="text-center">
        <p className="text-3xl md:text-4xl text-charcoal/60 line-through mb-2">
          Normally $245
        </p>
        <p className="text-6xl md:text-7xl font-serif text-gold mb-2">$49</p>
        <p className="text-lg text-charcoal/60">80% off • Today only</p>
      </div>

      {/* CTA Button - Using custom styled version */}
      <div className="flex justify-center">
        <EmbeddedCheckoutButton
          priceId="price_1Sn3OMIWj0la69bvHWo1KO4T"
          displayPrice={49}
          valueCapi={39}
          ctaText="Start learning kintsugi today for only $49"
          fallbackPaymentLink="https://buy.stripe.com/test_xxx"
        />
      </div>

      {/* Payment Methods */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-charcoal/50">Secure checkout</span>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Image
            src="/visa.svg"
            alt="Visa"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="/mastercard.svg"
            alt="Mastercard"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="/american-express.svg"
            alt="American Express"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="/discover.svg"
            alt="Discover"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="/paypal.svg"
            alt="PayPal"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="/apple-pay.svg"
            alt="Apple Pay"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="/google-pay.svg"
            alt="Google Pay"
            width={50}
            height={32}
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Money Back Guarantee Badge */}
      <div className="flex justify-center">
        <Image
          src="/guarantee1.png"
          alt="90 Days 100% Money Back Guarantee"
          width={170}
          height={170}
          className="w-40 h-40 md:w-44 md:h-44"
        />
      </div>
    </div>
  );
}

export default function NewYearsSaleV2() {
  return (
    <main className="overflow-hidden">
      <StickyHeaderV2 />

      {/* Hero Section - Compact for above-fold copy */}
      <section className="relative px-6 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Hopkins Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight max-w-4xl mx-auto leading-tight text-center mb-6">
            The 500-Year-Old Japanese Art Of Reviving Broken Pottery Into
            Dazzling Golden Heirlooms
          </h1>

          {/* Students Badge */}
          <p className="text-lg md:text-2xl text-charcoal/80 text-center mb-8">
            Join{" "}
            <span className="font-medium underline decoration-gold decoration-2 underline-offset-4">
              168 students
            </span>{" "}
            who now turn broken pieces into stunning art
          </p>

          {/* Hero Image - Smaller on desktop */}
          <div className="rounded-lg overflow-hidden shadow-2xl max-w-xs md:max-w-sm mx-auto">
            <Image
              src="/brokenteapot.png"
              alt="Broken ceramic pieces waiting to be transformed"
              width={400}
              height={500}
              className="w-full h-auto max-h-[400px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pain Section - First line LARGE */}
      <section className="py-16 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-3xl md:text-4xl lg:text-3xl font-light leading-tight">
            A grandfather&apos;s only whiskey glass.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80">
            A dad&apos;s coffee mug.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80">
            A mother&apos;s favorite vase.
          </p>

          <div className="py-6">
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Some things aren&apos;t &quot;just things&quot;.
            </p>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mt-3">
              They are precious memories.
            </p>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80">
            And when they break, throwing them away feels... wrong.
          </p>
        </div>
      </section>

      {/* Secret/Method Tease Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Not many know this:
          </h2>

          <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
            <p>
              There&apos;s a 500-year-old Japanese secret for turning broken
              ceramics into art worth more than the original...
            </p>
            <p>
              So a cracked bowl becomes a golden heirloom. A shattered vase
              becomes a conversation piece. A broken gift becomes something
              you&apos;d never throw away.
            </p>
          </div>

          {/* Course Preview GIF */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
            <Image
              src="/course-preview.gif"
              alt="Kintsugi repair preview from the course"
              width={600}
              height={338}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto">
          {/* Intro with image */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl flex-shrink-0">
              <Image
                src="/ruggedbetter1.png"
                alt="Yuki Tanaka holding a kintsugi bowl"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl md:text-2xl leading-relaxed">
              <p className="text-2xl md:text-3xl font-light mb-4">
                My name is Yuki Tanaka (田中由紀).
              </p>
              <p>
                I spent countless hours learning from Japanese masters and
                practicing on dozens of pieces—so you can skip straight to
                creating something beautiful.
              </p>
            </div>
          </div>

          {/* Story continues */}
          <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl leading-relaxed">
            <p>
              A woman brought in her late mother&apos;s rice bowl, cracked down
              the middle. &quot;Can you save it?&quot; she asked.
            </p>

            <p className="italic text-xl md:text-2xl border-l-4 border-gold/40 pl-6">
              &quot;It&apos;s not about saving it. It&apos;s about showing what
              it survived.&quot;
            </p>

            <p>
              When she came back and saw the crack glowing with gold, she cried.
              They always cry.
            </p>
          </div>

          {/* Why Teaching Online */}
          <div className="max-w-3xl mx-auto mt-12 space-y-6 text-xl md:text-2xl leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-light">
              Why I&apos;m Teaching This Online For The First Time
            </h3>

            <p>
              Most people aren&apos;t able to spend thousands of dollars to
              travel to Japan any time soon. They&apos;ll never sit in a studio
              with a master. Never experience the meditative practice of
              repairing something broken with gold.
            </p>

            <p>People started asking me to teach them. One woman wrote:</p>

            <p className="italic text-xl md:text-2xl border-l-4 border-gold/40 pl-6">
              &quot;I need to learn this. I have scars, and kintsugi reminds me
              that what&apos;s broken can become more beautiful than
              before.&quot;
            </p>

            <p>
              That&apos;s when I knew I had to share this. Not just the
              technique—but the philosophy. The meditation. The meaning.
            </p>

            <p className="font-bold">
              I put everything I&apos;ve learned into a 2-hour video course. The
              exact techniques, the philosophy, the materials that cost under
              $30, not $200 or more. Everything you need to start your first
              repair.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Image
            src="/abovepricingkintsugi.avif"
            alt="Beautiful kintsugi repair detail showing gold seams"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/eg1.webp"
                alt="Kintsugi repair example"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/eg2.webp"
                alt="Kintsugi repair example"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section - With Screenshots */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            What&apos;s Inside Kintsugi Class
          </h2>
          <p className="text-xl text-center text-charcoal/60 font-bold mb-16">
            8 HD video lessons • Lifetime access • Complete beginner friendly
          </p>

          <div className="space-y-12">
            {/* Module 1 */}
            <div className="bg-cream rounded-xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <Image
                    src="/1the history of kintsugi.jpg"
                    alt="Module 1: History of Kintsugi"
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg shadow"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    <span className="text-gold">1.</span> The History &
                    Philosophy
                  </h3>
                  <p className="text-lg md:text-xl text-charcoal/70 mb-4">
                    Understand the 500-year tradition before you begin
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • The origin story of kintsugi in 15th century Japan
                    </li>
                    <li>
                      • Wabi-sabi philosophy: finding beauty in imperfection
                    </li>
                    <li>
                      • Why this isn&apos;t just a craft—it&apos;s a meditation
                    </li>
                    <li>
                      • The therapeutic benefits backed by modern psychology
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-cream rounded-xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <Image
                    src="/2materials.jpg"
                    alt="Module 2: Materials"
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg shadow"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    <span className="text-gold">2.</span> Materials & Setup
                  </h3>
                  <p className="text-lg md:text-xl text-charcoal/70 mb-4">
                    Everything you need before your first repair
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • Complete shopping list with exact product links (under
                      $30 total)
                    </li>
                    <li>
                      • Food-safe epoxy that&apos;s dishwasher-safe (top rack)
                    </li>
                    <li>
                      • The 5 types of damage: hotsu, nyuu, ware, yobi, kake
                    </li>
                    <li>• Setting up your workspace for success</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-cream rounded-xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <Image
                    src="/3chips and hairlines.jpg"
                    alt="Module 3: Chips & Hairlines"
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg shadow"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    <span className="text-gold">3.</span> Chips & Hairlines
                  </h3>
                  <p className="text-lg md:text-xl text-charcoal/70 mb-4">
                    Start with the easiest repairs
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>• Filling small chips (hotsu) with gold</li>
                    <li>
                      • Tracing hairline fractures (nyuu) that haven&apos;t
                      separated
                    </li>
                    <li>• Mixing ratios and consistency for fine work</li>
                    <li>• Brush techniques for thin, luminous lines</li>
                    <li>• Your first golden repair—step by step</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-cream rounded-xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <Image
                    src="/4clean breaks.jpg"
                    alt="Module 4: Clean Breaks"
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg shadow"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    <span className="text-gold">4.</span> Clean Breaks
                  </h3>
                  <p className="text-lg md:text-xl text-charcoal/70 mb-4">
                    Repair pieces that have broken apart
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>• Aligning broken pieces perfectly</li>
                    <li>
                      • Adhesion technique for bonds stronger than original
                    </li>
                    <li>• Creating beautiful gold seam lines</li>
                    <li>• Multi-piece breaks: strategy for 3+ fragments</li>
                    <li>• Timing: when to wait, when to work</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-cream rounded-xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <Image
                    src="/5missing piecess.jpg"
                    alt="Module 5: Missing Pieces"
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg shadow"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    <span className="text-gold">5.</span> Missing Pieces
                  </h3>
                  <p className="text-lg md:text-xl text-charcoal/70 mb-4">
                    The most advanced repairs: filling gaps
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>• Building up missing fragments (yobi technique)</li>
                    <li>• Filling larger losses (kake) with gold</li>
                    <li>
                      • Creating structural integrity without original pieces
                    </li>
                    <li>
                      • Turning missing pieces into stunning design features
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="bg-cream rounded-xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <Image
                    src="/6troubleshooting.jpg"
                    alt="Module 6: Troubleshooting"
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-lg shadow"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    <span className="text-gold">6.</span> Finishing &
                    Troubleshooting
                  </h3>
                  <p className="text-lg md:text-xl text-charcoal/70 mb-4">
                    Polish, seal, and fix common mistakes
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>• Polishing for maximum shine (togi technique)</li>
                    <li>• Food-safe sealing for daily use</li>
                    <li>• Dishwasher care (top rack, gentle cycle)</li>
                    <li>• Common mistakes and exactly how to fix them</li>
                    <li>• Long-term care for heirloom-quality repairs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Full CTA Section */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            New Year&apos;s Sale — 80% Off
          </h2>
          <FullCTASection />
        </div>
      </section>

      {/* Bonuses Section - With bullet points and value stacking */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            Plus Six Bonuses
          </h2>
          <p className="text-lg md:text-xl text-center text-charcoal/60 mb-16">
            Included FREE when you enroll today
          </p>

          <div className="space-y-8">
            {/* Bonus 1 */}
            <div className="bg-cream rounded-xl p-8 md:p-10 shadow-md border-2 border-gold/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">📄</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif">
                      Beyond Ceramics Guide
                    </h3>
                    <span className="text-gold font-bold text-xl">
                      $147 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Repair more than just pottery—expand your skills to new
                    materials
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>Glass repair techniques</strong> – wine glasses,
                      mirrors, decorative pieces
                    </li>
                    <li>
                      • <strong>Wood and lacquerware</strong> – restore wooden
                      bowls and antique furniture
                    </li>
                    <li>
                      • <strong>Stone and marble pieces</strong> – sculptures,
                      countertops, tiles
                    </li>
                    <li>
                      • <strong>Material-specific adhesives</strong> – which
                      epoxy works best for each
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-cream rounded-xl p-8 md:p-10 shadow-md border-2 border-gold/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">📋</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif">
                      Quick Reference Card
                    </h3>
                    <span className="text-gold font-bold text-xl">
                      $97 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Printable cheat sheet to keep at your workspace
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>Exact mixing ratios</strong> – never guess
                      proportions again
                    </li>
                    <li>
                      • <strong>Timing for each step</strong> – when to apply,
                      when to wait, when to finish
                    </li>
                    <li>
                      • <strong>At-a-glance process guide</strong> – the full
                      workflow on one page
                    </li>
                    <li>
                      • <strong>Troubleshooting quick-fixes</strong> – solve
                      problems in seconds
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-cream rounded-xl p-8 md:p-10 shadow-md border-2 border-gold/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🔧</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif">
                      Troubleshooting Guide
                    </h3>
                    <span className="text-gold font-bold text-xl">
                      $113 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Fix every common mistake—nothing will stop your progress
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>Epoxy too thick or thin?</strong> – exact fixes
                      for consistency issues
                    </li>
                    <li>
                      • <strong>Gold clumping or uneven?</strong> – smoothing
                      techniques that work
                    </li>
                    <li>
                      • <strong>Repair cracked again?</strong> – strengthen
                      without starting over
                    </li>
                    <li>
                      • <strong>Color matching problems</strong> – blend repairs
                      invisibly
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus 4 */}
            <div className="bg-cream rounded-xl p-8 md:p-10 shadow-md border-2 border-gold/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif">
                      Sharing Your Work
                    </h3>
                    <span className="text-gold font-bold text-xl">
                      $47 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Build confidence and share your craft
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>Photography tips</strong> for showing the gold
                    </li>
                    <li>
                      • <strong>How to talk about your work</strong>
                    </li>
                    <li>
                      • <strong>Teaching kintsugi</strong> to friends
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus 5 */}
            <div className="bg-cream rounded-xl p-8 md:p-10 shadow-md border-2 border-gold/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🧘</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif">
                      Meditation & Mindfulness
                    </h3>
                    <span className="text-gold font-bold text-xl">
                      $37 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Deepen the therapeutic practice
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>Breathwork</strong> while repairing
                    </li>
                    <li>
                      • <strong>Entering flow state</strong>
                    </li>
                    <li>
                      • <strong>Journaling prompts</strong> on beauty &
                      brokenness
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus 6 */}
            <div className="bg-cream rounded-xl p-8 md:p-10 shadow-md border-2 border-gold/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🎁</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif">
                      Gift Creation Guide
                    </h3>
                    <span className="text-gold font-bold text-xl">
                      $27 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Create meaningful gifts for loved ones
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>10 best thrift store finds</strong> under $5
                    </li>
                    <li>
                      • <strong>Gift presentation ideas</strong>
                    </li>
                    <li>
                      • <strong>Repair timeline</strong> for any occasion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Value Stacking Total */}
          <div className="mt-12 text-center bg-gold/10 rounded-xl p-8 border-2 border-gold/30">
            <p className="text-2xl md:text-3xl font-medium">
              Total bonus value:{" "}
              <span className="text-gold font-bold">$468</span>
            </p>
            <p className="text-xl text-charcoal/70 mt-2">
              FREE if you sign up today
            </p>
          </div>
        </div>
      </section>

      {/* Third Full CTA Section */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            New Year&apos;s Sale — 80% Off
          </h2>
          <FullCTASection />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 px-6">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-[20rem] font-serif text-charcoal leading-none">
            侘寂
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            The Philosophy Behind The Gold
          </h2>

          <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-light">
                Wabi-Sabi (侘寂)
              </h3>
              <p>
                Most hobbies punish mistakes. Mess up a painting? Start over.
                Ruin the recipe? Throw it out.
              </p>
              <p className="font-medium">Kintsugi is the opposite.</p>
              <p>
                Wabi-sabi is the Japanese philosophy of finding beauty in
                imperfection and impermanence. Embracing asymmetry, roughness,
                and the marks of weathering as elements that deepen character
                rather than diminish it.
              </p>
              <p className="italic">
                The cracks become rivers of light. The chips become character.
                The break becomes the story.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl md:text-3xl font-light">
                Mottainai (もったいない)
              </h3>
              <p>
                In a world of fast fashion and planned obsolescence, the
                Japanese concept of <em>mottainai</em> - regret for waste -
                offers a different path.
              </p>
              <p>
                Kintsugi treats broken objects as worthy of care and investment
                rather than replacement. Your grandmother&apos;s teacup
                doesn&apos;t end up in a landfill. It becomes an heirloom.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl md:text-3xl font-light">
                Mono no Aware (物の哀れ)
              </h3>
              <p>
                The pathos of things. The poignant beauty that comes from
                impermanence.
              </p>
              <p>
                A pristine bowl is beautiful. But a bowl that&apos;s been loved,
                broken, and repaired with gold? That bowl has lived. That bowl
                has a story. That bowl understands what it means to survive.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl md:text-3xl font-light">
                More Than Pottery
              </h3>
              <p className="font-medium">
                Here&apos;s what students don&apos;t expect:
              </p>
              <p>
                Kintsugi becomes a metaphor. Your breaks, your scars, your
                healing - they don&apos;t make you damaged. They make you more
                valuable. More beautiful. More yourself.
              </p>
              <p>
                Contemporary psychology calls this post-traumatic growth. The
                Japanese have known it for 500 years: what breaks you can make
                you whole in ways you never were before.
              </p>
              <p className="italic">
                You came to repair a bowl. You might leave understanding how to
                repair yourself.
              </p>
            </div>

            <p className="font-medium pt-8 text-xl md:text-2xl text-center">
              &quot;The bowl is more beautiful for having been broken.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            New Year&apos;s Sale — 80% Off
          </h2>
          <FullCTASection />
        </div>
      </section>

      {/* With Kintsugi Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gold/10 rounded-xl p-10 md:p-12 border-2 border-gold/30 text-center">
            <h3 className="text-3xl md:text-4xl font-light mb-8">
              With Kintsugi…
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              That same broken piece will be revived and displayed proudly. The
              break is now a feature, not a flaw. Gold veins telling the story
              of what it survived. Every time someone asks about it, you get to
              share that memory again; kept alive, made more beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-10">
            Students' friends can&apos;t help saying things like...
          </h3>
          <div className="space-y-6 text-xl md:text-2xl italic text-charcoal/80">
            <p>
              &quot;Wow, this is beautiful! Did you really repair this
              yourself?&quot;
            </p>
            <p>&quot;I love this piece. How did you do it?&quot;</p>
            <p>
              &quot;This looks like museum-quality work... I had no idea you
              were so talented.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Decision Time Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            It&apos;s decision time!
          </h2>
          <p className="text-2xl text-center text-charcoal/70 mb-16">
            You&apos;ve got 2 options.
          </p>

          <div className="space-y-12">
            {/* Option 1 */}
            <div className="bg-warmGray/50 rounded-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Option 1:</h3>
              <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80">
                Ignore everything you&apos;ve just read. Probably spend time in
                the endless, empty scroll of social media and consumption.
                Don&apos;t learn a new hobby. A beautiful art that is meditative
                and meaningful. That makes irreplaceable memories with dear
                friends and family. Let those memories slip away.
              </p>
            </div>

            {/* Option 2 */}
            <div className="bg-gold/10 rounded-xl p-8 md:p-10 border-2 border-gold/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Option 2: Try Kintsugi Class for 90 days!
              </h3>
              <div className="space-y-4 text-xl md:text-2xl leading-relaxed">
                <p>
                  Get all your money back if you&apos;re not happy for any
                  reason. Just send one email. No questions asked.
                </p>
                <p>
                  Create beautiful art that will leave your friends in awe...
                  Make a piece that will last for decades. Preserve the memory
                  for the next generation.
                </p>
                <p className="font-medium">
                  For less than you spend on monthly subscriptions.
                </p>
                <p className="text-gold font-bold text-xl">
                  Sign up now. Get started in 3 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Decision Image */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/goldwhitebowlnice.jpg"
              alt="Beautiful kintsugi repaired bowl with gold seams"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Fourth Full CTA Section */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            New Year&apos;s Sale — 80% Off
          </h2>
          <FullCTASection />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                I&apos;m not artistic or good with my hands—can I still do this?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Yes. This isn&apos;t about natural talent. It&apos;s about
                following a technique that&apos;s been refined over 500 years.
                If you can hold a brush and follow instructions, you can do
                this. Kintsugi requires patience, not perfection.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                How much do the materials cost?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Under $30 for your complete starter kit. This includes
                everything: food-safe epoxy, gold powder (or cheaper
                alternatives), brushes, mixing tools. These materials will last
                for 10+ repairs. We provide exact shopping links so you
                don&apos;t waste money on the wrong supplies.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Is this traditional kintsugi with urushi lacquer?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                No. Traditional urushi lacquer costs $200+, can cause severe
                allergic reactions (same compound as poison ivy), and requires
                extensive safety equipment. We use modern, food-safe epoxy that
                costs under $30 and produces the same stunning golden result.
                The technique and philosophy remain authentic.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Will the repair actually be strong enough to use the piece
                again?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Yes, absolutely. The epoxy adhesives we use are incredibly
                strong—stronger than the original ceramic in many cases.
                Repaired pieces are fully functional and dishwasher-safe (after
                proper sealing, which we teach). These repairs last for decades.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                How long does a repair take?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                A simple crack: 30-45 minutes of active work (plus drying time
                overnight). Complex pieces with multiple breaks: 2-3 hours
                spread over a few days. The pace is part of the
                practice—meditative, not rushed.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                What&apos;s your refund policy?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                90-day money-back guarantee. Try the entire class. Do your first
                repair. If you don&apos;t love it, email us within 90 days for a
                full refund. No questions asked. No hoops.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final Full CTA Section */}
      <section className="py-24 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif italic mb-12">
            &quot;The bowl is more beautiful for having been broken.&quot;
          </p>
          <FullCTASection showTimer={true} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/60 text-center text-sm">
        <p>© 2025 Kintsugi Class. All rights reserved.</p>
      </footer>
    </main>
  );
}
