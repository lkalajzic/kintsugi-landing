export default function Maintenance() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-charcoal">
          Under Maintenance
        </h1>

        <p className="text-lg text-charcoal/80">
          We're currently making some updates to the site. We'll be back soon.
        </p>

        <div className="pt-8">
          <p className="text-sm text-charcoal/60">
            Questions? Email us at{" "}
            <a
              href="mailto:support@kintsugiclass.com"
              className="text-gold hover:underline"
            >
              support@kintsugiclass.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
