"use client";

import Link from "next/link";
import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773630914/babyandmom_rhhoq2.jpg";

  return (
    <section
      className="
        relative 
        min-h-[460px] md:min-h-[620px] 
        flex items-center 
        overflow-hidden
        bg-[rgb(var(--color-bg))]
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Layanan bidan ke rumah untuk ibu hamil, ibu nifas, dan bayi baru lahir"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay Depth */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/55" />

      {/* Gradient Soft Fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-dark))]/70 via-[rgb(var(--color-dark))]/40 to-transparent" />

      {/* Bottom Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10 py-14 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px]"
        >

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              px-3 py-1.5
              mb-4
              text-[11px] font-medium
              rounded-full
              bg-[rgb(var(--color-white))]/10
              text-[rgb(var(--color-white))]
              backdrop-blur-sm
              border border-[rgb(var(--color-white))]/15
            "
          >
            Homecare Bidan Profesional
          </div>

          {/* Headline */}
          <h1 className="h1 text-[rgb(var(--color-white))] mb-4">
            Layanan Bidan ke Rumah
            <span className="block text-[rgb(var(--color-white))]/90">
              untuk Ibu Hamil & Bayi Baru Lahir
            </span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg text-[rgb(var(--color-white))]/85 mb-7">
            Nikmati layanan <strong>bidan on call</strong> langsung ke rumah Anda 
            untuk perawatan ibu hamil, nifas, hingga bayi baru lahir. 
            Ditangani oleh tenaga profesional yang berpengalaman, 
            aman, nyaman, dan lebih personal.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">

            <Link
              href="/kontak#consultation-form"
              className="btn-primary"
            >
              Konsultasi Sekarang
            </Link>

            <Link
              href="/layanan"
              className="
                px-5 py-[11px]
                text-[13px] font-medium
                rounded-[var(--radius-md)]
                border
                border-[rgb(var(--color-white))]/30
                text-[rgb(var(--color-white))]
                transition-all duration-200
                hover:bg-[rgb(var(--color-white))]/10
              "
              prefetch
            >
              Lihat Layanan
            </Link>

          </div>

          {/* Trust mini info */}
          <div className="mt-6 flex flex-wrap gap-4 text-[11.5px] text-[rgb(var(--color-white))]/70">

            <span>✔ Bidan berpengalaman</span>
            <span>✔ Homecare langsung ke rumah</span>
            <span>✔ Pendampingan personal</span>

          </div>

        </motion.div>

        {/* Optional Right Card (desktop only for premium feel) */}
        <div className="hidden lg:block absolute right-[40px] bottom-[40px]">

          <div
            className="
              w-[260px]
              p-5
              rounded-[var(--radius-lg)]
              bg-[rgb(var(--color-white))]/90
              backdrop-blur-md
              border border-[rgb(var(--color-border))]
              shadow-[var(--shadow-elevated)]
            "
          >
            <p className="text-[13px] text-[rgb(var(--color-text))] leading-[1.6]">
              Pendampingan ibu hamil & bayi dengan pendekatan yang lebih hangat, 
              profesional, dan berfokus pada kenyamanan ibu.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}