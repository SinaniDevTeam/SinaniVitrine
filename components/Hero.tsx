"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const FRAME_W = 1440;
const FRAME_H = 1024;

export default function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth / FRAME_W);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: `${FRAME_H * scale}px`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Inner div figé à 1440×1024 — scale proportionnel */}
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.3,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* "sinani!" background */}
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
            }}
          >
            <span style={{ fontSize: "100px" }}>Raconter</span><br />
            <span style={{ fontSize: "100px" }}>
              la <span style={{ color: "#E84010" }}>Guinée</span>,
            </span><br />
            <span style={{ fontSize: "64px" }}>inspirer le</span><br />
            <span style={{ fontSize: "64px" }}>Monde.</span>
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
          href="/about"
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
          Découvrir l&apos;agence
        </a>

      </div>
    </div>
  );
}
