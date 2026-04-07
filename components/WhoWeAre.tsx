"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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

        {/* Layout — liste à gauche, image à droite */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Gauche — liste avec icônes */}
          <motion.div
            className="w-full lg:w-2/5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActive(index)}
                className="flex items-start gap-5 text-left py-7 transition-all duration-300"
                whileHover={{ x: 8, backgroundColor: "rgba(232, 64, 16, 0.03)" }}
                style={{
                  paddingLeft: "24px",
                  paddingRight: "20px",
                  position: "relative",
                  backgroundColor: "transparent",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                {/* Barre gauche */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: active === index ? "#E84010" : "#D1D5DB",
                  }}
                />

                {/* Icône */}
                <div className="shrink-0">
                  <section.Icon active={active === index} />
                </div>

                {/* Titre + description */}
                <div>
                    <p
                      className="transition-colors duration-300 flex items-center gap-3"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "clamp(16px, 2vw, 20px)",
                        fontWeight: "700",
                        color: active === index ? "#E84010" : "#6B7280",
                      }}
                    >
                      {section.title}
                      <ChevronIcon active={active === index} />
                    </p>

                  <div
                    className="transition-all duration-500"
                    style={{
                      maxHeight: active === index ? "500px" : "0px",
                      opacity: active === index ? 1 : 0,
                      overflowY: "hidden",
                    }}
                  >
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "1.7",
                        color: "#4B5563",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Droite — image + description */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: "sticky", top: "120px" }}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                height: "clamp(250px, 35vw, 480px)",
                borderRadius: "24px 4px 24px 4px",
              }}
            >
              {sections.map((section, index) => {
                const imgs = section.images ?? [section.image];
                const labels = section.imageLabels ?? [];
                const currentImg = section.images ? imgs[studioImgIndex] : imgs[0];
                const currentLabel = section.images ? labels[studioImgIndex] : "";
                return (
                  <div
                    key={section.id}
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      opacity: active === index ? 1 : 0,
                      transform: active === index ? "scale(1)" : "scale(1.05)",
                    }}
                  >
                    <Image
                      src={currentImg}
                      alt={section.title}
                      fill
                      className="object-cover transition-all duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
                      }}
                    />
                    {/* Label + dots for studios */}
                    {section.images && active === index && (
                      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2">
                        <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.9 }}>
                          {currentLabel}
                        </span>
                        <div className="flex gap-2">
                          {imgs.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setStudioImgIndex(i)}
                              style={{
                                width: i === studioImgIndex ? "20px" : "8px",
                                height: "8px",
                                borderRadius: "4px",
                                background: i === studioImgIndex ? "#E84010" : "rgba(255,255,255,0.5)",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 0.3s",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}