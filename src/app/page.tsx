"use client";

import React, { useState } from "react";
import InvitationCover from "@/components/invitation/InvitationCover";
import WeddingHero from "@/components/invitation/WeddingHero";
import CoupleSection from "@/components/invitation/CoupleSection";
import EventsTimeline from "@/components/invitation/EventsTimeline";
import PhotoGallery from "@/components/invitation/PhotoGallery";
import VenueSection from "@/components/invitation/VenueSection";
import RSVPSection from "@/components/invitation/RSVPSection";
import WeddingFooter from "@/components/invitation/WeddingFooter";
import MusicPlayer from "@/components/invitation/MusicPlayer";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <main className="min-h-screen bg-cream text-stone-900 relative selection:bg-maroon selection:text-cream">
      {/* Tap-to-Open Physical Invitation Card Cover */}
      <InvitationCover
        isOpen={isInvitationOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main Website Sections (Revealed smoothly) */}
      <div
        className={`transition-all duration-700 ${
          isInvitationOpen ? "opacity-100" : "opacity-95"
        }`}
      >
        {/* Section 1: Hero Section with Live Countdown */}
        <WeddingHero />

        {/* Section 2: Bride and Groom */}
        <CoupleSection />

        {/* Section 3: Wedding Ceremonies / Events */}
        <EventsTimeline />

        {/* Section 4: Photo Gallery */}
        <PhotoGallery />

        {/* Section 5: Venue & Directions */}
        <VenueSection />

        {/* Section 6: Optional RSVP Section (Configurable) */}
        <RSVPSection />

        {/* Section 7: Minimalist Footer */}
        <WeddingFooter />

        {/* Persistent Bottom-Left Music Control */}
        <MusicPlayer />
      </div>
    </main>
  );
}
