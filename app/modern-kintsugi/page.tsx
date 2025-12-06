import StripeButton from "../components/StripeButtonModern";
import CountdownTimerDaily from "./CountdownTimerDaily";
import StickyHeaderModern from "./StickyHeaderModern";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <StickyHeaderModern />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[40rem] font-serif text-charcoal leading-none">
            金
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Founding Students Badge */}
          <p className="text-sm text-charcoal/60 tracking-wide">
            First 50 students online • December 2025
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
            Modern Kintsugi: How To Repair Broken Ceramics With Gold—The
            Accessible Way To Learn This 500-Year Old Japanese Art (Learn In 2
            Hours)
          </h1>

          {/* Hero Image */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/kintsugihero.jpeg"
              alt="White ceramic bowl repaired with beautiful gold kintsugi seams"
              width={1200}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <div className="w-px h-16 bg-gradient-to-b from-charcoal/20 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Pain/Pleasure Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              When Something Breaks
            </h2>

            <p className="text-lg leading-relaxed">
              Your grandmother's teapot slips from your hands.
            </p>
            <p className="text-lg leading-relaxed">It shatters.</p>
            <p className="text-lg leading-relaxed">
              In the West, you'd throw it away. Broken = worthless. Another
              thing lost. Another memory gone.
            </p>

            <h3 className="text-2xl font-light pt-6">
              What If There's A Better Way?
            </h3>

            <p className="text-lg leading-relaxed font-medium">
              What if that break wasn't the end - but the beginning of something
              more beautiful than the original ever was?
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/brokenteapot.png"
              alt="Broken ceramic teapot"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Problem Dig-in */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            We've Lost Something
          </h2>

          <div className="space-y-4">
            <p>We're taught that broken things lose their value.</p>
            <p>
              A cracked mug? Trash.
              <br />A chipped bowl? Donate pile.
              <br />
              Your favorite ceramic piece that fell? Gone.
            </p>
            <p>And it's not just about the object.</p>
            <p>
              It's the memory. Your grandmother's hands wrapping around that
              teacup every morning. The bowl you made in that pottery class. The
              vase from your first apartment.
            </p>
            <p>When they break, we lose the story.</p>
          </div>

          <h3 className="text-2xl md:text-3xl font-light pt-8 text-center">
            We've Forgotten How To Create
          </h3>

          <div className="space-y-4">
            <p>
              We scroll. We consume. We watch. We buy things made by machines in
              factories.
            </p>
            <p className="font-medium">
              When was the last time you CREATED something?
            </p>
            <p className="font-medium">
              Made art with you hands that made someone say "Wait... YOU made
              this?"
            </p>
            <p className="font-medium">
              Felt completely present - not thinking about work, not checking
              our phones, just... creating?
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <p>
              We need a hobby that's actually meaningful. Something meditative.
              Something therapeutic.
            </p>
            <p className="font-medium text-xl">
              Not another thing to consume. Something to CREATE.
            </p>
          </div>
        </div>
      </section>

      {/* Author Intro */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Why I Created This Course
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Hands Image - will be replaced with actual photo */}
            <div className="order-2 md:order-1">
              <Image
                src="/hands-working1.jpg"
                alt="Hands carefully applying gold to ceramic repair"
                width={1200}
                height={1600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="space-y-6 text-lg leading-relaxed order-1 md:order-2">
              <div className="border-l-4 border-gold/30 pl-6 space-y-4">
                <p>
                  I spent months learning kintsugi - studying both traditional
                  Japanese texts and modern techniques, watching countless hours
                  of masters at work, and practicing until my repairs actually
                  looked beautiful.
                </p>
                <p>
                  What I found was{" "}
                  <strong>scattered across dozens of resources</strong>.
                  Traditional urushi lacquer costs $200+ and{" "}
                  <strong>contains urushiol - the same compound in poison ivy</strong>.{" "}
                  <strong>90% of Americans are allergic to it</strong>.
                </p>
                <p>
                  So I developed a method using{" "}
                  <strong>food-safe, affordable materials</strong>
                  that gives you the same golden result - without the expense,
                  health risks, or months of practice.
                </p>
                <p>
                  This course is everything I wish existed when I started: clear
                  instructions, exact materials, and the philosophy that makes
                  kintsugi more than just gluing pottery.
                </p>
                <p>
                  Then people started asking me to teach them. One woman wrote:
                  <em> "I need to learn this. I have scars, and kintsugi reminds me
                  that what's broken can become more beautiful than before."</em>
                </p>
                <p>
                  That's when I knew I had to share this.
                </p>
                <p className="text-charcoal/60 text-base pt-2">— Kenji M.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Modern Kintsugi */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            Why Modern Kintsugi?
          </h2>

          <div className="space-y-4">
            <p>
              Traditional kintsugi uses urushi lacquer - beautiful, but
              impractical for most people. It costs hundreds of dollars,
              requires months of curing time, and{" "}
              <strong>contains urushiol (the same compound in poison ivy - 90% of Americans are allergic)</strong>.
            </p>
            <p className="font-medium">
              Modern kintsugi uses food-safe epoxy that's just as beautiful,
              cures overnight, and costs under $30.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Traditional Method</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Materials: $200-400+</li>
                <li>• Curing time: 1-3 months</li>
                <li>• Allergy risk: 90% (contains urushiol)</li>
                <li>• Learning curve: Years</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gold">Modern Method</h3>
              <ul className="space-y-2">
                <li>• Materials: Under $30</li>
                <li>• Curing time: Overnight</li>
                <li>• Allergy risk: None (food-safe)</li>
                <li>• Learning curve: 2 hours</li>
              </ul>
            </div>
          </div>

          <p className="pt-8 text-center font-medium text-xl">
            Same philosophy. Same beautiful golden seams. Fraction of the cost
            and time.
          </p>
        </div>
      </section>

      {/* Wabi-Sabi Mechanism Section */}
      <section className="relative py-32 px-6">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-[30rem] font-serif text-charcoal leading-none">
            侘寂
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12">
            The Philosophy Behind The Gold
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Wabi-Sabi (侘寂)</h3>
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
              <h3 className="text-2xl font-light">Mottainai (もったいない)</h3>
              <p>
                In a world of fast fashion and planned obsolescence, the
                Japanese concept of <em>mottainai</em> - regret for waste -
                offers a different path.
              </p>
              <p>
                Kintsugi treats broken objects as worthy of care and investment
                rather than replacement. Your grandmother's teacup doesn't end
                up in a landfill. It becomes an heirloom.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Mono no Aware (物の哀れ)</h3>
              <p>
                The pathos of things. The poignant beauty that comes from
                impermanence.
              </p>
              <p>
                A pristine bowl is beautiful. But a bowl that's been loved,
                broken, and repaired with gold? That bowl has lived. That bowl
                has a story. That bowl understands what it means to survive.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">More Than Pottery</h3>
              <p className="font-medium">Here's what students don't expect:</p>
              <p>
                Kintsugi becomes a metaphor. Your breaks, your scars, your
                healing - they don't make you damaged. They make you more
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

            <p className="font-medium pt-8 text-xl text-center italic">
              "The bowl is more beautiful for having been broken."
            </p>
          </div>
        </div>
      </section>

      {/* Class Modules */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            What You'll Learn
          </h2>

          <div className="space-y-8">
            {/* Module 1 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">1</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Foundations & Materials
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Everything you need before your first repair
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>
                      • Complete materials list with exact product links (under
                      $30 total)
                    </li>
                    <li>• Food-safe epoxy that's dishwasher-safe (top rack)</li>
                    <li>
                      • The 5 types of damage: hotsu, nyuu, ware, yobi, kake
                    </li>
                    <li>• Setting up your workspace</li>
                    <li>• The wabi-sabi philosophy: beauty in imperfection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">2</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Hotsu & Nyuu (Chips & Hairlines)
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Start with the easiest repairs
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Filling small chips (hotsu) with gold</li>
                    <li>• Tracing hairline fractures (nyuu) that haven't separated</li>
                    <li>• Mixing ratios and consistency for fine work</li>
                    <li>• Brush techniques for thin, luminous lines</li>
                    <li>• Perfect first project: your first golden repair</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">3</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Ware (Clean Breaks)
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Repair pieces that have broken apart
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Aligning broken pieces perfectly</li>
                    <li>• Adhesion technique for strong bonds</li>
                    <li>• Creating beautiful gold seam lines</li>
                    <li>• Multi-piece breaks: strategy for 3+ fragments</li>
                    <li>• Timing: when to wait, when to work</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">4</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Yobi & Kake (Missing Pieces)
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    The most advanced repairs: filling gaps
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Building up missing fragments (yobi)</li>
                    <li>• Filling larger losses (kake) with gold</li>
                    <li>• Creating structural integrity without original pieces</li>
                    <li>• Blending new material with existing ceramic</li>
                    <li>• Turning missing pieces into design features</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">5</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Finishing & Troubleshooting
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Polish, seal, and fix common mistakes
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Polishing for maximum shine (togi technique)</li>
                    <li>• Food-safe sealing for daily use</li>
                    <li>• Dishwasher care (top rack, gentle cycle)</li>
                    <li>• Common mistakes and how to fix them</li>
                    <li>• Long-term care for heirloom-quality repairs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-section" className="py-32 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Start Your First Repair Today
          </h2>

          <div className="space-y-4 text-lg">
            <p className="text-charcoal/70">What You're Getting:</p>
            <div className="space-y-1 text-charcoal/70">
              <p>2 Hours of Video Lessons - all 5 damage types ($197 value)</p>
              <p>3 Bonus Guides ($81 value)</p>
              <p>Lifetime Access</p>
            </div>
            <p className="text-xl font-medium pt-4">Total Value: $278</p>
          </div>

          <div className="py-8">
            <p className="text-xl line-through text-charcoal/50 mb-2">
              $278
            </p>
            <p className="text-6xl font-serif text-gold mb-4">$47</p>
            <p className="text-sm text-charcoal/60">
              Founding student pricing • First 50 students only
            </p>
          </div>

          <StripeButton price={47} />
          <p className="text-sm text-charcoal/60">🔒 Secure Payment via Stripe</p>

          <div className="pt-6 max-w-lg mx-auto bg-cream rounded-xl p-6 border-2 border-gold/20">
            <p className="text-lg font-medium text-charcoal mb-2">
              90-Day Money-Back Guarantee
            </p>
            <p className="text-sm text-charcoal/70">
              Try the entire class. Do your first repair. If you don't love it,
              email us within 90 days for a full refund. No questions asked.
            </p>
          </div>

          <CountdownTimerDaily />
        </div>
      </section>

      {/* Bonuses - First 50 Students */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
            As One Of The First 50 Students, You Also Get:
          </h2>
          <p className="text-center text-charcoal/60 mb-12">
            Three bonus guides included free with your order
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-xl font-serif mb-4">
                Beyond Ceramics Guide
              </h3>
              <p className="text-charcoal/70 mb-4">
                Repair more than just pottery
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li>• Glass repair techniques</li>
                <li>• Wood and lacquerware</li>
                <li>• Stone and marble pieces</li>
              </ul>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-xl font-serif mb-4">Quick Reference Card</h3>
              <p className="text-charcoal/70 mb-4">
                Printable cheat sheet for your workspace
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li>• Exact mixing ratios</li>
                <li>• Timing for each step</li>
                <li>• At-a-glance process guide</li>
              </ul>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-xl font-serif mb-4">
                Troubleshooting Guide
              </h3>
              <p className="text-charcoal/70 mb-4">Fix common mistakes fast</p>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li>• Epoxy too thick or thin?</li>
                <li>• Gold clumping or uneven?</li>
                <li>• Repair cracked again?</li>
              </ul>
            </div>
          </div>

          {/* Second CTA */}
          <div className="mt-16 text-center space-y-6 bg-warmGray/30 rounded-xl p-8">
            <p className="text-2xl font-light">
              Complete course + all three bonuses
            </p>
            <div>
              <p className="text-lg line-through text-charcoal/50">$278</p>
              <p className="text-5xl font-serif text-gold">$47</p>
            </div>
            <StripeButton price={47} />
            <p className="text-sm text-charcoal/60">🔒 Secure Payment via Stripe</p>
            <div className="pt-2 max-w-md mx-auto bg-cream rounded-lg p-4 border border-gold/20">
              <p className="text-sm font-medium text-charcoal">
                90-Day Money-Back Guarantee
              </p>
              <p className="text-xs text-charcoal/60">
                Try it risk-free. Full refund if you're not satisfied.
              </p>
            </div>
            <CountdownTimerDaily />
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
              <summary className="font-medium cursor-pointer text-lg">
                I'm not artistic or good with my hands - can I still do this?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes. This isn't about natural talent - it's about following a
                clear technique. If you can hold a brush and follow
                instructions, you can do this. Kintsugi requires patience, not
                perfection. The slight imperfections actually add character to
                your repairs.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                How much do the materials cost?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Under $30 for your complete starter kit. This includes
                everything: food-safe epoxy, gold powder, brushes, mixing tools.
                These materials will last for 10+ repairs. We provide exact
                shopping links so you don't waste money on the wrong supplies.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                Are we using traditional urushi lacquer?
              </summary>
              <p className="mt-4 text-charcoal/80">
                No. Traditional urushi contains urushiol - the same compound
                found in poison ivy. 90% of Americans are allergic to it, and it
                costs $200+ with weeks of curing time. We use modern, food-safe
                epoxy that costs under $30, cures overnight, and creates the
                same beautiful golden seams. Same philosophy, accessible
                materials.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                Is this culturally appropriate for me to learn?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes. Kintsugi is a craft meant to repair and create beauty - it
                doesn't belong only to Japan. Japanese artisans have been
                teaching international students for decades. The only
                requirement is that you approach it with respect for the
                philosophy behind it. If you're worried about this, that respect
                is already there.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                Will the repair actually be strong enough to use the piece
                again?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes, absolutely. The epoxy adhesives we use are incredibly
                strong - stronger than the original ceramic in many cases. Your
                repaired pieces will be fully functional and dishwasher-safe
                (top rack, gentle cycle - which we cover in the course). These
                repairs last for decades with normal use.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                How long does a repair take?
              </summary>
              <p className="mt-4 text-charcoal/80">
                A simple crack: 30-45 minutes of active work (plus drying time
                overnight). Complex pieces with multiple breaks: 2-3 hours of
                work spread over a few days. But this isn't rushed. It's
                meditative. You work in the evening, let it dry overnight,
                continue the next day. The pace is part of the practice.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 border-2 border-gold/20">
              <summary className="font-medium cursor-pointer text-lg">
                What's your refund policy?
              </summary>
              <p className="mt-4 text-charcoal/80">
                We offer a simple 90-day money-back guarantee. Try the entire
                class. Do your first repair. Share it with friends. If you don't
                absolutely love it, just email us within 90 days and we'll
                refund you in full. No questions asked. No hoops to jump
                through. We only want students who love learning this craft.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-2xl font-serif italic">
            "The bowl is more beautiful for having been broken."
          </p>

          <div className="pt-8 space-y-6">
            <h2 className="text-4xl font-light">
              Repair something broken.
              <br />
              Create something beautiful.
            </h2>

            <StripeButton price={47} />
            <p className="text-sm text-charcoal/60">🔒 Secure Payment via Stripe</p>
            <p className="text-sm text-charcoal/60">
              90-Day Money-Back Guarantee • Instant Access
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/60 text-center text-sm">
        <p>© 2025 Modern Kintsugi. All rights reserved.</p>
      </footer>
    </main>
  );
}
