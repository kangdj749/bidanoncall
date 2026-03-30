"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function PortfolioPreview() {
  const projects = [
    {
      title: "Masjid Raya Jawa Barat",
      category: "Arsitektur",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Gedung Pemerintahan",
      category: "Rekayasa Struktur",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Penataan Kawasan Kota",
      category: "Urban Planning",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Sistem MEP Terintegrasi",
      category: "MEP Engineering",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Survey Topografi Nasional",
      category: "Survey & Geospasial",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
    {
      title: "Proyek Infrastruktur Jalan",
      category: "Infrastruktur",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
    },
  ];

  return (
    <section className="relative section-tight bg-[rgb(var(--color-surface))]">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 max-w-md">
          <p className="text-[9px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-2">
            Portofolio
          </p>

          <div className="w-8 h-[1px] bg-[rgb(var(--color-primary))] mb-4" />

          <h2 className="text-[18px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-text))]">
            Pengalaman Proyek & Implementasi Teknis
          </h2>
        </div>

        {/* Grid (Enterprise Clean Masonry Feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[var(--radius-md)]
                border
                border-[rgb(var(--color-secondary))]/15
                bg-[rgb(var(--color-bg))]
                transition-all
                duration-500
                hover:-translate-y-[3px]
                hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]
              "
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-[240px]">
                <Image
                  src={cloudinaryImage(project.image, "card")}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.05]
                  "
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/35 group-hover:bg-[rgb(var(--color-dark))]/45 transition-all duration-500" />

                {/* Soft Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--color-dark))]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-4 md:p-5">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">

                  <p className="text-[9px] tracking-[1.5px] uppercase text-[rgb(var(--color-white))]/70 mb-1">
                    {project.category}
                  </p>

                  <h3 className="text-[13px] md:text-[14px] font-semibold leading-[1.4] text-[rgb(var(--color-white))]">
                    {project.title}
                  </h3>

                  <div className="mt-2 w-6 h-[1px] bg-[rgb(var(--color-primary))] group-hover:w-10 transition-all duration-500" />

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/portofolio"
            className="
              inline-block
              text-[10px]
              tracking-[1.5px]
              uppercase
              font-medium
              text-[rgb(var(--color-primary))]
              border-b
              border-[rgb(var(--color-primary))]/40
              pb-1
              transition-all
              duration-300
              hover:border-[rgb(var(--color-primary))]
              hover:tracking-[2px]
            "
          >
            Lihat Seluruh Proyek
          </Link>
        </div>

      </div>
    </section>
  );
}