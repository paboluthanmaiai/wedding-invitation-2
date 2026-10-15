import React from "react";

interface ToranHeaderProps {
  className?: string;
}

export const ToranHeader: React.FC<ToranHeaderProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden select-none pointer-events-none relative ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A7550" />
            <stop offset="60%" stopColor="#35583B" />
            <stop offset="100%" stopColor="#25402A" />
          </linearGradient>

          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5C8A63" />
            <stop offset="60%" stopColor="#3D6344" />
            <stop offset="100%" stopColor="#2A452F" />
          </linearGradient>

          <linearGradient id="goldBell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6B1A" />
          </linearGradient>
        </defs>

        {/* Auspicious Red & Gold Binding Rope Across Top */}
        <line x1="0" y1="4" x2="1200" y2="4" stroke="#800020" strokeWidth="4" />
        <line x1="0" y1="7" x2="1200" y2="7" stroke="#D4AF37" strokeWidth="2" strokeDasharray="8,4" />

        {/* Array of Mango Leaves (Mavillaku Thoranam) & Marigolds */}
        {Array.from({ length: 15 }).map((_, i) => {
          const cx = 40 + i * 80;
          return (
            <g key={i}>
              {/* Mango Leaves hanging downwards in pairs */}
              <path
                d={`M ${cx - 18} 6 Q ${cx - 24} 45 ${cx} 60 Q ${cx - 8} 35 ${cx - 14} 6 Z`}
                fill={i % 2 === 0 ? "url(#leafGrad1)" : "url(#leafGrad2)"}
              />
              <path
                d={`M ${cx + 18} 6 Q ${cx + 24} 45 ${cx} 60 Q ${cx + 8} 35 ${cx + 14} 6 Z`}
                fill={i % 2 === 0 ? "url(#leafGrad2)" : "url(#leafGrad1)"}
              />
              {/* Central Mango Leaf */}
              <path
                d={`M ${cx - 10} 6 Q ${cx - 15} 40 ${cx} 65 Q ${cx + 15} 40 ${cx + 10} 6 Z`}
                fill="url(#leafGrad1)"
              />
              {/* Leaf center vein */}
              <line x1={cx} y1="6" x2={cx} y2="58" stroke="#689C70" strokeWidth="1" opacity="0.6" />

              {/* Marigold Flower (Banthi Poovu) */}
              <circle cx={cx} cy="10" r="9" fill="#FF8C00" />
              <circle cx={cx} cy="10" r="6" fill="#FFB703" />
              <circle cx={cx} cy="10" r="3" fill="#FFE89C" />

              {/* Jasmine Strings (Malle Poolu) */}
              {i % 2 === 1 && (
                <g>
                  <circle cx={cx} cy="24" r="3.5" fill="#FFFDF8" stroke="#E6D3A3" strokeWidth="0.5" />
                  <circle cx={cx} cy="34" r="3.5" fill="#FFFDF8" stroke="#E6D3A3" strokeWidth="0.5" />
                  <circle cx={cx} cy="44" r="3.5" fill="#FFFDF8" stroke="#E6D3A3" strokeWidth="0.5" />
                </g>
              )}

              {/* Temple Brass Hanging Bell on alternating joints */}
              {i % 3 === 0 && (
                <g>
                  <line x1={cx + 40} y1="6" x2={cx + 40} y2="40" stroke="#D4AF37" strokeWidth="1.5" />
                  <path
                    d={`M ${cx + 40} 38 L ${cx + 40} 46 L ${cx + 33} 64 L ${cx + 47} 64 L ${cx + 40} 46 Z`}
                    fill="url(#goldBell)"
                  />
                  <circle cx={cx + 40} cy="66" r="2.5" fill="#800020" />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ToranHeader;
