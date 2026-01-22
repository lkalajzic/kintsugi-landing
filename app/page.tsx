import EmbeddedCheckoutButton from "./components/EmbeddedCheckoutButton";
import CountdownTimerDaily from "./learn/CountdownTimerDaily";
import StickyHeaderModern from "./learn/StickyHeaderModern";
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
            First 50 students online • January 2026
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
            Kintsugi: Learn The 500-Year Old Traditional Art Of Fixing Broken
            Ceramics With Gold—For The First Time Online (Learn In 2 Hours)
          </h1>

          {/* Hero Image */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/kintsugihero.jpeg"
              alt="White ceramic bowl repaired with beautiful gold kintsugi seams"
              width={1200}
              height={900}
              sizes="(max-width: 896px) 100vw, 896px"
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

            <h3 className="text-2xl font-light pt-6">What If That's Wrong?</h3>

            <p className="text-lg leading-relaxed font-medium">
              What if that break wasn't the end - but the beginning of something
              more beautiful than the original ever was?
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/broken3.jpg"
              alt="Broken ceramic pieces"
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
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
            But Here's What Really Keeps You Up At Night
          </h3>

          <div className="space-y-4">
            <p>
              You scroll. You consume. You watch. You buy things made by
              machines in factories.
            </p>
            <p className="font-medium">
              When was the last time you CREATED something?
            </p>
            <p className="font-medium">
              When was the last time you made art with your hands that made
              someone say "Wait... YOU made this?"
            </p>
            <p className="font-medium">
              When was the last time you felt completely present - not thinking
              about work, not checking your phone, just... creating?
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <p>
              You want a hobby that's actually meaningful. Something meditative.
              Something therapeutic.
            </p>
            <p className="font-medium text-xl">
              Not another thing to consume. Something to CREATE.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - A 500-Year Tradition */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            A 500-Year Old Practice
          </h2>

          <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>My name is Yuki Tanaka (田中由紀).</p>
            <p>
              I've spent years studying kintsugi - not just the technique, but
              the philosophy behind it. I've learned from Japanese masters
              who've practiced this art for decades. Masters who've received
              recognition from the Japanese Emperor. Masters whose families have
              been repairing ceramics for generations.
            </p>
            <p>
              What struck me wasn't only the craft. It was watching people's
              faces when they received their repaired pieces.
            </p>
            <p>
              A woman brought in her late mother's rice bowl, cracked down the
              middle. "Can you save it?" she asked.
            </p>
            <p className="italic">
              "It's not about saving it. It's about showing what it survived."
            </p>
            <p>
              When she came back and saw the crack glowing with gold, she cried.
              They always cry.
            </p>
            <p>
              That's when I knew this wasn't only a craft. It was something that
              needed to be shared.
            </p>
          </div>

          {/* Course Preview Video */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              poster="/course-preview-poster.webp"
            >
              <source src="/course-preview.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Why Teaching Online */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            Why I'm Teaching This Online For The First Time
          </h2>

          <div className="space-y-4">
            <p>
              Most people aren't able to spend thousands of dollars to travel to
              Japan any time soon. They'll never sit in a studio with a master.
              Never experience the meditative practice of repairing something
              broken with gold.
            </p>
            <p>People started asking me to teach them. One woman wrote:</p>
            <p className="italic border-l-4 border-gold/30 pl-6 py-2">
              "I need to learn this. I have scars, and kintsugi reminds me that
              what's broken can become more beautiful than before."
            </p>
            <p>
              That's when I knew I had to share this. Not just the technique -
              but the philosophy. The meditation. The meaning.
            </p>
            <p>
              I put everything I've learned into a 2-hour video course. The
              exact techniques, the philosophy, the materials that cost under
              $30, not $200 or more. Everything you need to start your first
              repair.
            </p>
          </div>
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

            <p className="font-medium pt-8 text-xl text-center">
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
                    <li>
                      • Tracing hairline fractures (nyuu) that haven't separated
                    </li>
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
                    <li>
                      • Creating structural integrity without original pieces
                    </li>
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

      {/* Bonuses */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Plus Six Bonuses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Beyond Ceramics</h3>
              <p className="text-charcoal/70 mb-4">
                Repair more than just pottery
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Glass repair techniques</li>
                <li>• Wood and lacquerware</li>
                <li>• Stone and marble pieces</li>
              </ul>
              <p className="text-gold font-medium">Value: $27</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Quick Reference Card</h3>
              <p className="text-charcoal/70 mb-4">
                Printable cheat sheet for your workspace
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Exact mixing ratios</li>
                <li>• Timing for each step</li>
                <li>• At-a-glance process guide</li>
              </ul>
              <p className="text-gold font-medium">Value: $17</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">
                Troubleshooting Guide
              </h3>
              <p className="text-charcoal/70 mb-4">Fix common mistakes fast</p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Epoxy too thick or thin?</li>
                <li>• Gold clumping or uneven?</li>
                <li>• Repair cracked again?</li>
              </ul>
              <p className="text-gold font-medium">Value: $27</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Sharing Your Work</h3>
              <p className="text-charcoal/70 mb-4">
                Build confidence and share your craft
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Photography tips for showing the gold</li>
                <li>• How to talk about your work</li>
                <li>• Teaching kintsugi to friends</li>
              </ul>
              <p className="text-gold font-medium">Value: $47</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">
                Meditation & Mindfulness
              </h3>
              <p className="text-charcoal/70 mb-4">
                Deepen the therapeutic practice
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Breathwork while repairing</li>
                <li>• Entering flow state</li>
                <li>• Journaling prompts on beauty & brokenness</li>
              </ul>
              <p className="text-gold font-medium">Value: $37</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Gift Creation Guide</h3>
              <p className="text-charcoal/70 mb-4">
                Create meaningful gifts for loved ones
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• 10 best thrift store finds under $5</li>
                <li>• Gift presentation ideas</li>
                <li>• Repair timeline for any occasion</li>
              </ul>
              <p className="text-gold font-medium">Value: $27</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Before Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Image
            src="/abovepricingkintsugi.avif"
            alt="Beautiful kintsugi repair detail showing gold seams"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-xl"
          />

          {/* Additional example images */}
          <div className="grid md:grid-cols-2 gap-6">
            <Image
              src="/eg1.webp"
              alt="Kintsugi repair example 1"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src="/eg2.webp"
              alt="Kintsugi repair example 2"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-section" className="py-32 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Founding Student Pricing
          </h2>

          <div className="space-y-4 text-lg">
            <p className="text-charcoal/70">Complete Class Value:</p>
            <div className="space-y-1 text-charcoal/70">
              <p>5 Core Modules - 2 hours ($297)</p>
              <p>6 Bonus Trainings ($182)</p>
              <p>Lifetime Access (Priceless)</p>
            </div>
            <p className="text-2xl font-medium pt-4">Total Value: $479</p>
          </div>

          <div className="py-8">
            <p className="text-xl line-through text-charcoal/50 mb-2">
              Regular Price: $97
            </p>
            <p className="text-6xl font-serif text-gold mb-4">$47</p>
            <p className="text-sm text-charcoal/60">
              Founding student pricing • First 50 students
            </p>
          </div>

          <EmbeddedCheckoutButton
            priceId="price_1SsCFMIWj0la69bvd1QSZSna"
            displayPrice={47}
            valueCapi={38}
            ctaText="Begin Your Practice - $47"
            fallbackPaymentLink="https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00"
            cancelPath="/"
          />

          <div className="pt-8 max-w-lg mx-auto bg-cream rounded-xl p-6 border-2 border-gold/20">
            <p className="text-lg font-medium text-charcoal mb-2">
              90-Day Money-Back Guarantee
            </p>
            <p className="text-sm text-charcoal/70">
              Try the entire class. Do your first repair. If you don't love it,
              email us within 90 days for a full refund. No questions asked.
            </p>
          </div>

          <CountdownTimerDaily />

          <div className="pt-4 space-y-1 text-sm text-charcoal/60">
            <p>Secure Payment via Stripe</p>
          </div>
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
              <summary className="font-medium cursor-pointer text-lg">
                I'm not artistic or good with my hands - can I still do this?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes. This isn't about natural talent. It's about following a
                technique that's been refined over generations. If you can hold
                a brush and follow instructions, you can do this. Kintsugi
                requires patience, not perfection.
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
                No. Traditional urushi lacquer costs $200+, can cause severe
                allergic reactions, and requires extensive safety equipment. We
                use modern, food-safe epoxy alternatives that cost under $30 and
                work beautifully. You get the same golden result without the
                expense or health risks. The technique and wabi-sabi philosophy
                remain authentic.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                Is this culturally appropriate for me to learn?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes. This is a craft meant to repair and create beauty - it
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
                (after proper sealing, which we teach in Module 5). These
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

            <details className="bg-cream rounded-lg p-6">
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
          <p className="text-lg text-charcoal/70">— Yuki Tanaka (田中由紀)</p>

          <div className="pt-8 space-y-6">
            <h2 className="text-4xl font-light">
              I've spent years learning from Japanese masters.
              <br />
              Now I want to teach you.
            </h2>

            <EmbeddedCheckoutButton
              priceId="price_1SsCFMIWj0la69bvd1QSZSna"
              displayPrice={47}
              valueCapi={38}
              ctaText="Begin Your Practice - $47"
              fallbackPaymentLink="https://buy.stripe.com/dRmeVe8CuaHN8chfHQ43S00"
              cancelPath="/"
            />

            <p className="text-sm text-charcoal/60">
              90-Day Money-Back Guarantee • Secure Checkout • Instant
              Access
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/40 text-center text-xs">
        <p>© 2026 Kintsugi Class. All rights reserved.</p>
        <p className="mt-2 text-cream/25">
          <a href="/privacy" className="hover:text-cream/40">Privacy</a>
          {" · "}
          <a href="/terms" className="hover:text-cream/40">Terms</a>
          {" · "}
          <a href="/cookies" className="hover:text-cream/40">Cookies</a>
        </p>
      </footer>
    </main>
  );
}
