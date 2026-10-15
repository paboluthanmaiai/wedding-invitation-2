const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images');

// 1. event-haldi.svg (Turmeric bowl & marigold garland)
const eventHaldi = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="ehbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF7" />
      <stop offset="100%" stop-color="#FBF3DE" />
    </linearGradient>
    <linearGradient id="goldH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#ehbg)" rx="8" />
  <rect x="8" y="8" width="384" height="224" rx="6" fill="none" stroke="#D4AF37" stroke-width="1.5" />
  <rect x="14" y="14" width="372" height="212" rx="4" fill="none" stroke="#800020" stroke-width="0.8" stroke-dasharray="4,3" />

  <!-- Marigold Swag across top -->
  <path d="M 40 40 Q 200 80 360 40" stroke="#FF8C00" stroke-width="12" fill="none" stroke-linecap="round" stroke-dasharray="8,4" />
  <path d="M 40 40 Q 200 80 360 40" stroke="#FFB703" stroke-width="6" fill="none" stroke-linecap="round" />

  <!-- Traditional Haldi Urli Bowl with Turmeric -->
  <ellipse cx="200" cy="145" rx="75" ry="24" fill="url(#goldH)" />
  <ellipse cx="200" cy="140" rx="68" ry="18" fill="#F4B41A" />
  <ellipse cx="200" cy="138" rx="55" ry="12" fill="#E69500" />
  
  <!-- Mango Leaf in Haldi -->
  <path d="M 200 135 Q 230 110 245 85 Q 215 110 200 135 Z" fill="#3D5A45" />

  <!-- Kumkum & Sandalwood dots -->
  <circle cx="160" cy="155" r="8" fill="#800020" />
  <circle cx="240" cy="155" r="8" fill="#FFF8EE" stroke="#D4AF37" stroke-width="1.5" />

  <text x="200" y="200" font-family="Cinzel, serif" font-size="14" fill="#800020" font-weight="bold" text-anchor="middle">PELLIKUTHURU &amp; HALDI</text>
</svg>`;

// 2. event-ritual.svg (Veda Kalyana Snathakam & Holy Fire)
const eventRitual = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="erbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF7" />
      <stop offset="100%" stop-color="#FCEEE5" />
    </linearGradient>
    <linearGradient id="goldR" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#erbg)" rx="8" />
  <rect x="8" y="8" width="384" height="224" rx="6" fill="none" stroke="#D4AF37" stroke-width="1.5" />
  <rect x="14" y="14" width="372" height="212" rx="4" fill="none" stroke="#800020" stroke-width="0.8" stroke-dasharray="4,3" />

  <!-- Sacred Agni Kundam -->
  <polygon points="150,140 250,140 235,165 165,165" fill="#800020" stroke="url(#goldR)" stroke-width="1.5" />
  <!-- Sacred Flame -->
  <path d="M 200 135 Q 212 95 200 65 Q 188 95 200 135 Z" fill="#FFE89C" />
  <path d="M 195 135 Q 206 100 195 80 Q 185 105 195 135 Z" fill="#FF8C00" />
  <path d="M 205 135 Q 215 105 205 85 Q 198 108 205 135 Z" fill="#E63946" />

  <!-- Traditional Sacred Purna Kalasam -->
  <g transform="translate(100, 100)">
    <circle cx="20" cy="40" r="18" fill="url(#goldR)" />
    <path d="M 10 25 Q 20 8 30 25 Z" fill="#8D5B4C" />
    <path d="M 6 25 Q 0 12 10 10 Z" fill="#3D5A45" />
    <path d="M 34 25 Q 40 12 30 10 Z" fill="#3D5A45" />
  </g>

  <!-- Brass Bell -->
  <g transform="translate(260, 95)" fill="url(#goldR)">
    <path d="M 20 10 L 20 28 L 8 50 L 32 50 L 20 28 Z" />
    <circle cx="20" cy="54" r="3" />
  </g>

  <text x="200" y="200" font-family="Cinzel, serif" font-size="14" fill="#800020" font-weight="bold" text-anchor="middle">SNATHAKAM &amp; VARAPUJA</text>
</svg>`;

