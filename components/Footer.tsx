"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

/* ── Ticker pellicule ── */
const tickerWords = [
  "DOCUMENTAIRE", "GUINÉE", "IMAGE", "SON", "CULTURE",
  "PUBLICITÉ", "INCUBATEUR", "CONAKRY", "TALENT", "PRODUCTION",
  "STORYTELLING", "AUDIOVISUEL", "CRÉATIVITÉ", "SINANI",
];

function FilmTicker() {
  const items = [...tickerWords, ...tickerWords];
  return (
    <div style={{
      width: "100%", overflow: "hidden", background: "#E84010",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      padding: "9px 0", position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 22px, rgba(0,0,0,0.3) 22px, rgba(0,0,0,0.3) 30px)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
        backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 22px, rgba(0,0,0,0.3) 22px, rgba(0,0,0,0.3) 30px)",
      }} />
      <motion.div
        style={{ display: "flex", gap: "40px", whiteSpace: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map((word, i) => (
          <span key={i} style={{
            fontFamily: "'Courier New', monospace", fontSize: "10px",
            fontWeight: 700, letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.9)",
            display: "inline-flex", alignItems: "center", gap: "40px",
          }}>
            {word}
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "8px" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Items ── */
const services = [
  "Production audiovisuelle", "Spots publicitaires",
  "Marketing digital", "Community Management",
  "Studio photo & podcast", "Motion design",
];

const incubateur = [
  "Programme Seed (2 ans)", "Formation pratique",
  "Direction artistique", "Partenaires ISIC & Beaux-Arts",
];

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Courier New', monospace", fontSize: "9px",
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: "#E84010", marginBottom: "16px",
      display: "flex", alignItems: "center", gap: "10px",
    }}>
      <span style={{ display: "block", width: "14px", height: "1px", background: "#E84010", opacity: 0.5 }} />
      {children}
    </p>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link href={href} style={{
        fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 400,
        color: hovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)",
        textDecoration: "none", display: "inline-block",
        transition: "color 0.2s, padding-left 0.2s",
        paddingLeft: hovered ? "6px" : "0",
      }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </Link>
    </li>
  );
}

/* ── Footer ── */
export default function Footer() {
  return (
    <footer style={{ background: "#0a0908", width: "100%" }}>

      <FilmTicker />

      {/* ── CTA Banner ── */}
      <div 
        className="px-6 md:px-[60px] py-6 md:py-8 flex flex-wrap justify-between items-center gap-5"
        style={{
          background: "linear-gradient(90deg, #0f0d0b 0%, #1a100a 50%, #0f0d0b 100%)",
          borderBottom: "1px solid rgba(232,64,16,0.15)",
        }}
      >
        <div>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 700,
            color: "#f5ede0",
            lineHeight: 1.2,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
          }}>
            Votre projet mérite d&apos;être vu.
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.35)",
            marginTop: "4px",
            letterSpacing: "0.04em",
          }}>
            Racontons la Guinée ensemble — soumettez votre idée.
          </p>
        </div>
        <Link
          href="/contact#contact-form"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#fff",
            background: "#E84010",
            padding: "12px 28px",
            textDecoration: "none",
            display: "inline-block",
            clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
          }}
        >
          Soumettre un projet →
        </Link>
      </div>

      {/* ── Logo centré ── */}
      <div className="flex justify-center py-4">
        <Link href="/">
          <Image src="/images/Blanc.png" alt="SINANI" width={130} height={52} style={{ objectFit: "contain" }} />
        </Link>
      </div>

      {/* Main grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] py-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-b border-white/5">

        {/* COL 1 — Identité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/5 md:border-b-0 md:border-r md:pr-[52px] pb-4 md:pb-0"
        >
          <div style={{
            display: "inline-block", marginBottom: "12px",
            fontFamily: "'Courier New', monospace", fontSize: "9px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#E84010", border: "1px solid rgba(232,64,16,0.3)",
            padding: "3px 10px",
          }}>
            Agence · Incubateur Audiovisuel
          </div>

          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "13px",
            lineHeight: 1.8, color: "rgba(255,255,255,0.35)",
            marginTop: "18px", maxWidth: "280px",
          }}>
            SINANI incube les talents audiovisuels guinéens et produit des contenus qui{" "}
            <span style={{ color: "rgba(232,64,16,0.75)", fontStyle: "italic" }}>racontent la Guinée</span>{" "}
            au monde.
          </p>

          {/* Contact */}
          <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <a href="mailto:contact@agencesinani.com" style={{
              fontFamily: "Inter, sans-serif", fontSize: "13px",
              color: "rgba(255,255,255,0.4)", textDecoration: "none",
            }}>
              contact@agencesinani.com
            </a>
          </div>
        </motion.div>

        {/* COL 2 — Agence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="border-b border-white/5 md:border-b-0 md:border-r md:px-[36px] pb-4 md:pb-0"
        >
          <ColTitle>Agence</ColTitle>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
            {services.map(s => <NavItem key={s} label={s} href="/services" />)}
          </ul>
        </motion.div>

        {/* COL 3 — Incubateur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="pb-4 md:pb-0 md:pl-9"
        >
          <ColTitle>Incubateur</ColTitle>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
            {incubateur.map(s => <NavItem key={s} label={s} href="/about" />)}
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] py-5 flex flex-wrap justify-between items-center gap-4">
        <p style={{
          fontFamily: "'Courier New', monospace", fontSize: "10px",
          color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em",
        }}>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "rgba(255,255,255,0.75)" }}>SINANI</span>
          {" "}— Agence de publicité & incubateur audiovisuel · Conakry, Guinée
        </p>
        <div style={{ display: "flex", gap: "18px" }}>
          {["Mentions légales", "Confidentialité", "CGU"].map(label => (
            <a key={label} href="#" style={{
              fontFamily: "'Courier New', monospace", fontSize: "10px",
              color: "rgba(255,255,255,0.4)", textDecoration: "none", letterSpacing: "0.05em",
            }}>
              {label}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}