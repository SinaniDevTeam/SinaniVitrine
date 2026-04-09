"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const GraduationCapIcon = ({ active }: { active: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={active ? "#E84010" : "#9CA3AF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
  </svg>
);

const MegaphoneIcon = ({ active }: { active: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={active ? "#E84010" : "#9CA3AF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l18-5v12L3 13v-2z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const CameraIcon = ({ active }: { active: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={active ? "#E84010" : "#9CA3AF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const ChevronIcon = ({ active }: { active: boolean }) => (
  <motion.svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E84010" : "#9CA3AF"}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    animate={{ rotate: active ? 90 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <polyline points="9 18 15 12 9 6" />
  </motion.svg>
);



const sections = [
  {
    id: 1,
    title: "L'Incubateur",
    Icon: GraduationCapIcon,
    image: "/images/img2.jpeg", 
    description:
      "En partenariat avec l'ISIC de Kountia et les Beaux-Arts de Dubréka, SINANI sélectionne chaque deux ans les meilleurs diplômés en audiovisuel. Pendant 2 ans, ils bénéficient d'équipements de pointe, d'une direction artistique et de formations encadrées par des professionnels nationaux et internationaux. Les projets réalisés — documentaires, reportages, contenus sociétaux — sont diffusés gratuitement sur les réseaux sociaux et les chaînes partenaires.",
  },
  {
    id: 2,
    title: "L'Agence de Publicité",
    Icon: MegaphoneIcon,
    image: "/images/img3.jpeg",
    description:
      "Le pilier commercial qui assure la viabilité de l'incubateur. Spécialisée en production audiovisuelle et marketing digital, l'agence travaille sur des campagnes publicitaires sur-mesure, du community management et de la création de contenu. Les incubés participent directement aux projets commerciaux, ce qui complète leur formation par une expérience concrète du fonctionnement d'une agence.",
  },
  {
    id: 3,
    title: "Nos Studios",
    Icon: CameraIcon,
    image: "/images/im1.jpeg",
    images: ["/images/im1.jpeg", "/images/studio-podcast.webp", "/images/studio-audio.jpg"],
    imageLabels: ["Studio photo", "Studio podcast", "Studio audio"],
    description:
      "Notre agence dispose de studios entièrement équipés pour donner vie à tous vos projets :\n• Studio photo : pour des shootings professionnels et créatifs.\n• Studio podcast : un espace moderne pour enregistrer et produire vos émissions et contenus audio.\n• Studio audio : conçu pour l'enregistrement, le mixage et la postproduction de vos projets sonores.\n\nChaque espace est pensé pour offrir qualité, confort et performance, permettant à nos talents de produire des contenus professionnels et impactants.",
  },
];

export default function WhoWeAre() {
  const [active, setActive] = useState(0);
  const [titleTyped, setTitleTyped] = useState(false);
  const [studioImgIndex, setStudioImgIndex] = useState(0);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  // Auto-rotate studio images when studio section is active
  useEffect(() => {
    const studioIndex = sections.findIndex((s) => s.images);
    if (active !== studioIndex) return;
    const interval = setInterval(() => {
      setStudioImgIndex((prev) => (prev + 1) % (sections[studioIndex].images?.length ?? 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
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
              fontSize: "clamp(30px, 8vw, 64px)",
              lineHeight: "1.1",
              color: "#111111",
              minHeight: "1.2em",
            }}
          >
            {titleTyped ? (
              <>
                Un incubateur pour{" "}
                <span style={{ color: "#E84010" }}>former</span>, une agence
                pour <span style={{ color: "#E84010" }}>produire</span>
              </>
            ) : isInView ? (
              <TypeAnimation
                sequence={[
                  "Un incubateur pour former, une agence pour produire",
                  () => setTitleTyped(true),
                ]}
                speed={40}
                cursor={false}
                wrapper="span"
              />
            ) : null}
          </h2>
          <p
            className="mt-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              fontSize: "clamp(24px, 3.5vw, 48px)",
              lineHeight: "1.2",
              color: "#111111",
            }}
          >
            Former les talents, raconter la Guinée
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-16 md:mb-20 border-b border-gray-100 px-4 overflow-x-auto no-scrollbar">
          <div className="flex flex-row gap-10 md:gap-16 lg:gap-24 min-w-max md:justify-center">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActive(index)}
                className="group relative pb-8 flex flex-col items-center transition-all duration-300"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center gap-4 px-4 py-2 rounded-xl group-hover:bg-gray-50 transition-colors">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <section.Icon active={active === index} />
                  </div>
                  <span
                    className="whitespace-nowrap transition-colors duration-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(16px, 1.5vw, 20px)",
                      fontWeight: active === index ? "700" : "600",
                      color: active === index ? "#E84010" : "#6B7280",
                    }}
                  >
                    {section.title}
                  </span>
                </div>
                
                {/* Active Indicator Bar */}
                {active === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-[#E84010]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area — Text on left, Image on right */}
        <div className="min-h-[550px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-center justify-between w-full"
            >
              {/* Text Content */}
              <div className="w-full lg:w-[48%] flex flex-col justify-center py-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#E84010]/10 text-[#E84010] text-sm font-bold tracking-widest uppercase mb-8">
                    {sections[active].title}
                  </span>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(19px, 1.4vw, 24px)",
                      fontWeight: "450",
                      lineHeight: "1.7",
                      color: "#111827",
                      letterSpacing: "-0.01em",
                      whiteSpace: "pre-line",
                    }}
                    className="leading-relaxed drop-shadow-sm"
                  >
                    {sections[active].description}
                  </p>
                  
                  {/* Decorative underline for text area */}
                  <div className="mt-10 w-24 h-1.5 bg-[#E84010]/20 rounded-full" />
                </motion.div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-[46%]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  <div
                    className="relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] group-hover:shadow-[0_45px_80px_-20px_rgba(232,64,16,0.15)] transition-all duration-700"
                    style={{
                      height: "clamp(400px, 45vw, 600px)",
                      borderRadius: "40px 8px 40px 8px",
                    }}
                  >
                  {(() => {
                    const section = sections[active];
                    const imgs = section.images ?? [section.image];
                    const labels = section.imageLabels ?? [];
                    const currentImg = section.images ? imgs[studioImgIndex] : imgs[0];
                    const currentLabel = section.images ? labels[studioImgIndex] : "";
                    
                    return (
                      <div className="relative w-full h-full">
                        <Image
                          src={currentImg}
                          alt={section.title}
                          fill
                          className="object-cover transition-all duration-700"
                          priority
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
                          }}
                        />
                        
                        {/* Label + dots for studios */}
                        {section.images && (
                          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
                            <span style={{ 
                              color: "#fff", 
                              fontSize: "14px", 
                              fontWeight: 600, 
                              letterSpacing: "0.05em", 
                              textTransform: "uppercase", 
                              opacity: 0.9,
                              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                            }}>
                              {currentLabel}
                            </span>
                            <div className="flex gap-2">
                              {imgs.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setStudioImgIndex(i);
                                  }}
                                  style={{
                                    width: i === studioImgIndex ? "24px" : "10px",
                                    height: "10px",
                                    borderRadius: "5px",
                                    background: i === studioImgIndex ? "#E84010" : "rgba(255,255,255,0.6)",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.4s",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
  );
}