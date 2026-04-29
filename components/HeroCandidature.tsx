"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroCandidature() {
  const [titleTyped, setTitleTyped] = useState(false);

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 md:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Colonne gauche — Texte */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(34px, 8vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#111111",
              }}
            >
              {titleTyped ? (
                <>
                  Rejoignez la famille{" "}
                  <span style={{ color: "#E84010" }}>SINANI</span>.
                </>
              ) : (
                <TypeAnimation
                  sequence={[
                    "Rejoignez la famille SINANI.",
                    () => setTitleTyped(true),
                  ]}
                  speed={50}
                  cursor={false}
                  wrapper="span"
                  style={{ whiteSpace: "pre-line" }}
                />
              )}
            </motion.h1>

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
                letterSpacing: "0",
                color: "#4B5563",
              }}
            >
              Vous êtes acteur, mannequin, animateur ou créateur de contenu ?
              Vous rêvez de produire un podcast qui marquera les auditeurs ?
              Nous cherchons les talents qui feront rayonner la Guinée.
            </motion.p>

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
                <span style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#111111",
                }}>
                  Candidatures ouvertes
                </span>
                <span style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#4B5563",
                }}>
                  Rejoignez nos talents ou Proposez votre podcast
                </span>
              </div>
            </motion.div>

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
                Conakry · Guinée
              </span>
              <span style={{ display: "block", width: "24px", height: "1px", background: "#E5E7EB" }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(232,64,16,0.8)",
                fontWeight: 600,
              }}>
                SINANI
              </span>
            </motion.div>
          </div>

          {/* Colonne droite — Image */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="relative overflow-hidden w-full"
              style={{
                borderRadius: "4px 24px 4px 24px",
                aspectRatio: "4 / 3",
                boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/candidat/rejoindre.jpeg"
                alt="Rejoindre SINANI"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 35%" }}
                priority
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)",
                pointerEvents: "none",
              }} />
            </div>

            <div
              className="absolute -bottom-4 -left-4 -z-10"
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
