import StripeButtonInstant from "../components/StripeButtonInstant";
import CountdownTimerDaily from "../learn/CountdownTimerDaily";
import StickyHeaderModern from "../learn/StickyHeaderModern";
import Image from "next/image";

export default function PotteryPage() {
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
            For Potters • First 50 students online • January 2026
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
            Kintsugi: The Next Step In Your Pottery Journey You Were Never Taught
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

      {/* Pain Section - The Potter's Box */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              You Have A Box Somewhere
            </h2>

            <p className="text-lg leading-relaxed">
              Maybe it's under your wedging table. Maybe it's in the corner of
              your studio.
            </p>
            <p className="text-lg leading-relaxed">
              Full of pieces that didn't survive the kiln.
            </p>
            <p className="text-lg leading-relaxed">
              S-cracks. Blowouts. Slumping. Dunting from cooling too fast.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Too broken to sell. Too meaningful to trash.
            </p>

            <h3 className="text-2xl font-light pt-6">
              What If You Didn't Have To Let Them Go?
            </h3>
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

      {/* Problem Dig-in - The Kiln */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            The Kiln Gives And The Kiln Takes
          </h2>

          <div className="space-y-4">
            <p>You throw. You trim. You glaze. You fire.</p>
            <p>You know that feeling.</p>
            <p>
              You open the kiln and there it is. An S-crack running through the
              bottom of a piece you spent hours on.
            </p>
            <p>You tell yourself "it's just mud." You move on.</p>
            <p className="font-medium">
              But that cracked piece sits on your shelf. Or in a box.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-light pt-8 text-center">
            There's Another Step You Were Never Taught
          </h3>

          <div className="space-y-4">
            <p>
              Pottery classes teach you to throw, trim, glaze, fire. Maybe
              bisque and glaze fire. Maybe reduction vs oxidation.
            </p>
            <p className="font-medium">But what happens when a piece cracks?</p>
            <p>
              Most potters have never learned what to do next. The piece goes in
              the box. The memory stays.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <p className="font-medium text-xl">
              Kintsugi (金継ぎ) is the 500-year-old Japanese art of repairing
              broken ceramics with gold.
            </p>
            <p>
              Transform your kiln casualties into something more beautiful than
              before they broke.
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
              A potter brought in a bowl that had slumped in the kiln. The form
              was still beautiful - but there was a crack where the glaze had
              crawled away from the stress point.
            </p>
            <p className="italic">
              "I spent six hours on this piece. Can anything be done?"
            </p>
            <p>
              When she came back and saw that crack transformed into a river of
              gold, she didn't see a failure anymore. She saw a piece with a
              story.
            </p>
            <p>
              That's when I knew potters needed to learn this. Not just as a
              repair technique - but as the next chapter in their craft.
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

      {/* Why Potters Need This */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            Why Every Potter Should Know Kintsugi
          </h2>

          <div className="space-y-4">
            <p>
              You already understand clay. You know how it moves, how it
              breathes, how it responds to heat. That knowledge makes kintsugi
              easier for you than for most.
            </p>
            <p>
              But more than that - you have a box of pieces waiting for this.
            </p>
            <p>
              Those seconds that couldn't go to market. That piece from your
              first semester that cracked in the kiln. The bowl your teacher
              loved before it dunted.
            </p>
            <p className="font-medium">
              Kintsugi doesn't hide the break. It highlights it. The crack
              becomes a feature. The failure becomes the story.
            </p>
            <p>
              I put everything I've learned into a 2-hour video course. The
              exact techniques, the philosophy, the materials that cost under
              $30, not $200 or more. Everything you need to empty that box.
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
                You already know this philosophy - it's why you love the warped
                rim, the ash glaze that ran unexpectedly, the crawl that became
                a feature.
              </p>
              <p className="font-medium">
                Kintsugi takes it one step further.
              </p>
              <p>
                Wabi-sabi is the Japanese philosophy of finding beauty in
                imperfection and impermanence. In kintsugi, we don't just accept
                the break - we celebrate it.
              </p>
              <p className="italic">
                The cracks become rivers of light. The chips become character.
                The break becomes the story.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Mottainai (もったいない)</h3>
              <p>
                Every potter knows mottainai instinctively. You reclaim your
                clay. You fire seconds. You hate waste.
              </p>
              <p>
                Kintsugi is the natural extension. That piece in your box
                doesn't have to stay there. It can become something worth more
                than your best work.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Mono no Aware (物の哀れ)</h3>
              <p>
                The pathos of things. The poignant beauty that comes from
                impermanence.
              </p>
              <p>
                A pristine bowl is beautiful. But a bowl that's been thrown,
                fired, cracked, and repaired with gold? That bowl has lived.
                That bowl has a story. That bowl understands what it means to
                survive.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Your Work, Completed</h3>
              <p className="font-medium">Here's what potters don't expect:</p>
              <p>
                Many find that kintsugi-repaired pieces become their favorites.
                Not despite the repair - because of it. The gold adds something
                the original never had.
              </p>
              <p>
                That S-crack that ruined your bowl? It could become its most
                interesting feature.
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
                    <li>• Setting up your workspace (fits in any studio)</li>
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
                    Perfect for crazing, crawling scars, and small chips
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
                    For S-cracks, dunting, and pieces that split apart
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
                    For blowouts and pieces with lost fragments
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
                Printable cheat sheet for your studio
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
                Add kintsugi to your portfolio
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Photography tips for showing the gold</li>
                <li>• Pricing kintsugi repairs as a service</li>
                <li>• How to talk about your work at shows</li>
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
                Turn seconds into meaningful gifts
              </p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Using your own seconds for gifts</li>
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

          <StripeButtonInstant price={47} />

          <div className="pt-8 max-w-lg mx-auto bg-cream rounded-xl p-6 border-2 border-gold/20">
            <p className="text-lg font-medium text-charcoal mb-2">
              90-Day Money-Back Guarantee
            </p>
            <p className="text-sm text-charcoal/70">
              Try the entire class. Repair something from your box. If you don't
              love it, email us within 90 days for a full refund. No questions
              asked.
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
                I already work with clay - will this be too basic for me?
              </summary>
              <p className="mt-4 text-charcoal/80">
                No. Your clay experience is an advantage - you already
                understand ceramics, glaze chemistry, and how materials behave.
                This course teaches the kintsugi techniques and philosophy that
                weren't part of your pottery education. Most potters find the
                learning curve faster because of their existing knowledge.
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
                Can I repair pieces with crawling, crazing, or other glaze
                defects?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes. Module 2 covers hairline repairs (nyuu) which works
                perfectly for crazing and crawling scars. You can trace the
                lines with gold, turning glaze defects into intentional design
                features. Many potters find this transforms pieces they
                considered "seconds" into their best work.
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
                work spread over a few days. You can easily fit this around
                studio time - work on a repair while waiting for pieces to dry
                to leather-hard, for example.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                Could I offer kintsugi repairs as a service?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Absolutely. Many potters add kintsugi as a service - repairing
                customers' broken pieces or their own studio's seconds. The
                "Sharing Your Work" bonus includes guidance on pricing repairs.
                It's a natural extension of your pottery practice and can become
                an additional revenue stream.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                What's your refund policy?
              </summary>
              <p className="mt-4 text-charcoal/80">
                We offer a simple 90-day money-back guarantee. Try the entire
                class. Repair something from your box. If you don't absolutely
                love it, just email us within 90 days and we'll refund you in
                full. No questions asked. No hoops to jump through.
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
              Empty that box.
              <br />
              Transform your kiln casualties into gold.
            </h2>

            <StripeButtonInstant price={47} />

            <p className="text-sm text-charcoal/60">
              90-Day Money-Back Guarantee • Secure Checkout • Instant Access
            </p>
          </div>
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
