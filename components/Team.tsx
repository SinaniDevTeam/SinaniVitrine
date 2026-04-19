"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32 px-6 md:px-8">
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.01] md:opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto">

        {/* ── Header ── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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

        {/* ── Carousel with Swiper ── */}
        <div className="relative group/carousel">

          {/* Navigation Desktop */}
          <motion.button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute left-[-20px] top-1/2 z-30 w-14 h-14 rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            style={{
              transform: "translateY(-50%)",
              border: "1.5px solid #111111",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              color: "#111111",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#111111", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft />
          </motion.button>

          <motion.button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute right-[-20px] top-1/2 z-30 w-14 h-14 rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            style={{
              transform: "translateY(-50%)",
              border: "1.5px solid #111111",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              color: "#111111",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#111111", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight />
          </motion.button>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={false}
            grabCursor={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1440: { slidesPerView: 4, spaceBetween: 40 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="overflow-visible pb-12"
          >
            {membres.map((membre, i) => (
              <SwiperSlide key={`${membre.nom}-${i}`}>
                <motion.div
                  className="flex flex-col cursor-pointer h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div
                    className="relative overflow-hidden rounded-3xl transition-all duration-500"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(245,240,235,0.8) 100%)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      boxShadow: hoveredIndex === i
                        ? "0 30px 60px rgba(232,64,16,0.15), 0 10px 30px rgba(0,0,0,0.1)"
                        : "0 10px 40px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Photo area with better scaling */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src={membre.photo}
                        alt={membre.nom}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain transition-transform duration-700 ease-out"
                        style={{ 
                          objectFit: "contain", 
                          objectPosition: "center center",
                          transform: hoveredIndex === i 
                            ? `scale(${(membre.scale || 1) * 1.05}) translate(${membre.translate || "0, 0"})` 
                            : `scale(${membre.scale || 1}) translate(${membre.translate || "0, 0"})`,
                        }}
                      />
                    </div>

                    {/* Information labels */}
                    <div className="p-6 pt-2 bg-gradient-to-t from-white/90 to-transparent">
                      <h3
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1a1a1a",
                          lineHeight: "1.2",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {membre.nom}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div
                          style={{
                            height: "2px",
                            width: hoveredIndex === i ? "30px" : "20px",
                            background: "linear-gradient(90deg, #E84010, #FF6B3D)",
                            borderRadius: "1px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <p
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "11px",
                            fontWeight: "600",
                            color: "#E84010",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {membre.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination (Matching your screenshots) */}
        <div className="flex justify-center items-center gap-2.5 mt-4">
          {membres.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className="rounded-full transition-all duration-500"
              style={{
                width: activeIndex === index ? "36px" : "8px",
                height: "8px",
                background: activeIndex === index 
                  ? "linear-gradient(90deg, #E84010 0%, #FF6B3D 100%)"
                  : "#E5E7EB",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-slide {
          height: auto !important;
          transition: transform 0.3s ease;
        }
        .swiper-slide-active {
          z-index: 10;
        }
      `}} />
    </section>
  );
}