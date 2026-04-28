"use client";

import { motion } from "framer-motion";

export default function CTALayanan() {
  return (
    <section className="section bg-[rgb(var(--color-dark))] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="container-main relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center space-y-5"
        >

          {/* BADGE */}
          <div className="inline-flex items-center text-[rgb(var(--color-white))]/70 gap-2 text-[12px] px-3 py-1 rounded-full bg-[rgb(var(--color-white))]/5 border border-[rgb(var(--color-white))]/10 backdrop-blur">
            <span className="w-1.5 h-1.5  rounded-full bg-[rgb(var(--color-primary))]" />
            Konsultasi Gratis
          </div>

          {/* TITLE */}
          <h2 className="h2 text-[rgb(var(--color-white))] max-w-xl mx-auto">
            Mulai Perawatan yang Lebih{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Nyaman & Tenang
            </span>
          </h2>

          {/* DESC */}
          <p className="text-[13.5px] text-[rgb(var(--color-white))]/70 max-w-md mx-auto">
            Konsultasikan kebutuhan Anda sekarang. Tim bidan kami siap membantu dengan respon cepat dan pelayanan profesional.
          </p>

          {/* TRUST ROW */}
          <div className="flex justify-center gap-4 text-[12px] text-[rgb(var(--color-white))]/60 flex-wrap pt-1">
            <span>✓ Respon cepat</span>
            <span>✓ Tanpa antre</span>
            <span>✓ Datang ke rumah</span>
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="pt-2"
          >
            <a
              href="https://wa.me/6285720038494"
              className="inline-block px-6 py-3 rounded-[var(--radius-md)] font-medium text-[13.5px] text-white bg-[rgb(var(--color-primary))] shadow-[0_8px_24px_rgba(228,0,120,0.25)] transition"
            >
              Chat WhatsApp Sekarang
            </a>
          </motion.div>

          {/* MICRO URGENCY */}
          <p className="text-[11.5px] text-[rgb(var(--color-white))]/50">
            Respon dalam hitungan menit • Slot terbatas setiap hari
          </p>

        </motion.div>
      </div>
    </section>
  );
}