"use client";

import PaymentLinkButton from "../components/PaymentLinkButton";
import CountdownTimer from "./CountdownTimer";
import StickyHeader from "./StickyHeader";
import Image from "next/image";

// Full CTA Section Component - reusable
function FullCTASection({ showTimer = true }: { showTimer?: boolean }) {
  return (
    <div className="space-y-8">
      {/* Timer - above price */}
      {showTimer && <CountdownTimer />}

      {/* Price with value stacking */}
      <div className="text-center">
        <p className="text-3xl md:text-4xl text-charcoal/60 line-through mb-2">
          Normally $235
        </p>
        <p className="text-6xl md:text-7xl font-serif text-gold mb-2">$47</p>
        <p className="text-lg text-charcoal/60">80% off • Today only</p>
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <Image
          src="/arrow-down.svg"
          alt=""
          width={40}
          height={60}
          className="w-8 h-auto opacity-70"
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <PaymentLinkButton
          variant="default"
          displayPrice={47}
          valueCapi={38}
          ctaText="Yes - I Want To Get Access To Kintsugi Class Today"
        />
      </div>

      {/* Student count */}
      <p className="text-center text-xl md:text-2xl text-charcoal/70 font-bold">
        ✨ Join 477+ students already making beautiful pieces ✨
      </p>

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
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function SpecialOfferPage() {
  return (
    <main className="overflow-hidden">
      <StickyHeader />

      {/* Hero Section - Gallery grid + headline */}
      <section className="relative px-6 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight max-w-4xl mx-auto leading-tight text-center mb-6">
            Learn The Ancient Japanese Art Of Reviving Broken Pottery Into
            Dazzling Pieces In 2 Hours{" "}
            <span className="italic text-charcoal/50">
              (Looks way more expensive than it is)!
            </span>
          </h1>

          {/* Sub-subheadline with instructor name + student count */}
          <p className="text-xl md:text-3xl text-charcoal/80 text-center mb-12 font-bold">
            Join{" "}
            <span className="underline decoration-gold decoration-2 underline-offset-4">
              477+ students
            </span>{" "}
            learning from <span className="font-bold">Yuki Tanaka</span>
          </p>

          {/* Hero Gallery Grid - same layout as /create */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugi_imgs/0_ChatGPT Image Jan 10, 2026, 12_54_28 AM copy.jpg"
                alt="Kintsugi vase with golden seams"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugi_imgs/1ChatGPT Image Jan 10, 2026, 12_57_19 AM copy 2.jpg"
                alt="Kintsugi bowl with gold repair"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugi_imgs/heart1 copy.png"
                alt="White heart with gold kintsugi"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugi_imgs/plate ancient copy 2.jpg"
                alt="Ancient plate with gold kintsugi repair"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/blackheart.png"
                alt="Black heart with gold kintsugi"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugi_imgs/image copy.jpg"
                alt="Kintsugi piece with gold repair"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/goldteardropcup.jpeg"
                alt="Gold kintsugi teardrop cup"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/goldblueplate.jpg"
                alt="Blue plate with gold kintsugi repair"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hidden md:block">
              <Image
                src="/eg2.webp"
                alt="Kintsugi repair example"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Kintsugi + Everything condensed */}
      <section className="py-16 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80 text-center mb-10">
            Kintsugi (金継ぎ) is the <strong>500 year old Japanese art</strong>{" "}
            of repairing broken ceramics with gold. It means &quot;golden
            joinery&quot;, embodies{" "}
            <strong>
              wabi-sabi; imperfections make it perfect and more beautiful than
              before.
            </strong>
          </p>

          {/* Instructor + mockup */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl flex-shrink-0">
              <Image
                src="/yukiimage.jpg"
                alt="Yuki Tanaka, kintsugi instructor"
                width={192}
                height={192}
                sizes="(max-width: 768px) 160px, 192px"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="text-lg md:text-xl leading-relaxed">
              <p className="text-xl md:text-2xl font-light mb-3">
                Your instructor: <strong>Yuki Tanaka</strong> (田中由紀)
              </p>
              <p className="text-xl md:text-2xl text-charcoal/80">
                Learned from Japanese masters, some of whom even got rewards by
                the Japanese emperor. Then packed it all into a series of video
                lessons (online for the first time!) so you can skip straight to
                creating something beautiful.
              </p>
            </div>
          </div>

          {/* Device mockup - laptop in back, 3 devices in front */}
          <div className="max-w-4xl mx-auto mb-12 relative">
            {/* Laptop - rear, centered */}
            <div className="relative z-0 max-w-2xl mx-auto">
              <div className="bg-[#1a1a1a] rounded-t-lg p-[3%] pb-0">
                <div className="rounded-t-sm overflow-hidden">
                  <Image
                    src="/screenshot desktop.png"
                    alt="Kintsugi Class course platform"
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-[#2a2a2a] h-3 md:h-4 rounded-b-sm" />
              <div className="bg-[#1a1a1a] h-1.5 md:h-2 mx-[-3%] rounded-b-lg" />
            </div>

            {/* Front row - tablet, phone portrait, landscape phone */}
            <div className="flex items-end justify-center -mt-[18%] relative gap-[5%]">
              {/* Landscape phone - left */}
              <div className="w-[26%] relative z-10">
                <div className="bg-[#1a1a1a] rounded-[8px] md:rounded-[12px] p-[4%] shadow-2xl -rotate-3">
                  <div className="rounded-[4px] md:rounded-[6px] overflow-hidden">
                    <Image
                      src="/videoplayerdemoscreenshot.png"
                      alt="Kintsugi Class video player on phone"
                      width={400}
                      height={225}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Phone portrait - center */}
              <div className="w-[16%] relative z-30">
                <div className="bg-[#1a1a1a] rounded-[10px] md:rounded-[14px] p-[4%] shadow-2xl">
                  <div className="w-[35%] h-0.5 md:h-1 bg-[#2a2a2a] rounded-full mx-auto mb-[3%]" />
                  <div className="rounded-[4px] md:rounded-[6px] overflow-hidden">
                    <Image
                      src="/screenshot mobile.png"
                      alt="Kintsugi Class on mobile"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Tablet - right (landscape) */}
              <div className="w-[30%] relative z-20">
                <div className="bg-[#1a1a1a] rounded-[10px] md:rounded-[14px] p-[4%] shadow-2xl rotate-2">
                  <div className="rounded-[4px] md:rounded-[6px] overflow-hidden">
                    <Image
                      src="/5missing piecess.jpg"
                      alt="Kintsugi video lesson on tablet"
                      width={400}
                      height={225}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What you get - conversational, objection-handling copy */}
          <div className="max-w-2xl mx-auto space-y-8 text-xl md:text-2xl leading-relaxed">
            <p>
              🎉 You get <strong>8 HD video lessons</strong> that walk you
              through every single step.
            </p>

            <p>
              Watch whenever you want, as many times as you want.{" "}
              <strong>Lifetime access (Forever!!!) 🙌</strong>
            </p>

            <p className="text-charcoal/80 italic">
              &quot;But wait, doesn&apos;t kintsugi use urushi? That stuff gives
              you a rash!&quot;
            </p>

            <p>
              You&apos;re right.{" "}
              <strong> Urushi contains the same compound as poison ivy</strong>,
              and most people are allergic to it. That&apos;s why{" "}
              <strong>you&apos;ll use skin-safe materials</strong> that give you
              the same beautiful golden result without any of the irritation
              (and weeks of drying)! ✨
            </p>

            <p className="text-charcoal/80 italic">
              &quot;And isn&apos;t gold like $4,800 an ounce?&quot;
            </p>

            <p>
              It is! That&apos;s the beauty. You can use real gold, or
              alternatives we recommend.{" "}
              <strong>
                Your finished pieces will look like they cost hundreds to make.
                In reality? $16 of materials
              </strong>{" "}
              is all you need for 6 - 12 repairs (depending on size). We even
              give you the exact Amazon links.
            </p>

            <div className="border-t border-charcoal/10 pt-8">
              <p className="text-2xl md:text-3xl font-serif text-center mb-6">
                ✅ 90-Day Money-Back Guarantee
              </p>
              <p className="text-center">
                You don&apos;t need to make your final decision now. 🙌
              </p>
              <p className="text-center mt-4">
                Get the entire course right on your email and try it for 90
                days. Do your first few repairs. If you don&apos;t find it
                helpful?{" "}
                <strong>One email. Full refund. No questions asked.</strong>
              </p>

              <p className="text-center mt-6">
                Just email us at support@kintsugiclass.com at any time within
                the first 90 days and we will process your refund within 1
                business day. NO QUESTIONS ASKED.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section #1 */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            Get Kintsugi Class Access For 80% Off - Today Only
          </h2>
          <FullCTASection />
        </div>
      </section>

      {/* FB Comments Social Proof - after first pricing */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/the bonus add ons are great jokeeta johnson.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/lovely philosophy and object.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/brilliant idea.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/there is a crack in everything that is where the light gets in.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
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
                      $67 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Repair more than just pottery - expand your skills to new
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
                      works best for each
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
                      $27 value
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
                      $47 value
                    </span>
                  </div>
                  <p className="text-lg text-charcoal/70 mb-4">
                    Fix every common mistake - nothing will stop your progress
                  </p>
                  <ul className="space-y-2 text-lg md:text-xl text-charcoal/80">
                    <li>
                      • <strong>Adhesive too thick or thin?</strong> – exact
                      fixes for consistency issues
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
                      $27 value
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
                      $27 value
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
                      $22 value
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
              <span className="text-gold font-bold">$217</span>
            </p>
            <p className="text-xl text-charcoal/70 mt-2">
              FREE if you sign up today
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                I&apos;m not artistic or good with my hands - can I still do
                this?
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
                Under $16 for your complete starter kit. This includes
                everything: gold powder, adhesive, brushes, mixing tools. These
                materials will last for 6–12 repairs. We provide exact shopping
                links so you don&apos;t waste money on the wrong supplies.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Is this traditional kintsugi with urushi lacquer?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Traditional kintsugi uses urushi lacquer, which is beautiful but
                contains the same compound as poison ivy - most people are
                allergic. We teach the same ancient technique and philosophy
                using modern, food-safe materials that produce the same stunning
                golden result. Safe, affordable, and dishwasher-safe.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Will the repair actually be strong enough to use the piece
                again?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Yes, absolutely. The adhesives we use are incredibly strong -
                stronger than the original ceramic in many cases. Repaired
                pieces are fully functional and dishwasher-safe (after proper
                sealing, which we teach). These repairs last for decades.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                How long does a repair take?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                A simple crack: 30–45 minutes of active work (plus drying time
                overnight). Complex pieces with multiple breaks: 2–3 hours
                spread over a few days. The pace is part of the practice -
                meditative, not rushed.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                What&apos;s your refund policy?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                90-day money-back guarantee. Try the entire class. Do your first
                repair. If you don&apos;t love it, just send us one email for a
                full refund. No questions asked. No hoops.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Price Section #2 */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            Get Kintsugi Class Access For 80% Off - Today Only
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

      {/* Modules Section - after philosophy, "just in case" */}
      <section className="py-20 px-6 bg-warmGray/30">
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
                    loading="lazy"
                    alt="Module 1: History of Kintsugi"
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 358px"
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
                      • Why this isn&apos;t just a craft - it&apos;s a
                      meditation
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
                    loading="lazy"
                    alt="Module 2: Materials"
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 358px"
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
                      $16 total)
                    </li>
                    <li>
                      • Food-safe materials that are dishwasher-safe (top rack)
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
                    loading="lazy"
                    alt="Module 3: Chips & Hairlines"
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 358px"
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
                    <li>• Your first golden repair - step by step</li>
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
                    loading="lazy"
                    alt="Module 4: Clean Breaks"
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 358px"
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
                    loading="lazy"
                    alt="Module 5: Missing Pieces"
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 358px"
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
                    loading="lazy"
                    alt="Module 6: Troubleshooting"
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 358px"
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

      {/* Price Section #3 (final) */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif italic mb-12">
            &quot;The bowl is more beautiful for having been broken.&quot;
          </p>
          <FullCTASection showTimer={true} />
        </div>
      </section>

      {/* Students' friends social proof */}
      <section className="py-16 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-10">
            Students&apos; friends can&apos;t help saying things like...
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

      {/* FB Comments Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Here&apos;s What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/the bonus add ons are great jokeeta johnson.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/lovely philosophy and object.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/brilliant idea.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/kintsugisocialproof/there is a crack in everything that is where the light gets in.png"
                alt="Customer review"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (repeated) */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                I&apos;m not artistic or good with my hands - can I still do
                this?
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
                Under $16 for your complete starter kit. This includes
                everything: gold powder, adhesive, brushes, mixing tools. These
                materials will last for 6–12 repairs. We provide exact shopping
                links so you don&apos;t waste money on the wrong supplies.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Is this traditional kintsugi with urushi lacquer?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Traditional kintsugi uses urushi lacquer, which is beautiful but
                contains the same compound as poison ivy - most people are
                allergic. We teach the same ancient technique and philosophy
                using modern, food-safe materials that produce the same stunning
                golden result. Safe, affordable, and dishwasher-safe.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                Will the repair actually be strong enough to use the piece
                again?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Yes, absolutely. The adhesives we use are incredibly strong -
                stronger than the original ceramic in many cases. Repaired
                pieces are fully functional and dishwasher-safe (after proper
                sealing, which we teach). These repairs last for decades.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                How long does a repair take?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                A simple crack: 30–45 minutes of active work (plus drying time
                overnight). Complex pieces with multiple breaks: 2–3 hours
                spread over a few days. The pace is part of the practice -
                meditative, not rushed.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg md:text-xl">
                What&apos;s your refund policy?
              </summary>
              <p className="mt-4 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                90-day money-back guarantee. Try the entire class. Do your first
                repair. If you don&apos;t love it, just send us one email for a
                full refund. No questions asked. No hoops.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Price Section #4 (final final) */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12">
            Get Kintsugi Class Access For 80% Off - Today Only
          </h2>
          <FullCTASection showTimer={true} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/40 text-center text-xs">
        <p>© 2026 Kintsugi Class. All rights reserved.</p>
        <p className="mt-2 text-cream/25">
          <a href="/privacy" className="hover:text-cream/40">
            Privacy
          </a>
          {" · "}
          <a href="/terms" className="hover:text-cream/40">
            Terms
          </a>
          {" · "}
          <a href="/cookies" className="hover:text-cream/40">
            Cookies
          </a>
        </p>
      </footer>
    </main>
  );
}
