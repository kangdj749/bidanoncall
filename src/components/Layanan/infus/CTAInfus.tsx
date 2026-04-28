"use client";

import { motion } from "framer-motion";

export default function CTAInfus() {
  return (
    <section className="section bg-[rgb(var(--color-dark))]">
      <div className="container-main text-center max-w-2xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h2 text-[rgb(var(--color-white))] mb-3"
        >
          Pulihkan Tubuh Lebih Cepat Hari Ini
        </motion.h2>

        <p className="caption mb-5">
          Respon cepat • Aman • Tanpa ke klinik
        </p>

        <a href="https://wa.me/6285720038494" className="btn-primary">
          Chat WhatsApp Sekarang
        </a>

      </div>
    </section>
  );
}