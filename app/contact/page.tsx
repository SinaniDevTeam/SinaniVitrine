"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroContact from "@/components/HeroContact";
import FAQ from "@/components/FAQ";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
    lines: ["Nongo 2ème pont au carrefour Idiamine."],
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

function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder 
}: { 
  value: string; 
  onChange: (val: string) => void; 
  options: string[]; 
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer transition-all duration-200"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "15px",
          fontWeight: 400,
          color: value ? "#111111" : "#9CA3AF",
          background: "#FAFAF9",
          border: `1px solid ${isOpen ? "#E84010" : "#E5E7EB"}`,
          borderRadius: "12px",
          padding: "14px 16px",
          width: "100%",
          outline: "none",
        }}
      >
        <span>{value || placeholder}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#E84010" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid #F0F0F0",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              padding: "4px",
            }}
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-4 py-3 rounded-lg cursor-pointer transition-colors duration-150 text-[14px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: value === option ? "#E84010" : "#4B5563",
                  background: value === option ? "rgba(232,64,16,0.06)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (value !== option) {
                    e.currentTarget.style.background = "#F9FAFB";
                    e.currentTarget.style.color = "#111111";
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== option) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#4B5563";
                  }
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }

  } catch (error) {
    console.error("Erreur envoi message:", error);
  } finally {
    setIsSubmitting(false);
  }

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

      <HeroContact />

      {/* ── Formulaire + Infos ── */}
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
                          <a key={j} href={info.href} className="hover:text-[#E84010] transition-colors"
                            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#6B7280", textDecoration: "none" }}>
                            {line}
                          </a>
                        ) : (
                          <p key={j} style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#6B7280" }}>{line}</p>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Colonne droite — Formulaire */}
            <motion.div className="lg:col-span-3" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #F0F0F0", boxShadow: "0 4px 40px rgba(0,0,0,0.04)" }}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                      Nom complet
                    </label>
                    <input type="text" placeholder="Votre nom" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                      required />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                      Email
                    </label>
                    <input type="email" placeholder="votre@email.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                      required />
                  </div>
                </div>

                <div className="mb-5">
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                    Sujet
                  </label>
                  <CustomSelect 
                    value={formData.subject}
                    onChange={(val) => setFormData({ ...formData, subject: val })}
                    options={subjects}
                    placeholder="Choisir un sujet"
                  />
                </div>

                <div className="mb-6">
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", display: "block" }}>
                    Message
                  </label>
                  <textarea placeholder="Décrivez votre projet ou votre demande..." rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" as const }}
                    onFocus={(e) => { e.target.style.borderColor = "#E84010"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                    required />
                </div>

                <button type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "Inter, sans-serif", fontSize: "16px",
                    background: submitted ? "linear-gradient(135deg, #059669, #10B981)" : "linear-gradient(135deg, #E84010, #d63a0e)",
                    boxShadow: "0 4px 20px rgba(232,64,16,0.25)",
                  }}>
                  {submitted ? "Message envoyé !" : isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
     
      <FAQ />

      <Footer />
    </main>
  );
}
