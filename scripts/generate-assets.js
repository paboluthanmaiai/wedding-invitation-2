const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Gallery 1: Sacred Pre-Wedding Moments (Traditional Temple & Arch)
const gallery1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g1bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#F7EADB" />
      <stop offset="100%" stop-color="#EEDAC4" />
    </linearGradient>
    <linearGradient id="goldG1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g1bg)" />
  <!-- Temple Pillars & Sanctum Silhouette -->
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />
  
  <!-- Temple Mandapam Arch -->
  <path d="M 200 480 L 200 240 Q 400 130 600 240 L 600 480" fill="none" stroke="url(#goldG1)" stroke-width="5" />
  <path d="M 220 480 L 220 250 Q 400 155 580 250 L 580 480" fill="none" stroke="#800020" stroke-width="2" />
  
  <!-- Hanging Bells (Ganta) -->
  <g fill="url(#goldG1)">
    <path d="M 290 220 L 290 280 L 275 315 L 305 315 L 290 280 Z" />
    <circle cx="290" cy="322" r="4" />
    <path d="M 510 220 L 510 280 L 495 315 L 525 315 L 510 280 Z" />
    <circle cx="510" cy="322" r="4" />
    <path d="M 400 180 L 400 250 L 380 290 L 420 290 L 400 250 Z" />
    <circle cx="400" cy="298" r="5" />
  </g>
  
  <!-- Traditional Couple Silhouette in Mandapam -->
  <g fill="#800020" opacity="0.85">
    <ellipse cx="360" cy="330" rx="20" ry="24" />
    <path d="M 330 460 C 330 380 350 360 360 360 C 370 360 390 380 390 460 Z" />
    <ellipse cx="440" cy="340" rx="18" ry="22" fill="#991B33" />
    <path d="M 410 460 C 410 390 430 370 440 370 C 450 370 470 390 470 460 Z" fill="#991B33" />
  </g>
  <!-- Garland Connecting Couple -->
  <path d="M 360 370 Q 400 420 440 380" stroke="#FF8C00" stroke-width="5" fill="none" stroke-dasharray="6,2" />

  <!-- Diya at Mandapam Base -->
  <ellipse cx="400" cy="470" rx="40" ry="10" fill="#D4AF37" />
  <path d="M 400 460 Q 405 440 400 430 Q 395 440 400 460 Z" fill="#FF8C00" />

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">SACRED PRE-WEDDING MOMENTS</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Blessings at the Sanctum of Sri Venkateswara</text>
</svg>`;

// 2. Gallery 2: The Auspicious Gold Silk (Pattu & Zari)
const gallery2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g2bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#FBF1E4" />
      <stop offset="100%" stop-color="#F1DFC6" />
    </linearGradient>
    <linearGradient id="silkRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#800020" />
      <stop offset="50%" stop-color="#A61C38" />
      <stop offset="100%" stop-color="#600018" />
    </linearGradient>
    <linearGradient id="goldBrocade" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFEFA8" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g2bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Flowing Kanjeevaram Silk Pleats Pattern -->
  <path d="M 120 450 C 250 250 450 480 680 200 L 680 340 C 450 560 250 360 120 500 Z" fill="url(#silkRed)" />
  <path d="M 120 450 C 250 250 450 480 680 200" stroke="url(#goldBrocade)" stroke-width="12" fill="none" />
  <path d="M 120 470 C 250 270 450 500 680 220" stroke="url(#goldBrocade)" stroke-width="4" fill="none" />
  
  <!-- Traditional Peacock / Mango Paisley Motifs (Kalka / Oompa) -->
  <g fill="url(#goldBrocade)" stroke="#800020" stroke-width="0.5">
    <path d="M 380 280 C 350 240 370 200 410 200 C 450 200 460 240 430 270 C 410 290 395 300 380 280 Z" />
    <circle cx="410" cy="225" r="5" fill="#800020" />
    <path d="M 280 340 C 250 300 270 260 310 260 C 350 260 360 300 330 330 C 310 350 295 360 280 340 Z" />
    <circle cx="310" cy="285" r="5" fill="#800020" />
    <path d="M 480 330 C 450 290 470 250 510 250 C 550 250 560 290 530 320 C 510 340 495 350 480 330 Z" />
    <circle cx="510" cy="275" r="5" fill="#800020" />
  </g>

  <!-- Gold Bangles & Pearl Details -->
  <ellipse cx="250" cy="400" rx="30" ry="14" fill="none" stroke="url(#goldBrocade)" stroke-width="6" />
  <ellipse cx="258" cy="405" rx="30" ry="14" fill="none" stroke="#800020" stroke-width="4" />
  <ellipse cx="266" cy="410" rx="30" ry="14" fill="none" stroke="url(#goldBrocade)" stroke-width="6" />

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">THE AUSPICIOUS GOLD SILK</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Pure Kanjeevaram weaves with heritage gold zari</text>
</svg>`;

