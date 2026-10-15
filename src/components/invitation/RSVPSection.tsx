"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { weddingConfig } from "@/data/wedding-config";
import { FloralDivider } from "@/components/traditional/OrnamentalBorders";

export const RSVPSection: React.FC = () => {
  const { rsvp } = weddingConfig;

  const [guestName, setGuestName] = useState("");
  const [attendees, setAttendees] = useState("1");
  const [attendance, setAttendance] = useState<"attending" | "declined">("attending");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // When RSVP is disabled, hide the entire section, heading, and spacing
  if (!rsvp.enabled) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!guestName.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your full name." });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName,
          attendees: Number(attendees),
          attendance,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Thank you! Your RSVP has been recorded.",
        });
        setGuestName("");
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Unable to submit RSVP. Please try again.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-12 sm:py-14 bg-cream px-4 sm:px-6 relative border-t border-gold/30"
      aria-label="RSVP Form"
    >
      <div className="max-w-xl mx-auto">
        {/* Compact Section Heading */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
            Kindly Respond
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon mt-1">
            RSVP
          </h2>
          {rsvp.deadline && (
            <p className="text-xs text-stone-500 mt-1">
              Please respond by {rsvp.deadline}
            </p>
          )}
          <div className="mt-2.5">
            <FloralDivider variant="simple" />
          </div>
        </div>

        {/* Small, Compact Form Container */}
        <div className="bg-white/95 rounded-2xl p-5 sm:p-7 border border-gold/60 shadow-card relative">
          <div className="absolute inset-2 border border-dashed border-maroon/20 rounded-xl pointer-events-none" />

          {statusMessage && (
            <div
              className={`p-3 rounded-xl mb-4 text-xs sm:text-sm flex items-center gap-2.5 ${
                statusMessage.type === "success"
                  ? "bg-green-50 text-green-900 border border-green-200"
                  : "bg-red-50 text-red-900 border border-red-200"
              }`}
              role="alert"
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              )}
              <p className="font-medium">{statusMessage.text}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            {/* Guest Name */}
            <div>
              <label
                htmlFor="guestName"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1"
              >
                Your Name <span className="text-maroon">*</span>
              </label>
              <input
                id="guestName"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full px-3.5 py-2.5 text-sm bg-cream-50 border border-gold/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon text-stone-900 placeholder-stone-400"
              />
            </div>

            {/* Attendance & Attendees Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Attendance confirmation */}
              <div>
                <label
                  htmlFor="attendance"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1"
                >
                  Will you attend? <span className="text-maroon">*</span>
                </label>
                <select
                  id="attendance"
                  value={attendance}
                  onChange={(e) =>
                    setAttendance(e.target.value as "attending" | "declined")
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-cream-50 border border-gold/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon text-stone-900"
                >
                  <option value="attending">Joyfully Accept</option>
                  <option value="declined">Regretfully Decline</option>
                </select>
              </div>

              {/* Number of attendees */}
              <div>
                <label
                  htmlFor="attendees"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1"
                >
                  Number of Guests <span className="text-maroon">*</span>
                </label>
                <select
                  id="attendees"
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  disabled={attendance === "declined"}
                  className="w-full px-3.5 py-2.5 text-sm bg-cream-50 border border-gold/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon text-stone-900 disabled:opacity-50"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People (Family)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-maroon hover:bg-maroon-deep text-cream font-serif font-semibold text-sm rounded-xl border border-gold shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer focus:outline-none focus:ring-4 focus:ring-gold/30"
              >
                {loading ? (
                  <span>Recording Response...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit RSVP</span>
                  </>
                )}
              </button>
            </div>

            {rsvp.contactPhone && (
              <p className="text-[11px] text-center text-stone-500 pt-1">
                For questions, reach us at {rsvp.contactPhone}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
