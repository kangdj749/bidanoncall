"use client";

import { motion } from "framer-motion";

export default function SolutionNifas() {
  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main max-w-3xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h2 mb-4"
        >
          Solusi Perawatan Nifas Profesional
        </motion.h2>

        <p className="body text-[rgb(var(--color-muted))]">
          Paket perawatan nifas kami membantu mempercepat pemulihan ibu dengan pendekatan medis dan perawatan tradisional yang aman.
        </p>

      </div>
    </section>
  );
}