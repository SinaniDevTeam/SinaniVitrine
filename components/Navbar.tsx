"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Postuler", href: "/candidature" },
  { label: "Contact", href: "/contact" },
];

// Les icônes sont maintenant importées de react-icons/fa

const socialLinks = [
  { href: "https://www.facebook.com/share/16x35zh3ma/?mibextid=wwXIfr", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.instagram.com/agencesinani?igsh=MW9kOTlhdzVheXJ1OA==", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.tiktok.com/@sinani.studios?_r=1&_t=ZS-94k3pRDjuj2", label: "Tiktok", Icon: FaTiktok },
];

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
      className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500"
      style={
        scrolled
          ? {
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
          }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between relative">

        {/* Gauche : hamburger mobile / nav desktop */}
        <button
          className="md:hidden text-gray-800 p-2 -ml-2 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ touchAction: "manipulation" }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 w-1/3">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base font-semibold whitespace-nowrap transition-colors duration-200 ${isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                  }`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logo centré */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="flex items-center select-none">
            <Image
              src="/images/Noir.png"
              alt="SINANI — Agence"
              width={160}
              height={64}
              className="object-contain w-24 sm:w-28 md:w-32 lg:w-[124px]"
              priority
            />
          </Link>
        </div>

        {/* Droite : icônes réseaux sociaux (mobile + desktop) */}
        <div className="flex items-center gap-1 md:gap-3 justify-end md:w-1/3 z-10">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-[30px] h-[30px] md:w-9 md:h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
              <Icon size={12} className="md:size-[16px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Menu mobile déroulant — glassmorphism */}
    </header>

    {/* Menu mobile créatif — Centré (Déplacé hors du header pour corriger le positionnement au scroll) */}
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="md:hidden fixed inset-0 z-[60]"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />

          {/* Modal Centrée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden fixed inset-0 z-[70] flex items-center justify-center p-6 pointer-events-none"
          >
            <div
              className="w-full max-w-[300px] pointer-events-auto"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "40px",
                boxShadow: "0 30px 70px rgba(0, 0, 0, 0.25)",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              {/* Header discret */}
              <div className="flex justify-center pt-8 pb-4">
                <div className="w-8 h-1 rounded-full" style={{ background: "#E84010", opacity: 0.2 }} />
              </div>

              <nav className="flex flex-col items-center gap-2 py-8 px-6">
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group relative flex items-center justify-center py-4 rounded-2xl transition-all duration-300"
                        style={{
                          background: isActive ? "rgba(232, 64, 16, 0.05)" : "transparent",
                        }}
                      >
                        <span
                          className="text-[22px] font-bold transition-all duration-300"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            letterSpacing: "-0.02em",
                            color: isActive ? "#E84010" : "#111111",
                            transform: isActive ? "scale(1.05)" : "scale(1)",
                          }}
                        >
                          {link.label}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="activeDot"
                            className="absolute -bottom-1 w-1.5 h-1.5 rounded-full"
                            style={{ background: "#E84010" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bouton Fermer */}
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full py-6 text-[13px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors border-t border-gray-50"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
