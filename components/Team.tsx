"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const membres = [
  { nom: "Rahim Sidibé", role: "Fondateur & Directeur Général", photo: "/images/team_membre_1.png" },
  { nom: "Zaynab Camara", role: "Directrice des Ressources Humaines", photo: "/images/team_membre_2.png" },
  { nom: "Zayatte", role: "Directeur des Opérations", photo: "/images/team_membre_3.png" },
  { nom: "Saliou Dian Diaby", role: "Responsable Marketing Digital", photo: "/images/team_membre_4.png" },
  { nom: "Mariama Diallo", role: "Coordinatrice Incubateur", photo: "/images/team_membre_5.png" },
  { nom: "Oumar Traoré", role: "Réalisateur & Chef de Production", photo: "/images/team_membre_6.png" },
  { nom: "Kadiatou Sylla", role: "Responsable Partenariats", photo: "/images/team_membre_1.png" },
  { nom: "Sekou Barry", role: "Ingénieur du Son", photo: "/images/team_membre_3.png" },
];

const VISIBLE = 4;

export default function Team() {
  const [titleTyped, setTitleTyped] = useState(false);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const maxIndex = membres.length - VISIBLE;

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, maxIndex)), [maxIndex]);

  return (
    <section className="w-full bg-white pt-10 md:pt-16 pb-16 md:pb-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Titre ── */}
        <motion.div
          className="mb-6 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            ref={titleRef}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: "1.1",
              color: "#111111",
              minHeight: "1.2em",
            }}
          >
            {titleTyped ? (
              <>L&apos;équipe derrière <span style={{ color: "#E84010" }}>SINANI</span></>
            ) : isInView ? (
              <TypeAnimation
                sequence={["Les cerveaux derrière SINANI", () => setTitleTyped(true)]}
                speed={50}
                cursor={false}
                wrapper="span"
              />
            ) : null}
          </h2>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Bouton ◀ */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              transform: "translate(-50%, -50%)",
              border: "1.5px solid",
              borderColor: current === 0 ? "#E5E7EB" : "#111111",
              color: current === 0 ? "#D1D5DB" : "#111111",
              background: "#ffffff",
              cursor: current === 0 ? "default" : "pointer",
            }}
          >
            <ChevronLeft />
          </button>

          {/* Bouton ▶ */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              transform: "translate(50%, -50%)",
              border: "1.5px solid",
              borderColor: current === maxIndex ? "#E5E7EB" : "#111111",
              color: current === maxIndex ? "#D1D5DB" : "#111111",
              background: "#ffffff",
              cursor: current === maxIndex ? "default" : "pointer",
            }}
          >
            <ChevronRight />
          </button>

          {/* Piste */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current} * (100% / ${VISIBLE} + (${VISIBLE - 1} * 24px / ${VISIBLE})))` }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              {membres.map((membre, i) => (
                <motion.div
                  key={`${membre.nom}-${i}`}
                  className="group flex flex-col shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % VISIBLE) * 0.08 }}
                >
                  {/* Photo */}
                  <div
                    className="relative overflow-hidden w-full"
                    style={{ aspectRatio: "3 / 4", borderRadius: "8px", background: "#111111" }}
                  >
                    <Image
                      src={membre.photo}
                      alt={membre.nom}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: "linear-gradient(to top, rgba(232,64,16,0.22) 0%, transparent 60%)" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: "#E84010" }}
                    />
                  </div>

                  {/* Nom + Rôle */}
                  <div className="mt-4 flex flex-col gap-1">
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: "700", color: "#111111", lineHeight: "1.3" }}>
                      {membre.nom}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: "700", color: "#E84010", letterSpacing: "0.3px" }}>
                      {membre.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mt-8 h-[2px] w-full rounded-full overflow-hidden" style={{ background: "#E5E7EB" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "#E84010" }}
            animate={{ width: `${((current + VISIBLE) / membres.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          />
        </div>

      </div>
    </section>
  );
}
