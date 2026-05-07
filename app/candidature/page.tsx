"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCandidature from "@/components/HeroCandidature";
import { ActorForm } from "@/components/forms/ActorForm";
import { PodcastForm } from "@/components/forms/PodcastForm";
import { PresenterForm } from "@/components/forms/PresenterForm";
import { CandidatureCard } from "@/components/CandidatureCard";

export default function CandidaturePage() {
  const [type, setType] = useState<"actor" | "podcast" | "presenter" | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [type]);

  return (
    <main style={{ background: "#FFFFFF" }}>
      <Navbar />

      <HeroCandidature />

      {/* Choice section */}
      <div style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CandidatureCard
              title="TALENTS"
              subtitle="Acteurs & Modèles"
              description="Acteurs, mannequins ou créateurs de contenu — rejoignez nos talents et participez à nos productions."
              buttonLabel="REJOINDRE →"
              onSelect={() => setType("actor")}
              isSelected={type === "actor"}
            />
            <CandidatureCard
              title="PRÉSENTATEUR"
              subtitle="Animateur TV / Web"
              description="Vous avez le sens de la communication ? Devenez le visage de nos prochaines émissions."
              buttonLabel="REJOINDRE →"
              onSelect={() => setType("presenter")}
              isSelected={type === "presenter"}
            />
            <CandidatureCard
              title="PODCAST"
              subtitle="Production Podcast"
              description="Vous avez un concept de podcast ? Soumettez votre idée à notre équipe de production."
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
        {type === "presenter" && <PresenterForm />}
        {type === "podcast" && <PodcastForm />}
      </div>

      <Footer />
    </main>
  );
}
