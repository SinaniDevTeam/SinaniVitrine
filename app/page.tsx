import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import WhoWeAre from "@/components/WhoWeAre";
import Realisations from "@/components/Realisations";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";


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
      
      {/* <Partners /> */}
      <Footer />
    </main>
  );
}
