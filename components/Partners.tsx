"use client";

import { motion } from "framer-motion";

const partenaires = [
  {
    nom: "Orange",
    logo: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
        <rect x="0" y="5" width="30" height="30" rx="4" fill="#FF7900" />
        <text
          x="38"
          y="28"
          fontFamily="Inter, sans-serif"
          fontSize="22"
          fontWeight="700"
          fill="#333"
        >
          Orange
        </text>
      </svg>
    ),
  },
  {
    nom: "Canal+",
    logo: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
        <rect x="0" y="5" width="120" height="30" rx="4" fill="#111" />
        <text
          x="14"
          y="27"
          fontFamily="Inter, sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="#fff"
        >
          CANAL+
        </text>
      </svg>
    ),
  },
  {
    nom: "UNESCO",
    logo: (
      <svg width="130" height="40" viewBox="0 0 130 40" fill="none">
        <text
          x="0"
          y="28"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="700"
          fill="#0077C8"
        >
          UNESCO
        </text>
      </svg>
    ),
  },
  {
    nom: "Adobe",
    logo: (
      <svg width="110" height="40" viewBox="0 0 110 40" fill="none">
        <polygon points="0,35 12,5 24,35" fill="#FF0000" />
        <text
          x="30"
          y="28"
          fontFamily="Inter, sans-serif"
          fontSize="22"
          fontWeight="700"
          fill="#333"
        >
          Adobe
        </text>
      </svg>
    ),
  },
  {
    nom: "Sony",
    logo: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
        <text
          x="0"
          y="30"
          fontFamily="Inter, sans-serif"
          fontSize="28"
          fontWeight="700"
          fill="#333"
          letterSpacing="3"
        >
          SONY
        </text>
      </svg>
    ),
  },
  {
    nom: "YouTube",
    logo: (
      <svg width="130" height="40" viewBox="0 0 130 40" fill="none">
        <rect x="0" y="8" width="28" height="24" rx="6" fill="#FF0000" />
        <polygon points="11,14 11,26 22,20" fill="#fff" />
        <text
          x="34"
          y="28"
          fontFamily="Inter, sans-serif"
          fontSize="19"
          fontWeight="700"
          fill="#333"
        >
          YouTube
        </text>
      </svg>
    ),
  },
  {
    nom: "Meta",
    logo: (
      <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
        <text
          x="0"
          y="30"
          fontFamily="Inter, sans-serif"
          fontSize="28"
          fontWeight="700"
          fill="#0668E1"
        >
          Meta
        </text>
      </svg>
    ),
  },
  {
    nom: "DHL",
    logo: (
      <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
        <rect x="0" y="8" width="90" height="24" rx="2" fill="#FFCC00" />
        <text
          x="18"
          y="27"
          fontFamily="Inter, sans-serif"
          fontSize="22"
          fontWeight="900"
          fill="#D40511"
        >
          DHL
        </text>
      </svg>
    ),
  },
];

const doubled = [...partenaires, ...partenaires];

export default function Partners() {
  return (
    <section className="w-full bg-white py-14 md:py-20 overflow-hidden">
      {/* Bande défilante */}
      <div
        className="relative w-full"
        style={{
          borderTop: "1px solid #E5E7EB",
          borderBottom: "1px solid #E5E7EB",
          padding: "28px 0",
        }}
      >
        <div className="marquee-track flex items-center gap-20">
          {doubled.map((p, i) => (
            <div
              key={`${p.nom}-${i}`}
              className="shrink-0 flex items-center justify-center"
              style={{
                opacity: 0.5,
                filter: "grayscale(100%)",
                transition: "opacity 0.3s, filter 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.5";
                e.currentTarget.style.filter = "grayscale(100%)";
              }}
            >
              {p.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
