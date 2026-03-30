"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ServicesHeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773549685/Flag_map_of_Indonesia_w6ofjn.svg";

  return (
    <section className="relative overflow-hidden bg-[rgb(var(--color-bg))]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Layanan arsitektur dan rekayasa teknik"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/55" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10 py-16 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[520px]"
        >

          {/* Micro label */}
          <p className="text-[10px] tracking-[0.16em] uppercase text-[rgb(var(--color-white))]/70 mb-3">
            Professional Services
          </p>

          {/* Headline */}
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[1.32] text-[rgb(var(--color-white))] mb-4">
            Lingkup Layanan Profesional Terintegrasi
          </h1>

          {/* Supporting text */}
          <p className="text-[12px] md:text-[13px] leading-[1.6] text-[rgb(var(--color-white))]/80 max-w-[440px]">
            Layanan konsultasi arsitektur, rekayasa teknik, dan perencanaan
            wilayah yang dirancang untuk mendukung pembangunan berkelanjutan
            melalui pendekatan profesional dan terstruktur.
          </p>

        </motion.div>

      </div>
    </section>
  );
}