// 3. Gallery 3: Floral Elegance (Jasmine & Marigold Garlands)
const gallery3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g3bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#FBF4EA" />
      <stop offset="100%" stop-color="#F2E6D5" />
    </linearGradient>
    <linearGradient id="goldG3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g3bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Garland Swags across Top -->
  <!-- Yellow & Orange Marigold Garland -->
  <path d="M 100 160 Q 250 280 400 160 Q 550 280 700 160" fill="none" stroke="#FF8C00" stroke-width="24" stroke-linecap="round" stroke-dasharray="14,6" />
  <path d="M 100 160 Q 250 280 400 160 Q 550 280 700 160" fill="none" stroke="#FFB703" stroke-width="14" stroke-dasharray="10,8" />
  
  <!-- Fragrant Jasmine White Veni Swag -->
  <path d="M 120 200 Q 250 340 400 200 Q 550 340 680 200" fill="none" stroke="#FFFDF7" stroke-width="16" stroke-linecap="round" stroke-dasharray="8,4" />
  <path d="M 120 200 Q 250 340 400 200 Q 550 340 680 200" fill="none" stroke="#C5A059" stroke-width="2" />

  <!-- Traditional Brass Urli with Floating Flowers -->
  <ellipse cx="400" cy="380" rx="160" ry="40" fill="url(#goldG3)" />
  <ellipse cx="400" cy="375" rx="150" ry="34" fill="#3D5A45" opacity="0.8" />
  <!-- Floating Lotuses & Jasmine Petals -->
  <g fill="#D81B60">
    <ellipse cx="400" cy="370" rx="20" ry="12" />
    <ellipse cx="340" cy="375" rx="16" ry="10" />
    <ellipse cx="460" cy="375" rx="16" ry="10" />
  </g>
  <g fill="#FFFDF8">
    <circle cx="370" cy="365" r="5" />
    <circle cx="430" cy="365" r="5" />
    <circle cx="390" cy="382" r="4" />
    <circle cx="415" cy="382" r="4" />
    <circle cx="310" cy="375" r="5" />
    <circle cx="490" cy="375" r="5" />
  </g>

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">FLORAL ELEGANCE</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Fragrant jasmine veni and marigolds blessed by sacred rituals</text>
</svg>`;

// 4. Gallery 4: Joyous Traditions (Brass Lamps & Sacred Flame)
const gallery4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g4bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#FDF1DF" />
      <stop offset="100%" stop-color="#F2DEC2" />
    </linearGradient>
    <linearGradient id="goldG4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
    <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFDD80" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#FF8C00" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#FF5400" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g4bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Pair of Traditional South Indian Kuthuvilakku Lamps -->
  <!-- Left Lamp -->
  <g transform="translate(250, 80)">
    <circle cx="50" cy="110" r="45" fill="url(#flameGlow)" />
    <!-- Flame -->
    <path d="M 50 120 Q 58 100 50 85 Q 42 100 50 120 Z" fill="#FFE89C" />
    <path d="M 50 118 Q 55 105 50 95 Q 45 105 50 118 Z" fill="#FF5400" />
    <!-- Lamp Top Oil Well -->
    <ellipse cx="50" cy="122" rx="35" ry="10" fill="url(#goldG4)" />
    <!-- Spout points -->
    <polygon points="50,118 78,124 50,128 22,124" fill="url(#goldG4)" />
    <!-- Pillar -->
    <rect x="44" y="130" width="12" height="150" fill="url(#goldG4)" />
    <ellipse cx="50" cy="200" rx="20" ry="8" fill="url(#goldG4)" />
    <!-- Base -->
    <path d="M 20 320 C 35 280 65 280 80 320 Z" fill="url(#goldG4)" />
    <ellipse cx="50" cy="320" rx="40" ry="12" fill="url(#goldG4)" />
  </g>

  <!-- Right Lamp -->
  <g transform="translate(450, 80)">
    <circle cx="50" cy="110" r="45" fill="url(#flameGlow)" />
    <!-- Flame -->
    <path d="M 50 120 Q 58 100 50 85 Q 42 100 50 120 Z" fill="#FFE89C" />
    <path d="M 50 118 Q 55 105 50 95 Q 45 105 50 118 Z" fill="#FF5400" />
    <!-- Lamp Top Oil Well -->
    <ellipse cx="50" cy="122" rx="35" ry="10" fill="url(#goldG4)" />
    <!-- Spout points -->
    <polygon points="50,118 78,124 50,128 22,124" fill="url(#goldG4)" />
    <!-- Pillar -->
    <rect x="44" y="130" width="12" height="150" fill="url(#goldG4)" />
    <ellipse cx="50" cy="200" rx="20" ry="8" fill="url(#goldG4)" />
    <!-- Base -->
    <path d="M 20 320 C 35 280 65 280 80 320 Z" fill="url(#goldG4)" />
    <ellipse cx="50" cy="320" rx="40" ry="12" fill="url(#goldG4)" />
  </g>

  <!-- Center Auspicious Kalasam -->
  <g transform="translate(370, 260)">
    <ellipse cx="30" cy="90" rx="32" ry="30" fill="url(#goldG4)" />
    <path d="M 15 65 L 45 65 L 50 75 L 10 75 Z" fill="url(#goldG4)" />
    <!-- Mango Leaves -->
    <path d="M 10 65 Q 2 40 18 35 Q 22 55 24 65 Z" fill="#3D5A45" />
    <path d="M 50 65 Q 58 40 42 35 Q 38 55 36 65 Z" fill="#3D5A45" />
    <path d="M 30 65 Q 30 30 30 25 Q 38 45 34 65 Z" fill="#4A6F54" />
    <!-- Coconut -->
    <ellipse cx="30" cy="35" rx="14" ry="18" fill="#8D5B4C" />
    <circle cx="30" cy="90" r="10" fill="#800020" />
  </g>

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">JOYOUS TRADITIONS</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Lighting the sacred Kuthuvilakku to invoke divine blessings</text>
</svg>`;

