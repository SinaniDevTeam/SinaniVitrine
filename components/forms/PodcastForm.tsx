"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Design tokens ──────────────────────────────────────────────────
const ORANGE = "#E84010";

const INPUT: React.CSSProperties = {
  background: "#FAFAF9",
  border: "1px solid #E5E7EB",
  borderBottom: "2px solid #C9CDD4",
  borderRadius: "2px",
  padding: "14px 16px",
  fontSize: "15px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 300,
  color: "#111111",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, background 0.2s",
};

const LABEL: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  color: "#888888",
  fontFamily: "Inter, sans-serif",
  marginBottom: "8px",
  display: "block",
};

// ── Sub-components ─────────────────────────────────────────────────
function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
      <span style={{
        fontFamily: "var(--font-bebas), 'Impact', sans-serif",
        fontSize: "44px", color: ORANGE,
        lineHeight: 1, minWidth: "48px",
      }}>
        {num}
      </span>
      <div>
        <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#111111", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
          {title}
        </div>
        <div style={{ fontSize: "12px", color: "#6B7280", letterSpacing: "0.04em", fontFamily: "Inter, sans-serif", marginTop: "2px" }}>
          {sub}
        </div>
      </div>
      <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }} />
    </div>
  );
}

function CustomSelect({ value, onChange, options, placeholder }: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <div onClick={() => setOpen(!open)} style={{
        ...INPUT, display: "flex", alignItems: "center", justifyContent: "space-between",
        cursor: "pointer", color: value ? "#111111" : "#9CA3AF",
        borderColor: open ? ORANGE : "#E5E7EB",
      }}>
        <span>{value || placeholder}</span>
        <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke={open ? ORANGE : "#9CA3AF"} strokeWidth="2" strokeLinecap="round">
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute", zIndex: 50, left: 0, right: 0,
              background: "#FFFFFF", border: "1px solid #F0F0F0",
              borderRadius: "12px", padding: "4px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            }}
          >
            {options.map(opt => (
              <div key={opt} onClick={() => { onChange(opt); setOpen(false); }}
                style={{
                  padding: "11px 14px", cursor: "pointer", fontSize: "14px", borderRadius: "8px",
                  fontFamily: "Inter, sans-serif", transition: "background 0.1s",
                  color: value === opt ? ORANGE : "#4B5563",
                  background: value === opt ? "rgba(232,64,16,0.06)" : "transparent",
                }}
                onMouseEnter={e => { if (value !== opt) e.currentTarget.style.background = "#F9FAFB"; }}
                onMouseLeave={e => { if (value !== opt) e.currentTarget.style.background = "transparent"; }}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={LABEL}>{label}</label>
      {children}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────
export function PodcastForm() {
  const [form, setForm] = useState({
    nom: "", email: "", telephone: "", adresse: "",
    titre: "", categorie: "", videoUrl: "",
    publicCible: "", notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.categorie) return;
    setIsSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/candidature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "podcast", ...form }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ nom: "", email: "", telephone: "", adresse: "", titre: "", categorie: "", videoUrl: "", publicCible: "", notes: "" });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fi = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = ORANGE;
    e.target.style.borderBottomColor = ORANGE;
    e.target.style.background = "rgba(232,64,16,0.03)";
  };
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#E5E7EB";
    e.target.style.borderBottomColor = "#C9CDD4";
    e.target.style.background = "#FAFAF9";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: "#FFFFFF" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 48px 100px" }}>
        <form onSubmit={handleSubmit}>

          {/* ── 01 — Vos coordonnées ─── */}
          <div style={{ marginBottom: "56px" }}>
            <SectionHeader num="01" title="Vos Coordonnées" sub="Qui êtes-vous ?" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Field label="Nom complet *">
                <input type="text" placeholder="Votre nom et prénom" value={form.nom} onChange={set("nom")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
              <Field label="Email *">
                <input type="email" placeholder="vous@exemple.com" value={form.email} onChange={set("email")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Téléphone">
                <input type="tel" placeholder="+224 ···" value={form.telephone} onChange={set("telephone")} style={INPUT} onFocus={fi} onBlur={fo} />
              </Field>
              <Field label="Adresse">
                <input type="text" placeholder="Quartier, ville" value={form.adresse} onChange={set("adresse")} style={INPUT} onFocus={fi} onBlur={fo} />
              </Field>
            </div>
          </div>

          {/* ── 02 — Votre concept ─── */}
          <div style={{ marginBottom: "56px" }}>
            <SectionHeader num="02" title="Votre Concept" sub="De quoi s'agit-il ?" />
            <div className="mb-5">
              <Field label="Titre du podcast *">
                <input type="text" placeholder="Comment l'appelleriez-vous ?" value={form.titre} onChange={set("titre")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
            </div>
            <div className="mb-5">
              <Field label="Catégorie *">
                <CustomSelect
                  value={form.categorie}
                  onChange={v => setForm(f => ({ ...f, categorie: v }))}
                  options={["Culture", "Sport", "Business", "Éducation", "Divertissement", "Société", "Autre"]}
                  placeholder="Sélectionner une catégorie"
                />
              </Field>
            </div>

            {/* Vidéo */}
            <div className="mb-5">
              <label style={LABEL}>Vidéo de présentation</label>
              <div style={{
                border: "1px solid #E5E7EB", borderRadius: "10px",
                background: "#FAFAF9", overflow: "hidden",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "10px 14px", borderBottom: "1px solid #F0F0F0",
                }}>
                  <div style={{
                    width: "26px", height: "26px", borderRadius: "6px",
                    background: "rgba(232,64,16,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#9CA3AF", fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    YouTube · Google Drive · Dropbox
                  </span>
                </div>
                <input
                  type="url" placeholder="https://..."
                  value={form.videoUrl} onChange={set("videoUrl")}
                  style={{ ...INPUT, border: "none", background: "transparent", borderRadius: 0 }}
                  onFocus={e => { const p = e.currentTarget.closest("div[style]") as HTMLElement; if (p) p.style.borderColor = ORANGE; }}
                  onBlur={e => { const p = e.currentTarget.closest("div[style]") as HTMLElement; if (p) p.style.borderColor = "#E5E7EB"; }}
                />
              </div>
            </div>

            <div className="mb-5">
              <Field label="Public cible *">
                <textarea
                  placeholder="À qui s'adresse votre podcast ? Tranches d'âge, centres d'intérêt..."
                  rows={3} value={form.publicCible} onChange={set("publicCible")}
                  style={{ ...INPUT, resize: "vertical" as const, lineHeight: 1.7 }}
                  onFocus={fi} onBlur={fo} required
                />
              </Field>
            </div>
            <Field label="Informations complémentaires">
              <textarea
                placeholder="Références, inspirations, contraintes, demandes spéciales..."
                rows={3} value={form.notes} onChange={set("notes")}
                style={{ ...INPUT, resize: "vertical" as const, lineHeight: 1.7 }}
                onFocus={fi} onBlur={fo}
              />
            </Field>
          </div>

          {/* ── Submit ─── */}
          <div style={{
            borderTop: "1px solid #F0F0F0", paddingTop: "40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap" as const, gap: "24px",
          }}>
            <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7, maxWidth: "400px", fontFamily: "Inter, sans-serif" }}>
              Toutes les soumissions sont examinées dans un délai de 5 jours ouvrables. Un membre de l'équipe SINANI vous contactera pour discuter de votre projet.
            </p>
            {error && <p style={{ fontSize: "13px", color: "#ef4444", fontFamily: "Inter, sans-serif" }}>Une erreur s'est produite. Réessayez.</p>}
            <button
              type="submit"
              disabled={isSubmitting || !form.categorie}
              style={{
                background: submitted ? "#059669" : ORANGE,
                color: "#FFFFFF", border: "none",
                padding: "16px 48px",
                fontFamily: "var(--font-bebas), 'Impact', sans-serif",
                fontSize: "18px", letterSpacing: "0.15em",
                cursor: isSubmitting || !form.categorie ? "not-allowed" : "pointer",
                whiteSpace: "nowrap" as const,
                opacity: isSubmitting || !form.categorie ? 0.5 : 1,
                transition: "background 0.2s, opacity 0.2s",
                borderRadius: "4px",
              }}
            >
              {submitted ? "PROJET SOUMIS ✓" : isSubmitting ? "ENVOI EN COURS..." : "ENVOYER MON IDÉE →"}
            </button>
          </div>

        </form>
      </div>
    </motion.div>
  );
}
