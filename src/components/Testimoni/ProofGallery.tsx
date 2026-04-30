"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import type { PanInfo } from "framer-motion";

interface Props {
  images: string[];
}

export default function ProofGallery({ images }: Props) {
  const safeImages = images.slice(0, 20);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const isMobile = width < 768;
  const visible = isMobile ? 1 : 3;

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

  const cardWidth = width / visible;

  /* ================= SNAP ================= */
  const snapTo = (i: number) => {
    const maxIndex = safeImages.length - visible;
    const clamped = Math.max(0, Math.min(i, maxIndex));

    setIndex(clamped);

    animate(x, -clamped * cardWidth, {
      type: "spring",
      stiffness: 100,
      damping: 20,
    });
  };

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (paused || safeImages.length <= visible) return;

    const interval = setInterval(() => {
      snapTo(index + 1 > safeImages.length - visible ? 0 : index + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [index, paused, safeImages.length, visible]);

  /* ================= DRAG ================= */
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = cardWidth / 4;

    if (info.offset.x < -threshold) snapTo(index + 1);
    else if (info.offset.x > threshold) snapTo(index - 1);
    else snapTo(index);
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="text-center max-w-[520px] mx-auto space-y-2">
        <h3 className="h3">
          Bukti Interaksi Nyata
        </h3>
        <p className="caption">
          Dokumentasi percakapan & pengalaman langsung pasien kami
        </p>
      </div>

      {/* SLIDER */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          drag="x"
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          {safeImages.map((img, i) => {
            const isActive =
              i >= index && i < index + visible;

            return (
              <div
                key={i}
                style={{ width: cardWidth }}
                className="flex-shrink-0"
                onClick={() => setActive(i)}
              >
                <div
                  className={`
                    relative aspect-[3/4]
                    rounded-[var(--radius-xl)]
                    overflow-hidden
                    border border-[rgb(var(--color-border))]
                    transition-all duration-500
                    ${isActive
                      ? "scale-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                      : "scale-95 opacity-70"}
                  `}
                >
                  <Image
                    src={cloudinaryImage(img, "portrait")}
                    alt="Proof"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2">
        {Array.from({
          length: safeImages.length - visible + 1,
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`
              h-2 rounded-full transition-all
              ${i === index
                ? "w-6 bg-[rgb(var(--color-primary))]"
                : "w-2 bg-[rgb(var(--color-border))]"}
            `}
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            {/* CLOSE */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white text-xs opacity-70 hover:opacity-100"
            >
              CLOSE
            </button>

            {/* NAV */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? i : (i - 1 + safeImages.length) % safeImages.length
                );
              }}
              className="absolute left-6 text-white text-3xl opacity-40 hover:opacity-100"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? i : (i + 1) % safeImages.length
                );
              }}
              className="absolute right-6 text-white text-3xl opacity-40 hover:opacity-100"
            >
              ›
            </button>

            {/* IMAGE */}
            <motion.div
              className="relative w-full max-w-[700px] h-[85vh]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={cloudinaryImage(
                  safeImages[active],
                  "detail"
                )}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}