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

  useEffect(() => {
    const studioIndex = sections.findIndex((s) => s.images);
    if (active !== studioIndex) return;
    const interval = setInterval(() => {
      setStudioImgIndex((prev) => (prev + 1) % (sections[studioIndex].images?.length ?? 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="w-full bg-white py-16 md:py-32 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header - Commun Desktop/Mobile */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                Un incubateur pour <span style={{ color: "#E84010" }}>former</span>, une agence pour <span style={{ color: "#E84010" }}>produire</span>
              </>
            ) : isInView ? (
              <TypeAnimation
                sequence={[
                  "Un incubateur pour former,\nune agence pour produire",
                  () => setTitleTyped(true),
                ]}
                speed={40}
                cursor={false}
                wrapper="span"
                style={{ whiteSpace: "pre-line" }}
              />
            ) : null}
          </h2>
          
        </motion.div>

        {/* ─── VERSION MOBILE (Stacked Layout - Comme capture) ─── */}
        <div className="lg:hidden flex flex-col gap-24">
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#E84010] to-transparent rounded-full" />
              
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <section.Icon active={true} />
                  </div>
                  <h3 
                    style={{ 
                      fontFamily: "Inter, sans-serif", 
                      fontSize: "28px", 
                      fontWeight: "800", 
                      color: "#E84010",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {section.title}
                  </h3>
                </div>
                
                <p 
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontSize: "18px", 
                    lineHeight: "1.7", 
                    color: "#374151",
                    fontWeight: "500",
                    whiteSpace: "pre-line"
                  }}
                >
                  {section.description}
                </p>
              </div>

              <div 
                className="relative overflow-hidden shadow-2xl"
                style={{ 
                  height: "350px", 
                  borderRadius: "24px 4px 24px 4px",
                }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── VERSION DESKTOP (Tabbed Layout - Gardé intact) ─── */}
        <div className="hidden lg:block">
          <div className="mb-20 border-b border-gray-100 flex justify-center">
            <div className="flex flex-row gap-24">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActive(index)}
                  className="group relative pb-8 flex flex-col items-center transition-all duration-300"
                  style={{ cursor: "pointer" }}
                >
                  <div className="flex items-center gap-4 px-6 py-3 rounded-xl group-hover:bg-gray-50 transition-colors">
                    <section.Icon active={active === index} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",
                        fontWeight: active === index ? "700" : "600",
                        color: active === index ? "#E84010" : "#6B7280",
                      }}
                    >
                      {section.title}
                    </span>
                  </div>
                  {active === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[4px] rounded-t-full bg-[#E84010]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[600px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-row gap-28 items-center justify-between w-full"
              >
                <div className="w-[45%]">
                  <span className="inline-block px-5 py-2 rounded-full bg-[#E84010]/10 text-[#E84010] text-sm font-black tracking-[0.2em] uppercase mb-10">
                    {sections[active].title}
                  </span>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "24px",
                      fontWeight: "450",
                      lineHeight: "1.7",
                      color: "#111827",
                      letterSpacing: "-0.01em",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {sections[active].description}
                  </p>
                  <div className="mt-12 w-32 h-2 bg-[#E84010]/20 rounded-full" />
                </div>

                <div className="w-[45%]">
                  <div
                    className="relative overflow-hidden shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                    style={{
                      height: "600px",
                      borderRadius: "60px 10px 60px 10px",
                    }}
                  >
                    {(() => {
                      const section = sections[active];
                      const currentImg = section.images ? section.images[studioImgIndex] : section.image;
                      return (
                        <Image
                          src={currentImg}
                          alt={section.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}