"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const getNextReset = () => {
      const now = new Date();
      const resetHourUTC = 7; // 8am Zagreb = 7am UTC

      const todayReset = new Date(now);
      todayReset.setUTCHours(resetHourUTC, 0, 0, 0);

      if (now >= todayReset) {
        todayReset.setUTCDate(todayReset.getUTCDate() + 1);
      }

      return todayReset;
    };

    const updateTimer = () => {
      const now = new Date();
      const target = getNextReset();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pt-6 max-w-lg mx-auto">
      <div className="bg-gold/10 border-2 border-gold/30 rounded-xl p-6">
        <p className="text-base font-medium text-charcoal mb-4 text-center">
          New Year sale ends in:
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-semibold text-charcoal">
              {timeLeft.hours}
            </div>
            <div className="text-sm md:text-base text-charcoal/70 uppercase tracking-wide mt-1">
              Hours
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-semibold text-charcoal">
              {timeLeft.minutes}
            </div>
            <div className="text-sm md:text-base text-charcoal/70 uppercase tracking-wide mt-1">
              Minutes
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-semibold text-charcoal">
              {timeLeft.seconds}
            </div>
            <div className="text-sm md:text-base text-charcoal/70 uppercase tracking-wide mt-1">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
