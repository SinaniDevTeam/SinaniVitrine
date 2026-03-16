"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
  "/images/img6.jpeg",
];

// Doubling images for seamless scroll
const doubledImages = [...images, ...images];

export default function InfiniteCarousel() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden relative">
      {/* Decorative background flair */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E84010] to-transparent opacity-20" />
      
      <div className="max-w-[1440px] mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-[#111111] font-inter">
          Nos <span className="text-[#E84010]">Réalisations</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl font-inter">
          Une immersion visuelle dans l'univers de SINANI. Capturer l'essence, magnifier le réel.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Masks for hypnotic effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 px-3"
          animate={{
            x: [0, -1920], // Adjust this based on item width * count
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledImages.map((src, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-[400px] h-[550px] md:w-[600px] md:h-[800px] overflow-hidden rounded-[40px] shadow-2xl group transition-all duration-500 hover:z-20 hover:scale-[1.02]"
            >
              <Image
                src={src}
                alt={`Sinani Work ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 400px, 600px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="w-12 h-1 bg-[#E84010] mx-auto mb-4" />
                   <p className="text-xl font-bold uppercase tracking-widest font-inter">SINANI STUDIO</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E84010] to-transparent opacity-20" />
    </section>
  );
}
