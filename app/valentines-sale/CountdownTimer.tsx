"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Feb 17 00:00 UTC = end of Feb 16 for all US timezones
    const deadline = new Date("2026-02-17T00:00:00Z");

    const updateTimer = () => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        <p className="text-sm font-medium text-charcoal mb-3 text-center">
          Valentine&apos;s sale ends in:
        </p>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-light text-gold">
              {timeLeft.days}
            </div>
            <div className="text-xs text-charcoal/60 uppercase tracking-wide">
              Days
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gold">
              {timeLeft.hours}
            </div>
            <div className="text-xs text-charcoal/60 uppercase tracking-wide">
              Hours
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gold">
              {timeLeft.minutes}
            </div>
            <div className="text-xs text-charcoal/60 uppercase tracking-wide">
              Minutes
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gold">
              {timeLeft.seconds}
            </div>
            <div className="text-xs text-charcoal/60 uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
