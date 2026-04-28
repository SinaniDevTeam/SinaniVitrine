"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

// Nous avons sélectionné les 15 images les moins lourdes pour garantir la fluidité.
const carouselImages = [
  "/carousel/IMG_8289.JPEG",
  "/carousel/IMG_8230.JPG.jpeg",
  "/carousel/IMG_8323.JPG.jpeg",
  "/carousel/IMG_8247.JPG.jpeg",
  "/carousel/IMG_8271.JPG.jpeg",
  "/carousel/IMG_8294.JPG.jpeg",
  "/carousel/IMG_8226.JPG.jpeg",
  "/carousel/IMG_8301.JPG.jpeg",
  "/carousel/IMG_8191.JPG.jpeg",
  "/carousel/IMG_8278.JPG.jpeg",
  "/carousel/IMG_8290.JPG.jpeg",
  "/carousel/IMG_8306.JPG.jpeg",
  "/carousel/IMG_8318.JPG.jpeg",
  "/carousel/IMG_8316.JPG.jpeg",
  "/carousel/IMG_8342.JPG.jpeg",
];

export default function Realisations() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });
  const [titleTyped, setTitleTyped] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white pt-4 md:pt-8 pb-16 md:pb-32 overflow-hidden">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Titre avec typewriter */}
          <h2
            ref={titleRef}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              fontSize: "clamp(30px, 8vw, 64px)",
              lineHeight: "1.1",
              color: "#111111",
              minHeight: "1.2em",
            }}
          >
            {titleTyped ? (
              <>
                Dans l&apos;œil de{" "}
                <span style={{ color: "#E84010" }}>Sinani</span>
              </>
            ) : isInView ? (
              <TypeAnimation
                sequence={[
                  "Dans l'œil de Sinani",
                  () => setTitleTyped(true),
                ]}
                speed={50}
                cursor={false}
                wrapper="span"
              />
            ) : null}
          </h2>
        </motion.div>
      </div>

      {/* ── Carrousel ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          loop={true}
          speed={800}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full h-[50vh] md:h-[70vh] py-10"
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={src}
                  alt={`Sinani Studio Réalisation ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                  priority={index < 3}
                  quality={75}
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
                <div className="absolute bottom-6 left-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      fontSize: "16px",
                      color: "#ffffff",
                    }}
                  >
                    Studio Sinani
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "600",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#E84010",
                      marginTop: "4px",
                    }}
                  >
                    Série Capturée
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* ── Indicateurs de progression ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {carouselImages.map((_, idx) => (
            <div
              key={idx}
              className="h-1.5 rounded-full transition-all duration-500 ease-out shrink-0"
              style={{
                width: idx === activeIndex ? "32px" : "6px",
                background: idx === activeIndex ? "#E84010" : "#E5E7EB",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
