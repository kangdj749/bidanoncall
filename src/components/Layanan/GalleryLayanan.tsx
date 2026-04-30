"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  type PanInfo,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

interface Props {
  images: string[];
}

export default function GalleryLayanan({ images }: Props) {
  const safeImages = images.slice(0, 20);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const total = safeImages.length;

  /* ================= RESPONSIVE WIDTH ================= */
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;

      if (window.innerWidth < 640) {
        // mobile → 1 card
        setCardWidth(width);
      } else if (window.innerWidth < 1024) {
        // tablet → 2 card
        setCardWidth(width / 2 - 8);
      } else {
        // desktop → 3 card
        setCardWidth(width / 3 - 12);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ================= NAV ================= */
  const next = () => {
    setIndex((prev) =>
      prev + 1 > total - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? total - 1 : prev - 1
    );
  };

  /* ================= ANIMATE ================= */
  useEffect(() => {
    animate(x, -index * cardWidth, {
      type: "spring",
      stiffness: 90,
      damping: 18,
    });
  }, [index, cardWidth, x]);

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    if (paused || total <= 1) return;

    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, total]);

  /* ================= DRAG ================= */
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = cardWidth / 4;

    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
    else {
      animate(x, -index * cardWidth);
    }
  };

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main space-y-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="h2">Dokumentasi Layanan</h2>
            <p className="caption">
              Proses nyata pelayanan langsung ke rumah pasien
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="
                w-9 h-9 flex items-center justify-center
                rounded-full border border-[rgb(var(--color-border))]
                hover:bg-[rgb(var(--color-surface))]
                transition
              "
            >
              ‹
            </button>

            <button
              onClick={next}
              className="
                w-9 h-9 flex items-center justify-center
                rounded-full border border-[rgb(var(--color-border))]
                hover:bg-[rgb(var(--color-surface))]
                transition
              "
            >
              ›
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
            dragConstraints={{
              left: -cardWidth * (total - 1),
              right: 0,
            }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {safeImages.map((img, i) => (
              <div
                key={i}
                style={{ width: cardWidth }}
                className="flex-shrink-0"
                onClick={() => setActive(i)}
              >
                <div className="
                  relative
                  aspect-[3/4]
                  rounded-[var(--radius-lg)]
                  overflow-hidden
                  border border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-surface))]
                  group
                  shadow-[var(--shadow-soft)]
                  hover:shadow-[var(--shadow-elevated)]
                  transition
                ">
                  <Image
                    src={cloudinaryImage(img, "portrait")}
                    alt={`Gallery ${i}`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="
                      object-cover
                      transition duration-700
                      group-hover:scale-[1.05]
                    "
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2">
          {safeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2 rounded-full transition-all
                ${i === index
                  ? "w-5 bg-[rgb(var(--color-primary))]"
                  : "w-2 bg-[rgb(var(--color-border))]"
                }
              `}
            />
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-xs opacity-70 hover:opacity-100"
              onClick={() => setActive(null)}
            >
              CLOSE
            </button>

            {/* NAV */}
            <button
              className="absolute left-6 text-white text-3xl opacity-40 hover:opacity-100"
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
              className="absolute right-6 text-white text-3xl opacity-40 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? i : (i + 1) % total
                );
              }}
            >
              ›
            </button>

            {/* IMAGE */}
            <motion.div
              className="relative w-full max-w-[900px] h-[80vh]"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={cloudinaryImage(safeImages[active], "detail")}
                alt="Gallery"
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