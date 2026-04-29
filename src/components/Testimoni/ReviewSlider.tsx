"use client";

import {
  motion,
  useMotionValue,
  animate,
  type PanInfo,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Review = {
  name: string;
  text: string;
};

interface Props {
  reviews: Review[];
}

export default function ReviewSlider({ reviews }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ================= RESPONSIVE WIDTH ================= */
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      // 🔥 breakpoint logic
      if (window.innerWidth < 640) {
        // mobile → 1 card full
        setCardWidth(containerWidth);
      } else if (window.innerWidth < 1024) {
        // tablet → 2 card
        setCardWidth(containerWidth / 2 - 8);
      } else {
        // desktop → 3 card
        setCardWidth(containerWidth / 3 - 12);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ================= SNAP ================= */
  const snapTo = (index: number) => {
    const maxIndex = reviews.length - 1;
    const clamped = Math.max(0, Math.min(index, maxIndex));

    setCurrentIndex(clamped);

    animate(x, -clamped * cardWidth, {
      type: "spring",
      stiffness: 110,
      damping: 18,
    });
  };

  /* ================= DRAG ================= */
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = cardWidth / 4;

    if (info.offset.x < -threshold) {
      snapTo(currentIndex + 1);
    } else if (info.offset.x > threshold) {
      snapTo(currentIndex - 1);
    } else {
      snapTo(currentIndex);
    }
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h3 className="h3">Cerita Lainnya</h3>

        <div className="flex gap-2">
          <button
            onClick={() => snapTo(currentIndex - 1)}
            className="px-3 py-1 rounded-md border border-[rgb(var(--color-border))] text-sm hover:bg-[rgb(var(--color-soft))] transition"
          >
            ←
          </button>

          <button
            onClick={() => snapTo(currentIndex + 1)}
            className="px-3 py-1 rounded-md border border-[rgb(var(--color-border))] text-sm hover:bg-[rgb(var(--color-soft))] transition"
          >
            →
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div ref={containerRef} className="overflow-hidden">

        <motion.div
          drag="x"
          dragConstraints={{
            left: -cardWidth * (reviews.length - 1),
            right: 0,
          }}
          dragElastic={0.06}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex gap-4 cursor-grab active:cursor-grabbing"
        >
          {reviews.map((item, i) => (
            <div
              key={i}
              style={{ width: cardWidth }}
              className="flex-shrink-0"
            >
              <div className="
                card-premium
                h-full
                flex flex-col justify-between
                min-h-[180px]
              ">

                {/* TEXT */}
                <p className="
                  text-[13.5px]
                  leading-relaxed
                  text-[rgb(var(--color-muted))]
                  line-clamp-4
                ">
                  “{item.text}”
                </p>

                {/* FOOTER */}
                <div className="flex justify-between items-center pt-4">
                  <div>
                    <p className="text-[13px] font-semibold">
                      {item.name}
                    </p>
                    <p className="caption">Pasien</p>
                  </div>

                  <div className="text-[rgb(var(--color-primary))] text-sm">
                    ★★★★★
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`
              h-2 rounded-full transition-all
              ${i === currentIndex
                ? "w-5 bg-[rgb(var(--color-primary))]"
                : "w-2 bg-[rgb(var(--color-border))]"
              }
            `}
          />
        ))}
      </div>

    </div>
  );
}