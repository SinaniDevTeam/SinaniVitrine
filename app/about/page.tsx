"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutTimeline from "@/components/AboutTimeline";
import Team from "@/components/Team";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutTimeline />
      <Team />
      <Footer />
    </main>
  );
}
