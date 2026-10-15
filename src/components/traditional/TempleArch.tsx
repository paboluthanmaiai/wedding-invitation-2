import React from "react";

interface TempleArchProps {
  className?: string;
  children?: React.ReactNode;
}

export const TempleArch: React.FC<TempleArchProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`relative p-6 sm:p-10 rounded-2xl bg-cream-50 border border-gold/40 shadow-card ${className}`}>
      {/* Outer traditional border */}
      <div className="absolute inset-2 border border-maroon/20 rounded-xl pointer-events-none" />
      <div className="absolute inset-3 border border-dashed border-gold/40 rounded-lg pointer-events-none" />

      {/* Traditional Corner Elements */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold pointer-events-none" />
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold pointer-events-none" />

      {children}
    </div>
  );
};

export default TempleArch;
