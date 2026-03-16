import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import VisionSection from "@/components/VisionSection";
import WhoWeAre from "@/components/WhoWeAre";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VisionSection />
      <WhoWeAre />
      <Team />
      <Partners />
      <Footer />
    </main>
  );
}
