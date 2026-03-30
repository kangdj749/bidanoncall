"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            relative
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            px-6 py-10 md:px-10 md:py-12
            bg-[rgb(var(--color-surface))]
            shadow-[var(--shadow-soft)]
            text-center
            overflow-hidden
          "
        >

          {/* gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary)/0.06)] to-transparent pointer-events-none" />

          <div className="relative z-10">

            {/* LABEL */}
            <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-primary))] mb-3">
              Layanan Bidan On Call
            </p>

            {/* HEADLINE */}
            <h2 className="h2 mb-4 text-[rgb(var(--color-dark))]">
              Butuh Pendampingan Persalinan yang Aman & Nyaman?
            </h2>

            {/* TEXT */}
            <p className="body max-w-[520px] mx-auto text-[rgb(var(--color-muted))] mb-8">
              Tim bidan profesional kami siap membantu proses persalinan dan
              perawatan ibu & bayi langsung di rumah Anda. Lebih tenang,
              lebih nyaman, dan tetap sesuai standar medis.
            </p>

            {/* BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">

              <Link
                href="/kontak"
                className="
                  btn-primary
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                "
              >
                Hubungi Bidan Sekarang
              </Link>

              <Link
                href="/layanan"
                className="
                  btn-outline
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                "
              >
                Lihat Layanan
              </Link>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}