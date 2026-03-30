"use client";

import Link from "next/link";
import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773630914/babyandmom_rhhoq2.jpg";

  return (
    <section className="relative min-h-[420px] md:min-h-[540px] flex items-center overflow-hidden bg-[rgb(var(--color-bg))]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Layanan bidan ke rumah untuk ibu hamil dan bayi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/45" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10 py-12 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-[520px]"
        >

          {/* Micro label */}
          <p className="text-[9px] tracking-[1.6px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-3">
            Homecare Kebidanan
          </p>

          {/* Headline */}
          <h1 className="text-[20px] md:text-[28px] font-semibold leading-[1.35] tracking-[0.2px] text-[rgb(var(--color-white))] mb-4">
            Bidan On Call – Layanan Bidan ke Rumah
            <span className="block">
              untuk Ibu Hamil dan Bayi
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[12px] md:text-[13px] leading-[1.65] text-[rgb(var(--color-white))]/85 mb-6">
            Nikmati perawatan ibu hamil, ibu nifas, dan bayi baru lahir langsung 
            di rumah Anda oleh tenaga bidan profesional yang berpengalaman 
            memberikan pelayanan kesehatan ibu dan anak secara aman dan nyaman.
          </p>

          {/* CTA */}
<div className="flex gap-3">

  {/* Primary CTA */}
    <Link
      href="/kontak#consultation-form"
      className="
        px-5 py-2
        text-[11px]
        font-medium
        rounded-[var(--radius-sm)]
        bg-[rgb(var(--color-primary))]
        text-[rgb(var(--color-white))]
        transition-all duration-200
        hover:bg-[rgb(var(--color-primary))]/90
      "
    >
      Konsultasi Sekarang
    </Link>

    {/* Secondary CTA */}
    <Link
      href="/layanan"
      className="
        px-5 py-2
        text-[11px]
        font-medium
        rounded-[var(--radius-sm)]
        border
        border-[rgb(var(--color-white))]/35
        text-[rgb(var(--color-white))]
        transition-all duration-200
        hover:bg-[rgb(var(--color-white))]/10
      " prefetch
    >
      Booking Layanan
    </Link>

  </div>

        </motion.div>
      </div>
    </section>
  );
}