"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#111111" }}
      className="w-full pt-16 pb-8 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top — logo + nav + socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Noir.png"
              alt="SINANI"
              width={120}
              height={48}
              className="object-contain brightness-0 invert"
            />
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-white!"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E84010";
                  e.currentTarget.style.color = "#E84010";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle — description + contact */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

          <div className="max-w-md">
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              SINANI est un incubateur audiovisuel et une agence de publicité
              basée à Conakry, Guinée. Notre mission : former les talents locaux
              et raconter la Guinée au monde.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Contact
            </p>
            <a
              href="mailto:contact@sinani.gn"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
              }}
            >
              contact@sinani.gn
            </a>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Conakry, Guinée
            </p>
          </div>
        </div>

        {/* Bottom — copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: "400",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © {new Date().getFullYear()} SINANI. Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: "400",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Conçu avec passion à Conakry
          </p>
        </div>

      </div>
    </footer>
  );
}
