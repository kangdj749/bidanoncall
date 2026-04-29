"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimation,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import type { PanInfo } from "framer-motion";

interface Props {
  images: string[];
}

export default function GalleryLayanan({ images }: Props) {
  const safeImages = images.slice(0, 20);

  const visible = 5;
  const itemWidth = 100 / visible;

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const controls = useAnimation();
  const x = useMotionValue(0);

  const total = safeImages.length;

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    if (paused || total <= visible) return;

    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, index, total]);

  /* ================= NAV ================= */
  const next = () => {
    setIndex((prev) =>
      prev + 1 > total - visible ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? total - visible : prev - 1
    );
  };

  /* ================= ANIMATE ================= */
  useEffect(() => {
    controls.start({
      x: `-${index * itemWidth}%`,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    });
  }, [index]);

  /* ================= SWIPE ================= */
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
    ) => {
    const threshold = 50;

    if (info.offset.x < -threshold) next();
    if (info.offset.x > threshold) prev();
    };

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main space-y-6">

        {/* HEADER */}
        <div className="flex items-end justify-between">
          <h2 className="h2">Dokumentasi Layanan</h2>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-surface))]"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-surface))]"
            >
              ›
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
            animate={controls}
            onDragEnd={handleDragEnd}
          >
            {safeImages.map((img, i) => (
              <div
                key={i}
                className="min-w-[calc(100%/5-12px)]"
                onClick={() => setActive(i)}
              >
                <div className="relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] group">

                  <Image
                    src={cloudinaryImage(img, "portrait")}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: total - visible + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === index
                  ? "bg-[rgb(var(--color-primary))]"
                  : "bg-[rgb(var(--color-border))]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-xs"
              onClick={() => setActive(null)}
            >
              CLOSE
            </button>

            <button
              className="absolute left-6 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? i : (i - 1 + total) % total
                );
              }}
            >
              ‹
            </button>

            <button
              className="absolute right-6 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? i : (i + 1) % total
                );
              }}
            >
              ›
            </button>

            <motion.div
              className="relative w-full max-w-[900px] h-[80vh]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={cloudinaryImage(safeImages[active], "detail")}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}