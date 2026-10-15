"use client";

import React, { useState, useEffect } from "react";
import { weddingConfig } from "@/data/wedding-config";
import BrassDiya from "@/components/traditional/BrassDiya";
import ToranHeader from "@/components/traditional/ToranHeader";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const WeddingHero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(weddingConfig.weddingDetails.isoDateTime).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:py-20 bg-mandapam-gradient"
      aria-label="Wedding Welcome and Countdown"
    >
      {/* Top Toran Garland */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <ToranHeader className="h-10 sm:h-14" />
      </div>

      {/* Subtle traditional background motifs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-cream-pattern" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-6 text-center">
        {/* Auspicious Invocation Header */}
        <div className="mb-4">
          <p className="text-sm sm:text-base font-serif font-bold text-maroon tracking-widest uppercase">
            {weddingConfig.weddingDetails.teluguBlessing}
          </p>
          <p className="text-xs sm:text-sm text-stone-600 italic mt-1 max-w-lg mx-auto">
            {weddingConfig.weddingDetails.traditionalBlessing}
          </p>
        </div>

        {/* Flanking Brass Lamps with gentle glow */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 my-3">
          <BrassDiya size="sm" />
          <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-cream-50 shadow-sm">
            <span className="text-xl font-serif text-maroon font-bold">卐</span>
          </div>
          <BrassDiya size="sm" />
        </div>

        {/* Invitation Greeting */}
        <p className="text-xs sm:text-sm text-stone-700 max-w-xl mx-auto leading-relaxed mb-4">
          {weddingConfig.weddingDetails.invitationGreeting}
        </p>

        {/* Bride & Groom - Primary Visual Focus */}
        <div className="py-2 sm:py-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-maroon tracking-wide">
            {weddingConfig.couple.bride.name}
          </h1>

          <div className="flex items-center justify-center gap-4 my-2 sm:my-3">
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl sm:text-2xl font-serif italic text-gold-dark font-medium">
              weds
            </span>
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-maroon tracking-wide">
            {weddingConfig.couple.groom.name}
          </h2>
        </div>

        {/* Traditional Floral Divider (NO sparkles) */}
        <div className="my-5">
          <FloralDivider variant="lotus" />
        </div>

        {/* Wedding Date & Sumuhurtham Details */}
        <div className="mb-8 space-y-1">
          <p className="text-lg sm:text-2xl font-serif font-bold text-stone-900 tracking-wide">
            {weddingConfig.weddingDetails.dateDisplay}
          </p>
          <p className="text-sm sm:text-base text-maroon font-semibold">
            Sumuhurtham: {weddingConfig.weddingDetails.muhurthamTime} • {weddingConfig.weddingDetails.lagnam}
          </p>
          <p className="text-xs sm:text-sm text-stone-600">
            {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
        </div>

        {/* Countdown Timer Block */}
        <div className="max-w-xl mx-auto bg-cream-50/90 rounded-2xl p-4 sm:p-6 border border-gold/60 shadow-traditional relative">
          {/* Subtle inner accent border */}
          <div className="absolute inset-2 border border-dashed border-maroon/20 rounded-xl pointer-events-none" />

          <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold mb-3">
            Auspicious Moment Countdown
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 relative z-10">
            {/* Days */}
            <div className="flex flex-col items-center p-2 sm:p-3 bg-white/80 rounded-xl border border-gold/30 shadow-sm">
              <span className="text-2xl sm:text-4xl font-serif font-bold text-maroon leading-none">
                {mounted ? formatNumber(timeLeft.days) : "--"}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-600 mt-1.5 font-medium">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center p-2 sm:p-3 bg-white/80 rounded-xl border border-gold/30 shadow-sm">
              <span className="text-2xl sm:text-4xl font-serif font-bold text-maroon leading-none">
                {mounted ? formatNumber(timeLeft.hours) : "--"}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-600 mt-1.5 font-medium">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center p-2 sm:p-3 bg-white/80 rounded-xl border border-gold/30 shadow-sm">
              <span className="text-2xl sm:text-4xl font-serif font-bold text-maroon leading-none">
                {mounted ? formatNumber(timeLeft.minutes) : "--"}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-600 mt-1.5 font-medium">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center p-2 sm:p-3 bg-white/80 rounded-xl border border-gold/30 shadow-sm">
              <span className="text-2xl sm:text-4xl font-serif font-bold text-maroon leading-none">
                {mounted ? formatNumber(timeLeft.seconds) : "--"}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-600 mt-1.5 font-medium">
                Seconds
              </span>
            </div>
          </div>

          {timeLeft.isComplete && (
            <p className="text-xs sm:text-sm font-serif font-medium text-maroon mt-3">
              The wedding ceremonies have commenced. We seek your heartfelt blessings!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;
