"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const steps = [
  {
    year: "Constat",
    title: "Un écosystème à construire",
    desc: "L'audiovisuel guinéen souffre d'un manque de moyens. Les jeunes diplômés n'ont ni équipements, ni structures pour exercer. Les Guinéens se tournent vers les contenus étrangers.",
  },
  {
    year: "Idée",
    title: "Un incubateur + une agence",
    desc: "Créer un espace qui forme les talents, met à disposition du matériel de pointe et produit des contenus qui racontent la Guinée de l'intérieur.",
  },
  {
    year: "Action",
    title: "SINANI voit le jour",
    desc: "Un studio équipé, un espace de coworking, des partenariats avec l'ISIC et les Beaux-Arts de Dubréka. La chaîne de valeur est en place.",
  },
  {
    year: "Vision",
    title: "Faire rayonner la Guinée",
    desc: "Positionner la Guinée comme une référence audiovisuelle en Afrique. Former, produire, diffuser — un soft power par et pour les Guinéens.",
  },
];

export default function AboutTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const [titleTyped, setTitleTyped] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.15,
          }}
        >
          {titleTyped ? (
            <>
              D&apos;un constat sur le terrain à une vision pour{" "}
              <span style={{ color: "#E84010" }}>l&apos;audiovisuel guinéen</span>
            </>
          ) : titleInView ? (
            <TypeAnimation
              sequence={[
                "D'un constat sur le terrain à une vision pour l'audiovisuel guinéen",
                () => setTitleTyped(true),
              ]}
              speed={50}
              cursor={false}
            />
          ) : (
            <span style={{ opacity: 0 }}>
              D&apos;un constat sur le terrain à une vision pour l&apos;audiovisuel guinéen
            </span>
          )}
        </motion.h2>
        <motion.p
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(24px, 3.5vw, 48px)",
            lineHeight: 1.2,
            color: "#111111",
          }}
        >
          On équipe les talents, produit des contenus authentiques
          et raconte la Guinée autrement.
        </motion.p>

        {/* Timeline alternee */}
        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Ligne verticale animee */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px origin-top -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #E84010, rgba(232,64,16,0.08))",
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            >
              <div className="hidden md:block w-1/2" />

              {/* Point avec pulse */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10" style={{ top: "6px" }}>
                <motion.div
                  className="absolute -inset-2 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: [0, 1.8, 0], opacity: [0, 0.3, 0] }
                      : {}
                  }
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + i * 0.2,
                    ease: "easeOut",
                  }}
                  style={{ background: "#E84010" }}
                />
                <motion.div
                  className="w-4 h-4 rounded-full border-2 relative z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  style={{
                    background: "#ffffff",
                    borderColor: "#E84010",
                  }}
                />
              </div>

              {/* Carte contenu */}
              <motion.div
                className="pl-14 md:pl-0 md:w-1/2 md:px-12"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="p-6 rounded-2xl transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #F0F0F0",
                  }}
                >
                  <span
                    className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{
                      background: "rgba(232,64,16,0.08)",
                      color: "#E84010",
                    }}
                  >
                    {step.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(18px, 2vw, 24px)",
                      fontWeight: 700,
                      color: "#111111",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "#6B7280",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
