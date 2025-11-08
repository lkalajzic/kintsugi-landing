import StripeButton from './components/StripeButton'
import StripeButtonAlt from './components/StripeButtonAlt'

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[40rem] font-serif text-charcoal leading-none">金</span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Founding Students Badge */}
          <p className="text-sm text-charcoal/60 tracking-wide">
            First 50 students online • November 2025
          </p>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            Broken can be more beautiful.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-light">
            How A 30-Year Kyoto Master Repairs Broken Ceramics With Gold—And Why She's Teaching This Ancient Technique Online For The First Time.
          </p>

          {/* Hero Image Placeholder */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-warmGray aspect-[4/3] flex items-center justify-center">
              <p className="text-charcoal/40 font-serif text-2xl">[Hero Kintsugi Image]</p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-light mb-8">When Something Breaks</h2>

            <p className="text-lg leading-relaxed">
              Your grandmother's teapot slips from your hands.
            </p>
            <p className="text-lg leading-relaxed">It shatters.</p>
            <p className="text-lg leading-relaxed">
              In the West, you'd throw it away. Broken = worthless. Another thing lost. Another memory gone.
            </p>

            <h3 className="text-2xl font-light pt-6">What If That's Wrong?</h3>

            <p className="text-lg leading-relaxed font-medium">
              What if that break wasn't the end - but the beginning of something more beautiful than the original ever was?
            </p>
          </div>
          <div className="bg-warmGray aspect-square rounded-lg flex items-center justify-center">
            <p className="text-charcoal/40 font-serif text-xl">[Broken teapot concept]</p>
          </div>
        </div>
      </section>

      {/* Problem Dig-in */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">We've Lost Something</h2>

          <div className="space-y-4">
            <p>We're taught that broken things lose their value.</p>
            <p>A cracked mug? Trash.<br/>A chipped bowl? Donate pile.<br/>Your favorite ceramic piece that fell? Gone.</p>
            <p>And it's not just about the object.</p>
            <p>It's the memory. Your grandmother's hands wrapping around that teacup every morning. The bowl you made in that pottery class. The vase from your first apartment.</p>
            <p>When they break, we lose the story.</p>
          </div>

          <h3 className="text-2xl md:text-3xl font-light pt-8 text-center">But Here's What Really Keeps You Up At Night</h3>

          <div className="space-y-4">
            <p>You scroll. You consume. You watch. You buy things made by machines in factories.</p>
            <p className="font-medium">When was the last time you CREATED something?</p>
            <p className="font-medium">When was the last time you made art with your hands that made someone say "Wait... YOU made this?"</p>
            <p className="font-medium">When was the last time you felt completely present - not thinking about work, not checking your phone, just... creating?</p>
          </div>

          <div className="pt-6 space-y-4">
            <p>You want a hobby that's actually meaningful. Something meditative. Something therapeutic.</p>
            <p className="font-medium text-xl">Not another thing to consume. Something to CREATE.</p>
          </div>
        </div>
      </section>

      {/* Story Section - Yuki */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">A 30-Year Practice In Kyoto</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Yuki Portrait */}
            <div className="bg-warmGray aspect-[3/4] rounded-lg flex items-center justify-center order-2 md:order-1">
              <p className="text-charcoal/40 font-serif text-xl">[Master Yuki Tanaka Portrait]</p>
            </div>

            {/* Story Text */}
            <div className="space-y-6 text-lg leading-relaxed order-1 md:order-2">
              <div className="space-y-4">
                <p className="font-medium">My name is Emiko Tanaka (田中恵美子).</p>
                <p>My mother is Master Yuki Tanaka (田中由紀), a third-generation kintsugi artist in Kyoto.</p>
                <p>For 30 years, she's practiced kintsugi in our family's small ceramic repair studio tucked away in Kyoto's Higashiyama district.</p>
                <p>She learned from her grandmother, who learned from HER grandmother. Three generations of women repairing broken things with gold.</p>
              </div>

              <h3 className="text-2xl font-light pt-6">Growing Up In The Studio</h3>

              <div className="space-y-4">
                <p>A woman would bring in her mother's rice bowl, cracked down the middle. "Can you save it?"</p>
                <p className="italic">My mother would hold it gently. "It's not about saving it. It's about showing what it survived."</p>
                <p>Weeks later, the woman would return. The crack was still there - but now it glowed with gold.</p>
                <p>She cried. Every time they cried.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Continuation */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">Why We're Teaching Online For The First Time</h2>

          <div className="space-y-4">
            <p>One man brought his late wife's teacup. "She used this every morning. I dropped it."</p>
            <p>My mother repaired it with gold so delicate it looked like morning light caught in the crack.</p>
            <p>He came back six months later with his daughter. "Can you teach her? My granddaughter wants to learn."</p>
          </div>

          <h3 className="text-2xl font-light pt-6">Before COVID</h3>

          <div className="space-y-4">
            <p>My mother only taught tourists who found our studio by accident. A few students at a time, sitting at the long wooden table, learning in broken Japanese and hand gestures.</p>
            <p>Then COVID closed international travel.</p>
            <p>For the first time in 30 years, the studio was quiet.</p>
          </div>

          <h3 className="text-2xl font-light pt-6">The Question That Changed Everything</h3>

          <div className="space-y-4">
            <p className="font-medium">"Okaasan, you've taught hundreds of people in person. Why not teach online? Why not share this with people who'll never make it to Kyoto?"</p>
            <p>She was hesitant. "Can you really teach wabi-sabi through a screen?"</p>
            <p>But we tried.</p>
          </div>
        </div>
      </section>

      {/* Wabi-Sabi Mechanism Section */}
      <section className="relative py-32 px-6">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-[30rem] font-serif text-charcoal leading-none">侘寂</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12">
            The Philosophy Behind The Gold
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Wabi-Sabi (侘寂)</h3>
              <p>Most hobbies punish mistakes. Mess up a painting? Start over. Ruin the recipe? Throw it out.</p>
              <p className="font-medium">Kintsugi is the opposite.</p>
              <p>Wabi-sabi is the Japanese philosophy of finding beauty in imperfection and impermanence. Embracing asymmetry, roughness, and the marks of weathering as elements that deepen character rather than diminish it.</p>
              <p className="italic">The cracks become rivers of light. The chips become character. The break becomes the story.</p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Mottainai (もったいない)</h3>
              <p>In a world of fast fashion and planned obsolescence, the Japanese concept of <em>mottainai</em> - regret for waste - offers a different path.</p>
              <p>Kintsugi treats broken objects as worthy of care and investment rather than replacement. Your grandmother's teacup doesn't end up in a landfill. It becomes an heirloom.</p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Mono no Aware (物の哀れ)</h3>
              <p>The pathos of things. The poignant beauty that comes from impermanence.</p>
              <p>A pristine bowl is beautiful. But a bowl that's been loved, broken, and repaired with gold? That bowl has lived. That bowl has a story. That bowl understands what it means to survive.</p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">More Than Pottery</h3>
              <p className="font-medium">Here's what students don't expect:</p>
              <p>Kintsugi becomes a metaphor. Your breaks, your scars, your healing - they don't make you damaged. They make you more valuable. More beautiful. More yourself.</p>
              <p>Contemporary psychology calls this post-traumatic growth. The Japanese have known it for 500 years: what breaks you can make you whole in ways you never were before.</p>
              <p className="italic">You came to repair a bowl. You might leave understanding how to repair yourself.</p>
            </div>

            <p className="font-medium pt-8 text-xl text-center">My mother always teaches: "The bowl is more beautiful for having been broken."</p>
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
                  <h3 className="text-2xl font-serif mb-2">Foundations of Kintsugi</h3>
                  <p className="text-charcoal/70 mb-4">Everything you need to start your first repair</p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Complete materials list with exact product links ($30-50 total, not $200+)</li>
                    <li>• Food-safe epoxy alternatives instead of traditional urushi lacquer</li>
                    <li>• The 3 types of breaks and which technique to use for each</li>
                    <li>• Setting up your meditative workspace</li>
                    <li>• The wabi-sabi mindset: seeing cracks as potential</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">2</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">Your First Simple Repair</h3>
                  <p className="text-charcoal/70 mb-4">Master the fundamental technique on a clean break</p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• The 3-step process for clean breaks</li>
                    <li>• How to align pieces perfectly</li>
                    <li>• Mixing ratios that actually work</li>
                    <li>• Brush techniques for smooth, luminous gold lines</li>
                    <li>• Timing and patience: when to wait, when to work</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">3</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">Complex Breaks & Shattered Pieces</h3>
                  <p className="text-charcoal/70 mb-4">Repair pieces with multiple cracks and missing chips</p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Strategy for pieces with 5+ breaks</li>
                    <li>• Creating structural integrity when pieces are missing</li>
                    <li>• The "invisible gold" gap-filling technique</li>
                    <li>• Turning a spiderweb of cracks into unified design</li>
                    <li>• Advanced brush control for detail work</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">4</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">Artistic Choices & Personal Style</h3>
                  <p className="text-charcoal/70 mb-4">Develop your unique kintsugi aesthetic</p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Gold intensity: subtle glow vs. bold statement</li>
                    <li>• How to choose which pieces to repair</li>
                    <li>• Creating sets that work together</li>
                    <li>• The philosophy behind your choices</li>
                    <li>• Developing your signature style over time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">5</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">Finishing, Sealing & Longevity</h3>
                  <p className="text-charcoal/70 mb-4">Make your repairs last decades</p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Food-safe sealing techniques</li>
                    <li>• Making repairs dishwasher-safe</li>
                    <li>• Polishing for maximum shine and depth</li>
                    <li>• Long-term care instructions</li>
                    <li>• The 50-year test: heirloom-quality repairs</li>
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
            Plus Three Bonuses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Christmas Gift Creation Guide</h3>
              <p className="text-charcoal/70 mb-4">Turn your new skill into unforgettable presents</p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• 10 best thrift store finds under $5</li>
                <li>• Gift presentation ideas</li>
                <li>• Repair timeline for December gifting</li>
              </ul>
              <p className="text-gold font-medium">Value: $27</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Sharing Your Work</h3>
              <p className="text-charcoal/70 mb-4">Build confidence and share your craft</p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Photography tips for showing the gold</li>
                <li>• How to talk about your work</li>
                <li>• Teaching kintsugi to friends</li>
              </ul>
              <p className="text-gold font-medium">Value: $47</p>
            </div>

            <div className="bg-warmGray/50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Meditation & Mindfulness</h3>
              <p className="text-charcoal/70 mb-4">Deepen the therapeutic practice</p>
              <ul className="space-y-2 text-sm text-charcoal/80 mb-4">
                <li>• Breathwork while repairing</li>
                <li>• Entering flow state</li>
                <li>• Journaling prompts on beauty & brokenness</li>
              </ul>
              <p className="text-gold font-medium">Value: $37</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Founding Student Pricing
          </h2>

          <div className="space-y-4 text-lg">
            <p className="text-charcoal/70">Complete Class Value:</p>
            <div className="space-y-1 text-charcoal/70">
              <p>5 Core Modules ($297)</p>
              <p>3 Bonus Trainings ($111)</p>
              <p>Lifetime Access (Priceless)</p>
            </div>
            <p className="text-2xl font-medium pt-4">Total Value: $408</p>
          </div>

          <div className="py-8">
            <p className="text-xl line-through text-charcoal/50 mb-2">Regular Price: $97</p>
            <p className="text-6xl font-serif text-gold mb-4">$47</p>
            <p className="text-sm text-charcoal/60">Founding student pricing • First 50 students</p>
          </div>

          <StripeButton price={47} />

          <div className="pt-8 space-y-2 text-sm text-charcoal/60">
            <p>🛡️ 30-Day Money-Back Guarantee</p>
            <p>💳 Secure Payment via Stripe</p>
          </div>

          <p className="text-sm text-charcoal/70 max-w-xl mx-auto pt-8">
            You're among the first 50 students my mother is teaching online. After this founding group, the class returns to $97 and we'll be adding live Q&A sessions (which we can't offer yet at this price).
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-warmGray/50 rounded-lg p-8">
            <p className="text-lg italic mb-4">"I've never been crafty, but this made me feel like an artist. I repaired my mom's broken bowl from her wedding set - she cried when I gave it to her. Best gift I've ever given."</p>
            <p className="font-medium">— Sarah M., Chicago</p>
          </div>

          <div className="bg-warmGray/50 rounded-lg p-8">
            <p className="text-lg italic mb-4">"I was so stressed at work I could barely sleep. Kintsugi became my evening meditation. Now I have 6 repaired pieces on my shelf and friends asking me to teach them. This changed how I spend my evenings."</p>
            <p className="font-medium">— David K., Portland</p>
          </div>

          <div className="bg-warmGray/50 rounded-lg p-8">
            <p className="text-lg italic mb-4">"Someone offered me $180 for a piece I repaired from a $3 thrift store find. But honestly? I kept it. The money isn't why I do this. It's the only hobby I've stuck with because it actually feels meaningful."</p>
            <p className="font-medium">— Jennifer L., Austin</p>
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
              <summary className="font-medium cursor-pointer text-lg">I'm not artistic or good with my hands - can I still do this?</summary>
              <p className="mt-4 text-charcoal/80">Yes. Most students who come to our Kyoto studio say the same thing. This isn't about natural talent. It's about following a technique that's been refined over generations. If you can hold a brush and follow instructions, you can do this. My mother always says: "Kintsugi requires patience, not perfection."</p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">How much do the materials cost?</summary>
              <p className="mt-4 text-charcoal/80">Expect to spend $30-50 for your complete starter kit. This includes everything: epoxy resin, gold powder, brushes, mixing tools, sealant. These materials will last for 10+ repairs. We provide exact shopping links so you don't waste money on the wrong supplies.</p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">Are we using traditional urushi lacquer?</summary>
              <p className="mt-4 text-charcoal/80">No. Traditional urushi lacquer costs $200+, can cause severe allergic reactions, and requires extensive safety equipment. We use modern, food-safe epoxy alternatives that cost $30-50 and work beautifully. You get the same golden result without the expense or health risks. The technique and wabi-sabi philosophy remain authentic.</p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">Is this culturally appropriate for me to learn?</summary>
              <p className="mt-4 text-charcoal/80">Yes. My mother believes strongly that kintsugi should be shared, not gatekept. This is a craft meant to repair and create beauty - it doesn't belong only to Japan. She's been teaching international students for 30 years. The only requirement is that you approach it with respect for the philosophy behind it. If you're worried about this, that respect is already there.</p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">Will the repair actually be strong enough to use the piece again?</summary>
              <p className="mt-4 text-charcoal/80">Yes, absolutely. The epoxy adhesives we use are incredibly strong - stronger than the original ceramic in many cases. Your repaired pieces will be fully functional and dishwasher-safe (after proper sealing, which we teach in Module 5). My mother has repaired teacups that have been used daily for 20+ years.</p>
            </details>

            <details className="bg-cream rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">How long does a repair take?</summary>
              <p className="mt-4 text-charcoal/80">A simple crack: 30-45 minutes of active work (plus drying time overnight). Complex pieces with multiple breaks: 2-3 hours of work spread over a few days. But this isn't rushed. It's meditative. You work in the evening, let it dry overnight, continue the next day. The pace is part of the practice.</p>
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
          <p className="text-lg text-charcoal/70">— Master Yuki Tanaka (田中由紀)</p>

          <div className="pt-8 space-y-6">
            <h2 className="text-4xl font-light">
              My mother has been teaching this in Kyoto for 30 years.<br/>
              Now she wants to teach you.
            </h2>

            <StripeButtonAlt />

            <p className="text-sm text-charcoal/60">
              🛡️ 30-Day Money-Back Guarantee • 💳 Secure Checkout • Instant Access
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/60 text-center text-sm">
        <p>© 2024 Kintsugi Masterclass. All rights reserved.</p>
      </footer>
    </main>
  )
}
