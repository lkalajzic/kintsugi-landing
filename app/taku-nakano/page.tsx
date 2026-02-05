"use client";

import { useState } from "react";
import Image from "next/image";
import StickyHeader from "../components/StickyHeader";
import CountdownTimer from "../components/CountdownTimer";
import { BookOpen, Video, Package, Crown, Shield } from "lucide-react";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<
    "pdf" | "course" | "kit" | "package"
  >("kit");

  const paymentLinks = {
    pdf: "#", // $29 - TODO: Add Stripe link
    course: "#", // $97 - TODO: Add Stripe link
    kit: "#", // $147 - TODO: Add Stripe link
    package: "#", // $247 - TODO: Add Stripe link
  };

  const handleCheckout = () => {
    const link = paymentLinks[selectedPackage];
    if (link === "#") {
      alert("Payment link not configured yet. Add Stripe payment links.");
      return;
    }
    window.location.href = link;
  };

  const scrollToPricing = () => {
    document
      .getElementById("pricing-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="overflow-hidden">
      <StickyHeader />

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
            First 100 founding students • January 2026
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
            Kintsugi: How A Japanese Master Repairs Broken Ceramics With
            Gold—And Why He's Teaching Online For The First Time
          </h1>

          {/* Hero Image */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/kintsugiheronew.webp"
                alt="Master Taku Nakano with a 200-year-old Georgian Kvevri vessel"
                width={1200}
                height={800}
                sizes="(max-width: 896px) 100vw, 896px"
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm text-charcoal/60 text-center mt-3 italic">
              Master Taku Nakano with a 200-year-old Georgian Kvevri
              (traditional wine jar), commissioned by the Georgian government
            </p>
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
              src="/broken3.webp"
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
              Not another thing to consume. Something to CREATE. The perfect
              hobby for the new year.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Taku Nakano */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Your Instructor
          </h2>

          {/* Mobile: Image first */}
          <div className="md:hidden mb-8">
            <Image
              src="/taku.webp"
              alt="Master Taku Nakano"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Desktop: Taku Portrait */}
            <div className="hidden md:block">
              <Image
                src="/taku.webp"
                alt="Master Taku Nakano"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Story Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="space-y-4">
                <p className="font-medium">My name is Taku Nakano (中野拓).</p>
                <p>
                  Born in 1967 on Awaji Island, I wasn't born into a family of
                  potters. I had no master. No lineage. I was a corporate
                  salaryman at an electronics company, working in sales, then
                  PR, then business strategy.
                </p>
                <p>
                  At 36, I was transferred to Shizuoka. And there, almost by
                  accident, I discovered pottery.
                </p>
                <p className="italic">
                  The clay taught me everything. Stars of mistakes showed me the
                  reasons for those mistakes. Every failure was a lesson.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  I left corporate life entirely. I taught myself. I made stars
                  of mistakes. I opened my first studio in 2004.
                </p>
                <p>
                  Today, I run Taku Nakano CeramicArts in Omotesando—Tokyo's
                  fashion district. Over 12,000 international visitors come
                  through my doors every year. I've been featured in Netflix
                  documentaries, Shiseido commercials, and the Nikkei newspaper
                  called me "the new wave of traditional crafts."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Continuation */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            Why I'm Teaching Online For The First Time
          </h2>

          <div className="space-y-4">
            <p>
              Every year, thousands of people from around the world come to my
              Tokyo studio. But for every person who makes it, there are
              hundreds who can't.
            </p>
            <p>
              They're in rural areas. They have families. They don't have the
              time or money to fly to Japan.
            </p>
            <p className="font-medium">
              But they still want to learn. They still want to create something
              meaningful with their hands.
            </p>
          </div>

          <h3 className="text-2xl font-light pt-6">
            You Don't Have To Learn In-person
          </h3>

          <div className="space-y-4">
            <p>
              A single workshop in Tokyo is a beautiful experience. Yet lacquer
              takes weeks to cure, and multiple layers, so it is not possible to
              repair your own pieces in a day with traditional urushi.
            </p>
            <p className="font-medium">
              With this online class, you can work on your own pieces. And we
              have the time to go through every single little detail I've
              learned over the decades and avoid many mistakes.
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
              <h3 className="text-2xl font-light">More Than Pottery</h3>
              <p className="font-medium">Here's what students don't expect:</p>
              <p>
                Kintsugi becomes a metaphor. Your breaks, your scars, your
                healing - they don't make you damaged. They make you more
                valuable. More beautiful. More yourself.
              </p>
              <p className="italic">
                You came to repair a bowl. You might leave understanding how to
                repair yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Modules */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
            What You'll Learn
          </h2>
          <p className="text-center text-charcoal/70 mb-16 max-w-2xl mx-auto">
            You'll learn both modern epoxy kintsugi (great for your first few
            pieces and non-food items) and traditional urushi kintsugi with
            lacquer. I will show both techniques.
          </p>

          <div className="space-y-8">
            {/* Module 1 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-gold">1</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Understanding Breaks & Materials
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    The foundation of every repair
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>
                      • The 5 types of breaks: hotsu (chips), ware (cracks),
                      nyuu (hairlines), yobi (missing pieces), kake (large
                      losses)
                    </li>
                    <li>• When to use epoxy vs. traditional urushi lacquer</li>
                    <li>
                      • Understanding urushi: suri (rubbing), nuri (coating),
                      togi (polishing)
                    </li>
                    <li>• Setting up your workspace safely</li>
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
                    Simple Repairs: Chips & Clean Breaks
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Start with the fundamentals
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>
                      • Repairing hotsu (small chips) - the easiest starting
                      point
                    </li>
                    <li>• Clean break repairs with perfect alignment</li>
                    <li>• Mixing ratios and consistency</li>
                    <li>• Brush techniques for smooth, luminous gold lines</li>
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
                    Complex Repairs: Shattered Pieces
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    When things really break
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>
                      • Strategy for ware (multiple cracks) and nyuu (hairline
                      fractures)
                    </li>
                    <li>
                      • Rebuilding with yobi (borrowed pieces) when fragments
                      are missing
                    </li>
                    <li>• Filling kake (large losses) with gold</li>
                    <li>• Common mistakes and how to fix them</li>
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
                    Beyond Ceramics & Finishing
                  </h3>
                  <p className="text-charcoal/70 mb-4">Expand your practice</p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>
                      • Applying kintsugi to glass, eyeglass frames, and
                      everyday objects
                    </li>
                    <li>• Food-safe sealing for items that touch your mouth</li>
                    <li>• Polishing for maximum shine and depth</li>
                    <li>• Long-term care and the 50-year test</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Taku's Work */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Examples of Taku's Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src="/goldwhitebowlnice.webp"
              alt="Kintsugi repaired white bowl with gold"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src="/goldteardropcup.webp"
              alt="Kintsugi repaired teardrop cup"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src="/glass.webp"
              alt="Kintsugi repaired glass"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src="/goldblueplate.webp"
              alt="Kintsugi repaired blue plate with gold"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src="/platebrown.webp"
              alt="Kintsugi repaired brown plate"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <Image
              src="/moredecorativekintsugimakiewhitebowl.webp"
              alt="Decorative kintsugi makie white bowl"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Reviews from In-Person Workshops */}
      <section className="py-12 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-2xl font-light mb-4">
              <span className="text-gold">★★★★★</span> What Workshop Visitors
              Say
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/googlereviewsscreenshot.webp"
                alt="Google Maps reviews - 4.8 stars from 126 reviews"
                width={300}
                height={100}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-charcoal/60 text-sm">
              Real reviews from Taku Nakano CeramicArts, Tokyo
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-cream rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "A very beautiful and uplifting experience with Taku Nakano at
                his studio! We enjoyed each and every moment learning the
                Kintsugi Pottery art!"
              </p>
              <p className="font-medium text-charcoal/80">
                — TripAdvisor Review
              </p>
            </div>

            <div className="bg-cream rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "Master Taku Nakano was so pleasant and a fantastic teacher. He
                was very patient and helped us make the most beautiful pieces!"
              </p>
              <p className="font-medium text-charcoal/80">
                — TripAdvisor Review
              </p>
            </div>

            <div className="bg-cream rounded-lg p-6">
              <p className="text-lg italic mb-3">
                "Such a fantastic class. I did it with my 5 year old who loved
                it, and the teacher was so hands on. Master Taku was there as
                well and was so kind to my child."
              </p>
              <p className="font-medium text-charcoal/80">
                — TripAdvisor Review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emperor Award Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/emperor_award.webp"
                alt="Taku Nakano receiving the Medal with Blue Ribbon from the Emperor of Japan"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light">
                Recognized By The Emperor of Japan
              </h2>
              <p className="text-lg text-charcoal/80">
                In 2024, I received the Medal with Blue Ribbon (紺綬褒章) from
                His Majesty the Emperor—an honor awarded for exceptional
                charitable contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-16 px-6 bg-charcoal text-cream">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-light">Your Purchase Helps Children</h2>
          <p className="text-lg text-cream/80">
            The gold powder used in kintsugi is often mined in conditions that
            exploit child labor. A portion of every purchase goes to
            organizations working to protect these children and give them a path
            to education.
          </p>
          <p className="text-cream/60 text-sm">
            We're finalizing our charity partnership—details coming soon.
          </p>
        </div>
      </section>

      {/* Urushi Section */}
      <section className="py-16 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-light">A 9,000-Year-Old Secret</h2>
              <p className="text-lg text-charcoal/80">
                Long before the pyramids were built, people in ancient Japan
                discovered something remarkable: sap from the urushi tree that
                hardened into an almost indestructible lacquer.
              </p>
              <p className="text-charcoal/80">
                Stone Age craftsmen used it to seal pottery and strengthen
                tools. By the Nara period, artisans were sprinkling gold powder
                into wet urushi—the birth of maki-e, Japan's legendary golden
                lacquerware. Samurai armor. Tea ceremony utensils. Temple
                altars. All sealed with this precious sap.
              </p>
              <p className="text-charcoal/80">
                Each urushi tree yields only 200ml per year. Your kit includes
                this same traditional lacquer—food-safe once cured, so you can
                drink tea from a cup you repaired yourself.
              </p>
              <p className="text-charcoal/80 italic">
                We also include modern epoxy—perfect for your first repairs and
                decorative pieces while you build confidence with the
                traditional technique.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/urushi.webp"
                alt="Traditional Japanese urushi lacquer"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kit Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/kitphoto.webp"
                alt="Kintsugi starter kit contents"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light">What's In Your Kit</h2>
              <p className="text-lg text-charcoal/80">
                We source authentic materials from Japan and assemble kits at a
                US fulfillment center—saving you the hassle of hunting down
                obscure supplies and $50-70 in import fees.
              </p>
              <ul className="space-y-2 text-charcoal/80">
                <li>✓ Kintsugi epoxy adhesive (50ml)</li>
                <li>✓ Traditional urushi lacquer (1 tube)</li>
                <li>✓ Brass/mica powder in multiple colors</li>
                <li>✓ Mixing cup, stirring rod, application scraper</li>
                <li>✓ Safety gloves</li>
                <li>✓ Enough for ~10 repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-section" className="py-32 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <p className="text-sm text-gold font-medium uppercase tracking-wide">
              Presale - First 100 Founding Students
            </p>
            <h2 className="text-4xl md:text-5xl font-light">
              Choose Your Package
            </h2>
          </div>

          {/* Presale Explainer */}
          <div className="max-w-2xl mx-auto mb-12 bg-cream border-2 border-gold/30 rounded-xl p-6">
            <p className="text-lg text-charcoal mb-4">
              This is a presale to fund production. Your pre-order helps us
              record the class and source kits in bulk—saving you $50-70 in
              import fees and shipping that you'd pay ordering materials
              yourself.
            </p>
            <p className="text-charcoal/80">
              Class records January 2025. Kits ship 4-6 weeks after launch. If
              we somehow don't hit 100 students, you will get a full refund, and
              we will even cover the fees for the refund.
            </p>
          </div>

          {/* Pricing Options */}
          <div className="space-y-4 mb-8">
            {/* Tier 1: PDF */}
            <div
              onClick={() => setSelectedPackage("pdf")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "pdf"
                  ? "border-gold bg-gold/10"
                  : "border-charcoal/20 bg-white hover:border-charcoal/40"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-xl font-medium text-charcoal">
                      Digital Guide
                    </p>
                    <BookOpen className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-3xl font-light text-charcoal">$29</p>
                </div>
              </div>
              <div className="mt-4 text-charcoal/80 space-y-2">
                <p>✓ Complete PDF guide with all techniques</p>
                <p>✓ Technique reference sheets</p>
              </div>
            </div>

            {/* Tier 2: Video Class */}
            <div
              onClick={() => setSelectedPackage("course")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "course"
                  ? "border-gold bg-gold/10"
                  : "border-charcoal/20 bg-white hover:border-charcoal/40"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-xl font-medium text-charcoal">
                      Full Video Class
                    </p>
                    <BookOpen className="w-5 h-5 text-gold" />
                    <Video className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-3xl font-light text-charcoal">$97</p>
                </div>
              </div>
              <div className="mt-4 text-charcoal/80 space-y-2">
                <p>✓ Everything in Digital Guide</p>
                <p>✓ 3+ hours HD video lessons with Taku</p>
                <p>✓ Step-by-step demonstrations</p>
                <p>✓ Lifetime access</p>
              </div>
            </div>

            {/* Tier 3: Kit - RECOMMENDED */}
            <div
              onClick={() => setSelectedPackage("kit")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "kit"
                  ? "border-gold bg-gold/20"
                  : "border-gold/30 bg-gold/5 hover:border-gold/50"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-xl font-medium text-charcoal">
                      Class + Kintsugi Kit
                    </p>
                    <BookOpen className="w-5 h-5 text-gold" />
                    <Video className="w-5 h-5 text-gold" />
                    <Package className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-3xl font-light text-gold">$147</p>
                </div>
                <span className="bg-gold text-cream px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>
              <div className="text-charcoal/80 space-y-2">
                <p>✓ Everything in Full Video Class</p>
                <p>✓ Complete kintsugi starter kit shipped to you</p>
                <p>✓ Epoxy adhesive + brass/mica powder</p>
                <p>✓ All tools included</p>
                <p>✓ Ships to US (other countries ask us)</p>
              </div>
            </div>

            {/* Tier 4: Master Package */}
            <div
              onClick={() => setSelectedPackage("package")}
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === "package"
                  ? "border-gold bg-gold/10"
                  : "border-charcoal/20 bg-white hover:border-charcoal/40"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-xl font-medium text-charcoal">
                      Master Package
                    </p>
                    <BookOpen className="w-5 h-5 text-gold" />
                    <Video className="w-5 h-5 text-gold" />
                    <Package className="w-5 h-5 text-gold" />
                    <Crown className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-3xl font-light text-charcoal">$247</p>
                </div>
                <span className="bg-charcoal/10 text-charcoal px-3 py-1 rounded-full text-sm font-medium">
                  Best Value
                </span>
              </div>
              <div className="text-charcoal/80 space-y-2">
                <p>✓ Everything in Class + Kit</p>
                <p>✓ 0.2g real gold powder + 0.5g silver powder</p>
              </div>
            </div>
          </div>

          <CountdownTimer />

          {/* CTA Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleCheckout}
              className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg w-full max-w-md"
            >
              Pre-Order Now
            </button>
          </div>

          {/* Guarantee */}
          <div className="max-w-2xl mx-auto bg-cream rounded-xl p-6 border-2 border-gold/20 mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-gold" />
              <p className="text-lg font-medium text-charcoal">
                30-Day Money-Back Guarantee
              </p>
            </div>
            <p className="text-sm text-charcoal/70 text-center">
              Changed your mind? Get a full refund anytime before launch. After
              delivery, you have 30 days to try everything. Not satisfied? Full
              refund—you don't even need to return the kit.
            </p>
          </div>

          {/* Presale Info */}
          <div className="text-center space-y-2">
            <p className="text-sm text-charcoal/60">
              Presale closes in 7 days • First 100 students only
            </p>
            <p className="text-sm text-charcoal/60">
              💳 Secure Payment via Stripe
            </p>
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
            <details className="bg-warmGray/30 rounded-lg p-6 border-2 border-gold/20">
              <summary className="font-medium cursor-pointer text-lg">
                When will the class be ready?
              </summary>
              <p className="mt-4 text-charcoal/80">
                The class will be recorded in January 2025 and delivered to your
                email as soon as it's ready. You'll be the first to access it as
                a founding student.
              </p>
            </details>

            <details className="bg-warmGray/30 rounded-lg p-6 border-2 border-gold/20">
              <summary className="font-medium cursor-pointer text-lg">
                When will my kit ship?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Kits ship 4-6 weeks after launch. We're bulk importing to a US
                fulfillment center—this saves you $50-70 in import fees and
                shipping compared to ordering materials yourself from Japan.
              </p>
            </details>

            <details className="bg-warmGray/30 rounded-lg p-6 border-2 border-gold/20">
              <summary className="font-medium cursor-pointer text-lg">
                Can I get a refund if I change my mind?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes! Full refund anytime before launch, no questions asked.
                After delivery, you have 30 days to try everything. Still not
                happy? Full refund—you don't even need to return the kit.
              </p>
            </details>

            <details className="bg-warmGray/30 rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                What exactly comes in the kintsugi kit?
              </summary>
              <div className="mt-4 text-charcoal/80">
                <ul className="space-y-1 list-disc pl-6">
                  <li>Kintsugi epoxy adhesive (50ml)</li>
                  <li>Traditional urushi lacquer (1 tube)</li>
                  <li>Brass/mica powder in multiple colors</li>
                  <li>Mixing cup, stirring rod, application scraper</li>
                  <li>Safety gloves</li>
                </ul>
                <p className="mt-3">
                  Enough for about 10 repairs. The Master Package includes 0.2g
                  real gold powder and 0.5g silver powder.
                </p>
              </div>
            </details>

            <details className="bg-warmGray/30 rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                What's the difference between epoxy and urushi?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Your kit includes both! Epoxy is modern, beginner-friendly, and
                great for practice or non-food items (like mug handles). Urushi
                is traditional Japanese lacquer—food-safe once cured, so you can
                use repaired items for eating and drinking. Some people are
                allergic to uncured urushi, so we recommend starting with epoxy.
              </p>
            </details>

            <details className="bg-warmGray/30 rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                I'm not artistic - can I still do this?
              </summary>
              <p className="mt-4 text-charcoal/80">
                Yes. Most of my 12,000 annual visitors say the same thing. This
                isn't about natural talent—it's about following a technique
                refined over centuries. If you can hold a brush and follow
                instructions, you can do this.
              </p>
            </details>

            <details className="bg-warmGray/30 rounded-lg p-6">
              <summary className="font-medium cursor-pointer text-lg">
                How long does a repair take?
              </summary>
              <p className="mt-4 text-charcoal/80">
                A simple crack: 30-45 minutes of active work (plus overnight
                drying). Complex pieces: 2-3 hours spread over a few days. The
                meditative pace is part of the practice.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-warmGray/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-2xl font-serif italic">
            "The bowl is more beautiful for having been broken."
          </p>

          <div className="pt-8 space-y-6">
            <h2 className="text-4xl font-light">
              12,000 visitors come to my Tokyo studio every year.
              <br />
              Now I want to teach you.
            </h2>

            <button
              onClick={scrollToPricing}
              className="bg-gold hover:bg-darkGold text-charcoal px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg"
            >
              Pre-Order Now - Starting at $29
            </button>

            <p className="text-sm text-charcoal/60">
              30-Day Money-Back Guarantee • 💳 Secure Checkout • First 100
              Students
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
