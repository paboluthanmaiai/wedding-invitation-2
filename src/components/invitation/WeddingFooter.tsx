import React from "react";
import { weddingConfig } from "@/data/wedding-config";
import BrassDiya from "@/components/traditional/BrassDiya";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

export const WeddingFooter: React.FC = () => {
  const { couple, weddingDetails } = weddingConfig;

  return (
    <footer
      className="bg-[#3D030D] text-cream py-10 sm:py-12 px-4 relative border-t-2 border-gold"
      aria-label="Invitation Footer"
    >
      <div className="max-w-2xl mx-auto text-center space-y-3">
        {/* Subtle Diya in Footer */}
        <div className="flex justify-center mb-2">
          <BrassDiya size="sm" />
        </div>

        {/* Short Thank-You Message */}
        <p className="text-xs sm:text-sm font-serif italic text-gold-light max-w-md mx-auto">
          "With warm regards, prayers, and heartfelt blessings from both families. We look forward to celebrating together."
        </p>

        {/* Subtle Floral Divider */}
        <div className="py-1">
          <FloralDivider variant="simple" />
        </div>

        {/* Bride & Groom Names */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream tracking-wide">
          {couple.bride.name} &amp; {couple.groom.name}
        </h3>

        {/* Wedding Date */}
        <p className="text-xs sm:text-sm text-gold-300 font-medium">
          {weddingDetails.dateDisplay}
        </p>

        {/* Sacred Telugu closing */}
        <p className="text-[11px] sm:text-xs text-stone-400 pt-2 tracking-widest font-serif">
          {weddingDetails.teluguBlessing}
        </p>
      </div>
    </footer>
  );
};

export default WeddingFooter;
