"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ServiceItem {
  title: string;
  desc: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Paket Perawatan Kehamilan",
    desc: "Monitoring rutin ibu & janin dengan bidan profesional.",
    href: "/layanan/paket-ibu-hamil",
  },
  {
    title: "Doula Persalinan",
    desc: "Pendampingan persalinan yang lebih tenang dan terarah.",
    href: "/layanan/doula-persalinan",
  },
  {
    title: "Perawatan Nifas",
    desc: "Pemulihan pasca melahirkan lebih optimal di rumah.",
    href: "/layanan/perawatan-nifas",
  },
  {
    title: "Perawatan Bayi",
    desc: "Perawatan bayi baru lahir oleh tenaga berpengalaman.",
    href: "/layanan/perawatan-bayi",
  },
  {
    title: "Infus ke Rumah",
    desc: "Layanan infus praktis tanpa perlu ke klinik.",
    href: "/layanan/jasa-infus-rumah",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // 🔥 premium easing
    },
  },
};

export default function GridLayanan() {
  return (
    <section id="layanan" className="section">
      <div className="container-main space-y-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="h2">Pilihan Layanan Kami</h2>
          <p className="body text-[rgb(var(--color-muted))]">
            Layanan profesional untuk mendukung kesehatan ibu & bayi secara optimal di rumah.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((itemData) => (
            <motion.div key={itemData.title} variants={item}>
              <Link
                href={itemData.href}
                className="group relative block rounded-[var(--radius-lg)] p-[1px] 
                bg-gradient-to-b from-[rgb(var(--color-border))] to-transparent"
              >
                {/* CARD */}
                <div
                  className="
                  h-full rounded-[var(--radius-lg)] 
                  bg-[rgb(var(--color-surface))] 
                  p-5 flex flex-col justify-between
                  transition-all duration-300

                  shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                  group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                  group-hover:-translate-y-1.5
                  "
                >
                  {/* TOP */}
                  <div className="space-y-3">

                    {/* ICON */}
                    <div className="w-9 h-9 rounded-[10px] flex items-center justify-center
                      bg-[rgb(var(--color-primary)/0.08)]
                      text-[rgb(var(--color-primary))]
                      text-sm font-semibold
                    ">
                      +
                    </div>

                    {/* TITLE */}
                    <h3 className="h3 transition group-hover:text-[rgb(var(--color-primary))]">
                      {itemData.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-[13px] text-[rgb(var(--color-muted))] leading-relaxed">
                      {itemData.desc}
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="pt-4 flex items-center justify-between text-[12.5px]">

                    <span className="text-[rgb(var(--color-primary))] font-medium">
                      Lihat Detail
                    </span>

                    <span
                      className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      text-[rgb(var(--color-primary))]
                      "
                    >
                      →
                    </span>
                  </div>

                  {/* GLOW EFFECT */}
                  <div className="absolute inset-0 rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition pointer-events-none
                    shadow-[0_0_0_1px_rgba(228,0,120,0.08)]
                  " />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}