"use client";

import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-cream/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-base sm:text-lg font-serif text-charcoal">
              Kintsugi Class
            </span>
            <span className="hidden sm:inline text-sm text-charcoal/60">
              •
            </span>
            <span className="hidden sm:inline text-sm text-charcoal/60">
              Presale - First 100 students
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("pricing-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gold hover:bg-gold/90 text-cream px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-sm"
            >
              Pre-Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
