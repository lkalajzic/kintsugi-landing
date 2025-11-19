export default function Complete() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-10 h-10 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">
          Order Complete!
        </h1>

        {/* Message */}
        <div className="space-y-4 text-lg text-charcoal/80">
          <p>
            Thank you for your purchase. Check your email for your digital guide
            and order details.
          </p>
          <p className="text-base">
            If you purchased the video course or starter kit, you'll receive
            separate emails with access instructions and shipping updates.
          </p>
        </div>

        {/* Support */}
        <div className="pt-8 border-t border-charcoal/10">
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

      {/* TODO: Add FB Pixel tracking based on purchase */}
      {/* Will need to pass purchase info via URL params or session */}
    </main>
  );
}
