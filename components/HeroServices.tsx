"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroServices() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-8 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Colonne gauche — Texte ── */}
          <div>
            {/* Overline */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-block",
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#E84010",
                borderBottom: "1px solid rgba(232,64,16,0.35)",
                paddingBottom: "4px",
                marginBottom: "24px",
              }}
            >
              Nos services
            </motion.span>

            {/* Grand numéro décoratif */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(80px, 14vw, 160px)",
                fontWeight: 900,
                lineHeight: 0.85,
                color: "rgba(232,64,16,0.08)",
                userSelect: "none",
                marginBottom: "-12px",
              }}
            >
              N°10
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
              }}
            >
              Le numéro{" "}
              <span style={{ color: "#E84010" }}>10</span>{" "}
              de l&apos;écosystème audiovisuel
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              className="mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.6vw, 20px)",
                lineHeight: 1.7,
                color: "#6B7280",
                maxWidth: "480px",
              }}
            >
              Comme le 10 sur un terrain de foot, SINANI orchestre, crée et
              diffuse — au service des marques, des talents et de la culture
              guinéenne.
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {["Production", "Studio", "Marketing", "Formation"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "6px 16px",
                    borderRadius: "99px",
                    background: "rgba(232,64,16,0.06)",
                    color: "#E84010",
                    border: "1px solid rgba(232,64,16,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Colonne droite — Image ── */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Bloc image principal */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "24px 4px 24px 4px",
                aspectRatio: "4 / 5",
                boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/img6.jpeg"
                alt="SINANI — Numéro 10 de l'audiovisuel guinéen"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Accent orange décoratif */}
            <div
              className="absolute -bottom-4 -right-4 -z-10"
              style={{
                width: "70%",
                height: "60%",
                borderRadius: "24px",
                background: "rgba(232,64,16,0.07)",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
