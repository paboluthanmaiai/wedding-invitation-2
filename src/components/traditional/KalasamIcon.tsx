import React from "react";

interface KalasamIconProps {
  className?: string;
  size?: number;
}

export const KalasamIcon: React.FC<KalasamIconProps> = ({
  className = "",
  size = 48,
}) => {
  return (
    <div className={`inline-block select-none ${className}`} aria-label="Auspicious Kalasam" role="img">
      <svg
        width={size}
        height={(size * 1.2)}
        viewBox="0 0 80 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="kalasamGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#917316" />
          </linearGradient>
        </defs>

        {/* Coconut on Top */}
        <ellipse cx="40" cy="24" rx="14" ry="18" fill="#8D5B4C" />
        <path d="M 40 6 L 42 12 L 38 12 Z" fill="#6B3E32" />

        {/* Mango Leaves (Thoranam) */}
        <path d="M 18 42 Q 8 20 22 14 Q 28 28 32 42 Z" fill="#3D5A45" />
        <path d="M 62 42 Q 72 20 58 14 Q 52 28 48 42 Z" fill="#3D5A45" />
        <path d="M 40 38 Q 40 10 40 8 Q 46 24 44 38 Z" fill="#4E7558" />

        {/* Brass Pot Neck & Rim */}
        <rect x="24" y="42" width="32" height="6" rx="2" fill="url(#kalasamGold)" />

        {/* Brass Pot Belly */}
        <ellipse cx="40" cy="65" rx="28" ry="24" fill="url(#kalasamGold)" />
        
        {/* Sacred Red Vermilion Bottu / Swastika */}
        <circle cx="40" cy="65" r="9" fill="#800020" />
        <circle cx="40" cy="65" r="4" fill="#FFB703" />

        {/* Pot Base */}
        <ellipse cx="40" cy="87" rx="18" ry="5" fill="url(#kalasamGold)" />
        <rect x="24" y="86" width="32" height="3" fill="#917316" rx="1" />
      </svg>
    </div>
  );
};

export default KalasamIcon;
