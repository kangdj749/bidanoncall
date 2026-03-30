"use client";

import { motion } from "framer-motion";

export default function Section7CTA() {
  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            border
            border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            bg-[rgb(var(--color-surface))]
            p-6
            sm:p-8
            shadow-[var(--shadow-sm)]
          "
        >

          <div className="max-w-[560px]">

            {/* Headline */}
            <h2 className="h2 text-[rgb(var(--color-primary))] mb-3">
              Diskusikan Lingkup Proyek Anda
            </h2>

            {/* Description */}
            <p className="
              text-[12px]
              leading-[1.6]
              text-[rgb(var(--color-muted))]
              mb-5
              max-w-[460px]
            ">
              Tim kami siap membantu merumuskan kebutuhan perencanaan,
              desain, maupun kajian teknis proyek Anda secara profesional
              dan terintegrasi.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="/kontak"
                className="btn-primary"
              >
                Konsultasi Proyek
              </a>

              <a
                href="/portfolio"
                className="btn-outline"
              >
                Lihat Portofolio
              </a>

            </div>

            {/* Contact meta */}
            <div className="
              mt-4
              text-[11px]
              text-[rgb(var(--color-muted))]
            ">
              Respons biasanya dalam 1–2 hari kerja
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}