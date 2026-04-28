"use client";

import { motion, Variants } from "framer-motion";

const services = [
  "Pijat Nifas",
  "Pijat Laktasi",
  "Perawatan Luka",
  "Senam Nifas",
  "Konsultasi",
];

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServiceListNifas() {
  return (
    <section id="layanan" className="section">
      <div className="container-main">

        <div className="text-center mb-8">
          <h2 className="h2">Layanan Nifas</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {services.map((itemText) => (
            <motion.div
              key={itemText}
              variants={item}
              initial="hidden"
              whileInView="show"
              className="card-premium text-center"
            >
              <h3 className="h3">{itemText}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}