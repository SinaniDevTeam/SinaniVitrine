"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

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
              top: "-54px",
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
                  <span style={{ fontSize: "100px" }}>Raconter</span>
                  <br />
                  <span style={{ fontSize: "100px" }}>
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
              Un hub de création audiovisuelle et de marketing digital pour former
              les talents, produire des contenus et promouvoir la destination Guinée.
            </p>
          </div>

          {/* Bouton primaire — orange */}
          <a
            href="/about"
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
            }}
          >
            Découvrir l&apos;agence
          </a>

          {/* Bouton secondaire — outline */}
          <a
            href="/contact"
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
            }}
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* ─── MOBILE (< md) ─── */}
      <section
        className="md:hidden relative flex flex-col overflow-hidden"
        style={{
          minHeight: "100svh",
          background: "linear-gradient(to bottom, #aaaaaa, #ffffff)",
        }}
      >
        {/* Noise */}
        <div style={{ ...noiseOverlay, zIndex: 0 }} />

        {/* sinani! watermark */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "130%",
            height: "200px",
            zIndex: 1,
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

        {/* Contenu */}
        <div className="relative flex flex-col px-6 pt-28 pb-12 gap-6" style={{ zIndex: 2 }}>

          {/* Titre */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              lineHeight: "1.05",
              color: "#111111",
              minHeight: "180px",
            }}
          >
            {mobileTyped ? (
              <>
                <span style={{ fontSize: "clamp(38px, 11vw, 52px)" }}>Raconter</span>
                <br />
                <span style={{ fontSize: "clamp(38px, 11vw, 52px)" }}>
                  la <span style={{ color: "#E84010" }}>Guinée</span>,
                </span>
                <br />
                <span style={{ fontSize: "clamp(26px, 8vw, 36px)" }}>inspirer le</span>
                <br />
                <span style={{ fontSize: "clamp(26px, 8vw, 36px)" }}>Monde.</span>
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
                style={{ fontSize: "clamp(38px, 11vw, 52px)", whiteSpace: "pre-line" }}
              />
            )}
          </h1>

          {/* Portrait */}
          <div
            style={{ position: "relative", width: "100%", height: "300px" }}
          >
            <Image
              src="/images/image%201.png"
              alt="Portrait SINANI"
              fill
              className="object-contain object-top"
              priority
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.6",
              color: "#333333",
            }}
          >
            Un hub de création audiovisuelle et de marketing digital pour former
            les talents, produire des contenus et promouvoir la destination Guinée.
          </p>

          {/* Boutons */}
          <div className="flex flex-col gap-3 mt-2">
            <a
              href="/about"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                backgroundColor: "#E84010",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Découvrir l&apos;agence
            </a>
            <a
              href="/about"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                backgroundColor: "transparent",
                border: "1.5px solid #111111",
                color: "#111111",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Notre mission
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
