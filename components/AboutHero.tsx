"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function AboutHero() {
  const [titleTyped, setTitleTyped] = useState(false);

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-8 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Colonne gauche — Texte */}
          <div>
           
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
                minHeight: "135px",
              }}
            >
              {titleTyped ? (
                <>
                  Une équipe créative dédiée à raconter la <span style={{ color: "#E84010" }}>Guinée</span>.
                </>
              ) : (
                <TypeAnimation
                  sequence={[
                    "Une équipe créative\ndédiée à raconter la Guinée.",
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
              className="mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.6vw, 20px)",
                lineHeight: 1.7,
                color: "#4B5563",
                maxWidth: "480px",
              }}
            >
              Plus qu'une agence, SINANI est un collectif de professionnels 
              passionnés par l'image, le son et la stratégie digitale, 
              engagés à propulser la créativité locale.
            </motion.p>

          </div>

          {/* Colonne droite — Video */}
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)" }}
          >
            <video
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-about1.jpg"
            >
              <source src="/videos/team-sinani.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
