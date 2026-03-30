"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function VisualServicesPreview() {
  const services = [
    {
      title: "Penataan Ruang",
      description: "Perencanaan tata ruang berbasis regulasi & data spasial.",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png",
    },
    {
      title: "Perencanaan Arsitektur",
      description: "Desain kontekstual, fungsional, dan berkelanjutan.",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773533548/kantor2_ea9zdw.png",
    },
    {
      title: "Rekayasa Teknik",
      description: "Solusi struktur, infrastruktur & MEP terintegrasi.",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561465/rekayasa_d37iob.png",
    },
    {
      title: "Konsultasi Lingkungan",
      description: "Kajian AMDAL & dokumen lingkungan komprehensif.",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544180/tataruang2_dptigc.png",
    },
    {
      title: "Jasa Bantu Teknik",
      description: "Dukungan teknis untuk pelaksanaan proyek.",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773540464/rumahtinggal7_zjkh7z.png",
    },
    {
      title: "Survei & Telematika",
      description: "Pengukuran presisi & integrasi data geospasial.",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561867/topografi_lkvr8d.png",
    },
  ];

  return (
    <section className="relative section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* Header */}
        <div className="mb-8 max-w-md">
          <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">
            Lingkup Layanan
          </p>

          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

          <h2 className="text-[17px] md:text-[21px] font-semibold leading-[1.35] text-[rgb(var(--color-text))]">
            Solusi Profesional di Setiap Tahapan Proyek
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                group
                relative
                rounded-[var(--radius-md)]
                border
                border-[rgb(var(--color-secondary))]/15
                bg-[rgb(var(--color-surface))]
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-[3px]
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              "
            >
              {/* Numbering */}
              <div className="absolute top-3 left-3 text-[9px] tracking-[1.5px] font-medium text-[rgb(var(--color-primary))]/70 z-10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Image */}
              <div className="relative h-[85px] md:h-[100px]">
                <Image
                  src={cloudinaryImage(service.image, "card")}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/25" />

                {/* Primary gradient strip */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[rgb(var(--color-primary))]/70 via-[rgb(var(--color-primary))] to-[rgb(var(--color-primary))]/70" />
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">

                <h3 className="text-[12px] md:text-[13px] font-semibold leading-[1.4] text-[rgb(var(--color-text))]">
                  {service.title}
                </h3>

                {/* Hidden on mobile */}
                <p className="hidden md:block text-[11px] leading-[1.6] text-[rgb(var(--color-text))]/70 mt-1.5">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/layanan"
            className="
              inline-block
              text-[11px]
              tracking-[1.4px]
              uppercase
              font-medium
              text-[rgb(var(--color-primary))]
              border-b
              border-[rgb(var(--color-primary))]/40
              pb-1
              transition-all
              duration-300
              hover:tracking-[1.8px]
              hover:border-[rgb(var(--color-primary))]
            "
          >
            Jelajahi Seluruh Layanan
          </Link>
        </div>

      </div>
    </section>
  );
}