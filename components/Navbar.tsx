"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// Les icônes sont maintenant importées de react-icons/fa

const socialLinks = [
  { href: "https://www.instagram.com/agencesinani?igsh=MWdrZGp6ZmU5bzZ1Yw==", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.facebook.com/share/16x35zh3ma/?mibextid=wwXIfr", label: "Facebook", Icon: FaFacebookF },
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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500"
      style={
        scrolled
          ? {
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
          }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between relative">

        {/* Navigation gauche */}
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
                className={`text-sm lg:text-base font-semibold transition-colors duration-200 ${isActive
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

        {/* Icônes réseaux sociaux à droite — dans des cercles */}
        <div className="hidden md:flex items-center gap-3 w-1/3 justify-end">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-gray-800 ml-auto p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Menu mobile déroulant — glassmorphism */}
      <div
        className={`md:hidden fixed inset-0 z-[60] flex flex-col transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center justify-between h-20 px-8 border-b border-gray-100">
          <span 
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Menu
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-gray-800 p-2">
            <CloseIcon />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 p-10 pt-16">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-4xl font-bold transition-colors ${
                  isActive ? "text-orange-500" : "text-gray-900 hover:text-orange-500"
                }`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-10 border-t border-gray-100 flex items-center justify-between">
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p 
            className="text-[9px] uppercase tracking-[0.2em] text-gray-300 font-bold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sinani © 2026
          </p>
        </div>
      </div>
    </header>
  );
}
