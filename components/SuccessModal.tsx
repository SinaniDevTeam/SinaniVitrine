"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Félicitations 🎉",
  message = "Votre candidature a été soumise avec succès.",
}: SuccessModalProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      firedRef.current = false;
      return;
    }
    if (firedRef.current) return;
    firedRef.current = true;

    // Disable scroll
    document.body.style.overflow = "hidden";

    // Fire confetti
    import("canvas-confetti").then(({ default: confetti }) => {
      const origin = { x: 0.5, y: 0.55 };

      confetti({
        particleCount: 80,
        spread: 70,
        origin,
        colors: ["#E84010", "#FF6B3D", "#FFD700", "#FFFFFF", "#111111"],
        startVelocity: 45,
        gravity: 0.9,
        scalar: 1.1,
        ticks: 200,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: ["#E84010", "#FF6B3D", "#FFD700", "#FFFFFF"],
          startVelocity: 40,
          gravity: 0.9,
          ticks: 180,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: ["#E84010", "#FF6B3D", "#FFD700", "#FFFFFF"],
          startVelocity: 40,
          gravity: 0.9,
          ticks: 180,
        });
      }, 250);
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Re-enable scroll on close
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(0, 0, 0, 0.55)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="relative w-full max-w-md"
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
                padding: "48px 40px 40px",
                pointerEvents: "auto",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-8 right-8"
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg, #E84010, #FF6B3D)",
                  borderRadius: "0 0 4px 4px",
                }}
              />

              {/* Icon */}
              <div
                className="mx-auto mb-6 flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(232,64,16,0.08)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E84010" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Text */}
              <h2
                className="text-center mb-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#111111",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h2>
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#6B7280",
                  lineHeight: 1.7,
                }}
              >
                {message}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "#F0F0F0", marginBottom: "24px" }} />

              {/* CTA */}
              <button
                onClick={onClose}
                className="w-full py-4 font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #E84010, #d63a0e)",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(232,64,16,0.25)",
                }}
              >
                OK
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
