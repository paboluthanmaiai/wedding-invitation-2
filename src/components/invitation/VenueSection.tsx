import React from "react";
import { MapPin, Navigation, Calendar, Clock } from "lucide-react";
import { weddingConfig } from "@/data/wedding-config";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

export const VenueSection: React.FC = () => {
  const { venue, weddingDetails } = weddingConfig;

  return (
    <section
      id="venue"
      className="py-12 sm:py-16 bg-cream-50 px-4 sm:px-6 relative border-t border-gold/30"
      aria-label="Wedding Venue and Directions"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
            Sacred Auspicious Location
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon mt-1">
            Venue &amp; Directions
          </h2>
          <div className="mt-3">
            <FloralDivider variant="lotus" />
          </div>
        </div>

        {/* Venue Card with Traditional Double Frame */}
        <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border-2 border-gold shadow-traditional relative text-center">
          {/* Inner dashed traditional border */}
          <div className="absolute inset-2 border border-dashed border-maroon/25 rounded-xl pointer-events-none" />

          {/* Corner gold accents */}
          <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold pointer-events-none" />
          <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold pointer-events-none" />

          <div className="inline-flex p-3 rounded-full bg-cream-100 border border-gold/50 text-maroon mb-4">
            <MapPin className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon">
            {venue.name}
          </h3>
          <p className="text-sm sm:text-base font-medium text-stone-700 mt-1">
            {venue.hall}
          </p>

          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mt-2 leading-relaxed">
            {venue.address}, {venue.city}, {venue.state} - {venue.pinCode}
          </p>

          {/* Date & Time reminder */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-6 text-xs sm:text-sm text-stone-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-maroon" />
              <span>{weddingDetails.dateDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-maroon" />
              <span>Sumuhurtham at {weddingDetails.muhurthamTime}</span>
            </div>
          </div>

          {/* Get Directions Button */}
          <div className="mt-2">
            <a
              href={venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-maroon hover:bg-maroon-deep text-cream font-serif font-semibold text-sm sm:text-base rounded-full border border-gold shadow-md hover:shadow-lg transition-all active:scale-95 focus:outline-none focus:ring-4 focus:ring-gold/40"
              aria-label={`Get directions to ${venue.name} on Google Maps`}
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
