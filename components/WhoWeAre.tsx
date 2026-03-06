"use client";

import { useState, useRef } from "react";
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

const VideoIcon = ({ active }: { active: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={active ? "#E84010" : "#9CA3AF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);

const sections = [
  {
    id: 1,
    title: "L'Incubateur",
    Icon: GraduationCapIcon,
    image: "/images/img3.jpeg",
    description:
      "En partenariat avec l'ISIC de Kountia et les Beaux-Arts de Dubréka, SINANI sélectionne chaque année les meilleurs diplômés en audiovisuel. Pendant 2 ans, ils bénéficient d'équipements de pointe, d'une direction artistique et de formations encadrées par des professionnels nationaux et internationaux. Les projets réalisés — documentaires, reportages, contenus sociétaux — sont diffusés gratuitement sur les réseaux sociaux et les chaînes partenaires.",
  },
  {
    id: 2,
    title: "L'Agence de Publicité",
    Icon: MegaphoneIcon,
    image: "/images/img4.jpeg",
    description:
      "Le pilier commercial qui assure la viabilité de l'incubateur. Spécialisée en production audiovisuelle et marketing digital, l'agence travaille sur des campagnes publicitaires sur-mesure, du community management et de la création de contenu. Les incubés participent directement aux projets commerciaux, ce qui complète leur formation par une expérience concrète du fonctionnement d'une agence.",
  },
  {
    id: 3,
    title: "Le Studio",
    Icon: CameraIcon,
    image: "/images/im1.jpeg",
    description:
      "Une salle de production multifonctionnelle équipée de matériel professionnel haut de gamme : éclairages, fonds, trépieds, studio d'enregistrement audio. Conçu pour la photographie, les podcasts, les vidéos avec incrustations et le montage en postproduction. Un espace pensé pour produire des contenus visuels de qualité internationale, directement sur place.",
  },
  {
    id: 4,
    title: "Production Audiovisuelle",
    Icon: VideoIcon,
    image: "/images/img2.jpeg",
    description:
      "Un système de chaîne de valeur intégré : de la réalisation au montage, du traitement audio à la diffusion. Chaque projet mobilise une équipe complète — réalisateurs, monteurs, graphistes, ingénieurs du son, community managers — travaillant en réseau centralisé. Les sujets portent sur la vie guinéenne, ses coutumes et la promotion de la destination Guinée.",
  },
];

export default function WhoWeAre() {
  const [active, setActive] = useState(0);
  const [titleTyped, setTitleTyped] = useState(false);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

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
              fontSize: "clamp(32px, 5vw, 64px)",
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          {/* Gauche — liste avec icônes */}
          <motion.div
            className="w-full lg:w-2/5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActive(index)}
                className="flex items-start gap-5 text-left py-7 transition-all duration-300"
                style={{
                  paddingLeft: "20px",
                  position: "relative",
                  backgroundColor: "transparent",
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
                    className="transition-colors duration-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontWeight: "700",
                      color: active === index ? "#E84010" : "#6B7280",
                    }}
                  >
                    {section.title}
                  </p>

                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: active === index ? "300px" : "0px",
                      opacity: active === index ? 1 : 0,
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
                      }}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Droite — image + description */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                height: "clamp(300px, 42vw, 560px)",
                borderRadius: "24px 4px 24px 4px",
              }}
            >
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    opacity: active === index ? 1 : 0,
                    transform: active === index ? "scale(1)" : "scale(1.05)",
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
                    }}
                  />
                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}