"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const FRAME_W = 1440;
const FRAME_H = 1024;

const noiseOverlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  opacity: 0.3,
  pointerEvents: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "128px 128px",
};

export default function Hero() {
  const [scale, setScale] = useState(1);
  const [heroTyped, setHeroTyped] = useState(false);
  const [mobileTyped, setMobileTyped] = useState(false);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / FRAME_W);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* ─── DESKTOP (md et plus) ─── */}
      <div
        className="hidden md:block"
        style={{
          width: "100%",
          height: `${FRAME_H * scale}px`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gradient background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #999999, #ffffff)",
            }}
          />

          {/* Noise overlay */}
          <div style={{ ...noiseOverlay, zIndex: 1 }} />

          {/* "sinani!" watermark */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "20px",
              width: "1161px",
              height: "472px",
              zIndex: 2,
              pointerEvents: "none",
              mixBlendMode: "screen" as const,
            }}
          >
            <Image
              src="/images/herobg.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Portrait */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "26px",
              width: "1034px",
              height: "1293px",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <Image
              src="/images/image%201.png"
              alt="Portrait SINANI"
              fill
              className="object-contain object-top"
              priority
            />
          </div>

          {/* Titre gauche */}
          <div
            style={{
              position: "absolute",
              left: "85px",
              top: "349px",
              width: "487px",
              zIndex: 4,
              pointerEvents: "none",
            }}
          >
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                lineHeight: "1.0",
                color: "#111111",
                minHeight: "380px",
              }}
            >
              {heroTyped ? (
                <>
                  <span style={{ fontSize: "98px" }}>Raconter</span>
                  <br />
                  <span style={{ fontSize: "98px" }}>
                    la <span style={{ color: "#E84010" }}>Guinée</span>,
                  </span>
                  <br />
                  <span style={{ fontSize: "64px" }}>inspirer le</span>
                  <br />
                  <span style={{ fontSize: "64px" }}>Monde.</span>
                </>
              ) : (
                <TypeAnimation
                  sequence={[
                    "Raconter\nla Guinée,\ninspirer le\nMonde.",
                    () => setHeroTyped(true),
                  ]}
                  speed={50}
                  cursor={false}
                  wrapper="span"
                  style={{ fontSize: "100px", whiteSpace: "pre-line" }}
                />
              )}
            </h1>
          </div>

          {/* Texte descriptif droite */}
          <div
            style={{
              position: "absolute",
              right: "85px",
              top: "479px",
              width: "312px",
              height: "231px",
              zIndex: 4,
            }}
          >
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "1.4",
                color: "#111111",
              }}
            >
              Sinani est un incubateur audiovisuel et une agence de publicité qui
              forme de jeunes talents à créer des contenus inspirants, valorisant la
              Guinée et ses richesses culturelles.
            </p>
          </div>

          {/* Bouton primaire — orange avec effet hover doux */}
          <motion.a
            href="/about"
            whileHover={{ scale: 1.02, backgroundColor: "#D0350A" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: "absolute",
              left: "77px",
              top: "797px",
              width: "243px",
              height: "80px",
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E84010",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: "700",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 10px 30px rgba(232,64,16,0.2)",
              cursor: "pointer",
              touchAction: "manipulation"
            }}
          >
            Découvrir l&apos;agence
          </motion.a>

          {/* Bouton secondaire — outline inversant la couleur au hover */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02, backgroundColor: "#111111", color: "#ffffff" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: "absolute",
              left: "339px",
              top: "797px",
              width: "243px",
              height: "80px",
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "1.5px solid #111111",
              color: "#111111",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: "700",
              textDecoration: "none",
              whiteSpace: "nowrap",
              cursor: "pointer",
              touchAction: "manipulation"
            }}
          >
            Nous contacter
          </motion.a>
        </div>
      </div>

      {/* ─── MOBILE (< md) ─── */}
      <section
        className="md:hidden relative flex flex-col justify-between overflow-hidden"
        style={{
          minHeight: "100svh",
          background: "linear-gradient(to bottom, #d1d1d1, #ffffff)",
          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        {/* Noise Layer */}
        <div style={{ ...noiseOverlay, zIndex: 0, opacity: 0.15 }} />

        {/* sinani! watermark - Plus subtil et pro */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "-20%",
            width: "140%",
            height: "250px",
            zIndex: 1,
            pointerEvents: "none",
            mixBlendMode: "overlay" as const,
            opacity: 0.08,
            transform: "rotate(-5deg)"
          }}
        >
          <Image
            src="/images/herobg.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Zone Supérieure : Portrait (Droite) + Titre (Gauche) */}
        <div className="relative flex-1 flex items-center px-6" style={{ zIndex: 5, minHeight: "45vh" }}>
          
          {/* Portrait - Ajusté (Zoom réduit + Position haut-droite) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position: "absolute", 
              top: "20px", 
              right: "-15%", 
              width: "110%", 
              height: "85vh", 
              zIndex: 2, 
              pointerEvents: "none",
              filter: "drop-shadow(-40px 50px 80px rgba(0,0,0,0.15))"
            }}
          >
            <Image
              src="/images/image%201.png"
              alt="Portrait SINANI"
              fill
              className="object-contain object-right"
              style={{ filter: "contrast(1.08) brightness(0.92)" }}
              priority
            />
          </motion.div>

          {/* Titre - Positionné DEVANT l'image */}
          <div className="relative w-full pr-[30%]" style={{ zIndex: 5 }}>
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "900",
                lineHeight: "0.95",
                color: "#111111",
                letterSpacing: "-0.04em",
                minHeight: "140px",
                textShadow: "0 2px 20px rgba(255,255,255,0.8)" // Ombre pour la lisibilité
              }}
            >
              {mobileTyped ? (
                <>
                  <span style={{ fontSize: "clamp(48px, 12vw, 64px)" }}>Raconter</span>
                  <br />
                  <span style={{ fontSize: "clamp(48px, 12vw, 64px)" }}>
                    la <span style={{ color: "#E84010" }}>Guinée</span>,
                  </span>
                  <br />
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    style={{ marginTop: "8px" }}
                  >
                    <span style={{ fontSize: "clamp(28px, 7vw, 36px)", fontWeight: 700, color: "#111111" }}>inspirer le</span>
                    <br />
                    <span style={{ fontSize: "clamp(28px, 7vw, 36px)", fontWeight: 700, color: "#111111" }}>Monde.</span>
                  </motion.div>
                </>
              ) : (
                <TypeAnimation
                  sequence={[
                    "Raconter\nla Guinée,\ninspirer le\nMonde.",
                    () => setMobileTyped(true),
                  ]}
                  speed={50}
                  cursor={false}
                  wrapper="span"
                  style={{ fontSize: "clamp(42px, 11vw, 56px)", whiteSpace: "pre-line" }}
                />
              )}
            </h1>
          </div>
        </div>

        {/* Zone Inférieure : Description + Boutons */}
        <motion.div 
          className="relative px-6 flex flex-col gap-8" 
          style={{ zIndex: 10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Description - Lisibilité améliorée sur l'image */}
          <div 
            className="w-full"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.3)", 
              backdropFilter: "blur(8px)", 
              padding: "16px",
              margin: "0 -8px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            <div className="w-12 h-1 bg-[#E84010] mb-4" />
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "17px",
                fontWeight: "500",
                lineHeight: "1.6",
                color: "#111111",
                maxWidth: "100%",
                textShadow: "0 2px 15px rgba(255,255,255,0.5)"
              }}
            >
              Sinani est un <span style={{ color: "#E84010", fontWeight: "600" }}>incubateur audiovisuel</span> et une agence de publicité qui forme de jeunes talents à créer des contenus inspirants, valorisant la Guinée et ses richesses culturelles.
            </p>
          </div>

          {/* Boutons - Actions de Pro */}
          <div className="flex flex-col gap-4">
            <motion.a
              href="/about"
              whileTap={{ scale: 0.96 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                backgroundColor: "#E84010",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(232,64,16,0.2)",
                touchAction: "manipulation"
              }}
            >
              Découvrir l&apos;agence
            </motion.a>
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.96 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                backgroundColor: "transparent",
                border: "1.5px solid #111111",
                color: "#111111",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
                touchAction: "manipulation"
              }}
            >
              Nous contacter
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
