export const metadata = {
  title: 'Kintsugi Materials & Tools - Kintsugi Class',
  description: 'Everything you need to start your kintsugi journey. Materials list and recommended tools for Japanese gold repair.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-4xl text-gold/20 font-serif mb-4">
            金継ぎ
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Kintsugi Materials & Tools
          </h1>
          <p className="text-charcoal/70">
            Everything you need to start your kintsugi journey
          </p>
        </div>

        {/* Disclosure */}
        <p className="text-sm text-charcoal/60 mb-8 text-center">
          As an Amazon Associate, I earn from qualifying purchases. #commissionsearned
        </p>

        {/* Individual Materials */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-charcoal mb-6 border-b border-gold/30 pb-2">
            Individual Materials
          </h2>
          <p className="text-charcoal/70 mb-6">
            If you prefer to source your own materials (often better quality than kits):
          </p>

          <p className="text-sm text-charcoal/60 italic mb-6">
            Note: The epoxy options below are food-safe and the mica powders are cosmetic grade. However, always do your own research for your specific use case.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-charcoal mb-2">Adhesive (Food-Safe Epoxy)</h3>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2">
                <li>
                  <a href="https://amzn.to/3MV9L3T" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">Cocomfix Ceramic Glue</a> - Food grade, waterproof, heat resistant
                </li>
                <li>
                  <a href="https://amzn.to/495g2ma" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">ATLASBOND Ceramic Glue</a> - Food safe, quick-setting
                </li>
                <li>
                  <a href="https://amzn.to/4pkLYYi" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">Puduo Epoxy Resin Kit</a> - Crystal clear, includes cups, sticks & gloves
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-charcoal mb-2">Metal Powder (for the gold/silver lines)</h3>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2">
                <li>
                  <a href="https://amzn.to/4quOa0s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">MEYSPRING Royal Gold Mica</a> - Most popular for kintsugi, cosmetic grade
                </li>
                <li>
                  <a href="https://amzn.to/4qAo6kr" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">Gold Mica Powder Set</a> - Great value option
                </li>
                <li>
                  <a href="https://amzn.to/4qyHmin" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">Alternative Gold Powder</a> - High quality option
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-charcoal mb-2">Tools</h3>
              <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                <li><strong>Small mixing container</strong> - Disposable cups or silicone cups work well</li>
                <li><strong>Mixing sticks</strong> - Toothpicks, popsicle sticks, or small spatulas</li>
                <li><strong>Fine brush</strong> - For applying the mixture to cracks</li>
                <li><strong>Sandpaper</strong> (fine grit, 400-600) - For smoothing dried epoxy</li>
                <li><strong>Masking tape</strong> - To hold pieces in place while drying</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-charcoal mb-2">Optional</h3>
              <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                <li><strong>Acetone or rubbing alcohol</strong> - For cleaning up mistakes before the epoxy sets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kits */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-charcoal mb-6 border-b border-gold/30 pb-2">
            Kits (Convenient Option)
          </h2>
          <p className="text-charcoal/70 mb-6">
            If you prefer an all-in-one solution:
          </p>

          <div className="space-y-4">
            <a
              href="https://amzn.to/4stdFBk"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gold/30 rounded-lg hover:border-gold/50 hover:bg-gold/5 transition-colors"
            >
              <span className="text-charcoal font-medium">Browse Kintsugi Kits on Amazon →</span>
            </a>

            <p className="text-charcoal/70 text-sm">
              These are similar to the kit I use (not the exact one, but comparable quality):
            </p>

            <ul className="space-y-2">
              <li>
                <a
                  href="https://amzn.to/4pkL9ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Kintsugi Kit Option 1
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/3YSwsIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Kintsugi Kit Option 2
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/4qzLQoU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Kintsugi Kit Option 3
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Gold decorative line */}
        <div className="pt-8">
          <div className="h-px bg-gold/30 max-w-md mx-auto"></div>
        </div>

        <p className="text-center text-charcoal/60 italic font-light mt-8">
          "Every broken thing is an opportunity for beauty."
        </p>

        {/* Back link */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-gold hover:text-gold/80 text-sm"
          >
            ← Back to Kintsugi Class
          </a>
        </div>
      </div>
    </div>
  )
}
