import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import WhoWeAre from "@/components/WhoWeAre";
import Realisations from "@/components/Realisations";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SINANI — Incubateur Audiovisuel & Agence de Publicité en Guinée",
  description:
    "SINANI est un incubateur audiovisuel et une agence de publicité basée à Conakry, Guinée. Production audiovisuelle, studio photo & vidéo, marketing digital. Raconter la Guinée, inspirer le Monde.",
  alternates: {
    canonical: "https://sinani.net",
  },
  openGraph: {
    url: "https://sinani.net",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VisionSection />
      <WhoWeAre />
      <Realisations />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