// 3. event-muhurtham.svg (Jeelakarra Bellam & Mangalasutra)
const eventMuhurtham = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="embg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF7" />
      <stop offset="100%" stop-color="#FDF1DE" />
    </linearGradient>
    <linearGradient id="goldM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#embg)" rx="8" />
  <rect x="8" y="8" width="384" height="224" rx="6" fill="none" stroke="#D4AF37" stroke-width="1.5" />
  <rect x="14" y="14" width="372" height="212" rx="4" fill="none" stroke="#800020" stroke-width="0.8" stroke-dasharray="4,3" />

  <!-- Auspicious Mangalasutram Thread -->
  <path d="M 80 70 Q 200 160 320 70" stroke="#FFB703" stroke-width="4.5" fill="none" />
  <!-- Double Gold Sutrams -->
  <circle cx="188" cy="120" r="14" fill="url(#goldM)" stroke="#800020" stroke-width="1.5" />
  <circle cx="188" cy="120" r="7" fill="#800020" />
  <circle cx="212" cy="120" r="14" fill="url(#goldM)" stroke="#800020" stroke-width="1.5" />
  <circle cx="212" cy="120" r="7" fill="#800020" />

  <!-- Betel Leaf (Tamalapaku with Jeelakarra Bellam paste) -->
  <path d="M 200 138 C 170 170 200 178 200 178 C 200 178 230 170 200 138 Z" fill="#3D5A45" />
  <circle cx="200" cy="162" r="6" fill="#8B4513" />

  <!-- Flanking Traditional Lamps -->
  <g transform="translate(100, 110)">
    <path d="M 15 35 L 25 35 L 20 20 Z" fill="url(#goldM)" />
    <path d="M 20 18 Q 23 10 20 5 Q 17 10 20 18 Z" fill="#FF8C00" />
  </g>
  <g transform="translate(260, 110)">
    <path d="M 15 35 L 25 35 L 20 20 Z" fill="url(#goldM)" />
    <path d="M 20 18 Q 23 10 20 5 Q 17 10 20 18 Z" fill="#FF8C00" />
  </g>

  <text x="200" y="200" font-family="Cinzel, serif" font-size="14" fill="#800020" font-weight="bold" text-anchor="middle">LAGNA SUMUHURTHAM</text>
</svg>`;

// 4. event-reception.svg (Grand Royal Mandapam & Classical Nadaswaram)
const eventReception = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="erxbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF7" />
      <stop offset="100%" stop-color="#F8EADB" />
    </linearGradient>
    <linearGradient id="goldRX" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#erxbg)" rx="8" />
  <rect x="8" y="8" width="384" height="224" rx="6" fill="none" stroke="#D4AF37" stroke-width="1.5" />
  <rect x="14" y="14" width="372" height="212" rx="4" fill="none" stroke="#800020" stroke-width="0.8" stroke-dasharray="4,3" />

  <!-- Royal Grand Arch -->
  <path d="M 90 160 L 90 70 Q 200 35 310 70 L 310 160" fill="none" stroke="url(#goldRX)" stroke-width="4" />
  <path d="M 105 160 L 105 78 Q 200 48 295 78 L 295 160" fill="none" stroke="#800020" stroke-width="1.5" />

  <!-- Nadaswaram & Carnatic Flute Cross Motif -->
  <g stroke="#800020" stroke-width="1.5" fill="url(#goldRX)">
    <!-- Nadaswaram -->
    <path d="M 150 145 L 245 80 L 255 72 L 250 90 L 155 152 Z" />
    <!-- Flute -->
    <line x1="145" y1="80" x2="255" y2="145" stroke="#800020" stroke-width="4" stroke-linecap="round" />
    <circle cx="170" cy="95" r="1.5" fill="#FFF" />
    <circle cx="185" cy="104" r="1.5" fill="#FFF" />
    <circle cx="200" cy="113" r="1.5" fill="#FFF" />
    <circle cx="215" cy="122" r="1.5" fill="#FFF" />
  </g>

  <!-- Hanging Floral Garlands -->
  <path d="M 110 85 Q 150 115 190 85" stroke="#FF8C00" stroke-width="4" fill="none" stroke-dasharray="4,2" />
  <path d="M 210 85 Q 250 115 290 85" stroke="#FF8C00" stroke-width="4" fill="none" stroke-dasharray="4,2" />

  <text x="200" y="200" font-family="Cinzel, serif" font-size="14" fill="#800020" font-weight="bold" text-anchor="middle">WEDDING RECEPTION</text>
</svg>`;

