"use client";

import {
  motion,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  videos: string[];
}

export default function VideoSlider({ videos }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  const isMobile = width < 768;

  /* ================= MEASURE ================= */
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      setWidth(containerRef.current.offsetWidth);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ================= SIZE SYSTEM ================= */

  const cardWidth = isMobile
    ? width * 0.9
    : width * 0.55; // center focus

  const gap = 24;

  /* ================= EMBED CLEAN ================= */
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    let clean = url.trim();

    if (clean.includes("watch?v=")) {
      clean = clean.replace("watch?v=", "embed/");
    }

    clean = clean.split("&")[0];

    return `${clean}?rel=0&modestbranding=1&playsinline=1`;
  };

  /* ================= SNAP ================= */
  const snapTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, videos.length - 1));
    setIndex(clamped);

    animate(x, -(clamped * (cardWidth + gap)), {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  };

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (paused || videos.length <= 1) return;

    const interval = setInterval(() => {
      snapTo((index + 1) % videos.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [index, paused, videos.length]);

  /* ================= DRAG ================= */
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = cardWidth / 4;

    if (info.offset.x < -threshold) snapTo(index + 1);
    else if (info.offset.x > threshold) snapTo(index - 1);
    else snapTo(index);
  };

  return (
    <section className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h3 className="h3">Cerita Nyata Pasien</h3>

        <div className="flex gap-2">
          <button
            onClick={() => snapTo(index - 1)}
            className="btn-outline px-3 py-1"
          >
            ←
          </button>
          <button
            onClick={() => snapTo(index + 1)}
            className="btn-outline px-3 py-1"
          >
            →
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          drag="x"
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex items-center"
        >
          {videos.map((src, i) => {
            const embed = getEmbedUrl(src);
            if (!embed) return null;

            const isActive = i === index;

            return (
              <div
                key={i}
                style={{
                  width: cardWidth,
                  marginRight: gap,
                }}
                className="flex-shrink-0"
              >
                <div
                  className={`
                    relative
                    w-full
                    rounded-[var(--radius-xl)]
                    overflow-hidden
                    border border-[rgb(var(--color-border))]
                    bg-black
                    transition-all duration-500
                    ${
                      isActive
                        ? "scale-100 opacity-100 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                        : "scale-90 opacity-50"
                    }
                  `}
                  style={{
                    aspectRatio: "9/16",
                    maxHeight: isMobile ? "480px" : "520px",
                    margin: "0 auto",
                  }}
                >
                  <iframe
                    src={embed}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`
              h-2 rounded-full transition-all
              ${
                i === index
                  ? "w-6 bg-[rgb(var(--color-primary))]"
                  : "w-2 bg-[rgb(var(--color-border))]"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}