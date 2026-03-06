"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const points = [
  "Former les créateurs locaux",
  "Diffuser nos histoires au monde",
  "Produire des contenus authentiques",
  "Faire de la Guinée une référence audiovisuelle africaine",
];

export default function VisionSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Titre + sous-titre */}
        <h2
          ref={titleRef}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "1.1",
            color: "#111111",
            whiteSpace: "nowrap",
            minHeight: "1.2em",
          }}
        >
          {typingDone ? (
            <>
              L&apos;audiovisuel, notre{" "}
              <span style={{ color: "#E84010" }}>soft power</span>
            </>
          ) : isInView ? (
            <TypeAnimation
              sequence={[
                "L'audiovisuel, notre soft power",
                () => setTypingDone(true),
              ]}
              speed={50}
              cursor={false}
              wrapper="span"
            />
          ) : null}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            fontSize: "clamp(24px, 3.5vw, 48px)",
            lineHeight: "1.2",
            color: "#111111",
          }}
        >
          au service du récit guinéen
        </motion.p>

        {/* Contenu */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-8 items-start">

          {/* Gauche — texte */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(15px, 1.3vw, 17px)",
                fontWeight: "400",
                lineHeight: "1.7",
                color: "#000000",
              }}
            >
              Pendant des décennies, d&apos;autres ont raconté notre Guinée.
              Aujourd&apos;hui, SINANI change la donne : nous révélons les talents
              locaux, mettons à leur disposition des outils de pointe et créons des
              œuvres qui célèbrent notre identité, notre héritage et nos rêves
              d&apos;avenir. Ensemble, nous faisons de la Guinée une référence
              audiovisuelle africaine.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M4 10.5L8 14.5L16 6.5"
                      stroke="#E84010"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#111111",
                      lineHeight: "1.5",
                    }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Droite — image + cercle décoratif */}
          <motion.div
            className="w-full lg:w-[55%] relative lg:-mt-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative overflow-hidden w-full"
              style={{
                maxWidth: "697px",
                aspectRatio: "697 / 506",
                borderRadius: "80px 20px 80px 20px",
              }}
            >
              <Image
                src="/images/vision.jpg"
                alt="Équipe SINANI"
                fill
                className="object-cover"
              />
            </div>

            {/* Cercle glassmorphism avec texte circulaire */}
            <div
              className="absolute hidden md:flex items-center justify-center"
              style={{
                width: "243px",
                height: "234px",
                borderRadius: "100%",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                bottom: "-60px",
                left: "-40px",
                zIndex: 2,
              }}
            >
              {/* Texte circulaire */}
              <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className="animate-spin-slow absolute"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
                  />
                </defs>
                <text
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15.8px",
                    fontWeight: 700,
                    letterSpacing: "7.2px",
                    textTransform: "uppercase",
                  }}
                >
                  <textPath href="#circlePath" startOffset="0%" fill="#111111">
                    AGENCE SINANI •
                  </textPath>
                  <textPath href="#circlePath" startOffset="50%" fill="#E84010">
                    AGENCE SINANI •
                  </textPath>
                </text>
              </svg>

              {/* Aiguilles d'horloge */}
              <svg
                viewBox="0 0 100 100"
                width="80"
                height="80"
                className="absolute"
              >
                <defs>
                  <marker id="arrowBlack" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#111111" />
                  </marker>
                  <marker id="arrowOrange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#E84010" />
                  </marker>
                </defs>
                {/* Point central */}
                <circle cx="50" cy="50" r="3" fill="#111111" />
                {/* Aiguille longue (minutes) — 12h */}
                <line
                  x1="50" y1="50" x2="50" y2="12"
                  stroke="#111111"
                  strokeWidth="1.8"
                  markerEnd="url(#arrowBlack)"
                  className="animate-clock-min"
                  style={{ transformOrigin: "50px 50px", transform: "rotate(0deg)" }}
                />
                {/* Aiguille courte (heures) — 2h */}
                <line
                  x1="50" y1="50" x2="50" y2="22"
                  stroke="#E84010"
                  strokeWidth="2.2"
                  markerEnd="url(#arrowOrange)"
                  className="animate-clock-hour"
                  style={{ transformOrigin: "50px 50px", transform: "rotate(60deg)" }}
                />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
