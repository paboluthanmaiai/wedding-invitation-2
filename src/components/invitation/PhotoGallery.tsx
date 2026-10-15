"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { weddingConfig } from "@/data/wedding-config";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

export const PhotoGallery: React.FC = () => {
  const { gallery } = weddingConfig;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Touch gesture state for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Continuous looping: after the 8th image, next is 1st image
  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % gallery.length);
  }, [gallery.length, selectedIndex]);

  // Continuous looping: before 1st image, prev is 8th image
  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + gallery.length) % gallery.length);
  }, [gallery.length, selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      showNext();
    } else if (isRightSwipe) {
      showPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 bg-cream px-4 sm:px-6 relative"
      aria-label="Photo Gallery"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
            Memories of Love &amp; Tradition
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon mt-1">
            Photo Gallery
          </h2>
          <div className="mt-3">
            <FloralDivider variant="simple" />
          </div>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/40 shadow-sm hover:shadow-card bg-cream-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold text-left cursor-pointer"
              aria-label={`View larger photograph: ${photo.title}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3">
                <span className="text-[11px] sm:text-xs font-serif text-cream font-medium line-clamp-1">
                  {photo.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with continuous looping, touch swipe, and no unwanted counters */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Wedding Photograph"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-cream-50/20 text-cream hover:bg-cream-50/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
            aria-label="Close enlarged photograph"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button (Continuous looping) */}
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-cream-50/20 text-cream hover:bg-cream-50/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Photo Container */}
          <div className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border-2 border-gold shadow-2xl bg-cream-100">
              <Image
                src={gallery[selectedIndex].src}
                alt={gallery[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 800px"
                priority
              />
            </div>

            {/* Title & Caption (NO counter like '1/8') */}
            <div className="text-center text-cream mt-3 px-4 max-w-xl">
              <h3 className="text-base sm:text-lg font-serif font-bold text-gold">
                {gallery[selectedIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-cream-200 mt-1 italic">
                {gallery[selectedIndex].caption}
              </p>
            </div>
          </div>

          {/* Next Button (Continuous looping) */}
          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-cream-50/20 text-cream hover:bg-cream-50/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
