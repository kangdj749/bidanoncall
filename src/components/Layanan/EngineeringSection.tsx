"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiDroplet,
  FiTruck,
  FiTool
} from "react-icons/fi";

import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function EngineeringSection() {

  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561465/rekayasa_d37iob.png";

  const services = [
    {
      title: "Pondasi & Struktur",
      desc: "Perencanaan struktur bangunan yang aman, efisien, dan sesuai standar rekayasa teknik.",
      icon: <FiLayers size={20} />,
    },
    {
      title: "Water Engineering",
      desc: "Perancangan sistem sumber daya air, drainase, dan pengelolaan lingkungan berkelanjutan.",
      icon: <FiDroplet size={20} />,
    },
    {
      title: "Transportasi & Infrastruktur",
      desc: "Perencanaan jalan, kawasan, dan sistem infrastruktur untuk konektivitas wilayah.",
      icon: <FiTruck size={20} />,
    },
    {
      title: "Mechanical Electrical Plumbing",
      desc: "Integrasi sistem mekanikal, elektrikal, dan plumbing untuk efisiensi operasional bangunan.",
      icon: <FiTool size={20} />,
    },
  ];

  return (
    <section id="rekayasa" className="section-tight bg-[rgb(var(--color-soft))]">

      <div className="container-main">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="h2 text-[rgb(var(--color-primary))] mb-3">
            Rekayasa Teknik
          </h2>

          <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))] max-w-[520px]">
            Layanan rekayasa teknik untuk memastikan setiap proyek
            dirancang secara struktural, fungsional, dan berkelanjutan.
          </p>
        </motion.div>

        {/* Hero Engineering Image */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-full
            h-[220px]
            md:h-[320px]
            rounded-[var(--radius-lg)]
            overflow-hidden
            border
            border-[rgb(var(--color-border))]
            shadow-[var(--shadow-sm)]
            mb-10
          "
        >
          <Image
            src={cloudinaryImage(heroImage, "banner")}
            alt="Rekayasa Teknik"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
        </motion.div>

        {/* Engineering Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="
                group
                bg-[rgb(var(--color-surface))]
                border
                border-[rgb(var(--color-border))]
                rounded-[var(--radius-md)]
                p-4
                shadow-[var(--shadow-sm)]
                transition-all
                duration-300
                hover:shadow-[var(--shadow-md)]
              "
            >

              {/* Icon */}
              <div className="
                w-[36px]
                h-[36px]
                flex
                items-center
                justify-center
                rounded-[var(--radius-sm)]
                bg-[rgb(var(--color-primary))]/10
                text-[rgb(var(--color-primary))]
                mb-3
              ">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[12.5px] font-semibold text-[rgb(var(--color-text))] mb-1">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] leading-[1.55] text-[rgb(var(--color-muted))]">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}