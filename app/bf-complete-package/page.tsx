export default function BFCompletePackage() {
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
            Thank you for your complete package purchase! You're getting the full experience.
          </p>
          <p className="text-base">
            <strong>Video lessons:</strong> We're putting the finishing touches on the video platform - you'll get early access as soon as it's ready (1-2 weeks).
          </p>
          <p className="text-base">
            <strong>Kintsugi kit:</strong> We're finalizing our US fulfillment partner for faster shipping. Expect your kit in about 2 weeks. You'll receive tracking info via email.
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
    </main>
  );
}
