"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d },
  }),
};

function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      year: "Constat",
      title: "Un écosystème à construire",
      desc: "L'audiovisuel guinéen souffre d'un manque de moyens. Les jeunes diplômés n'ont ni équipements, ni structures pour exercer. Les Guinéens se tournent vers les contenus étrangers.",
    },
    {
      year: "Idée",
      title: "Un incubateur + une agence",
      desc: "Créer un espace qui forme les talents, met à disposition du matériel de pointe et produit des contenus qui racontent la Guinée de l'intérieur.",
    },
    {
      year: "Action",
      title: "SINANI voit le jour",
      desc: "Un studio équipé, un espace de coworking, des partenariats avec l'ISIC et les Beaux-Arts de Dubréka. La chaîne de valeur est en place.",
    },
    {
      year: "Vision",
      title: "Faire rayonner la Guinée",
      desc: "Positionner la Guinée comme une référence audiovisuelle en Afrique. Former, produire, diffuser — un soft power par et pour les Guinéens.",
    },
  ];

  return (
    <div ref={ref} className="relative">
      <div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(180deg, #E84010, rgba(232,64,16,0.1))" }}
      />

      {steps.map((step, i) => (
        <motion.div
          key={i}
          className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <div className="hidden md:block w-1/2" />

          <div
            className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-2"
            style={{
              background: "#0e0e0e",
              borderColor: "#E84010",
              top: "4px",
            }}
          />

          <div className="pl-14 md:pl-0 md:w-1/2 md:px-12">
            <span
              className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
              style={{ background: "rgba(232,64,16,0.1)", color: "#E84010" }}
            >
              {step.year}
            </span>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "#111111",
                marginBottom: "8px",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#6B7280",
              }}
            >
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m8 14 2.5 2.5L16 10" />
      </svg>
    ),
    title: "Authenticité",
    desc: "Nos productions reflètent la vraie Guinée — sans filtre, sans cliché.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Transmission",
    desc: "Former la relève, transmettre un savoir-faire et créer une communauté de créateurs.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Excellence",
    desc: "Du matériel de pointe, des standards professionnels, une exigence constante.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Impact",
    desc: "Chaque production vise à changer le regard sur la Guinée, ici et à l'international.",
  },
];

const processSteps = [
  { num: "01", title: "Sélection", desc: "Les meilleurs diplômés de l'ISIC et des Beaux-Arts sont identifiés et recrutés." },
  { num: "02", title: "Formation", desc: "Remise à niveau sur du matériel professionnel. Modules encadrés par des experts." },
  { num: "03", title: "Production", desc: "Immersion dans la chaîne de valeur : réalisation, montage, son, graphisme, diffusion." },
  { num: "04", title: "Diffusion", desc: "Les contenus sont diffusés sur nos canaux et chez nos partenaires TV." },
  { num: "05", title: "Autonomie", desc: "Après 2 ans, les incubés sont prêts à voler de leurs propres ailes." },
];

export default function AboutPage() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 100%)" }}>
        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.span
            className="inline-block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700, color: "#E84010", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            À propos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}
          >
            Raconter la Guinée,
            <br />
            <span style={{ color: "#E84010" }}>de l&apos;intérieur.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 400, color: "rgba(255,255,255,0.5)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}
          >
            SINANI est née d&apos;une conviction : la Guinée a des histoires extraordinaires à raconter, et ce sont les Guinéens qui doivent les porter.
          </motion.p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, white, transparent)" }}
        />
      </section>

      {/* Notre Histoire — Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.span
            className="block text-center mb-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700, color: "#E84010", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Notre Histoire
          </motion.span>
          <motion.h2
            ref={titleRef}
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#111111", lineHeight: 1.15 }}
          >
            {titleInView ? (
              <TypeAnimation sequence={["Du constat à l'action"]} speed={50} cursor={false} />
            ) : (
              <span style={{ opacity: 0 }}>Du constat à l&apos;action</span>
            )}
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-24" style={{ background: "#FAFAF9" }}>
        <div className="max-w-6xl mx-auto px-8">
          <motion.span
            className="block text-center mb-3"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700, color: "#E84010", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Nos Valeurs
          </motion.span>
          <motion.h2
            className="text-center mb-16"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#111111", lineHeight: 1.15 }}
          >
            Ce qui nous guide
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white"
                style={{ border: "1px solid #F0F0F0" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(232,64,16,0.08)" }}>
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 400, color: "#6B7280", lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Processus */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.span
            className="block text-center mb-3"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700, color: "#E84010", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Le Processus
          </motion.span>
          <motion.h2
            className="text-center mb-16"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#111111", lineHeight: 1.15 }}
          >
            De la sélection à l&apos;autonomie
          </motion.h2>

          <div className="space-y-0">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 py-8"
                style={{ borderBottom: i < processSteps.length - 1 ? "1px solid #F0F0F0" : "none" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 800,
                    color: "rgba(232,64,16,0.15)",
                    lineHeight: 1,
                    minWidth: "80px",
                  }}
                >
                  {s.num}
                </span>
                <div>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 700, color: "#111111", marginBottom: "6px" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#6B7280", lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image bannière */}
      <section className="relative h-[50vh] min-h-[300px]">
        <Image src="/images/vision.jpg" alt="L'équipe SINANI" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
          <p
            className="max-w-3xl mx-auto text-center"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 600, color: "white", lineHeight: 1.4 }}
          >
            &ldquo;Nous ne faisons pas que de l&apos;audiovisuel. Nous construisons le regard que la Guinée porte sur elle-même.&rdquo;
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
