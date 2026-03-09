"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
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

const services = [
  {
    id: "production",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
    title: "Production Audiovisuelle",
    short: "Films, documentaires, spots publicitaires, reportages.",
    details: [
      "Réalisation de documentaires sur la culture guinéenne",
      "Spots publicitaires TV et digitaux",
      "Couverture d'événements en multi-caméra",
      "Postproduction complète : montage, étalonnage, sound design",
    ],
    image: "/images/img3.jpeg",
  },
  {
    id: "marketing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    title: "Marketing Digital",
    short: "Stratégie, community management, campagnes ciblées.",
    details: [
      "Stratégie de communication digitale sur-mesure",
      "Community management sur tous les réseaux",
      "Création de contenu engageant (reels, stories, posts)",
      "Campagnes publicitaires Meta, Google, YouTube",
    ],
    image: "/images/img4.jpeg",
  },
  {
    id: "studio",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    title: "Studio Photo & Vidéo",
    short: "Un plateau professionnel à Conakry, disponible à la location.",
    details: [
      "Salle multifonctionnelle pour photo, vidéo et podcast",
      "Éclairage professionnel Godox et fonds interchangeables",
      "Studio d'enregistrement audio traité acoustiquement",
      "Location à la journée ou au projet",
    ],
    image: "/images/im1.jpeg",
  },
  {
    id: "formation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
    title: "Formation & Incubation",
    short: "2 ans d'accompagnement pour les jeunes créateurs guinéens.",
    details: [
      "Sélection des meilleurs diplômés en audiovisuel",
      "Formation pratique sur du matériel de dernière génération",
      "Accompagnement par des professionnels nationaux et internationaux",
      "Projet personnel financé en 2ème année d'incubation",
    ],
    image: "/images/img5.jpeg",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "#FAFAF9", border: "1px solid #F0F0F0" }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.1}
      whileHover={{ y: -4 }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: "rgba(232,64,16,0.85)" }}>
          {service.icon}
        </div>
      </div>

      <div className="p-6">
        <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>
          {service.title}
        </h3>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 400, color: "#6B7280", lineHeight: 1.6 }}>
          {service.short}
        </p>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {service.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="m5 12 5 5L20 7" />
                </svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#4B5563", lineHeight: 1.5 }}>
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-4 flex items-center gap-1" style={{ color: "#E84010", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600 }}>
          {expanded ? "Fermer" : "En savoir plus"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
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
            Nos Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}
          >
            Créer, produire,
            <br />
            <span style={{ color: "#E84010" }}>diffuser.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 400, color: "rgba(255,255,255,0.5)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}
          >
            De la production audiovisuelle au marketing digital, SINANI accompagne vos projets de A à Z avec une équipe passionnée et du matériel de pointe.
          </motion.p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, white, transparent)" }}
        />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            ref={titleRef}
            className="text-center mb-4"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#111111", lineHeight: 1.15 }}
          >
            {titleInView ? (
              <TypeAnimation sequence={["Ce que nous faisons"]} speed={50} cursor={false} />
            ) : (
              <span style={{ opacity: 0 }}>Ce que nous faisons</span>
            )}
          </motion.h2>
          <motion.p
            className="text-center mb-16"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 400, color: "#6B7280", maxWidth: "550px", margin: "0 auto 64px" }}
          >
            Cliquez sur un service pour découvrir les détails.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi SINANI */}
      <section className="py-24" style={{ background: "#FAFAF9" }}>
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            className="text-center mb-16"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#111111", lineHeight: 1.15 }}
          >
            Pourquoi <span style={{ color: "#E84010" }}>SINANI</span> ?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Ancrage local", desc: "Nous sommes Guinéens. Nous comprenons le marché, la culture, les codes. Pas de regard extérieur — un regard authentique." },
              { num: "02", title: "Qualité pro", desc: "Du matériel dernière génération, un studio équipé et une équipe formée aux standards internationaux." },
              { num: "03", title: "Double impact", desc: "Chaque projet commercial finance la formation de jeunes créateurs. Travailler avec nous, c'est investir dans la relève." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "48px", fontWeight: 800, color: "rgba(232,64,16,0.12)", lineHeight: 1 }}>
                  {item.num}
                </span>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 700, color: "#111111", margin: "12px 0 8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#6B7280", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "#0e0e0e" }}>
        <div className="max-w-3xl mx-auto px-8">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: "16px" }}
          >
            Un projet en tête ?
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 400, color: "rgba(255,255,255,0.5)", marginBottom: "32px", lineHeight: 1.7 }}
          >
            Que ce soit un spot publicitaire, une stratégie digitale ou la location de notre studio — discutons-en.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "#E84010", fontFamily: "Inter, sans-serif", fontSize: "16px" }}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
          >
            Nous contacter
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
