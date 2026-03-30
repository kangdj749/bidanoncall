"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMap, FiActivity, FiTool, FiBarChart2 } from "react-icons/fi";

import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function TopographyGeotechSection() {

  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773561867/topografi_lkvr8d.png";

  const gallery = [
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562430/topografi2_a65shu.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562399/topografi3_qcmk5e.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773562169/topografi4_vhzcyc.png",
  ];

  const services = [
    {
      title: "Survey Topografi",
      desc: "Pengukuran kondisi kontur dan elevasi lahan sebagai dasar perencanaan teknis.",
      icon: <FiMap size={18} />,
    },
    {
      title: "Soil Investigation",
      desc: "Analisis karakteristik tanah untuk menentukan metode fondasi yang tepat.",
      icon: <FiActivity size={18} />,
    },
    {
      title: "Sondir Test",
      desc: "Pengujian penetrasi tanah untuk mengetahui daya dukung tanah secara akurat.",
      icon: <FiTool size={18} />,
    },
    {
      title: "Analisis Geoteknik",
      desc: "Evaluasi stabilitas tanah dan rekomendasi desain fondasi secara profesional.",
      icon: <FiBarChart2 size={18} />,
    },
  ];

  return (
    <section id="topogeo" className="section-tight bg-[rgb(var(--color-bg))]">

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
            Topografi & Geoteknik
          </h2>

          <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))] max-w-[520px]">
            Investigasi kondisi lahan dan struktur tanah untuk memastikan
            setiap perencanaan konstruksi memiliki dasar teknis yang akurat,
            aman, dan dapat dipertanggungjawabkan.
          </p>
        </motion.div>

        {/* Hero Image */}
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
            alt="Topografi dan Geoteknik"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/20" />
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="
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
                w-[34px]
                h-[34px]
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

              <h3 className="text-[12.5px] font-semibold text-[rgb(var(--color-text))] mb-1">
                {service.title}
              </h3>

              <p className="text-[11px] leading-[1.55] text-[rgb(var(--color-muted))]">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Field Work Gallery */}
        <div className="grid grid-cols-3 gap-3">

          {gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="
                relative
                h-[90px]
                md:h-[120px]
                rounded-[var(--radius-md)]
                overflow-hidden
                border
                border-[rgb(var(--color-border))]
                shadow-[var(--shadow-sm)]
              "
            >
              <Image
                src={cloudinaryImage(img, "card")}
                alt="Field Work"
                fill
                sizes="33vw"
                className="object-cover"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}