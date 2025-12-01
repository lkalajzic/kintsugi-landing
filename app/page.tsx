export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-cream">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[40rem] font-serif text-charcoal leading-none">
            金
          </span>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Kintsugi Class
          </h1>
          <p className="text-xl text-charcoal/70">
            Something beautiful is coming.
          </p>
          <p className="text-charcoal/50">
            We're preparing a new kintsugi learning experience.
          </p>
        </div>
      </div>
    </main>
  );
}
