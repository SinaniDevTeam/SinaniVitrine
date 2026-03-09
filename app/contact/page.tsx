"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
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

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Adresse",
    lines: ["Conakry, Guinée"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Email",
    lines: ["contact@sinani.gn"],
    href: "mailto:contact@sinani.gn",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Téléphone",
    lines: ["+224 XX XX XX XX"],
  },
];

const subjects = [
  "Production audiovisuelle",
  "Marketing digital",
  "Location du studio",
  "Candidature incubateur",
  "Partenariat",
  "Autre",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    fontWeight: 400,
    color: "#111111",
    background: "#FAFAF9",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "14px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

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
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}
          >
            Parlons de votre
            <br />
            <span style={{ color: "#E84010" }}>projet.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 400, color: "rgba(255,255,255,0.5)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Une idée, un besoin, une candidature ? On vous répond sous 48h.
          </motion.p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, white, transparent)" }}
        />
      </section>

      {/* Formulaire + Infos */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Colonne gauche — Infos */}
            <div className="lg:col-span-2">
              <motion.h2
                ref={titleRef}
                className="mb-4"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#111111", lineHeight: 1.2 }}
              >
                {titleInView ? (
                  <TypeAnimation sequence={["Restons connectés"]} speed={50} cursor={false} />
                ) : (
                  <span style={{ opacity: 0 }}>Restons connectés</span>
                )}
              </motion.h2>
              <motion.p
                className="mb-10"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#6B7280", lineHeight: 1.7 }}
              >
                Que vous soyez un jeune diplômé en audiovisuel, une entreprise qui cherche un partenaire créatif ou une institution intéressée par notre démarche — nous sommes à l&apos;écoute.
              </motion.p>

              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2 + i * 0.1}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(232,64,16,0.08)" }}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#111111", marginBottom: "2px" }}>
                        {info.title}
                      </h3>
                      {info.lines.map((line, j) => (
                        info.href ? (
                          <a
                            key={j}
                            href={info.href}
                            className="hover:text-[#E84010] transition-colors"
                            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#6B7280", textDecoration: "none" }}
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={j} style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#6B7280" }}>
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <motion.div
                className="mt-12"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
              >
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700, color: "#111111", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                  Suivez-nous
                </p>
                <div className="flex gap-3">
                  {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((name) => (
                    <a
                      key={name}
                      href="#"
                      className="px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-[#E84010] hover:text-white hover:border-[#E84010]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#6B7280",
                        border: "1px solid #E5E7EB",
                      }}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Colonne droite — Formulaire */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #F0F0F0", boxShadow: "0 4px 40px rgba(0,0,0,0.04)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                      Nom complet
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                    Sujet
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}
                    onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                    required
                  >
                    <option value="">Choisir un sujet</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" as const }}
                    onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    background: submitted
                      ? "linear-gradient(135deg, #059669, #10B981)"
                      : "linear-gradient(135deg, #E84010, #d63a0e)",
                    boxShadow: "0 4px 20px rgba(232,64,16,0.25)",
                  }}
                >
                  {submitted ? "Message envoyé !" : "Envoyer le message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-24" style={{ background: "#FAFAF9" }}>
        <div className="max-w-3xl mx-auto px-8">
          <motion.h2
            className="text-center mb-16"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#111111", lineHeight: 1.15 }}
          >
            Questions fréquentes
          </motion.h2>

          {[
            {
              q: "Comment postuler à l'incubateur ?",
              a: "Envoyez-nous votre CV, un portfolio (si disponible) et une lettre de motivation via le formulaire ci-dessus en sélectionnant \"Candidature incubateur\". Nous contactons les candidats retenus sous 2 semaines.",
            },
            {
              q: "Combien coûte la location du studio ?",
              a: "Les tarifs varient selon la durée et le type d'utilisation. Contactez-nous pour un devis personnalisé.",
            },
            {
              q: "Travaillez-vous avec des clients hors de Guinée ?",
              a: "Absolument. Nous accompagnons tout projet qui souhaite raconter l'Afrique ou toucher le marché guinéen, où que soit le client.",
            },
            {
              q: "L'incubation est-elle payante ?",
              a: "Non. L'incubateur est une structure non lucrative. Les incubés bénéficient gratuitement de la formation, du matériel et reçoivent une allocation mensuelle.",
            },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="mb-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.1}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-6 rounded-xl text-left transition-colors duration-200"
        style={{
          background: open ? "rgba(232,64,16,0.04)" : "white",
          border: `1px solid ${open ? "rgba(232,64,16,0.15)" : "#F0F0F0"}`,
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 600, color: "#111111" }}>
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={open ? "#E84010" : "#9CA3AF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 ml-4 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pt-3 pb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}
