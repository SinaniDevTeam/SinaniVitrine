"use client";

import { useState } from "react";

interface CandidatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  onSelect: () => void;
  isSelected: boolean;
}

export function CandidatureCard({
  title,
  subtitle,
  description,
  buttonLabel,
  onSelect,
  isSelected,
}: CandidatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        border: `1px solid ${isSelected ? "#E84010" : "#E5E7EB"}`,
        borderTop: `3px solid ${isSelected ? "#E84010" : hovered ? "rgba(232,64,16,0.3)" : "#E5E7EB"}`,
        padding: "36px 32px",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: isSelected
          ? "0 8px 32px rgba(232,64,16,0.12)"
          : hovered
          ? "0 4px 20px rgba(0,0,0,0.06)"
          : "0 1px 4px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "260px",
        userSelect: "none",
      }}
    >
      <div>
        <span style={{
          display: "inline-block",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#E84010",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          marginBottom: "14px",
        }}>
          {subtitle}
        </span>

        <h2 style={{
          fontFamily: "var(--font-bebas), 'Impact', sans-serif",
          fontSize: "clamp(44px, 5vw, 60px)",
          lineHeight: 0.95,
          letterSpacing: "0.02em",
          color: "#111111",
          marginBottom: "14px",
        }}>
          {title}
        </h2>

        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: "#6B7280",
          lineHeight: 1.7,
        }}>
          {description}
        </p>
      </div>

      <button
        style={{
          marginTop: "28px",
          background: isSelected ? "#E84010" : "transparent",
          border: `1px solid ${isSelected ? "#E84010" : "#E5E7EB"}`,
          color: isSelected ? "#FFFFFF" : "#374151",
          fontFamily: "var(--font-bebas), 'Impact', sans-serif",
          fontSize: "15px",
          letterSpacing: "0.15em",
          padding: "13px 24px",
          cursor: "pointer",
          transition: "all 0.2s",
          width: "100%",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
