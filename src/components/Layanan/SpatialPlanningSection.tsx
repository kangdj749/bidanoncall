"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMap, FiGrid, FiFeather, FiMaximize } from "react-icons/fi";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function SpatialPlanningSection() {

  const mainImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png";

  const gallery = [
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544180/tataruang2_dptigc.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544181/tataruang3_oo8yik.png",
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773544179/tataruang1_wkdygs.png",
    
  ];

  const services = [
    {
      icon: <FiMap size={18} />,
      title: "Strategic Regional Planning",
    },
    {
      icon: <FiGrid size={18} />,
      title: "Urban Design & Planning",
    },
    {
      icon: <FiFeather size={18} />,
      title: "Landscape & Environmental Planning",
    },
    {
      icon: <FiMaximize size={18} />,
      title: "Spatial Utilization Optimization",
    },
  ];

  return (
    <section id="penataan-ruang" className="section-tight bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >

            {/* Main image */}
            <div className="relative h-[220px] md:h-[300px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] shadow-[var(--shadow-sm)]">
              <Image
                src={cloudinaryImage(mainImage, "lcp")}
                alt="Perencanaan wilayah dan tata ruang"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Mini gallery */}
            <div className="grid grid-cols-3 gap-3">

              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative h-[70px] rounded-[var(--radius-md)] overflow-hidden border border-[rgb(var(--color-border))] shadow-[var(--shadow-xs)]"
                >
                  <Image
                    src={cloudinaryImage(img, "thumb")}
                    alt="Proses perencanaan wilayah"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              ))}

            </div>

          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >

            {/* Title */}
            <h2 className="h2 text-[rgb(var(--color-primary))]">
              Penataan Ruang
            </h2>

            {/* Description */}
            <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-text))]/85 max-w-[480px]">
              Layanan perencanaan tata ruang yang terintegrasi dengan
              pendekatan strategis, analisis teknis, dan keberlanjutan
              lingkungan untuk mendukung pembangunan wilayah yang
              efisien, terstruktur, dan berdaya guna.
            </p>

            {/* Bullet Services */}
            <div className="space-y-3 pt-2">

              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <div className="text-[rgb(var(--color-primary))] mt-[2px]">
                    {item.icon}
                  </div>

                  <p className="text-[13px] text-[rgb(var(--color-text))]/85 leading-[1.5]">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}