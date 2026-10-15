"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { weddingConfig } from "@/data/wedding-config";

export const MusicPlayer: React.FC = () => {
  const { music } = weddingConfig;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  if (!music.enabled) {
    return null;
  }

  // Traditional Carnatic Tanpura / Veena harmonic drone synthesis via Web Audio API
  const startCarnaticAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Auspicious C# (Pancha / Shadja notes of Carnatic classical scale)
      // Base C#3 = 138.59 Hz, G#3 = 207.65 Hz, C#4 = 277.18 Hz
      const frequencies = [138.59, 207.65, 277.18, 415.3];
      const newOscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle gentle detune for rich natural Tanpura acoustic shimmer
        osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.25 / frequencies.length, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        newOscs.push(osc);
      });

      oscillatorRefs.current = newOscs;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopCarnaticAudio = () => {
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          oscillatorRefs.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // Ignore already stopped oscillators
            }
          });
          oscillatorRefs.current = [];
        }, 800);
      }
      setIsPlaying(false);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopCarnaticAudio();
    } else {
      startCarnaticAudio();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      try {
        oscillatorRefs.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Ignore
          }
        });
        if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
          audioCtxRef.current.close();
        }
      } catch {
        // Ignore
      }
    };
  }, []);

  return (
    <aside
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40"
      aria-label="Background Music Control"
    >
      <button
        type="button"
        onClick={toggleMusic}
        className={`group flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full border border-gold shadow-lg transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-gold/40 ${
          isPlaying
            ? "bg-maroon text-cream ring-2 ring-gold/60"
            : "bg-cream-50/95 text-maroon hover:bg-cream-100"
        }`}
        title={isPlaying ? "Pause Traditional Music" : "Play Traditional Music"}
        aria-label={isPlaying ? "Mute traditional background music" : "Play traditional background music"}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-gold animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-stone-500" />
          )}
        </span>

        <span className="text-[11px] sm:text-xs font-serif font-medium tracking-wide">
          {isPlaying ? "Music On" : "Music Off"}
        </span>

        {/* Traditional sound wave indicator when playing */}
        {isPlaying && (
          <span className="flex items-center gap-0.5 h-3 ml-0.5" aria-hidden="true">
            <span className="w-0.5 h-2 bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-0.5 h-3 bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-1.5 bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        )}
      </button>
    </aside>
  );
};

export default MusicPlayer;
