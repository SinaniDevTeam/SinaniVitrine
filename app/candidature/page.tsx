"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ActorForm } from "@/components/forms/ActorForm";
import { PodcastForm } from "@/components/forms/PodcastForm";
import { CandidatureCard } from "@/components/CandidatureCard";

export default function CandidaturePage() {
  const [type, setType] = useState<"actor" | "podcast" | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [type]);

  return (
    <main style={{ background: "#FFFFFF" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: "#FAFAF9", borderBottom: "1px solid #F0F0F0" }} className="pt-20">
        <div className="max-w-6xl mx-auto px-8 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <div style={{
              display: "inline-block",
              background: "#E84010",
              color: "#FFFFFF",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
              padding: "6px 14px",
              marginBottom: "24px",
            }}>
              Rejoindre SINANI
            </div>
            <h1 style={{
              fontFamily: "var(--font-bebas), 'Impact', sans-serif",
              fontSize: "clamp(64px, 9vw, 108px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "#111111",
              margin: 0,
            }}>
              REJOIGNEZ<br />
              LA FAMILLE<br />
              <span style={{ color: "#E84010" }}>SINANI</span>
            </h1>
          </div>
          <div style={{ paddingBottom: "8px" }}>
            <div style={{ width: "40px", height: "3px", background: "#E84010", marginBottom: "20px" }} />
            <p style={{
              fontSize: "clamp(15px, 1.8vw, 17px)",
              lineHeight: 1.8,
              color: "#6B7280",
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
            }}>
              Vous êtes acteur, mannequin, animateur ou créateur de contenu ? Vous rêvez de produire un podcast qui marquera les auditeurs ? Nous cherchons les talents qui feront rayonner la Guinée.
            </p>
          </div>
        </div>
      </div>

      {/* Choice section */}
      <div style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div style={{
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#E84010",
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}>
            Je souhaite
            <span style={{ flex: 1, height: "1px", background: "#E5E7EB", display: "block" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CandidatureCard
              title="ACTEUR"
              subtitle="Roster de Talents"
              description="Acteur, mannequin, présentateur ou créateur de contenu — rejoignez notre roster et participez à nos productions audiovisuelles."
              buttonLabel="REJOINDRE →"
              onSelect={() => setType("actor")}
              isSelected={type === "actor"}
            />
            <CandidatureCard
              title="PODCAST"
              subtitle="Production Podcast"
              description="Vous avez un concept de podcast à développer ? Soumettez votre idée à notre équipe de production pour examen."
              buttonLabel="SOUMETTRE →"
              onSelect={() => setType("podcast")}
              isSelected={type === "podcast"}
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <div ref={formRef}>
        {type === "actor" && <ActorForm />}
        {type === "podcast" && <PodcastForm />}
      </div>

      <Footer />
    </main>
  );
}
