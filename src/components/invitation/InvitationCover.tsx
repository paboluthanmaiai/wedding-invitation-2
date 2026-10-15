"use client";

import React, { useState, useEffect } from "react";
import { weddingConfig } from "@/data/wedding-config";
import BrassDiya from "@/components/traditional/BrassDiya";
import KalasamIcon from "@/components/traditional/KalasamIcon";
import ToranHeader from "@/components/traditional/ToranHeader";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

interface InvitationCoverProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const InvitationCover: React.FC<InvitationCoverProps> = ({ onOpen, isOpen }) => {
  const [animating, setAnimating] = useState(false);
  const [fullyHidden, setFullyHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleOpen = () => {
    if (animating || isOpen) return;
    setAnimating(true);
    onOpen();

    const duration = prefersReducedMotion ? 200 : 1200;
    setTimeout(() => {
      setFullyHidden(true);
    }, duration);
  };

  if (fullyHidden) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isOpen && prefersReducedMotion ? "opacity-0 pointer-events-none" : ""
      }`}
      style={{ perspective: "1400px" }}
      aria-label="Wedding Invitation Card Cover"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Dimmer */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm pointer-events-none" />

      {/* Split Card Panels - Left Panel */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#580414] border-r-2 border-gold shadow-2xl transition-all ease-out origin-left z-10 flex flex-col justify-between p-4 sm:p-8 ${
          animating
            ? "rotate-y-[-115deg] opacity-0 duration-1000 -translate-x-full"
            : "rotate-y-0 opacity-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          backgroundImage:
            "radial-gradient(#D4AF37 0.75px, transparent 0.75px), radial-gradient(#6B051B 0.5px, #580414 0.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Left Panel Inner Border */}
        <div className="absolute inset-3 sm:inset-5 border border-gold/40 rounded pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 border border-dashed border-gold/20 rounded pointer-events-none" />

        {/* Traditional Left Corner Motifs */}
        <div className="w-8 h-8 border-t-2 border-l-2 border-gold pointer-events-none" />
        
        {/* Left Card Watermark / Motif */}
        <div className="my-auto text-center opacity-30 select-none">
          <svg className="w-24 sm:w-36 h-24 sm:h-36 mx-auto text-gold" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 15 C 30 35 15 50 15 70 C 15 85 28 95 45 95 C 65 95 65 80 50 70 C 40 60 40 45 50 15 Z" opacity="0.6" />
          </svg>
        </div>

        <div className="w-8 h-8 border-b-2 border-l-2 border-gold pointer-events-none" />
      </div>

      {/* Split Card Panels - Right Panel */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#580414] border-l-2 border-gold shadow-2xl transition-all ease-out origin-right z-10 flex flex-col justify-between p-4 sm:p-8 ${
          animating
            ? "rotate-y-[115deg] opacity-0 duration-1000 translate-x-full"
            : "rotate-y-0 opacity-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          backgroundImage:
            "radial-gradient(#D4AF37 0.75px, transparent 0.75px), radial-gradient(#6B051B 0.5px, #580414 0.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Right Panel Inner Border */}
        <div className="absolute inset-3 sm:inset-5 border border-gold/40 rounded pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 border border-dashed border-gold/20 rounded pointer-events-none" />

        {/* Traditional Right Corner Motifs */}
        <div className="self-end w-8 h-8 border-t-2 border-r-2 border-gold pointer-events-none" />

        {/* Right Card Watermark / Motif */}
        <div className="my-auto text-center opacity-30 select-none">
          <svg className="w-24 sm:w-36 h-24 sm:h-36 mx-auto text-gold" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 15 C 70 35 85 50 85 70 C 85 85 72 95 55 95 C 35 95 35 80 50 70 C 60 60 60 45 50 15 Z" opacity="0.6" />
          </svg>
        </div>

        <div className="self-end w-8 h-8 border-b-2 border-r-2 border-gold pointer-events-none" />
      </div>

      {/* Central Physical Invitation Card Plate (Compact & Visually Balanced) */}
      <div
        className={`relative z-20 w-[92%] max-w-md max-h-[92vh] overflow-y-auto bg-cream-50 rounded-2xl p-5 sm:p-7 text-center shadow-2xl border-2 border-gold transition-all duration-700 ${
          animating
            ? "scale-95 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"
        }`}
        style={{
          boxShadow:
            "0 20px 50px rgba(88, 4, 20, 0.45), 0 0 0 4px rgba(212, 175, 55, 0.4)",
        }}
      >
        {/* Outer decorative dashed inner frame */}
        <div className="absolute inset-2 border border-maroon/30 rounded-xl pointer-events-none" />
        <div className="absolute inset-3 border border-dashed border-gold/40 rounded-lg pointer-events-none" />

        {/* Top Toran & Mango Leaf Garland */}
        <div className="mb-2">
          <ToranHeader className="h-10 sm:h-12" />
        </div>

        {/* Auspicious Telugu Invocation */}
        <div className="mt-1 mb-2">
          <p className="text-[13px] sm:text-sm font-semibold tracking-wider text-maroon font-serif">
            {weddingConfig.weddingDetails.teluguBlessing}
          </p>
          <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
            || Om Sri Ganeshayanamah ||
          </p>
        </div>

        {/* Kalasam Motif */}
        <div className="flex justify-center my-1.5">
          <KalasamIcon size={40} />
        </div>

        {/* Auspicious Invitation Text */}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gold-dark font-medium mt-1">
          Wedding Invitation
        </p>

        {/* Bride & Groom Names */}
        <div className="my-2.5 space-y-0.5">
          <h1 className="text-2xl sm:text-3xl font-bold text-maroon font-serif tracking-wide leading-tight">
            {weddingConfig.couple.bride.name}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-sm sm:text-base font-serif italic text-gold-dark font-semibold">
              weds
            </span>
            <span className="h-[1px] w-8 bg-gold" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-maroon font-serif tracking-wide leading-tight">
            {weddingConfig.couple.groom.name}
          </h2>
        </div>

        {/* Traditional Floral Divider */}
        <div className="my-2">
          <FloralDivider variant="simple" />
        </div>

        {/* Wedding Date & Muhurtham Summary */}
        <div className="space-y-0.5 mb-3 text-stone-700">
          <p className="text-sm sm:text-base font-serif font-bold text-stone-900">
            {weddingConfig.weddingDetails.dateDisplay}
          </p>
          <p className="text-xs text-maroon font-medium">
            Sumuhurtham: {weddingConfig.weddingDetails.muhurthamTime} ({weddingConfig.weddingDetails.lagnam})
          </p>
          <p className="text-[11px] sm:text-xs text-stone-500">
            {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
        </div>

        {/* Traditional Brass Lamp (Diya) */}
        <div className="flex justify-center my-2">
          <BrassDiya size="sm" />
        </div>

        {/* Tap to Open Button (Fully Visible, High Contrast, Accessible) */}
        <div className="mt-3 pt-1">
          <button
            type="button"
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-serif font-bold tracking-wider text-cream bg-maroon hover:bg-maroon-deep active:scale-95 transition-all rounded-full shadow-lg border-2 border-gold focus:outline-none focus:ring-4 focus:ring-gold/50 cursor-pointer w-full max-w-xs"
            aria-label="Tap to open the wedding invitation"
          >
            <span className="relative flex items-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-gold" />
              <span>TAP TO OPEN INVITATION</span>
              <span className="w-2 h-2 rotate-45 bg-gold" />
            </span>
          </button>
          <p className="text-[10px] sm:text-[11px] text-stone-500 mt-1.5 italic">
            Tap above to unfold the invitation
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitationCover;
