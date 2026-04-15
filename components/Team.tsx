"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

interface Membre {
  nom: string;
  role: string;
  photo: string;
  scale: number;
  translate?: string;
}

const membres: Membre[] = [
  { nom: "Mohamed Rahim SIDIBÉ", role: "Directeur Général", photo: "/team/rahim.png", scale: 1 },
  { nom: "Fayçal ZAYATTE", role: "Directeur des Opérations", photo: "/team/fayçal.png", scale: 1 },
  { nom: "Néné Hawa DIALLO", role: "Administratrice Générale", photo: "/team/nene.png", scale: 1 },
  { nom: "Saliou Djan DIABY", role: "Responsable Commerciale", photo: "/team/saly.png", scale: 1 },
  { nom: "Nafissa KOROMA", role: "Assistante Artistique", photo: "/team/nafisa.png", scale: 1 },
  { nom: "Benjamin CAMARA", role: "Infographe Designer", photo: "/team/benji.png", scale: 1 },
  { nom: "Cheick Ahmed SIDIBÉ", role: "Responsable Photographe", photo: "/team/aba.png", scale: 1.15, translate: "22%, -12%" },
  { nom: "Abdoulaye KABA", role: "Assistant Photographe", photo: "/team/AK.png", scale: 1 },
  { nom: "Tommy NZEBO", role: "Réalisateur / Vidéographe", photo: "/team/tommy.png", scale: 1 },
  { nom: "Ousmane CAMARA", role: "Responsable Logistique", photo: "/team/ousmane.png", scale: 1.2 },
  { nom: "Fatoumata BAH", role: "Community Manager", photo: "/team/fatoumata.png", scale: 1, translate: "0%, -5%" },
  { nom: "Mamadou Alpha BALDÉ", role: "Responsable Digital", photo: "/team/mamadou.png", scale: 1 },
  { nom: "George SULTAN", role: "Réalisateur / Vidéographe", photo: "/team/IMG_7246-removebg-preview.png", scale: 1 }
];

