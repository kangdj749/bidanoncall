"use client";

import { motion } from "framer-motion";
import { FiUsers, FiShield, FiZap, FiTrendingUp } from "react-icons/fi";

export default function VisionValuesSection() {
  const coreValues = [
    {
      label: "SYNERGY",
      description:
        "Kolaborasi tim terintegrasi untuk menghasilkan solusi optimal.",
      icon: <FiUsers size={22} />,
    },
    {
      label: "INTEGRITY",
      description:
        "Transparansi dan akuntabilitas sebagai fondasi profesionalisme.",
      icon: <FiShield size={22} />,
    },
    {
      label: "INNOVATION",
      description:
        "Pendekatan adaptif terhadap tantangan rekayasa modern.",
      icon: <FiZap size={22} />,
    },
    {
      label: "IMPACT",
      description:
        "Memberikan hasil berkelanjutan dan berdampak nyata.",
      icon: <FiTrendingUp size={22} />,
    },
  ];

  return (
    <section id="visi" className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h2 text-primary mb-4"
        >
          Visi & Nilai Perusahaan
        </motion.h2>

        {/* Vision */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="caption max-w-xl mb-8 leading-[1.6]"
        >
          Menjadi pusat konsultasi arsitektur dan rekayasa teknik yang
          menghadirkan solusi profesional, terukur, dan berkelanjutan
          bagi pembangunan nasional.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="
                bg-[rgb(var(--color-surface))]
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                p-5
                shadow-[var(--shadow-soft)]
                hover:shadow-[var(--shadow-elevated)]
                hover:border-[rgb(var(--color-border-strong))]
                transition-all duration-300
                text-center
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 text-[rgb(var(--color-primary))]">
                {value.icon}
              </div>

              {/* Label */}
              <h3 className="text-[12px] font-semibold tracking-[1px] mb-2">
                {value.label}
              </h3>

              {/* Description */}
              <p className="text-[11.5px] leading-[1.55] text-[rgb(var(--color-muted))]">
                {value.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}