// 5. Gallery 5: Warm Blessings (Akshintalu Sacred Rice Shower)
const gallery5 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g5bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#FBF2E3" />
      <stop offset="100%" stop-color="#F0DFC6" />
    </linearGradient>
    <linearGradient id="goldG5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g5bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Traditional Silver/Brass Puja Thali in center -->
  <ellipse cx="400" cy="320" rx="140" ry="60" fill="url(#goldG5)" />
  <ellipse cx="400" cy="315" rx="125" ry="50" fill="#FFF8EE" stroke="#800020" stroke-width="2" />
  
  <!-- Kumkum & Turmeric Cups inside Thali -->
  <circle cx="360" cy="310" r="18" fill="#800020" />
  <circle cx="440" cy="310" r="18" fill="#FFB703" />
  <circle cx="400" cy="335" r="16" fill="#FFFDF7" stroke="#D4AF37" stroke-width="1" />
  <!-- Betel Leaves (Tamalapaku) & Areca Nuts -->
  <path d="M 330 330 Q 300 350 330 370 Q 350 345 330 330 Z" fill="#3D5A45" />
  <path d="M 470 330 Q 500 350 470 370 Q 450 345 470 330 Z" fill="#3D5A45" />

  <!-- Floating Akshintalu (Sacred Turmeric Rice Grains) Shower -->
  <g fill="#FFB703" stroke="#D4AF37" stroke-width="0.5">
    <ellipse cx="250" cy="180" rx="5" ry="2" transform="rotate(30, 250, 180)" />
    <ellipse cx="280" cy="150" rx="5" ry="2" transform="rotate(-20, 280, 150)" />
    <ellipse cx="320" cy="200" rx="6" ry="2.5" transform="rotate(45, 320, 200)" />
    <ellipse cx="350" cy="160" rx="5" ry="2" transform="rotate(15, 350, 160)" />
    <ellipse cx="380" cy="190" rx="6" ry="2.5" transform="rotate(-35, 380, 190)" />
    <ellipse cx="420" cy="170" rx="5" ry="2" transform="rotate(25, 420, 170)" />
    <ellipse cx="460" cy="210" rx="6" ry="2.5" transform="rotate(-15, 460, 210)" />
    <ellipse cx="500" cy="160" rx="5" ry="2" transform="rotate(50, 500, 160)" />
    <ellipse cx="540" cy="190" rx="5" ry="2" transform="rotate(-40, 540, 190)" />
    <ellipse cx="300" cy="230" rx="5" ry="2" transform="rotate(10, 300, 230)" />
    <ellipse cx="480" cy="240" rx="5" ry="2" transform="rotate(-30, 480, 240)" />
  </g>
  <!-- Red Akshintalu Grains -->
  <g fill="#800020">
    <ellipse cx="265" cy="165" rx="5" ry="2" transform="rotate(-25, 265, 165)" />
    <ellipse cx="335" cy="180" rx="5" ry="2" transform="rotate(35, 335, 180)" />
    <ellipse cx="395" cy="150" rx="6" ry="2.5" transform="rotate(-10, 395, 150)" />
    <ellipse cx="445" cy="190" rx="5" ry="2" transform="rotate(40, 445, 190)" />
    <ellipse cx="515" cy="175" rx="6" ry="2.5" transform="rotate(-20, 515, 175)" />
  </g>

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">WARM BLESSINGS</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Showers of sacred akshintalu bestowing lifelong harmony</text>
</svg>`;

// 6. Gallery 6: Serene Togetherness (Temple Pillars & Royal Corridor)
const gallery6 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g6bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#F8EADB" />
      <stop offset="100%" stop-color="#ECD8C1" />
    </linearGradient>
    <linearGradient id="goldG6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g6bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Classical South Indian Carved Pillars Perspective -->
  <!-- Outer Pillars -->
  <g fill="url(#goldG6)" stroke="#800020" stroke-width="1">
    <rect x="140" y="160" width="40" height="300" rx="4" />
    <path d="M 120 160 L 200 160 L 180 180 L 140 180 Z" />
    <path d="M 120 460 L 200 460 L 180 440 L 140 440 Z" />

    <rect x="620" y="160" width="40" height="300" rx="4" />
    <path d="M 600 160 L 680 160 L 660 180 L 620 180 Z" />
    <path d="M 600 460 L 680 460 L 660 440 L 620 440 Z" />
  </g>
  <!-- Inner Pillars -->
  <g fill="#ECD6B0" stroke="#800020" stroke-width="0.8">
    <rect x="250" y="190" width="30" height="250" rx="3" />
    <rect x="520" y="190" width="30" height="250" rx="3" />
  </g>
  <!-- Grand Traditional Arch Joining Pillars -->
  <path d="M 140 180 Q 400 90 660 180" fill="none" stroke="#800020" stroke-width="4" />
  <path d="M 140 200 Q 400 120 660 200" fill="none" stroke="url(#goldG6)" stroke-width="2" stroke-dasharray="6,4" />

  <!-- Center Decorative Kolam Pattern on Floor -->
  <ellipse cx="400" cy="420" rx="90" ry="25" fill="none" stroke="#800020" stroke-width="2" stroke-dasharray="5,3" />
  <ellipse cx="400" cy="420" rx="60" ry="16" fill="none" stroke="url(#goldG6)" stroke-width="1.5" />
  <circle cx="400" cy="420" r="5" fill="#800020" />

  <!-- Auspicious Mangala Vadhyam (Nadaswaram & Thavil) Silhouette -->
  <g stroke="#800020" stroke-width="2" fill="none">
    <!-- Nadaswaram horn -->
    <path d="M 330 290 L 450 330 L 470 345 L 470 325 L 450 330" fill="url(#goldG6)" />
    <!-- Thavil drum -->
    <ellipse cx="360" cy="350" rx="28" ry="18" fill="#800020" />
    <line x1="335" y1="350" x2="385" y2="350" stroke="url(#goldG6)" stroke-width="1.5" />
  </g>

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">SERENE TOGETHERNESS</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Harmonious vows amidst timeless stone-carved heritage</text>
</svg>`;

