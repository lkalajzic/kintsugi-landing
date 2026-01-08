"use client";

import { useEffect, useState } from "react";

export default function StickyHeaderV2() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getNextReset = () => {
      const now = new Date();
      // 8am Zagreb = 7am UTC (winter time)
      const resetHourUTC = 7;
      const todayReset = new Date(now);
      todayReset.setUTCHours(resetHourUTC, 0, 0, 0);
      // If past today's reset, target tomorrow
      if (now >= todayReset) {
        todayReset.setUTCDate(todayReset.getUTCDate() + 1);
      }
      return todayReset;
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const target = getNextReset();
      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
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
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Dark bar with gold accent */}
      <div className="bg-[#1a1a1a] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 sm:gap-10">
          <span className="text-base sm:text-lg md:text-xl font-medium tracking-wide">
            <span className="text-gold">80% Off</span> — New Years Sale Ends
            Tonight
          </span>

          {/* Timer */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                {pad(timeLeft.hours)}
              </span>
              <span className="text-xs sm:text-sm block text-white/70 uppercase tracking-wider">
                hrs
              </span>
            </div>
            <span className="text-2xl sm:text-3xl text-gold font-light">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                {pad(timeLeft.minutes)}
              </span>
              <span className="text-xs sm:text-sm block text-white/70 uppercase tracking-wider">
                min
              </span>
            </div>
            <span className="text-2xl sm:text-3xl text-gold font-light">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                {pad(timeLeft.seconds)}
              </span>
              <span className="text-xs sm:text-sm block text-white/70 uppercase tracking-wider">
                sec
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
