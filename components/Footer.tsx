"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
];

type Node = { x: number; y: number };
type Segment = { from: Node; to: Node; isOrange: boolean };
type Pulse = {
  seg: number;
  t: number;
  speed: number;
  isOrange: boolean;
  size: number;
};

function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let segments: Segment[] = [];
    let pulses: Pulse[] = [];
    let nodes: Node[] = [];

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const resize = () => {
      canvas.width = w() * 2;
      canvas.height = h() * 2;
      ctx.scale(2, 2);
    };

    const buildGrid = () => {
      nodes = [];
      segments = [];

      const cw = w();
      const ch = h();
      const stepX = 80;
      const stepY = 70;
      const cols = Math.floor(cw / stepX) + 2;
      const rows = Math.floor(ch / stepY) + 2;
      const offsetX = (cw - (cols - 1) * stepX) / 2;
      const offsetY = (ch - (rows - 1) * stepY) / 2;

      const grid: (Node | null)[][] = [];

      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.45) {
            const jx = (Math.random() - 0.5) * 20;
            const jy = (Math.random() - 0.5) * 14;
            const node = { x: offsetX + c * stepX + jx, y: offsetY + r * stepY + jy };
            grid[r][c] = node;
            nodes.push(node);
          } else {
            grid[r][c] = null;
          }
        }
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const from = grid[r][c];
          if (!from) continue;

          if (c + 1 < cols && grid[r][c + 1] && Math.random() < 0.5) {
            segments.push({ from, to: grid[r][c + 1]!, isOrange: Math.random() < 0.25 });
          }
          if (r + 1 < rows && grid[r + 1][c] && Math.random() < 0.4) {
            segments.push({ from, to: grid[r + 1][c]!, isOrange: Math.random() < 0.25 });
          }
        }
      }

      pulses = [];
      const pulseCount = Math.min(Math.floor(segments.length * 0.3), 18);
      for (let i = 0; i < pulseCount; i++) {
        const si = Math.floor(Math.random() * segments.length);
        pulses.push({
          seg: si,
          t: Math.random(),
          speed: Math.random() * 0.004 + 0.0015,
          isOrange: segments[si].isOrange || Math.random() < 0.4,
          size: Math.random() * 1.5 + 1.5,
        });
      }
    };

    const roundedSegment = (from: Node, to: Node) => {
      const midX = from.x + (to.x - from.x) * 0.5;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      if (Math.abs(to.x - from.x) > 10 && Math.abs(to.y - from.y) > 10) {
        ctx.lineTo(midX, from.y);
        ctx.arcTo(midX + Math.sign(to.x - from.x) * 8, from.y, midX + Math.sign(to.x - from.x) * 8, from.y + Math.sign(to.y - from.y) * 8, 8);
        ctx.lineTo(to.x, to.y);
      } else {
        ctx.lineTo(to.x, to.y);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      for (const seg of segments) {
        roundedSegment(seg.from, seg.to);
        ctx.strokeStyle = seg.isOrange
          ? "rgba(232, 64, 16, 0.08)"
          : "rgba(255, 255, 255, 0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
        ctx.fill();
      }

      for (const p of pulses) {
        const seg = segments[p.seg];
        p.t += p.speed;

        if (p.t > 1) {
          p.t = 0;
          const connected = segments.reduce<number[]>((acc, s, idx) => {
            if (idx === p.seg) return acc;
            if (s.from === seg.to || s.to === seg.to) acc.push(idx);
            return acc;
          }, []);
          if (connected.length > 0) {
            p.seg = connected[Math.floor(Math.random() * connected.length)];
          } else {
            p.seg = Math.floor(Math.random() * segments.length);
          }
        }

        const cx = seg.from.x + (seg.to.x - seg.from.x) * p.t;
        const cy = seg.from.y + (seg.to.y - seg.from.y) * p.t;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, p.size * 4);
        if (p.isOrange) {
          gradient.addColorStop(0, "rgba(232, 64, 16, 0.6)");
          gradient.addColorStop(1, "rgba(232, 64, 16, 0)");
        } else {
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        }
        ctx.beginPath();
        ctx.arc(cx, cy, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isOrange ? "rgba(232, 64, 16, 0.9)" : "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    buildGrid();
    draw();

    const onResize = () => {
      resize();
      buildGrid();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0c] py-6 px-4 md:px-8">
      {/* Container vitré avec bordure */}
      <div
        className="relative max-w-7xl mx-auto overflow-hidden"
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          background: "rgba(255, 255, 255, 0.03)",
          boxShadow: "0 0 60px rgba(232, 64, 16, 0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <CircuitCanvas />

        <div className="relative px-8 pt-16 pb-10">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Image
                src="/images/Blanc.png"
                alt="SINANI"
                width={140}
                height={56}
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-center mb-10"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.4)",
              maxWidth: "460px",
              margin: "0 auto 40px",
            }}
          >
            Incubateur audiovisuel & agence de publicité.
            <br />
            <span style={{ color: "rgba(232, 64, 16, 0.6)" }}>Conakry, Guinée.</span>
          </motion.p>

          {/* Réseaux sociaux */}
          <motion.div
            className="flex justify-center items-center gap-5 mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#E84010]/10"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/40 transition-colors duration-300 group-hover:text-[#E84010]"
                >
                  {icon}
                </svg>
              </a>
            ))}
          </motion.div>

          {/* Ligne */}
          <motion.div
            className="h-px mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, rgba(232,64,16,0.2), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
              © {new Date().getFullYear()} SINANI. Tous droits réservés.
            </p>
            <a
              href="mailto:contact@sinani.gn"
              className="transition-colors duration-200 hover:text-[#E84010]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)", textDecoration: "none" }}
            >
              contact@sinani.gn
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
