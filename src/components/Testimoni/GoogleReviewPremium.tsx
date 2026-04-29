"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GalleryLayanan from "@/components/Layanan/GalleryLayanan";
import ReviewSlider from "./ReviewSlider";

type Review = {
  name: string;
  text: string;
  rating?: number;
};

interface Props {
  reviews: Review[];
  images: string[];
}

export default function GoogleReviewPremium({
  reviews,
  images,
}: Props) {
  const featured = reviews.slice(0, 4);
  const rest = reviews.slice(4);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % rest.length);
  };

  const prev = () => {
    setIndex((prev) =>
      (prev - 1 + rest.length) % rest.length
    );
  };

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main space-y-10">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[640px] mx-auto space-y-3">
          <h2 className="h2">
            Pengalaman Nyata Pasien Kami
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Review langsung dari pasien yang telah menggunakan layanan Bidan On Call di rumah.
          </p>
        </div>

        {/* ================= GRID (TOP 4) ================= */}
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="card-premium relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[rgb(var(--color-primary))]" />

              <div className="space-y-3">
                <p className="text-[13.5px] leading-relaxed">
                  “{item.text}”
                </p>

                <div className="flex justify-between pt-2">
                  <div>
                    <p className="text-[13px] font-semibold">
                      {item.name}
                    </p>
                    <p className="caption">
                      Pasien Bidan On Call
                    </p>
                  </div>

                  <div className="text-[rgb(var(--color-primary))] text-sm">
                    {"★★★★★"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SLIDER (REST) ================= */}
        {rest.length > 0 && (
        <ReviewSlider reviews={rest} />
        )}

        {/* ================= GALLERY ================= */}
        {images.length > 0 && (
          <div className="pt-6 space-y-4">
            <div className="text-center space-y-2">
              <h3 className="h3">
                Dokumentasi Pelayanan
              </h3>
              <p className="caption">
                Bukti nyata layanan di lapangan
              </p>
            </div>

            <GalleryLayanan images={images} />
          </div>
        )}

      </div>
    </section>
  );
}