"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroServices from "@/components/HeroServices";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d },
  }),
};

/* ── Données services ── */
const allServices = [
  {
    cat: "Audiovisuel",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" /><rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
    title: "Production Audiovisuelle",
    desc: "Films, documentaires, spots publicitaires et reportages réalisés avec du matériel dernière génération.",
    details: [
      "Réalisation de documentaires sur la culture guinéenne",
      "Spots publicitaires TV et digitaux",
      "Couverture d'événements en multi-caméra",
      "Postproduction complète : montage, étalonnage, sound design",
    ],
    image: "/images/img3.jpeg",
  },
  {
    cat: "Studio",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    title: "Studio Photo & Vidéo",
    desc: "Plateau professionnel à Conakry avec éclairage Godox, fonds interchangeables, disponible à la location.",
    details: [
      "Salle multifonctionnelle pour photo, vidéo et podcast",
      "Éclairage professionnel Godox et fonds interchangeables",
      "Studio d'enregistrement audio traité acoustiquement",
      "Location à la journée ou au projet",
    ],
    image: "/images/im1.jpeg",
  },
  {
    cat: "Studio",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    title: "Studio Podcast & Audio",
    desc: "Studio d'enregistrement acoustiquement traité pour podcasts, voix off et sound design.",
    details: [
      "Cabine isolée phoniquement",
      "Équipement Rode & Focusrite",
      "Mixage et mastering inclus",
      "Location à l'heure ou à la journée",
    ],
    image: "/images/img5.jpeg",
  },
  {
    cat: "Marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 13v-2z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    title: "Marketing Digital",
    desc: "Stratégie de communication sur-mesure, campagnes Meta & Google, création de contenu engageant.",
    details: [
      "Stratégie de communication digitale sur-mesure",
      "Campagnes publicitaires Meta, Google, YouTube",
      "Création de contenu (reels, stories, posts)",
      "Reporting mensuel détaillé",
    ],
    image: "/images/img4.jpeg",
  },
  {
    cat: "Marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community Management",
    desc: "Animation de vos réseaux sociaux, modération, reporting et croissance de communauté.",
    details: [
      "Animation quotidienne des réseaux sociaux",
      "Modération et réponse aux commentaires",
      "Planification éditoriale mensuelle",
      "Analyse de performance et croissance d'audience",
    ],
    image: "/images/img3.jpeg",
  },
  {
    cat: "Formation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
    title: "Formation & Incubation",
    desc: "Programme Seed de 2 ans pour les jeunes créateurs guinéens avec matériel pro et accompagnement.",
    details: [
      "Sélection des meilleurs diplômés en audiovisuel",
      "Formation pratique sur du matériel dernière génération",
      "Accompagnement par des professionnels nationaux et internationaux",
      "Projet personnel financé en 2ème année",
    ],
    image: "/images/img5.jpeg",
  },
  {
    cat: "Formation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Direction Artistique",
    desc: "Conception visuelle, identité de marque, chartes graphiques et cohérence éditoriale de vos projets.",
    details: [
      "Création d'identité visuelle complète",
      "Charte graphique et typographique",
      "Direction photo et vidéo",
      "Cohérence éditoriale multicanal",
    ],
    image: "/images/im1.jpeg",
  },
];

const TABS = ["Tous", "Audiovisuel", "Studio", "Marketing", "Formation"];

function ServiceCard({ s, i }: { s: typeof allServices[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      key={s.title}
      className="group rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "#FAFAFA", border: "1px solid #F0F0F0" }}
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={() => setOpen(!open)}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={s.image} alt={s.title} fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)" }} />
      </div>

      {/* Contenu */}
      <div className="p-5">
        {/* Icône */}
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: "#E84010" }}>
          {s.icon}
        </div>

        <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>
          {s.title}
        </h3>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7280", lineHeight: 1.65 }}>
          {s.desc}
        </p>

        {/* Détails dépliables */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {s.details.map((d, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="m5 12 5 5L20 7" />
                </svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#4B5563", lineHeight: 1.5 }}>{d}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-5 flex items-center gap-1" style={{ color: "#E84010", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600 }}>
          {open ? "Fermer" : "En savoir plus"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <HeroServices />

      {/* ── Services Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">

          {/* Header gauche */}
          <div className="mb-12">
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700, color: "#6B7280", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Services
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "#111111", lineHeight: 1.15, marginTop: "10px", maxWidth: "560px" }}
            >
              Ce que nous faisons,<br />pour vous.
            </motion.h2>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allServices.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
