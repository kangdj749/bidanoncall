"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

const fade: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroBayi() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773759200/perawatan_bidan_nuiofc.jpg";

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main grid md:grid-cols-2 gap-10 items-center">

        <motion.div initial="hidden" animate="show" variants={fade}>
          <h1 className="h1 mb-4">
            Perawatan Bayi Lebih{" "}
            <span className="text-primary">Aman & Nyaman</span> di Rumah
          </h1>

          <p className="body-lg text-[rgb(var(--color-muted))] mb-6">
            Didampingi bidan berpengalaman untuk memastikan tumbuh kembang bayi optimal sejak hari pertama.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#layanan" className="btn-primary">
              Lihat Layanan
            </a>
            <a href="https://wa.me/6285720038494" className="btn-outline">
              Konsultasi Gratis
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[300px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))]"
        >
          <Image
            src={cloudinaryImage(image, "lcp")}
            alt="Perawatan bayi oleh bidan"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}