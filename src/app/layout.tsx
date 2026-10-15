import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/data/wedding-config";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name} | Wedding Invitation`,
  description: `Celebrate the traditional South Indian wedding ceremony of ${weddingConfig.couple.bride.fullName} and ${weddingConfig.couple.groom.fullName} on ${weddingConfig.weddingDetails.dateDisplay}.`,
  keywords: ["South Indian Wedding", "Telugu Wedding", "Kalyanam", "Wedding Invitation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${cinzel.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-cream text-stone-800 antialiased selection:bg-maroon selection:text-cream">
        {children}
      </body>
    </html>
  );
}