// 5. ganesha.svg (Traditional Vigneshwara Auspicious Motif)
const ganeshaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <linearGradient id="goldGan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="40%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <!-- Auspicious Lord Ganesha Minimalist Traditional Stroke -->
  <g fill="none" stroke="url(#goldGan)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <!-- Crown (Kireetam) -->
    <path d="M 90 35 L 100 20 L 110 35 Z" fill="url(#goldGan)" />
    <path d="M 85 40 L 115 40" stroke-width="3" />
    <!-- Head & Ears -->
    <path d="M 85 45 C 55 50 50 85 70 95 C 80 100 85 85 85 75" />
    <path d="M 115 45 C 145 50 150 85 130 95 C 120 100 115 85 115 75" />
    <!-- Trunk (Vakratunda) -->
    <path d="M 100 50 L 100 110 C 100 135 125 140 135 120 C 140 110 130 105 125 112" stroke-width="5" />
    <!-- Modakam in hand -->
    <circle cx="140" cy="105" r="7" fill="#FF8C00" stroke="none" />
    <!-- Tilak on forehead -->
    <line x1="94" y1="58" x2="106" y2="58" stroke="#800020" stroke-width="2.5" />
    <circle cx="100" cy="65" r="2.5" fill="#800020" stroke="none" />
  </g>
</svg>`;

// 6. kalasam.svg
const kalasamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
  <defs>
    <linearGradient id="goldK" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE89C" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9E781E" />
    </linearGradient>
  </defs>
  <!-- Coconut -->
  <ellipse cx="50" cy="35" rx="18" ry="24" fill="#8D5B4C" />
  <!-- Mango Leaves -->
  <path d="M 25 55 Q 12 30 28 20 Q 36 38 40 55 Z" fill="#3D5A45" />
  <path d="M 75 55 Q 88 30 72 20 Q 64 38 60 55 Z" fill="#3D5A45" />
  <path d="M 50 50 Q 50 12 50 8 Q 58 28 55 50 Z" fill="#4A6F54" />
  <!-- Pot (Kumbham) -->
  <path d="M 32 55 L 68 55 L 72 65 L 28 65 Z" fill="url(#goldK)" />
  <ellipse cx="50" cy="85" rx="34" ry="28" fill="url(#goldK)" />
  <ellipse cx="50" cy="110" rx="22" ry="6" fill="url(#goldK)" />
  <!-- Auspicious Swastika or Red Bottu on Pot -->
  <circle cx="50" cy="85" r="10" fill="#800020" />
  <circle cx="50" cy="85" r="4" fill="#FFB703" />
</svg>`;

const eventFiles = [
  { name: 'event-haldi.svg', content: eventHaldi },
  { name: 'event-ritual.svg', content: eventRitual },
  { name: 'event-muhurtham.svg', content: eventMuhurtham },
  { name: 'event-reception.svg', content: eventReception },
  { name: 'ganesha.svg', content: ganeshaSvg },
  { name: 'kalasam.svg', content: kalasamSvg },
];

eventFiles.forEach(f => {
  fs.writeFileSync(path.join(outDir, f.name), f.content, 'utf8');
  console.log('Created ' + f.name);
});
