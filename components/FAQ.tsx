"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d },
  }),
};

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = `faq-answer-${index}`;

  return (
    <motion.div
      className="mb-3"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.08}
    >
      <div
        style={{
          borderRadius: "14px",
          border: `1px solid ${isOpen ? "rgba(232,64,16,0.2)" : "#EBEBEB"}`,
          overflow: "hidden",
          transition: "border-color 0.3s, box-shadow 0.3s",
          background: "#FFFFFF",
          boxShadow: isOpen ? "0 4px 24px rgba(232,64,16,0.06)" : "none",
        }}
      >
        {/* Question button */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={id}
          className="w-full flex items-center gap-4 py-5 px-6 text-left"
          style={{
            background: "transparent",
            border: "none",
            borderLeft: `3px solid ${isOpen ? "#E84010" : "transparent"}`,
            transition: "border-color 0.3s",
            cursor: "pointer",
          }}
        >
          {/* Question text */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#111111",
              flex: 1,
            }}
          >
            {question}
          </span>

          {/* Chevron icon */}
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#E84010" : "#9CA3AF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0, transition: "stroke 0.3s" }}
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={id}
              role="region"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-6 pb-5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.75,
                }}
              >
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const faqData = [
    {
      q: "C'est quoi SINANI ?",
      a: "Une agence créative qui forme et propulse les talents de l'audiovisuel à travers les Étoiles de SINANI.",
    },
    {
      q: "Qui peut rejoindre SINANI ?",
      a: "Cette année, le programme est exclusivement dédié aux étudiants sortant des universités publiques.",
    },
    {
      q: "Combien d'Étoiles de SINANI ont été sélectionnées ?",
      a: "20 talents ont été choisis pour intégrer cette première cohorte.",
    },
    {
      q: "Que vivent les Étoiles de SINANI ?",
      a: "Une immersion complète : formation pratique, encadrement professionnel et accès à de vraies opportunités dans l'audiovisuel.",
    },
    {
      q: "Quels services propose SINANI ?",
      a: (
        <>
          <p className="mb-2">Nous proposons les services suivants :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Production photo</li>
            <li>Production vidéo (événementielle, institutionnelle, promotionnelle)</li>
            <li>Community management</li>
            <li>Production de podcasts</li>
          </ul>
        </>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24" style={{ background: "#FAFAF9" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            ref={titleRef}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4.5vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#111111",
              lineHeight: 1.1,
            }}
          >
            {titleInView ? (
              <TypeAnimation sequence={["Questions fréquentes"]} speed={50} cursor={false} />
            ) : (
              <span style={{ opacity: 0 }}>Questions fréquentes</span>
            )}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: 1.7,
              marginTop: "12px",
            }}
          >
            Tout ce que vous devez savoir sur SINANI et nos services.
          </motion.p>
        </div>

        {faqData.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.q}
            answer={faq.a}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
