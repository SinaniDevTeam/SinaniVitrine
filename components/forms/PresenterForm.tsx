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
              maxHeight: "240px", overflowY: "auto",
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
export function PresenterForm() {
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "",
    age: "", genre: "", adresse: "",
    experience: "", bio: "", notes: "",
  });
  const [langues, setLangues] = useState<string[]>([]);
  const [referenceFile, setReferenceFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUploading, setVideoUploading] = useState(false);
  const [videoUploadProgress, setVideoUploadProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.experience || !form.age || !referenceFile || !videoUrl) return;
    setIsSubmitting(true);
    setError(false);

    let fileData = null;
    if (referenceFile) {
      if (referenceFile.size > 4.5 * 1024 * 1024) {
        alert("Le fichier est trop lourd. Veuillez choisir un fichier de moins de 4.5 Mo.");
        setIsSubmitting(false);
        return;
      }
      fileData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({
          name: referenceFile.name,
          type: referenceFile.type,
          content: e.target?.result?.toString().split(",")[1]
        });
        reader.onerror = (e) => reject(new Error("Erreur lors de la lecture du fichier"));
        reader.readAsDataURL(referenceFile);
      });
    }

    try {
      const res = await fetch("/api/candidature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "presenter",
          talentTypes: "Présentateur / Animateur",
          langues: langues.join(", "),
          ...form,
          references: fileData,
          videoUrl,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setShowModal(true);
        setForm({ prenom: "", nom: "", email: "", telephone: "", age: "", genre: "", adresse: "", experience: "", bio: "", notes: "" });
        setLangues([]); setReferenceFile(null); setVideoFile(null); setVideoUrl(""); setVideoUploadProgress(0);
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
      <div className="px-4 sm:px-8 md:px-12 pt-16 pb-24" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px", textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "var(--font-bebas), 'Impact', sans-serif", fontSize: "40px", color: "#111111", letterSpacing: "0.02em" }}>
            Candidature <span style={{ color: ORANGE }}>Présentateur</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "16px", marginTop: "8px" }}>
            Devenez le visage de nos prochaines émissions et productions.
          </p>
        </div>

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
              <Field label="Âge *">
                <CustomSelect
                  value={form.age}
                  onChange={v => setForm(f => ({ ...f, age: v }))}
                  options={["18–24", "25–34", "35–44", "45+"]}
                  placeholder="Sélectionner"
                />
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
                placeholder="Parlez-nous de votre expérience en animation, vos thèmes de prédilection..."
                rows={5} maxLength={300}
                value={form.bio} onChange={set("bio")}
                style={{ ...INPUT, resize: "vertical" as const, lineHeight: 1.7 }}
                onFocus={fi} onBlur={fo}
                required
              />
            </Field>
          </div>

          {/* ── 03 — Documents & Vidéo ─── */}
          <div style={{ marginBottom: "56px" }}>
            <SectionHeader num="03" title="Documents & Vidéo" sub="Présentez-vous en image" />
            
            <div className="mb-8">
              <label style={LABEL}>Photos / Portfolio <span style={{ color: ORANGE }}>*</span></label>
              {!referenceFile ? (
                <label style={{
                  display: "flex", flexDirection: "column" as const, alignItems: "center",
                  justifyContent: "center", gap: "12px",
                  border: "2px dashed #E5E7EB", borderRadius: "10px",
                  padding: "32px", cursor: "pointer", background: "#FAFAF9",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ORANGE; e.currentTarget.style.background = "rgba(232,64,16,0.02)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.background = "#FAFAF9"; }}
                >
                  <input type="file" accept="image/*,.pdf" style={{ display: "none" }}
                    onChange={e => setReferenceFile(e.target.files?.[0] || null)}
                  />
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(232,64,16,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <div style={{ textAlign: "center" as const }}>
                    <span style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", color: "#374151", fontWeight: 500 }}>Cliquez pour choisir un fichier</span>
                    <br /><span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>Photos, PDF — max 4.5 MB</span>
                  </div>
                </label>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #D1FAE5", borderRadius: "10px", padding: "14px 16px", background: "#F0FDF4" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#D1FAE5", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: "#059669", fontWeight: 600 }}>Fichier sélectionné</div>
                    <div style={{ fontSize: "12px", color: "#6B7280", fontFamily: "Inter, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{referenceFile.name}</div>
                  </div>
                  <button type="button" onClick={() => setReferenceFile(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}>×</button>
                </div>
              )}
            </div>

            <div>
              <label style={LABEL}>Vidéo de présentation <span style={{ color: ORANGE }}>*</span></label>
              {!videoFile ? (
                <label style={{
                  display: "flex", flexDirection: "column" as const, alignItems: "center",
                  justifyContent: "center", gap: "12px",
                  border: "2px dashed #E5E7EB", borderRadius: "10px",
                  padding: "28px", cursor: "pointer", background: "#FAFAF9",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ORANGE; e.currentTarget.style.background = "rgba(232,64,16,0.02)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.background = "#FAFAF9"; }}
                >
                  <input type="file" accept="video/*" style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setVideoFile(file);
                      setVideoUploading(true);
                      setVideoUploadProgress(0);
                      const formData = new FormData();
                      formData.append("file", file);
                      formData.append("upload_preset", "sinani_videos");
                      const xhr = new XMLHttpRequest();
                      xhr.upload.addEventListener("progress", (ev) => {
                        if (ev.lengthComputable) setVideoUploadProgress(Math.round((ev.loaded / ev.total) * 100));
                      });
                      xhr.addEventListener("load", () => {
                        if (xhr.status === 200) setVideoUrl(JSON.parse(xhr.responseText).secure_url);
                        else { setVideoFile(null); setError(true); }
                        setVideoUploading(false);
                      });
                      xhr.addEventListener("error", () => {
                        setVideoFile(null); setError(true); setVideoUploading(false);
                      });
                      xhr.open("POST", "https://api.cloudinary.com/v1_1/dvod3wqc9/video/upload");
                      xhr.send(formData);
                    }}
                  />
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(232,64,16,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2"><rect x="2" y="7" width="15" height="10" rx="2" /><path d="M17 9l5-3v12l-5-3" /></svg>
                  </div>
                  <div style={{ textAlign: "center" as const }}>
                    <span style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", color: "#374151", fontWeight: 500 }}>Cliquez pour uploader votre démo</span>
                    <br /><span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>Obligatoire pour ce profil</span>
                  </div>
                </label>
              ) : videoUploading ? (
                <div style={{ border: "1px solid #E5E7EB", borderRadius: "10px", padding: "20px", background: "#FAFAF9" }}>
                  <div style={{ fontSize: "13px", color: "#6B7280", fontFamily: "Inter, sans-serif", marginBottom: "10px" }}>Upload en cours…</div>
                  <div style={{ height: "4px", background: "#F0F0F0", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${videoUploadProgress}%`, background: ORANGE, borderRadius: "2px" }} />
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #D1FAE5", borderRadius: "10px", padding: "14px 16px", background: "#F0FDF4" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#D1FAE5", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: "#059669", fontWeight: 600 }}>Vidéo uploadée</div>
                    <div style={{ fontSize: "12px", color: "#6B7280", fontFamily: "Inter, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{videoFile.name}</div>
                  </div>
                  <button type="button" onClick={() => { setVideoFile(null); setVideoUrl(""); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}>×</button>
                </div>
              )}
            </div>
          </div>

          {/* ── Submit ─── */}
          <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "24px" }}>
            <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7, maxWidth: "400px", fontFamily: "Inter, sans-serif" }}>
              En tant que présentateur, votre aisance face caméra est primordiale. Nous examinerons votre vidéo avec attention.
            </p>
            {error && <p style={{ fontSize: "13px", color: "#ef4444", fontFamily: "Inter, sans-serif" }}>Une erreur s'est produite. Réessayez.</p>}
            <button
              type="submit"
              disabled={isSubmitting || !form.experience || !form.age || !referenceFile || !videoUrl}
              style={{
                background: submitted ? "#059669" : ORANGE,
                color: "#FFFFFF", border: "none",
                padding: "16px 48px",
                fontFamily: "var(--font-bebas), 'Impact', sans-serif",
                fontSize: "18px", letterSpacing: "0.15em",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                whiteSpace: "nowrap" as const,
                opacity: isSubmitting || !form.experience || !form.age || !referenceFile || !videoUrl ? 0.5 : 1,
                transition: "background 0.2s, opacity 0.2s",
                borderRadius: "4px",
              }}
            >
              {submitted ? "PROFIL SOUMIS ✓" : isSubmitting ? "ENVOI EN COURS..." : "SOUMETTRE MA CANDIDATURE →"}
            </button>
          </div>

        </form>
      </div>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Candidature reçue ! 🎤"
        message="Votre profil de présentateur a été soumis avec succès. Notre équipe reviendra vers vous après avoir visionné votre vidéo."
      />
    </motion.div>
  );
}