export default function Team() {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = Math.max(0, membres.length - visibleCount);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, maxIndex));
  }, [maxIndex]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32 px-6 md:px-8">
      
      {/* Grain texture overlay - Masqué ou très léger sur mobile pour perf */}
      <div 
        className="absolute inset-0 opacity-[0.01] md:opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto">

        {/* ── Header avec animations ── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Titre principal */}
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "300",
              fontSize: "clamp(36px, 5.5vw, 72px)",
              lineHeight: "1",
              color: "#111111",
              letterSpacing: "-0.03em",
            }}
          >
            Les cerveaux derrière{" "}
            <motion.span
              style={{
                fontWeight: "700",
                fontStyle: "italic",
                background: "linear-gradient(135deg, #E84010 0%, #FF6B3D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingRight: "0.1em"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              SINANI
            </motion.span>
          </h2>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Bouton Précédent (Masqué sur mobile, on utilise le swipe) */}
          <motion.button
            onClick={prev}
            disabled={current === 0}
            aria-label="Précédent"
            className="hidden md:flex absolute left-0 top-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all duration-300"
            style={{
              transform: "translate(-50%, -50%)",
              border: "1.5px solid",
              borderColor: current === 0 ? "#E5E7EB" : "#111111",
              color: current === 0 ? "#D1D5DB" : "#111111",
              background: current === 0 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.95)",
              cursor: current === 0 ? "not-allowed" : "pointer",
              boxShadow: current === 0 ? "none" : "0 4px 12px rgba(0,0,0,0.08)",
              touchAction: "manipulation"
            }}
            whileHover={current !== 0 ? { scale: 1.1, backgroundColor: "#111111", color: "#ffffff" } : {}}
            whileTap={current !== 0 ? { scale: 0.95 } : {}}
          >
            <ChevronLeft />
          </motion.button>

          {/* Bouton Suivant (Masqué sur mobile, on utilise le swipe) */}
          <motion.button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Suivant"
            className="hidden md:flex absolute right-0 top-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all duration-300"
            style={{
              transform: "translate(50%, -50%)",
              border: "1.5px solid",
              borderColor: current === maxIndex ? "#E5E7EB" : "#111111",
              color: current === maxIndex ? "#D1D5DB" : "#111111",
              background: current === maxIndex ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.95)",
              cursor: current === maxIndex ? "not-allowed" : "pointer",
              boxShadow: current === maxIndex ? "none" : "0 4px 12px rgba(0,0,0,0.08)",
              touchAction: "manipulation"
            }}
            whileHover={current !== maxIndex ? { scale: 1.1, backgroundColor: "#111111", color: "#ffffff" } : {}}
            whileTap={current !== maxIndex ? { scale: 0.95 } : {}}
          >
            <ChevronRight />
          </motion.button>

          {/* Piste du carousel */}
          <div className="overflow-hidden touch-pan-y">
            <motion.div
              className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
              animate={{ 
                x: `calc(-${current} * (100% / ${visibleCount} + ${24 * (visibleCount - 1) / visibleCount}px))` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 25,
                mass: 0.8
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -40) {
                  next();
                } else if (offset.x > 40) {
                  prev();
                }
              }}
            >
              {membres.map((membre, i) => (
                <motion.div
                  key={`${membre.nom}-${i}`}
                  className="group flex flex-col shrink-0 cursor-pointer"
                  style={{ 
                    width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})` 
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (i % visibleCount) * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={visibleCount > 1 ? { scale: 1.02 } : {}}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Glassmorphism Card - Optimisée pour mobile (blur réduit) */}
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(245,240,235,0.7) 100%)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      boxShadow: hoveredIndex === i
                        ? "0 20px 60px rgba(232,64,16,0.12), 0 8px 24px rgba(0,0,0,0.08)"
                        : "0 8px 32px rgba(0,0,0,0.06)",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    {/* Photo zone */}
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "3 / 4" }}
                    >
                      <Image
                        src={membre.photo}
                        alt={membre.nom}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain"
                        style={{ 
                          objectFit: "contain", 
                          objectPosition: "center center",
                          transform: `scale(${membre.scale || 1}) translate(${membre.translate || "0, 0"})`,
                        }}
                      />
                    </div>

                    {/* Info overlay at the bottom */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "16px 12px 12px",
                        background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 60%, transparent 100%)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                      }}
                    >
                      {/* Nom */}
                      <h3
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#1a1a1a",
                          lineHeight: "1.3",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {membre.nom}
                      </h3>

                      {/* Rôle */}
                      <div className="flex items-center gap-2 mt-1.5">
                        <motion.div
                          style={{
                            height: "1.5px",
                            background: "linear-gradient(90deg, #E84010, #FF6B3D)",
                            borderRadius: "1px",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: 18 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.35 }}
                          animate={{
                            width: hoveredIndex === i ? 26 : 18,
                          }}
                        />
                        <p
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "10px",
                            fontWeight: "600",
                            color: "#E84010",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {membre.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Indicateurs de pagination avec animation */}
        <motion.div 
          className="flex justify-center items-center gap-2 mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="rounded-full transition-all duration-300"
              style={{
                width: current === index ? "32px" : "8px",
                height: "8px",
                background: current === index 
                  ? "linear-gradient(90deg, #E84010 0%, #FF6B3D 100%)"
                  : "#E5E7EB",
                touchAction: "manipulation"
              }}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Animations custom pour le composant Team */

        /* Animation de brillance (shine effect) */
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }

        /* Animation de pulsation subtile */
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        /* Animation de fade-in progressif */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Animation de slide depuis la gauche */
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        /* Animation de ligne qui se dessine */
        @keyframes draw-line {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-draw-line {
          animation: draw-line 0.8s ease-out forwards;
        }

        /* Amélioration du backdrop-blur pour Safari */
        @supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)) {
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          
          .backdrop-blur-lg {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
          }
        }

        /* Effet de glassmorphism */
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Effet de glow subtil */
        .glow-orange {
          box-shadow: 0 0 20px rgba(232, 64, 16, 0.1);
        }

        .glow-orange-hover:hover {
          box-shadow: 0 0 30px rgba(232, 64, 16, 0.2);
        }

        /* Transition smooth premium */
        .transition-premium {
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Grain texture optimisé */
        .grain-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E");
          opacity: 0.02;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        /* Responsive utilities */
        @media (max-width: 768px) {
          .animate-fade-in-up,
          .animate-slide-in-left {
            animation-duration: 0.6s;
          }
        }

        /* Prevent layout shift */
        .aspect-ratio-3-4 {
          aspect-ratio: 3 / 4;
        }

        @supports not (aspect-ratio: 3 / 4) {
          .aspect-ratio-3-4 {
            padding-bottom: 133.33%;
          }
        }
      `}} />
    </section>
  );
}