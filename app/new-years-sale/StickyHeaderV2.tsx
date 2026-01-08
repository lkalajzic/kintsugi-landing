"use client";

import { useEffect, useState } from "react";

export default function StickyHeaderV2() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      {/* Dark bar like iPhone Photography School */}
      <div className="bg-[#1a1a1a] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 sm:gap-8">
          <span className="text-sm sm:text-base font-medium">
            80% New Year's Sale Ends Tonight
          </span>

          {/* Timer */}
          <div className="flex items-center gap-1 sm:gap-2 font-mono">
            <div className="bg-white/10 rounded px-2 py-1">
              <span className="text-lg sm:text-xl font-bold">{pad(timeLeft.hours)}</span>
              <span className="text-[10px] block text-white/60">Hours</span>
            </div>
            <div className="bg-white/10 rounded px-2 py-1">
              <span className="text-lg sm:text-xl font-bold">{pad(timeLeft.minutes)}</span>
              <span className="text-[10px] block text-white/60">Minutes</span>
            </div>
            <div className="bg-white/10 rounded px-2 py-1">
              <span className="text-lg sm:text-xl font-bold">{pad(timeLeft.seconds)}</span>
              <span className="text-[10px] block text-white/60">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
