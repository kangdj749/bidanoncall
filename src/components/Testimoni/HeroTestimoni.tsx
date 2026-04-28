"use client";

import { motion } from "framer-motion";

export default function HeroTestimoni() {
  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main text-center max-w-3xl mx-auto">

        <motion.h1
          className="h1 mb-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
        >
          Dipercaya Banyak Ibu untuk{" "}
          <span className="text-primary">Perawatan di Rumah</span>
        </motion.h1>

        <motion.p
          className="body-lg text-muted"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Pengalaman nyata dari ibu yang telah menggunakan layanan Bidan On Call.
        </motion.p>

      </div>
    </section>
  );
}