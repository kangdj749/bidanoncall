"use client";

import { motion, Variants } from "framer-motion";

const services = [
  { title: "Newborn Care", icon: "🍼" },
  { title: "Pijat Bayi", icon: "💆‍♂️" },
  { title: "Baby Spa", icon: "🛁" },
  { title: "Imunisasi", icon: "💉" },
  { title: "Cukur Rambut Bayi", icon: "✂️" },
  { title: "Tindik Bayi", icon: "💎" },
];

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServiceListBayi() {
  return (
    <section id="layanan" className="section">
      <div className="container-main">

        <div className="text-center mb-8">
          <h2 className="h2">Layanan Perawatan Bayi</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {services.map((itemData) => (
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
                Ditangani bidan berpengalaman
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}