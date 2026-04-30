"use client";

import { useState, useRef, useEffect } from "react";
import SuccessModal from "@/components/SuccessModal";
import { motion, AnimatePresence } from "framer-motion";

// ── Design tokens ──────────────────────────────────────────────────
const ORANGE = "#E84010";

const INPUT: React.CSSProperties = {
  background: "#FAFAF9",
  border: "1px solid #E5E7EB",
  borderBottom: "2px solid #C9CDD4",
  borderRadius: "2px",
  padding: "14px 16px",
  fontSize: "16px",
  lineHeight: "1.5",
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
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

// ── Data ───────────────────────────────────────────────────────────
const TALENT_TYPES = [
  {
    id: "acteur", num: "01", label: "Acteur / Actrice",
    image: "/candidat/actor.jpg",
    description: "Exprimez votre talent et participez à des productions audiovisuelles.",
  },
  {
    id: "mannequin", num: "02", label: "Mannequin",
    image: "/candidat/mannequin.jpg",
    description: "Rejoignez notre réseau de mannequins pour des projets mode et publicitaires.",
  },
  {
    id: "presentateur", num: "03", label: "Présentateur / Animateur",
    image: "/candidat/presentator.png",
    description: "Animez, informez et inspirez à travers nos émissions et contenus audiovisuels.",
  },
  {
    id: "createur", num: "04", label: "Créateur de Contenu",
    image: "/candidat/content%20creator.png",
    description: "Créez, partagez et développez votre audience avec des contenus impactants.",
  },
];

const LANGUES = ["Français", "Anglais", "Pular", "Malinké", "Soussou", "Autre"];

// ── Sub-components ─────────────────────────────────────────────────
function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
      <span style={{
        fontFamily: "var(--font-bebas), 'Impact', sans-serif",
        fontSize: "44px",
        color: ORANGE,
        lineHeight: 1,
        minWidth: "48px",
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

function PillMulti({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
      {options.map(opt => (
        <button key={opt} type="button" onClick={() => toggle(opt)} style={{
          padding: "8px 16px",
          borderRadius: "100px",
          border: `1px solid ${selected.includes(opt) ? ORANGE : "#E5E7EB"}`,
          background: selected.includes(opt) ? ORANGE : "#FFFFFF",
          color: selected.includes(opt) ? "#FFFFFF" : "#6B7280",
          fontSize: "12px", fontWeight: 500,
          fontFamily: "Inter, sans-serif",
          cursor: "pointer", transition: "all 0.15s",
        }}>
          {opt}
        </button>
      ))}
    </div>
  );
}

function PillRadio({ options, selected, onChange }: { options: string[]; selected: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
      {options.map(opt => (
        <button key={opt} type="button" onClick={() => onChange(opt)} style={{
          padding: "8px 16px",
          borderRadius: "100px",
          border: `1px solid ${selected === opt ? ORANGE : "#E5E7EB"}`,
          background: selected === opt ? ORANGE : "#FFFFFF",
          color: selected === opt ? "#FFFFFF" : "#6B7280",
          fontSize: "12px", fontWeight: 500,
          fontFamily: "Inter, sans-serif",
          cursor: "pointer", transition: "all 0.15s",
        }}>
          {opt}
        </button>
      ))}
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
        ...INPUT,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        cursor: "pointer",
        color: value ? "#111111" : "#9CA3AF",
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


function MultiSelect({ value, onChange, options, placeholder }: {
  value: string[]; onChange: (v: string[]) => void; options: string[]; placeholder: string;
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

  const toggle = (opt: string) => {
    const next = value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt];
    onChange(next);
  };

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <div onClick={() => setOpen(!open)} style={{
        ...INPUT,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        cursor: "pointer",
        color: value.length > 0 ? "#111111" : "#9CA3AF",
        borderColor: open ? ORANGE : "#E5E7EB",
      }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {value.length > 0 ? value.join(", ") : placeholder}
        </span>
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
              maxHeight: "240px", overflowY: "auto",
            }}
          >
            {options.map(opt => (
              <div key={opt} onClick={() => toggle(opt)}
                style={{
                  padding: "11px 14px", cursor: "pointer", fontSize: "14px", borderRadius: "8px",
                  fontFamily: "Inter, sans-serif", transition: "background 0.1s",
                  color: value.includes(opt) ? ORANGE : "#4B5563",
                  background: value.includes(opt) ? "rgba(232,64,16,0.06)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
                onMouseEnter={e => { if (!value.includes(opt)) e.currentTarget.style.background = "#F9FAFB"; }}
                onMouseLeave={e => { if (!value.includes(opt)) e.currentTarget.style.background = "transparent"; }}
              >
                <span>{opt}</span>
                {value.includes(opt) && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
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
export function ActorForm() {
  const [talentTypes, setTalentTypes] = useState<string[]>([]);
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "",
    age: "", genre: "", adresse: "",
    experience: "", bio: "", notes: "",
  });
  const [langues, setLangues] = useState<string[]>([]);
  const [referenceFile, setReferenceFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const toggleTalent = (id: string) =>
    setTalentTypes(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (talentTypes.length === 0 || !form.experience) return;
    setIsSubmitting(true);
    setError(false);

    let fileData = null;
    if (referenceFile) {
      fileData = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({
          name: referenceFile.name,
          type: referenceFile.type,
          content: e.target?.result?.toString().split(",")[1]
        });
        reader.readAsDataURL(referenceFile);
      });
    }

    try {
      const res = await fetch("/api/candidature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "actor",
          talentTypes: talentTypes.map(id => TALENT_TYPES.find(t => t.id === id)?.label).join(", "),
          langues: langues.join(", "),
          ...form,
          references: fileData,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setShowModal(true);
        setForm({ prenom: "", nom: "", email: "", telephone: "", age: "", genre: "", adresse: "", experience: "", bio: "", notes: "" });
        setLangues([]); setTalentTypes([]); setReferenceFile(null);
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
      {/* ── Talent type selector ───────────────────────── */}
      <div style={{ background: "#FAFAF9", borderTop: "1px solid #F0F0F0", borderBottom: "1px solid #F0F0F0", padding: "40px 0" }}>
        <div className="px-4 sm:px-8 md:px-12" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const,
            color: ORANGE, fontWeight: 600, fontFamily: "Inter, sans-serif", marginBottom: "20px",
          }}>
            Je suis un(e) — sélectionnez tout ce qui s'applique
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "2px" }}>
            {TALENT_TYPES.map(t => {
              const selected = talentTypes.includes(t.id);
              return (
                <div
                  key={t.id}
                  onClick={() => toggleTalent(t.id)}
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    backgroundImage: `url(${t.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundColor: "#1a1008",
                    cursor: "pointer",
                    userSelect: "none" as const,
                    overflow: "hidden",
                  }}
                >
                  {/* Gradient overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.15) 100%)",
                  }} />

                  {/* Selection orange overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: selected ? "rgba(232,64,16,0.35)" : "transparent",
                    transition: "background 0.2s",
                  }} />

                  {/* Orange border when selected */}
                  {selected && (
                    <div style={{
                      position: "absolute", inset: 0,
                      border: `3px solid ${ORANGE}`,
                      pointerEvents: "none",
                    }} />
                  )}

                  {/* Checkmark */}
                  {selected && (
                    <div style={{
                      position: "absolute", top: "12px", right: "12px",
                      width: "28px", height: "28px",
                      background: ORANGE,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}

                  {/* Content */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "20px 18px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-bebas), 'Impact', sans-serif",
                      fontSize: "28px", color: ORANGE, lineHeight: 1, display: "block",
                    }}>
                      {t.num}
                    </span>
                    <h3 style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 700,
                      color: "#FFFFFF", margin: "4px 0 8px", lineHeight: 1.2,
                    }}>
                      {t.label}
                    </h3>
                    <div style={{ borderLeft: `2px solid ${ORANGE}`, paddingLeft: "10px" }}>
                      <p style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "11px", fontWeight: 300,
                        color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0,
                      }}>
                        {t.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Form ──────────────────────────────────────────── */}
      <div className="px-4 sm:px-8 md:px-12 pt-16 pb-24" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>

          {/* ── 01 — Informations personnelles ─── */}
          <div style={{ marginBottom: "56px" }}>
            <SectionHeader num="01" title="Informations Personnelles" sub="Parlez-nous de vous" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Field label="Prénom *">
                <input type="text" placeholder="Votre prénom" value={form.prenom} onChange={set("prenom")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
              <Field label="Nom *">
                <input type="text" placeholder="Votre nom" value={form.nom} onChange={set("nom")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Field label="Email *">
                <input type="email" placeholder="vous@exemple.com" value={form.email} onChange={set("email")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
              <Field label="Téléphone *">
                <input type="tel" placeholder="+224 ···" value={form.telephone} onChange={set("telephone")} style={INPUT} onFocus={fi} onBlur={fo} required />
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <Field label="Âge">
                <input type="number" placeholder="ex. 24" min={16} max={99} value={form.age} onChange={set("age")} style={INPUT} onFocus={fi} onBlur={fo} />
              </Field>
              <Field label="Genre">
                <CustomSelect
                  value={form.genre}
                  onChange={v => setForm(f => ({ ...f, genre: v }))}
                  options={["Femme", "Homme"]}
                  placeholder="Sélectionner"
                />
              </Field>
              <Field label="Adresse">
                <input type="text" placeholder="Quartier, ville" value={form.adresse} onChange={set("adresse")} style={INPUT} onFocus={fi} onBlur={fo} />
              </Field>
            </div>
          </div>

          {/* ── 02 — Votre profil ─── */}
          <div style={{ marginBottom: "56px" }}>
            <SectionHeader num="02" title="Votre Profil" sub="Aidez-nous à vous connaître" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Field label="Années d'expérience *">
                <CustomSelect
                  value={form.experience}
                  onChange={v => setForm(f => ({ ...f, experience: v }))}
                  options={["Débutant(e)", "1 à 2 ans", "3 à 5 ans", "5 à 10 ans", "Plus de 10 ans"]}
                  placeholder="Sélectionner"
                />
              </Field>
              <Field label="Langues parlées">
                <MultiSelect
                  options={LANGUES}
                  value={langues}
                  onChange={setLangues}
                  placeholder="Sélectionner"
                />
              </Field>
            </div>
            <Field label={`Biographie * (${form.bio.length}/300)`}>
              <textarea
                placeholder="Parlez-nous de vous — votre parcours, vos réalisations et le type de projets que vous recherchez."
                rows={5} maxLength={300}
                value={form.bio} onChange={set("bio")}
                style={{ ...INPUT, resize: "vertical" as const, lineHeight: 1.7 }}
                onFocus={fi} onBlur={fo}
                required
              />
            </Field>
          </div>

          {/* ── 03 — Informations complémentaires ─── */}
          <div style={{ marginBottom: "56px" }}>
            <SectionHeader num="03" title="Informations Complémentaires" sub="Documents et références" />
            <div className="mb-5">
              <Field label="Informations additionnelles">
                <textarea
                  placeholder="Autres compétences, liens portfolio, ou détails pertinents..."
                  rows={3} value={form.notes} onChange={set("notes")}
                  style={{ ...INPUT, resize: "vertical" as const, lineHeight: 1.7 }}
                  onFocus={fi} onBlur={fo}
                />
              </Field>
            </div>
            <Field label="Télécharger des références (Photos, Portfolio PDF...)">
              <div style={{ position: "relative" }}>
                <input
                  type="file"
                  onChange={e => setReferenceFile(e.target.files?.[0] || null)}
                  style={{
                    position: "absolute", inset: 0, opacity: 0, cursor: "pointer", zIndex: 2
                  }}
                />
                <div style={{
                  ...INPUT,
                  display: "flex", alignItems: "center", gap: "12px",
                  color: referenceFile ? "#111111" : "#9CA3AF",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span style={{ fontSize: "14px" }}>
                    {referenceFile ? referenceFile.name : "Choisir un fichier..."}
                  </span>
                </div>
              </div>
            </Field>
          </div>

          {/* ── Submit ─── */}
          <div style={{
            borderTop: "1px solid #F0F0F0", paddingTop: "40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap" as const, gap: "24px",
          }}>
            <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7, maxWidth: "400px", fontFamily: "Inter, sans-serif" }}>
              Tous les profils sont examinés par notre équipe. Nous vous contacterons dès qu'un projet correspondra à votre profil.
            </p>
            {error && <p style={{ fontSize: "13px", color: "#ef4444", fontFamily: "Inter, sans-serif" }}>Une erreur s'est produite. Réessayez.</p>}
            <button
              type="submit"
              disabled={isSubmitting || talentTypes.length === 0 || !form.experience}
              style={{
                background: submitted ? "#059669" : ORANGE,
                color: "#FFFFFF", border: "none",
                padding: "16px 48px",
                fontFamily: "var(--font-bebas), 'Impact', sans-serif",
                fontSize: "18px", letterSpacing: "0.15em",
                cursor: isSubmitting || talentTypes.length === 0 || !form.experience ? "not-allowed" : "pointer",
                whiteSpace: "nowrap" as const,
                opacity: isSubmitting || talentTypes.length === 0 || !form.experience ? 0.5 : 1,
                transition: "background 0.2s, opacity 0.2s",
                borderRadius: "4px",
              }}
            >
              {submitted ? "PROFIL SOUMIS ✓" : isSubmitting ? "ENVOI EN COURS..." : "SOUMETTRE MON PROFIL →"}
            </button>
          </div>

        </form>
      </div>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Félicitations 🎉"
        message="Votre profil a été soumis avec succès. Notre équipe examinera votre candidature et vous contactera dès qu'un projet correspond à votre profil."
      />
    </motion.div>
  );
}
