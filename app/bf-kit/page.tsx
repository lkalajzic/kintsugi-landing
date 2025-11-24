"use client";

import { useState } from "react";
import Image from "next/image";

export default function KitUpsell() {
  const [selectedPackage, setSelectedPackage] = useState("bundle");

  const paymentLinks = {
    bundle: "https://buy.stripe.com/eVq14og4WbLRfEJ1R043S09?prefilled_promo_code=BLACKFRIDAY",
    video: "https://buy.stripe.com/3cIeVe9Gy3fl0JP67g43S07?prefilled_promo_code=BLACKFRIDAY",
    kit: "https://buy.stripe.com/6oU3cw9GyaHN78d0MW43S08?prefilled_promo_code=BLACKFRIDAY",
  };

  const buttonText = {
    bundle: "Yes - I Want The Complete Package (Lessons + Kit)",
    video: "Yes - I Want Just The Video Lessons",
    kit: "Yes - I Want Just The Kintsugi Kit",
  };

  const handleComplete = () => {
    window.location.href =
      paymentLinks[selectedPackage as keyof typeof paymentLinks];
  };

  return (
    <main className="overflow-hidden bg-cream">
      {/* Order Confirmed Banner */}
      <div className="bg-gold/10 border-b border-gold/20 py-3 text-center">
        <p className="text-sm text-charcoal/70">
          Order success. In a few minutes, you will receive your digital book in
          your email.
        </p>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Before You Go...
            </h1>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              You've got the digital book. But some students prefer learning by
              video.
            </p>
          </div>

          {/* Problem/Empathy */}
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed mb-10">
            <p>Reading is harder than video instructions for some people.</p>
            <p>Seeing exactly how to:</p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Mix the adhesive to the right consistency</li>
              <li>Apply the right amount</li>
              <li>Handle delicate broken edges</li>
            </ul>
            <p>That's often just easier.</p>
            <p>
              It's like cooking. Some people can read a recipe and nail it.
              Others need to watch someone do it first.
            </p>
            <p className="font-medium">
              There's no wrong way to learn. But for those who prefer video...
            </p>
          </div>

          {/* Solution */}
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed mb-16">
            <p>
              My mother's complete video lessons show every technique close-up from her Kyoto studio. 8 lessons, step by step.
            </p>
            <p>
              We've also sourced authentic kintsugi materials. The kit ships from our US fulfillment partner - no surprise import fees or tariffs on your end (they're 35%+ right now).
            </p>
            <p>
              Most students get both. Watch my mother's hands, then practice with real materials.
            </p>
            <p className="text-charcoal/70 text-base">
              We're still setting everything up - video platform finishing touches, kit fulfillment being finalized. As an early access student, you're helping us launch properly. In return, you get this pricing before it goes up.
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
            <div className="bg-warmGray/30 rounded-lg overflow-hidden aspect-[4/3] relative">
              <Image
                src="/videoplaceholder.png"
                alt="Master Yuki's Video Lessons"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="bg-warmGray/30 rounded-lg overflow-hidden aspect-[4/3] relative">
              <Image
                src="/kitphoto.png"
                alt="Kintsugi Starter Kit"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Social Proof */}
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-sm text-charcoal/60 text-center mb-4">From our first students:</p>
            <div className="bg-warmGray/50 rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "The way my brain works, this is just a lot easier."
              </p>
              <p className="font-medium text-charcoal/80">— Linda P.</p>
            </div>
            <div className="bg-warmGray/50 rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "Having the materials ready to go meant I actually did it
                instead of putting it off for a day that wouldn't come."
              </p>
              <p className="font-medium text-charcoal/80">— Barbara K.</p>
            </div>
          </div>

          {/* Offer Options */}
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            {/* Option 1: Bundle (Pre-selected) */}
            <div
              onClick={() => setSelectedPackage("bundle")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "bundle"
                  ? "border-gold bg-gold/20"
                  : "border-gold/30 bg-gold/10 hover:border-gold/50"
              }`}
            >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xl font-medium text-charcoal mb-1">
                      ✨ Complete Package (Video Lessons + Kintsugi Kit)
                    </p>
                    <p className="text-2xl font-light text-gold"><span className="line-through text-charcoal/40">$294</span> $147</p>
                  </div>
                  <span className="bg-gold text-cream px-3 py-1 rounded-full text-sm font-medium">
                    Save $71
                  </span>
                </div>
                <div className="space-y-2 text-charcoal/80">
                  <p>
                    ✓ Master Yuki's Video Lessons (Step-by-step, 8 videos, 4
                    hours)
                  </p>
                  <p>✓ Kintsugi Kit With Everything You Need</p>
                  <p>
                    ✓ 30-Day Money-Back Guarantee If You're Not Happy. You Don't
                    Even Need To Return The Kit.
                  </p>
                </div>
            </div>

            {/* Option 2: Video Only */}
            <div
              onClick={() => setSelectedPackage("video")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "video"
                  ? "border-gold bg-gold/10"
                  : "border-charcoal/20 bg-white hover:border-charcoal/40"
              }`}
            >
                <div className="mb-3">
                  <p className="text-xl font-medium text-charcoal mb-1">
                    Just the Video Lessons
                  </p>
                  <p className="text-2xl font-light text-charcoal"><span className="line-through text-charcoal/40">$198</span> $99</p>
                </div>
                <div className="text-charcoal/80">
                  <p>
                    ✓ Master Yuki's Video Lessons (Step-by-step, 8 videos, 4
                    hours)
                  </p>
                  <p>✓ 30-Day Money-Back Guarantee If You're Not Happy</p>
                </div>
            </div>

            {/* Option 3: Kit Only */}
            <div
              onClick={() => setSelectedPackage("kit")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "kit"
                  ? "border-gold bg-gold/10"
                  : "border-charcoal/20 bg-white hover:border-charcoal/40"
              }`}
            >
                <div className="mb-3">
                  <p className="text-xl font-medium text-charcoal mb-1">
                    Just the Kintsugi Kit
                  </p>
                  <p className="text-2xl font-light text-charcoal"><span className="line-through text-charcoal/40">$238</span> $119</p>
                </div>
                <div className="text-charcoal/80">
                  <p>✓ Kintsugi Kit With Everything You Need</p>
                  <p>
                    ✓ 30-Day Money-Back Guarantee If You're Not Happy. You Don't
                    Even Need To Return The Kit.
                  </p>
                </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <button
              onClick={handleComplete}
              className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg"
            >
              {buttonText[selectedPackage as keyof typeof buttonText]}
            </button>
          </div>

          {/* Guarantee */}
          <div className="max-w-2xl mx-auto bg-warmGray/50 rounded-xl p-8 border-2 border-gold/20 mb-16">
            <p className="text-xl font-medium text-charcoal mb-3">
              🛡️ 30-Day Money-Back Guarantee
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Try the video lessons. Use the materials. Do your first repair.
              <br />
              <br />
              Not satisfied? Email us within 30 days for a full refund -{" "}
              <strong>you don't even need to return the kit.</strong> No
              questions asked.
            </p>
          </div>

          {/* More Testimonials */}
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <div className="bg-warmGray/50 rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "Already repaired a glass and a bowl, and then I broke my flower
                vase just to make it even more beautiful!"
              </p>
              <p className="font-medium text-charcoal/80">— Patricia H.</p>
            </div>
            <div className="bg-warmGray/50 rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "Saved a ton of hassle of finding the materials. Super happy
                with my kit."
              </p>
              <p className="font-medium text-charcoal/80">— Kevin R.</p>
            </div>
            <div className="bg-warmGray/50 rounded-lg p-6">
              <p className="text-lg italic mb-3">"Love it!!"</p>
              <p className="font-medium text-charcoal/80">— Diana W.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-light text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: How long are the video lessons?
              </h3>
              <p className="text-charcoal/80">
                8 lessons totaling 4 hours of instruction. Each lesson focuses
                on a specific technique. From easier clean breaks to shatters
                and more difficult repairs
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: When will I get the video lessons?
              </h3>
              <p className="text-charcoal/80">
                Instantly via email after your order.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: How long does shipping take?
              </h3>
              <p className="text-charcoal/80">
                We're currently working with a US fulfillment center to get
                faster shipping (it's pretty hard!). Right now shipping takes
                around 2 weeks. If it's urgent, you can buy materials locally.
                Sorry for the inconvenience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: Do I need the video if I have the digital book?
              </h3>
              <p className="text-charcoal/80">
                Not required, the guide is complete. But many students find
                watching techniques helps them master details faster and make
                the process more enjoyable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: What if something breaks in shipping?
              </h3>
              <p className="text-charcoal/80">
                We'll replace any damaged items immediately at no cost. Just
                email us a photo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: What exactly comes in the Kintsugi Kit?
              </h3>
              <ul className="text-charcoal/80 space-y-1 list-disc pl-6">
                <li>Kintsugi epoxy adhesive (50ml)</li>
                <li>Gold imitation powder (5g)</li>
                <li>Silver imitation powder (5g)</li>
                <li>Mixing cup, stirring rod, application scraper</li>
                <li>Safety gloves</li>
              </ul>
              <p className="text-charcoal/80 mt-2">
                Enough for about 5 repairs depending on piece size. Real gold
                and silver is expensive (about 60$ per gram), so to make it more
                approachable, and for the first few pieces while you get the
                hang of it, it is best to use imitation gold and silver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: Will this work on [my specific item]?
              </h3>
              <p className="text-charcoal/80">
                Works on ceramic, porcelain, pottery, and glass. Perfect for
                teacups, bowls, vases, plates, and decorative pieces.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Q: What if I don't like it?
              </h3>
              <p className="text-charcoal/80">
                30-day money-back guarantee.{" "}
                <strong>You don't even need to return the kit.</strong> Email us
                and we'll refund you immediately. No questions asked.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <button
              onClick={handleComplete}
              className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg"
            >
              {buttonText[selectedPackage as keyof typeof buttonText]}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
