import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'icon-only' | 'stacked';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  onClick,
}) => {
  // Official vaptechsol logo vector mark (vaptechsol-logo.webp):
  // 1. Large 3D Blue Ribbon V base with dimensional fold facets
  // 2. Red "V" glyph + overarching sweeping Red hood/canopy over Blue "AP"
  // 3. Dual-zone Techno-Circuit halo:
  //    - Top arc: 4 layered concentric tracks with solid & hollow circular nodes, transitioning from royal blue to signal red
  //    - Bottom-right arc: 4 concentric royal blue tracks with 45-degree angled terminal node stems
  // 4. Wordmark: "vap" in royal blue (#1053D4) and "techsol" in signal red (#E11D23)
  // ONLY THE LOGO IS RENDERED - NO EXTRA TAGLINES, SLOGANS, OR SUBTITLES.
  const LogoSymbol = ({ className = "w-14 h-14 md:w-16 md:h-16" }: { className?: string }) => (
    <svg
      viewBox="0 0 500 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none transition-transform duration-300 group-hover:scale-[1.03] ${className}`}
    >
      <defs>
        {/* Blue ribbon main gradient */}
        <linearGradient id="vts-blue-ribbon" x1="100" y1="180" x2="220" y2="310" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A7BF8" />
          <stop offset="60%" stopColor="#145CE0" />
          <stop offset="100%" stopColor="#0B42BA" />
        </linearGradient>

        {/* 3D Fold facet gradient */}
        <linearGradient id="vts-blue-fold" x1="160" y1="310" x2="235" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0A3699" />
          <stop offset="40%" stopColor="#1558D6" />
          <stop offset="100%" stopColor="#2F7EF8" />
        </linearGradient>

        {/* Red arch & V gradient */}
        <linearGradient id="vts-red-canopy" x1="180" y1="170" x2="350" y2="230" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E51820" />
          <stop offset="50%" stopColor="#ED1E24" />
          <stop offset="100%" stopColor="#C40C12" />
        </linearGradient>

        {/* Top circuit transition: Blue to Red */}
        <linearGradient id="vts-circuit-top" x1="140" y1="160" x2="390" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1053D4" />
          <stop offset="45%" stopColor="#1053D4" />
          <stop offset="70%" stopColor="#E11D23" />
          <stop offset="100%" stopColor="#E11D23" />
        </linearGradient>

        {/* Bottom blue circuit */}
        <linearGradient id="vts-circuit-bot" x1="390" y1="210" x2="250" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1053D4" />
          <stop offset="100%" stopColor="#0B40B5" />
        </linearGradient>
      </defs>

      {/* ========================================================= */}
      {/* 1. TOP CIRCUIT TRACES (Blue transitioning to Red at top-right) */}
      {/* ========================================================= */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Track 1 (Outermost Top Track) */}
        <path
          d="M 142 172 A 148 148 0 0 1 378 175"
          stroke="url(#vts-circuit-top)"
          strokeWidth="4.5"
          className="anim-circuit-blue"
        />
        <circle cx="142" cy="172" r="6" fill="#1053D4" />
        <circle cx="174" cy="138" r="5" stroke="#1053D4" strokeWidth="2.5" fill="#FFFFFF" />
        <circle cx="218" cy="106" r="6" fill="#1053D4" />

        {/* Outer branch to red node at top right */}
        <path
          d="M 324 108 L 348 118"
          stroke="#E11D23"
          strokeWidth="3.5"
          className="anim-circuit-red"
        />
        <circle cx="348" cy="118" r="5.5" fill="#E11D23" />
        <circle cx="332" cy="122" r="5" stroke="#E11D23" strokeWidth="2.5" fill="#FFFFFF" />

        {/* Outer branch at ~2:30 o'clock */}
        <path
          d="M 370 162 L 392 172"
          stroke="#E11D23"
          strokeWidth="3.5"
          className="anim-circuit-red"
        />
        <circle cx="392" cy="172" r="5.5" fill="#E11D23" />

        {/* Track 1 continuation downward on the right */}
        <path
          d="M 378 175 A 148 148 0 0 1 392 260"
          stroke="#E11D23"
          strokeWidth="4.5"
          className="anim-circuit-red"
        />
        <circle cx="392" cy="260" r="5" fill="#E11D23" />

        {/* Track 2 (Second Inner Top Track) */}
        <path
          d="M 172 160 A 126 126 0 0 1 368 200"
          stroke="url(#vts-circuit-top)"
          strokeWidth="4"
          className="anim-circuit-blue"
        />
        <circle cx="172" cy="160" r="4.5" stroke="#1053D4" strokeWidth="2.5" fill="#FFFFFF" />
        <circle cx="256" cy="74" r="5" fill="#1053D4" />
        <circle cx="368" cy="200" r="5" fill="#E11D23" />

        {/* Track 3 (Third Inner Top Track) */}
        <path
          d="M 196 166 A 106 106 0 0 1 346 170"
          stroke="url(#vts-circuit-top)"
          strokeWidth="3.5"
          className="anim-circuit-blue"
        />
        <circle cx="196" cy="166" r="4.5" fill="#1053D4" />
        <circle cx="282" cy="92" r="4" stroke="#E11D23" strokeWidth="2" fill="#FFFFFF" />
        <circle cx="346" cy="170" r="4.5" fill="#E11D23" />

        {/* Track 4 (Fourth Innermost Top Track) */}
        <path
          d="M 218 174 A 86 86 0 0 1 326 156"
          stroke="url(#vts-circuit-top)"
          strokeWidth="3.5"
          className="anim-circuit-blue"
        />
        <circle cx="218" cy="174" r="4" fill="#1053D4" />
        <circle cx="326" cy="156" r="4" fill="#E11D23" />
      </g>

      {/* ========================================================= */}
      {/* 2. BOTTOM-RIGHT CIRCUIT TRACES (4 Concentric Blue Streams) */}
      {/* ========================================================= */}
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M 374 246 A 146 146 0 0 1 292 342 L 272 342"
          stroke="url(#vts-circuit-bot)"
          strokeWidth="4"
          className="anim-circuit-blue"
        />
        <circle cx="272" cy="342" r="5" fill="#1053D4" />

        <path
          d="M 358 248 A 126 126 0 0 1 280 322 L 260 322"
          stroke="url(#vts-circuit-bot)"
          strokeWidth="3.5"
          className="anim-circuit-blue"
        />
        <circle cx="260" cy="322" r="4.5" fill="#1053D4" />

        <path
          d="M 342 250 A 106 106 0 0 1 270 300 L 252 300"
          stroke="url(#vts-circuit-bot)"
          strokeWidth="3"
          className="anim-circuit-blue"
        />
        <circle cx="252" cy="300" r="4" fill="#1053D4" />

        <path
          d="M 326 252 A 86 86 0 0 1 296 276 L 284 276"
          stroke="url(#vts-circuit-bot)"
          strokeWidth="3"
          className="anim-circuit-blue"
        />
        <circle cx="284" cy="276" r="3.5" fill="#1053D4" />
      </g>

      {/* ========================================================= */}
      {/* 3. CENTRAL MONOGRAM MARK */}
      {/* ========================================================= */}
      {/* A. Large 3D Blue Ribbon V (Left Arm & Folded Base) */}
      <g>
        <path
          d="M 104 186 L 152 186 L 202 310 L 165 310 Z"
          fill="url(#vts-blue-ribbon)"
        />
        <path
          d="M 165 310 L 236 310 L 264 262 L 202 262 Z"
          fill="url(#vts-blue-fold)"
        />
        <path
          d="M 178 262 L 202 310 L 202 262 Z"
          fill="#0B3AA6"
          opacity="0.85"
        />
      </g>

      {/* B. The Red "V" Glyph */}
      <g>
        <path
          d="M 176 190 L 194 190 L 214 246 L 198 246 Z"
          fill="url(#vts-red-canopy)"
        />
        <path
          d="M 214 246 L 230 246 L 254 172 L 236 172 Z"
          fill="url(#vts-red-canopy)"
        />
      </g>

      {/* C. The Sweeping Red Canopy / Hood over "AP" */}
      <path
        d="M 238 172 L 316 172 C 342 172, 360 190, 360 216 C 360 236, 348 248, 340 252 C 345 244, 346 230, 346 216 C 346 196, 332 186, 314 186 L 244 186 Z"
        fill="url(#vts-red-canopy)"
      />

      {/* D. Blue Letter "A" (Nested under canopy) */}
      <g fill="#1053D4">
        <path
          d="M 238 246 L 258 196 L 272 196 L 292 246 L 277 246 L 272 232 L 254 232 L 250 246 Z M 258 220 L 268 220 L 263 207 Z"
        />
      </g>

      {/* E. Blue Letter "P" (Nested under canopy) */}
      <g fill="#1053D4">
        <path
          d="M 298 246 L 298 196 L 324 196 C 336 196, 344 203, 344 214 C 344 225, 336 232, 324 232 L 313 232 L 313 246 Z M 313 220 L 322 220 C 327 220, 330 217.5, 330 214 C 330 210.5, 327 208, 322 208 L 313 208 Z"
        />
      </g>
    </svg>
  );

  // Variant for icon only
  if (variant === 'icon-only') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${className}`}
        title="vaptechsol"
      >
        <LogoSymbol className="w-12 h-12 sm:w-14 sm:h-14" />
      </div>
    );
  }

  // Variant for Stacked / Full (emblem on top, vaptechsol below - matching vaptechsol-logo.webp)
  if (variant === 'stacked') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex flex-col items-center justify-center cursor-pointer group select-none ${className}`}
      >
        <LogoSymbol className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
        <div className="flex items-baseline font-extrabold tracking-tight leading-none lowercase text-2xl sm:text-3xl md:text-4xl mt-1.5">
          <span className="text-[#1053D4]">vap</span>
          <span className="text-[#E11D23]">techsol</span>
        </div>
      </div>
    );
  }

  // Variant for Footer - ONLY THE LOGO (prominent, clean, zero extra slogans/subtitles)
  if (variant === 'footer') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center gap-4 sm:gap-5 cursor-pointer group select-none ${className}`}
        title="vaptechsol"
      >
        {/* Large, prominent emblem in footer */}
        <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
          <LogoSymbol className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
        </div>
        {/* Only the authentic brand wordmark */}
        <div className="flex items-baseline">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none lowercase">
            <span className="text-[#1053D4]">vap</span>
            <span className="text-[#E11D23]">techsol</span>
          </span>
        </div>
      </div>
    );
  }

  // Variant for Header - ONLY THE LOGO (prominent, clean, zero extra slogans/subtitles)
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 sm:gap-4 cursor-pointer group select-none ${className}`}
      title="vaptechsol"
    >
      {/* Bigger logo in header as requested */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <LogoSymbol className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
      </div>
      {/* Only the authentic brand wordmark */}
      <div className="flex items-baseline">
        <span className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight leading-none lowercase">
          <span className="text-[#1053D4]">vap</span>
          <span className="text-[#E11D23]">techsol</span>
        </span>
      </div>
    </div>
  );
};
