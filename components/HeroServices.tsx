"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroServices() {
  const [titleTyped, setTitleTyped] = useState(false);

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-8 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Colonne gauche — Texte ── */}
          <div>
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
                minHeight: "135px",
              }}
            >
              {titleTyped ? (
                <>
                  Notre <span style={{ color: "#E84010" }}>expertise</span>,<br />votre vision.
                </>
              ) : (
                <TypeAnimation
                  sequence={[
                    "Notre expertise,\nvotre vision.",
                    () => setTitleTyped(true),
                  ]}
                  speed={50}
                  cursor={false}
                  wrapper="span"
                  style={{ whiteSpace: "pre-line" }}
                />
              )}
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
                color: "#4B5563",
                maxWidth: "480px",
              }}
            >
              De la conception stratégique à la production finale, nous vous accompagnons sur l'ensemble de vos projets audiovisuels et digitaux avec une maîtrise totale de la chaîne de valeur.
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
              className="relative overflow-hidden w-full max-h-[600px]"
              style={{
                borderRadius: "24px 4px 24px 4px",
                aspectRatio: "1 / 1.15",
                boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/img6.jpeg"
                alt="SINANI — Expertise audiovisuelle"
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
