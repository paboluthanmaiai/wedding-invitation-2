import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { weddingConfig } from "@/data/wedding-config";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

export const EventsTimeline: React.FC = () => {
  const { events } = weddingConfig;

  return (
    <section
      id="events"
      className="py-12 sm:py-16 bg-cream-50 px-4 sm:px-6 relative border-y border-gold/30"
      aria-label="Wedding Events and Ceremonies"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
            Sacred Auspicious Ceremonies
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon mt-1">
            Wedding Ceremonies
          </h2>
          <div className="mt-3">
            <FloralDivider variant="temple" />
          </div>
        </div>

        {/* Event Cards - Arranged Vertically on mobile, no horizontal scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white/95 rounded-2xl border border-gold/50 shadow-card overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300 relative"
            >
              {/* Card Banner Image if available */}
              {event.image && (
                <div className="relative w-full h-36 sm:h-40 bg-cream-200 border-b border-gold/30">
                  <Image
                    src={event.image}
                    alt={`${event.name} Ceremony Illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {event.badge && (
                    <span className="absolute top-3 right-3 bg-maroon/90 text-cream text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-gold/40 shadow-sm">
                      {event.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon leading-tight">
                    {event.name}
                  </h3>
                  {event.teluguName && (
                    <p className="text-xs sm:text-sm font-serif text-gold-dark font-medium mt-0.5">
                      {event.teluguName}
                    </p>
                  )}

                  {/* Event Details Grid */}
                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-maroon flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium text-stone-900">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-maroon flex-shrink-0" aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-maroon flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-snug">{event.venue}</span>
                    </div>
                  </div>

                  {/* Optional Description */}
                  {event.description && (
                    <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 italic">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
