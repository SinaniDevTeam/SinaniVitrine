"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Team() {
  const [titleTyped, setTitleTyped] = useState(false);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden" style={{ borderRadius: "16px" }}>

          {/* Image de fond */}
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="/images/team.jpg"
              alt="L'équipe SINANI"
              fill
              className="object-cover object-center"
            />

            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.25)" }}
            />
          </div>

          {/* Texte superposé en bas à gauche */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <motion.div
              style={{ maxWidth: "500px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2
                ref={titleRef}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  fontSize: "clamp(22px, 3.5vw, 42px)",
                  lineHeight: "1.2",
                  color: "#ffffff",
                  minHeight: "1.2em",
                }}
              >
                {titleTyped ? (
                  <>
                    Les cerveaux derrière{" "}
                    <span style={{ color: "#E84010" }}>SINANI</span>
                  </>
                ) : isInView ? (
                  <TypeAnimation
                    sequence={[
                      "Les cerveaux derrière SINANI",
                      () => setTitleTyped(true),
                    ]}
                    speed={50}
                    cursor={false}
                    wrapper="span"
                  />
                ) : null}
              </h2>

              <p
                className="mt-3 hidden md:block"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "1.7",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Les fondateurs et porteurs du projet SINANI. Ce sont eux qui
                ont imaginé l&apos;incubateur, structuré l&apos;agence et
                rassemblé les moyens pour offrir aux jeunes créateurs guinéens
                un environnement à la hauteur de leur talent.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
