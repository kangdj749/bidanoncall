"use client";

import Image from "next/image";
import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ServicesSection() {

  const services = [
    {
      title: "Paket Perawatan Ibu Hamil",
      desc: "Pendampingan kesehatan selama masa kehamilan agar ibu dan janin tetap sehat hingga persalinan.",
      href: "/layanan/paket-hamil",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg",
    },
    {
      title: "Doula Persalinan",
      desc: "Pendampingan persalinan secara emosional dan fisik untuk membantu ibu menjalani proses melahirkan dengan lebih tenang.",
      href: "/layanan/doula-persalinan",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg",
    },
    {
      title: "Paket Perawatan Nifas",
      desc: "Perawatan khusus untuk ibu setelah melahirkan agar proses pemulihan berjalan optimal.",
      href: "/layanan/perawatan-nifas",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg",
    },
    {
      title: "Perawatan Bayi",
      desc: "Perawatan bayi baru lahir oleh tenaga bidan berpengalaman.",
      href: "/layanan/perawatan-bayi",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg",
    },
    {
      title: "Jasa Infus ke Rumah",
      desc: "Layanan infus medis langsung di rumah untuk membantu pemulihan kesehatan.",
      href: "/layanan/infus-rumah",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg",
    },
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[560px] mb-10">

          <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
            Layanan
          </p>

          <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))]">
            Layanan Homecare Kebidanan
          </h2>

        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, i) => (
            <article
              key={i}
              className="
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                overflow-hidden
                bg-[rgb(var(--color-surface))]
                transition-all duration-200
                hover:shadow-[var(--shadow-elevated)]
                hover:border-[rgb(var(--color-border-strong))]
              "
            >

              {/* IMAGE */}
              <div className="relative w-full h-[160px] bg-[rgb(var(--color-soft))]">

                <Image
                  src={cloudinaryImage(service.image, "card")}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 360px"
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="text-[15px] font-semibold leading-[1.4] text-[rgb(var(--color-dark))] mb-2">
                  {service.title}
                </h3>

                <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-muted))] mb-4">
                  {service.desc}
                </p>

                <Link
                  href={service.href}
                  className="
                    text-[12px]
                    font-medium
                    text-[rgb(var(--color-primary))]
                    hover:underline
                  "
                >
                  Lihat layanan →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}