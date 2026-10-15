import React from "react";

interface FloralDividerProps {
  className?: string;
  variant?: "lotus" | "simple" | "temple";
}

export const FloralDivider: React.FC<FloralDividerProps> = ({
  className = "",
  variant = "lotus",
}) => {
  if (variant === "temple") {
    return (
      <div className={`flex items-center justify-center gap-3 select-none ${className}`} aria-hidden="true">
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold to-gold/40" />
        <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Temple Gopuram Steps Motif */}
          <rect x="18" y="1" width="4" height="3" fill="#D4AF37" />
          <rect x="14" y="4" width="12" height="3" fill="#800020" />
          <rect x="10" y="7" width="20" height="3" fill="#D4AF37" />
          <rect x="6" y="10" width="28" height="3" fill="#800020" />
          <rect x="2" y="13" width="36" height="3" fill="#D4AF37" />
        </svg>
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-gold to-gold/40" />
      </div>
    );
  }

  if (variant === "simple") {
    return (
      <div className={`flex items-center justify-center gap-2 select-none ${className}`} aria-hidden="true">
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/60" />
        <div className="w-1.5 h-1.5 rotate-45 border border-maroon bg-gold" />
        <div className="w-2.5 h-2.5 rotate-45 border border-gold bg-maroon" />
        <div className="w-1.5 h-1.5 rotate-45 border border-maroon bg-gold" />
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    );
  }

  // Default: Lotus floral divider
  return (
    <div className={`flex items-center justify-center gap-2 select-none ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold to-gold/80" />
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6B1A" />
          </linearGradient>
        </defs>
        {/* Central Traditional Lotus Motif */}
        <path d="M 30 4 C 33 9 33 15 30 20 C 27 15 27 9 30 4 Z" fill="url(#divGold)" stroke="#800020" strokeWidth="0.5" />
        <path d="M 30 10 C 24 10 18 14 16 18 C 22 19 28 16 30 10 Z" fill="#800020" />
        <path d="M 30 10 C 36 10 42 14 44 18 C 38 19 32 16 30 10 Z" fill="#800020" />
        <path d="M 30 13 C 22 14 12 17 10 21 C 18 22 26 18 30 13 Z" fill="url(#divGold)" />
        <path d="M 30 13 C 38 14 48 17 50 21 C 42 22 34 18 30 13 Z" fill="url(#divGold)" />
        {/* Auspicious Seed Center */}
        <circle cx="30" cy="18" r="2" fill="#D4AF37" />
      </svg>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold to-gold/80" />
    </div>
  );
};

export const CornerFlourish: React.FC<{
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  className?: string;
}> = ({ position = "top-left", size = 48, className = "" }) => {
  const rotationClass = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <div
      className={`absolute select-none pointer-events-none ${rotationClass} ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 4 44 L 4 4 L 44 4" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <path d="M 9 36 L 9 9 L 36 9" stroke="#800020" strokeWidth="1" strokeDasharray="3,2" />
        {/* Diagonal floral leaf */}
        <path d="M 4 4 Q 24 24 32 32 Q 24 24 4 4 Z" fill="#D4AF37" opacity="0.6" />
        <circle cx="16" cy="16" r="3" fill="#800020" />
        <circle cx="16" cy="16" r="1.5" fill="#D4AF37" />
      </svg>
    </div>
  );
};
