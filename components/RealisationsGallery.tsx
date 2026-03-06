"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const projets = [
  {
    titre: "Les Forgerons du Fouta",
    categorie: "Documentaire",
    description: "Reportage sur l'artisanat traditionnel du Fouta-Djallon",
    image: "/images/img2.jpeg",
  },
  {
    titre: "Campagne Orange Guinée",
    categorie: "Publicité",
    description: "Spot TV et contenus réseaux sociaux",
    image: "/images/img3.jpeg",
  },
  {
    titre: "Mémoire de Conakry",
    categorie: "Documentaire",
    description: "Série sur l'histoire de la capitale",
    image: "/images/img4.jpeg",
  },
  {
    titre: "Lancement Skye Bank",
    categorie: "Publicité",
    description: "Couverture événementielle et contenus digitaux",
    image: "/images/im1.jpeg",
  },
];

const badgeColor: Record<string, string> = {
  Documentaire: "#E84010",
  Publicité: "#2563EB",
  Reportage: "#059669",
};

export default function RealisationsGallery() {
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
          <p
            className="mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontWeight: "700",
              color: "#E84010",
            }}
          >
            Nos Réalisations
          </p>
          <h2
            ref={titleRef}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "#111111",
              maxWidth: "700px",
              minHeight: "2.2em",
            }}
          >
            {isInView ? (
              <TypeAnimation
                sequence={[
                  "Des histoires qui inspirent, des campagnes qui marquent",
                ]}
                speed={40}
                cursor={false}
                wrapper="span"
              />
            ) : null}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projets.map((projet, i) => (
            <motion.div
              key={projet.titre}
              className="group relative overflow-hidden cursor-pointer"
              style={{ borderRadius: "6px" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                <Image
                  src={projet.image}
                  alt={projet.titre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                  }}
                />

                <span
                  className="absolute top-4 left-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#fff",
                    backgroundColor: badgeColor[projet.categorie] || "#E84010",
                    padding: "4px 12px",
                    borderRadius: "4px",
                  }}
                >
                  {projet.categorie}
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#fff",
                      lineHeight: "1.3",
                    }}
                  >
                    {projet.titre}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {projet.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
