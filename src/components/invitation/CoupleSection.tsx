import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/data/wedding-config";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

export const CoupleSection: React.FC = () => {
  const { bride, groom } = weddingConfig.couple;

  return (
    <section
      id="couple"
      className="py-12 sm:py-16 bg-cream px-4 sm:px-6 relative"
      aria-label="Introducing the Bride and Groom"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
            Together with their Families
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon mt-1">
            The Happy Couple
          </h2>
          <div className="mt-3">
            <FloralDivider variant="simple" />
          </div>
        </div>

        {/* Couple Grid - Two balanced columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          {/* Bride Card */}
          <div className="bg-cream-50 rounded-2xl p-5 sm:p-6 border border-gold/40 shadow-card flex flex-col items-center text-center relative group">
            {/* Subtle inner dashed frame */}
            <div className="absolute inset-2 border border-dashed border-maroon/20 rounded-xl pointer-events-none" />

            {/* Corner traditional markers */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold pointer-events-none" />

            {/* Bride Photograph */}
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden border-2 border-gold shadow-md mb-4 bg-cream-200">
              <Image
                src={bride.image}
                alt={`${bride.fullName} - Traditional South Indian Bride`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 176px, 208px"
                priority
              />
            </div>

            {/* Bride Name & Details */}
            <span className="text-xs uppercase tracking-wider text-gold-dark font-medium">
              The Bride
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon mt-0.5">
              {bride.fullName}
            </h3>
            {bride.teluguName && (
              <p className="text-sm font-serif text-stone-600 mt-0.5">
                {bride.teluguName}
              </p>
            )}

            {/* Parents details */}
            <p className="text-xs sm:text-sm font-medium text-stone-700 mt-2 italic">
              {bride.parents}
            </p>

            {/* Short Bio */}
            {bride.description && (
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed max-w-sm">
                {bride.description}
              </p>
            )}
          </div>

          {/* Groom Card */}
          <div className="bg-cream-50 rounded-2xl p-5 sm:p-6 border border-gold/40 shadow-card flex flex-col items-center text-center relative group">
            {/* Subtle inner dashed frame */}
            <div className="absolute inset-2 border border-dashed border-maroon/20 rounded-xl pointer-events-none" />

            {/* Corner traditional markers */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold pointer-events-none" />

            {/* Groom Photograph */}
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden border-2 border-gold shadow-md mb-4 bg-cream-200">
              <Image
                src={groom.image}
                alt={`${groom.fullName} - Traditional South Indian Groom`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 176px, 208px"
                priority
              />
            </div>

            {/* Groom Name & Details */}
            <span className="text-xs uppercase tracking-wider text-gold-dark font-medium">
              The Groom
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon mt-0.5">
              {groom.fullName}
            </h3>
            {groom.teluguName && (
              <p className="text-sm font-serif text-stone-600 mt-0.5">
                {groom.teluguName}
              </p>
            )}

            {/* Parents details */}
            <p className="text-xs sm:text-sm font-medium text-stone-700 mt-2 italic">
              {groom.parents}
            </p>

            {/* Short Bio */}
            {groom.description && (
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed max-w-sm">
                {groom.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
