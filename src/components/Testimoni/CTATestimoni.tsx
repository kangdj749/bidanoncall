"use client";

import { motion } from "framer-motion";

export default function CTATestimoni() {
  return (
    <section className="section bg-[rgb(var(--color-dark))]">
      <div className="container-main text-center max-w-2xl mx-auto">

        <motion.h2
          className="h2 text-white mb-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Saatnya Anda Merasakan Layanan Terbaik
        </motion.h2>

        <p className="caption mb-6 text-muted">
          Konsultasikan kebutuhan Anda sekarang.
        </p>

        <a
          href="https://wa.me/6285720038494"
          className="btn-primary inline-block"
        >
          Chat WhatsApp Sekarang
        </a>

      </div>
    </section>
  );
}