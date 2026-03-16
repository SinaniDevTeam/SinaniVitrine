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
                className={`text-sm lg:text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logo centré */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="flex items-center select-none">
            <Image
              src="/images/Noir.png"
              alt="SINANI — Agence"
              width={100}
              height={48}
              className="object-contain w-20 md:w-24 lg:w-[120px]"
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
          className="md:hidden text-gray-800 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Menu mobile déroulant — glassmorphism */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          }}
        >
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
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
