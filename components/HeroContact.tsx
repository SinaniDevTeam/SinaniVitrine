"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroContact() {
  const [titleTyped, setTitleTyped] = useState(false);

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-8 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Colonne gauche — Texte & Légende ── */}
          <div>
            
            {/* Titre principal avec Typing Effect */}
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
                minHeight: "135px", /* Empêche le saut de layout pendant la frappe */
              }}
            >
              {titleTyped ? (
                <>
                  Vous aussi, <br />laissez votre <span style={{ color: "#E84010" }}>trace</span>.
                </>
              ) : (
                <TypeAnimation
                  sequence={[
                    "Vous aussi,\nlaissez votre trace.",
                    () => setTitleTyped(true),
                  ]}
                  speed={50}
                  cursor={false}
                  wrapper="span"
                  style={{ whiteSpace: "pre-line" }}
                />
              )}
            </motion.h1>

            {/* Légende */}
            <motion.p
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: 1.75,
                color: "#4B5563",
                maxWidth: "480px",
              }}
            >
              Ici, à l'agence, nous avons un mur brut où talents, collaborateurs et 
              partenaires viennent apposer leur signature. C'est l'histoire vivante 
              de SINANI : passez nous voir, discutons de votre projet, et ajoutez 
              votre nom à l'édifice.
            </motion.p>

            {/* Info direct */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                borderLeft: "3px solid #E84010",
                paddingLeft: "16px",
                marginTop: "32px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="mailto:contact@sinani.com" style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#111111",
                  textDecoration: "none",
                  display: "inline-block"
                }}>
                  hello@sinani.gn
                </a>
                <a href="tel:+22400000000" style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#4B5563",
                  textDecoration: "none",
                  display: "inline-block"
                }}>
                  +224 620 00 00 00
                </a>
              </div>
            </motion.div>

            {/* Métadonnée style agence */}
            <motion.div
              className="flex items-center gap-3 mt-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9CA3AF",
              }}>
                Siège social · Conakry
              </span>
              <span style={{ display: "block", width: "24px", height: "1px", background: "#E5E7EB" }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(232,64,16,0.8)",
                fontWeight: 600
              }}>
                Disponibles
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
              className="relative overflow-hidden w-full max-h-[600px]"
              style={{
                borderRadius: "4px 24px 4px 24px",
                aspectRatio: "1 / 1.15",
                boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/img5.jpeg"
                alt="Mur des empreintes — Conakry"
                fill
                className="object-cover object-top"
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
