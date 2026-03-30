"use client";

import { motion } from "framer-motion";

export default function ContactCtaSection() {
  return (
    <section className="relative py-10 sm:py-12 overflow-hidden bg-[rgb(var(--color-primary))] text-[rgb(var(--color-white))]">

      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-dark))]/30 pointer-events-none" />

      {/* Soft radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[rgb(var(--color-primary))]" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[480px]"
        >

          {/* Micro label */}

          <p className="text-[9px] tracking-[1.8px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Kolaborasi Profesional
          </p>

          <div className="w-10 h-[2px] bg-[rgb(var(--color-white))]/70 mb-4" />

          {/* Heading */}

          <h2 className="text-[18px] sm:text-[20px] font-semibold leading-[1.35] tracking-[0.2px] mb-4">
            Mari Wujudkan Proyek
            <span className="block">
              Berkualitas Bersama
            </span>
          </h2>

          {/* Description */}

          <p className="text-[12px] sm:text-[13px] leading-[1.65] text-[rgb(var(--color-white))]/80 mb-6">
            Setiap pembangunan yang berkualitas dimulai dari perencanaan yang
            matang dan kolaborasi yang profesional. Tim kami siap membantu
            merancang solusi teknik yang terukur, efisien, dan akuntabel.
          </p>

          {/* CTA */}

          <div className="flex flex-wrap gap-3">

            {/* Primary CTA */}

            <a
              href="#consultation-form"
              className="
              relative
              inline-flex
              items-center
              justify-center
              h-[38px]
              px-5
              text-[12px]
              font-medium
              rounded-[var(--radius-sm)]
              bg-[rgb(var(--color-white))]
              text-[rgb(var(--color-primary))]
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:shadow-lg
              active:translate-y-[0px]
              "
            >
              Ajukan Konsultasi
            </a>

            {/* Secondary CTA */}

            <a
              href="/kontak"
              className="
              inline-flex
              items-center
              justify-center
              h-[38px]
              px-5
              text-[12px]
              font-medium
              rounded-[var(--radius-sm)]
              border
              border-[rgb(var(--color-white))]/40
              text-[rgb(var(--color-white))]
              transition-all
              duration-300
              hover:bg-[rgb(var(--color-white))]/12
              hover:border-[rgb(var(--color-white))]/60
              hover:-translate-y-[1px]
              "
            >
              Hubungi Kami
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}