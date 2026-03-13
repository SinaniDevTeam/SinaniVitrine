"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroContact() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-8 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Colonne gauche — Texte & Légende ── */}
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
              Contact
            </motion.span>

            {/* Grand texte décoratif */}
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
                letterSpacing: "-0.02em",
              }}
            >
              TRACE
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
              Laissez votre{" "}
              <span style={{ color: "#E84010" }}>empreinte</span>{" "}
              ici.
            </motion.h1>

            {/* Légende */}
            <motion.p
              className="mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: 1.75,
                color: "#6B7280",
                maxWidth: "480px",
              }}
            >
              Sur ce mur, chaque nom gravé est une promesse tenue. Une présence
              qui dit{" "}
              <em style={{ color: "#111111", fontStyle: "normal", fontWeight: 600 }}>
                « j&apos;étais là, j&apos;ai créé quelque chose »
              </em>
              . Chez SINANI, chaque projet laisse une empreinte durable — sur
              l&apos;image, sur les esprits, sur la Guinée.
            </motion.p>

            {/* Citation encadrée */}
            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                borderLeft: "3px solid #E84010",
                paddingLeft: "16px",
                marginTop: "28px",
              }}
            >
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#9CA3AF",
                lineHeight: 1.7,
                textTransform: "uppercase",
              }}>
                &ldquo;Raconter, c&apos;est exister.
                <br />
                Créer, c&apos;est laisser une trace.&rdquo;
              </p>
            </motion.blockquote>

            {/* Métadonnée style magazine */}
            <motion.div
              className="flex items-center gap-3 mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9CA3AF",
              }}>
                Mur des empreintes · Conakry
              </span>
              <span style={{ display: "block", width: "20px", height: "1px", background: "#E5E7EB" }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(232,64,16,0.6)",
              }}>
                Archives SINANI
              </span>
            </motion.div>
          </div>

          {/* ── Colonne droite — Image ── */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "4px 24px 4px 24px",
                aspectRatio: "4657 / 7002",
                boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/img5.jpeg"
                alt="Mur des empreintes — Conakry"
                fill
                className="object-cover object-center"
                priority
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                pointerEvents: "none",
              }} />
              {/* Badge ∞ */}
              <div style={{
                position: "absolute",
                bottom: "24px", right: "24px",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(232,64,16,0.3)",
                padding: "10px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                borderRadius: "4px",
              }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#E84010", lineHeight: 1 }}>∞</span>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Empreintes</span>
              </div>
            </div>

            {/* Accent décoratif */}
            <div
              className="absolute -bottom-4 -left-4 -z-10"
              style={{ width: "70%", height: "60%", borderRadius: "24px", background: "rgba(232,64,16,0.07)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