// 7. Gallery 7: Celebration of Colors (Mangala Snanam & Haldi)
const gallery7 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g7bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#FCF3DD" />
      <stop offset="100%" stop-color="#F6E7B9" />
    </linearGradient>
    <linearGradient id="goldG7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g7bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Traditional Sunburst / Auspicious Haldi Mandala -->
  <circle cx="400" cy="280" r="140" fill="#FFF8E0" stroke="#FFB703" stroke-width="3" stroke-dasharray="10,6" />
  <circle cx="400" cy="280" r="110" fill="#FFF2CC" stroke="#800020" stroke-width="1.5" />
  
  <!-- Traditional Peeta (Wooden Stool with Kolam) -->
  <ellipse cx="400" cy="380" rx="130" ry="35" fill="#A0522D" stroke="url(#goldG7)" stroke-width="3" />
  <ellipse cx="400" cy="375" rx="120" ry="30" fill="#8B4513" />
  <path d="M 320 375 Q 400 360 480 375" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-dasharray="6,4" />
  
  <!-- Brass Chembu / Lotas with Holy Turmeric Water -->
  <g transform="translate(370, 240)">
    <path d="M 15 80 L 10 40 L 50 40 L 45 80 Z" fill="url(#goldG7)" stroke="#800020" stroke-width="1" />
    <ellipse cx="30" cy="40" rx="20" ry="6" fill="#FFB703" />
    <path d="M 22 25 Q 30 10 38 25 Z" fill="#3D5A45" />
  </g>
  <!-- Turmeric & Marigold Flowers Swirl -->
  <g fill="#FF8C00">
    <circle cx="280" cy="280" r="14" />
    <circle cx="520" cy="280" r="14" />
    <circle cx="400" cy="160" r="15" />
  </g>
  <g fill="#FFB703">
    <circle cx="310" cy="210" r="12" />
    <circle cx="490" cy="210" r="12" />
    <circle cx="330" cy="340" r="12" />
    <circle cx="470" cy="340" r="12" />
  </g>

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">CELEBRATION OF COLORS</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Mangala Snanam filled with golden turmeric and joyous laughter</text>
</svg>`;

// 8. Gallery 8: Eternal Journey (Jeelakarra Bellam & Mangalasutram)
const gallery8 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g8bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF8F2" />
      <stop offset="50%" stop-color="#FBF0E0" />
      <stop offset="100%" stop-color="#F1DDC0" />
    </linearGradient>
    <linearGradient id="goldG8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g8bg)" />
  <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFDF9" stroke="#D4AF37" stroke-width="2" />
  <rect x="65" y="65" width="670" height="470" rx="4" fill="none" stroke="#800020" stroke-width="1" stroke-dasharray="8,4" />

  <!-- Sacred Agni (Homa Kundam) -->
  <g transform="translate(330, 240)">
    <!-- Kundam base -->
    <polygon points="10,140 130,140 110,170 30,170" fill="#800020" stroke="url(#goldG8)" stroke-width="2" />
    <polygon points="20,170 120,170 100,195 40,195" fill="#5A0014" />
    <!-- Sacred Agni Flames -->
    <path d="M 70 140 Q 90 90 70 50 Q 55 90 70 140 Z" fill="#FFE89C" />
    <path d="M 60 140 Q 40 100 55 70 Q 65 105 60 140 Z" fill="#FF8C00" />
    <path d="M 80 140 Q 100 105 85 70 Q 75 105 80 140 Z" fill="#FF5400" />
  </g>

  <!-- Mangalasutram (Sacred Yellow Thread with Twin Gold Sutrams) -->
  <path d="M 220 180 Q 400 320 580 180" stroke="#FFB703" stroke-width="6" fill="none" />
  <!-- Twin Gold Sutrams / Bottu Pendants -->
  <g fill="url(#goldG8)" stroke="#800020" stroke-width="1">
    <circle cx="385" cy="265" r="16" />
    <circle cx="385" cy="265" r="8" fill="#800020" />
    <circle cx="385" cy="265" r="3" fill="url(#goldG8)" />

    <circle cx="415" cy="265" r="16" />
    <circle cx="415" cy="265" r="8" fill="#800020" />
    <circle cx="415" cy="265" r="3" fill="url(#goldG8)" />
  </g>
  <!-- Coral & Black Beads (Nallapusalu) on the thread -->
  <circle cx="340" cy="235" r="4" fill="#1C1C1C" />
  <circle cx="350" cy="242" r="4" fill="#D90429" />
  <circle cx="450" cy="242" r="4" fill="#D90429" />
  <circle cx="460" cy="235" r="4" fill="#1C1C1C" />

  <text x="400" y="515" font-family="Cinzel, serif" font-size="20" fill="#800020" font-weight="bold" text-anchor="middle">ETERNAL JOURNEY</text>
  <text x="400" y="538" font-family="sans-serif" font-size="13" fill="#6B5E51" text-anchor="middle">Solemnized by sacred Mangalasutra Dharana and seven sacred steps</text>
</svg>`;

const files = [
  { name: 'gallery-1.svg', content: gallery1 },
  { name: 'gallery-2.svg', content: gallery2 },
  { name: 'gallery-3.svg', content: gallery3 },
  { name: 'gallery-4.svg', content: gallery4 },
  { name: 'gallery-5.svg', content: gallery5 },
  { name: 'gallery-6.svg', content: gallery6 },
  { name: 'gallery-7.svg', content: gallery7 },
  { name: 'gallery-8.svg', content: gallery8 },
];

files.forEach(f => {
  fs.writeFileSync(path.join(outDir, f.name), f.content, 'utf8');
  console.log('Created ' + f.name);
});
