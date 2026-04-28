"use client";

import { motion, Variants } from "framer-motion";

const items = [
  { title: "Infus Booster", icon: "⚡" },
  { title: "Infus Zat Besi", icon: "🩸" },
  { title: "Infus Protein", icon: "💪" },
  { title: "Sesuai Kondisi Medis", icon: "🩺" },
];

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function InfusTypes() {
  return (
    <section id="layanan" className="section">
      <div className="container-main">

        <div className="text-center mb-8">
          <h2 className="h2">Jenis Infus</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">

          {items.map((itemData) => (
            <motion.div
              key={itemData.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              className="card-premium text-center group"
            >
              <div className="text-2xl mb-2">
                {itemData.icon}
              </div>

              <h3 className="h3 group-hover:text-[rgb(var(--color-primary))] transition">
                {itemData.title}
              </h3>

              <p className="caption mt-1">
                Disesuaikan kebutuhan tubuh
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}