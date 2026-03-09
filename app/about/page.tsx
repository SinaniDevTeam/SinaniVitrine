"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutTimeline from "@/components/AboutTimeline";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d },
  }),
};


const values = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E84010"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m8 14 2.5 2.5L16 10" />
      </svg>
    ),
    title: "Authenticité",
    desc: "Nos productions reflètent la vraie Guinée — sans filtre, sans cliché.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E84010"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E84010"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E84010"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
  {
    num: "01",
    title: "Sélection",
    desc: "Les meilleurs diplômés de l'ISIC et des Beaux-Arts sont identifiés et recrutés.",
  },
  {
    num: "02",
    title: "Formation",
    desc: "Remise à niveau sur du matériel professionnel. Modules encadrés par des experts.",
  },
  {
    num: "03",
    title: "Production",
    desc: "Immersion dans la chaîne de valeur : réalisation, montage, son, graphisme, diffusion.",
  },
  {
    num: "04",
    title: "Diffusion",
    desc: "Les contenus sont diffusés sur nos canaux et chez nos partenaires TV.",
  },
  {
    num: "05",
    title: "Autonomie",
    desc: "Après 2 ans, les incubés sont prêts à voler de leurs propres ailes.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero About + Description & Stats */}
      <AboutHero />

      {/* Notre Histoire — Timeline */}
      <AboutTimeline />

      {/* Nos Valeurs */}
      <section className="py-24" style={{ background: "#FAFAF9" }}>
        <div className="max-w-6xl mx-auto px-8">
          <motion.span
            className="block text-center mb-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#E84010",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Nos Valeurs
          </motion.span>
          <motion.h2
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.15,
            }}
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
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(232,64,16,0.08)" }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#111111",
                    marginBottom: "8px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#6B7280",
                    lineHeight: 1.6,
                  }}
                >
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#E84010",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Le Processus
          </motion.span>
          <motion.h2
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.15,
            }}
          >
            De la sélection à l&apos;autonomie
          </motion.h2>

          <div className="space-y-0">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 py-8"
                style={{
                  borderBottom:
                    i < processSteps.length - 1 ? "1px solid #F0F0F0" : "none",
                }}
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
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#111111",
                      marginBottom: "6px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
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
        <Image
          src="/images/vision.jpg"
          alt="L'équipe SINANI"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
          <p
            className="max-w-3xl mx-auto text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 600,
              color: "white",
              lineHeight: 1.4,
            }}
          >
            &ldquo;Nous ne faisons pas que de l&apos;audiovisuel. Nous
            construisons le regard que la Guinée porte sur elle-même.&rdquo;
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
