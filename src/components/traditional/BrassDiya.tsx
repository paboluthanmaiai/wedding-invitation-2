"use client";

import React from "react";

interface BrassDiyaProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrassDiya: React.FC<BrassDiyaProps> = ({
  className = "",
  size = "md",
}) => {
  const dimensions = {
    sm: { width: 36, height: 48 },
    md: { width: 56, height: 72 },
    lg: { width: 72, height: 96 },
  }[size];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
      aria-label="Traditional South Indian Brass Diya"
      role="img"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 60 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8A6B1A" />
          </linearGradient>

          <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFDE59" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FF914D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF5757" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF7CC" />
            <stop offset="35%" stopColor="#FFD13B" />
            <stop offset="70%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#D12B00" />
          </linearGradient>
        </defs>

        {/* Ambient flame halo */}
        <circle
          cx="30"
          cy="18"
          r="16"
          fill="url(#diyaGlow)"
          className="animate-flicker"
        />

        {/* Inner gentle flame */}
        <path
          d="M 30 6 Q 36 14 30 24 Q 24 14 30 6 Z"
          fill="url(#flameGrad)"
          className="animate-flicker origin-bottom"
        />
        <circle cx="30" cy="18" r="2.5" fill="#FFFBE6" />

        {/* Diya Oil Cup (Agal) */}
        <ellipse cx="30" cy="27" rx="20" ry="7" fill="url(#brassGrad)" />
        <ellipse cx="30" cy="26" rx="16" ry="4" fill="#6B1D2F" opacity="0.6" />
        {/* Lamp spout notch */}
        <path d="M 28 24 L 30 20 L 32 24 Z" fill="url(#brassGrad)" />

        {/* Stem column */}
        <rect x="27" y="32" width="6" height="24" fill="url(#brassGrad)" />
        {/* Stem ornamental ribs */}
        <ellipse cx="30" cy="38" rx="7" ry="2.5" fill="url(#brassGrad)" />
        <ellipse cx="30" cy="48" rx="8" ry="3" fill="url(#brassGrad)" />

        {/* Stepped Base (Peetam) */}
        <path
          d="M 16 66 C 22 58 38 58 44 66 Z"
          fill="url(#brassGrad)"
        />
        <ellipse cx="30" cy="66" rx="22" ry="6" fill="url(#brassGrad)" />
        <rect x="12" y="66" width="36" height="4" fill="#9E781E" rx="1" />
      </svg>
    </div>
  );
};

export default BrassDiya;
