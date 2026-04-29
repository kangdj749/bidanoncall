"use client";

import { motion } from "framer-motion";

interface Props {
  rating: number;
  total: number;
}

export default function RatingSummary({ rating, total }: Props) {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            max-w-[720px]
            mx-auto
            text-center
            card-premium
            bg-[rgb(var(--color-bg))]
          "
        >

          {/* ⭐ STARS */}
          <div className="text-[28px] tracking-[4px] text-[rgb(var(--color-primary))] mb-2">
            {"★★★★★"}
          </div>

          {/* SCORE */}
          <div className="h2">
            {rating.toFixed(1)} / 5.0
          </div>

          {/* TOTAL */}
          <p className="body text-[rgb(var(--color-muted))] mt-1">
            dari lebih dari {total}+ ulasan pasien
          </p>

          {/* TRUST COPY */}
          <p className="caption mt-3 max-w-[420px] mx-auto">
            Tingkat kepuasan tinggi dari pasien yang telah menggunakan layanan
            Bidan On Call secara langsung di rumah.
          </p>

        </motion.div>

      </div>
    </section>
  );
}