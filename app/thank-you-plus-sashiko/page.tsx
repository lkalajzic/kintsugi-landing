"use client";

import { Suspense } from "react";
import PurchaseTracker from "../components/PurchaseTracker";

export default function ThankYouPlusSashikoPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-12">
      <Suspense fallback={null}>
        <PurchaseTracker />
      </Suspense>

      <div className="max-w-2xl text-center space-y-8">
        <div className="text-6xl text-gold/20 font-serif">金継ぎ + 刺し子</div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <p className="text-green-600 text-3xl md:text-4xl font-bold">
            ✓ You&apos;re in! Both courses are yours.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-light text-charcoal">
          Access Your Courses
        </h1>

        {/* Two Course Buttons */}
        <div className="flex flex-col gap-4">
          <a
            href="https://course.kintsugiclass.com/sign-up"
            className="inline-block bg-gold hover:bg-gold/90 text-white px-12 py-6 rounded-xl text-xl md:text-2xl font-bold transition-colors shadow-lg"
          >
            Access Kintsugi Class →
          </a>
          <a
            href="https://course.sashikomastery.com/sign-up"
            className="inline-block bg-[#001F3F] hover:bg-[#001F3F]/90 text-white px-12 py-6 rounded-xl text-xl md:text-2xl font-bold transition-colors shadow-lg"
          >
            Access Sashiko Mastery →
          </a>
        </div>

        <div className="text-left bg-warmGray/30 rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-xl md:text-2xl text-charcoal font-bold text-center">
            How to get started:
          </p>
          <ol className="space-y-3 text-lg md:text-xl text-charcoal/80 list-decimal list-inside">
            <li>
              <strong>Click the buttons above</strong> — each takes you to its course
            </li>
            <li>
              <strong>Create an account on each</strong> — we recommend using{" "}
              <strong>&quot;Continue with Google&quot;</strong> as it is the
              easiest option
            </li>
            <li>
              <strong>Save these links</strong> — bookmark both pages:<br />
              <strong className="text-charcoal">course.kintsugiclass.com</strong> &amp;{" "}
              <strong className="text-charcoal">course.sashikomastery.com</strong>
            </li>
          </ol>
          <p className="text-base md:text-lg text-charcoal/60 text-center pt-2">
            We also sent you emails with these instructions. If you
            don&apos;t see them, check your <strong>spam</strong> or{" "}
            <strong>trash</strong> folder.
          </p>
        </div>

        <p className="text-sm text-charcoal/60">
          Questions? support@kintsugiclass.com
        </p>
      </div>
    </div>
  );
}
