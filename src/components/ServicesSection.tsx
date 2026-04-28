"use client";

import Image from "next/image";
import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type ServiceItem = {
  title: string;
  desc: string;
  href: string;
  image: string;
};

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: "Paket Perawatan Ibu Hamil",
      desc: "Pendampingan kesehatan selama kehamilan agar ibu dan janin tetap sehat hingga persalinan.",
      href: "/layanan/paket-hamil",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777389981/ibu_hamil_j2syid.jpg",
    },
    {
      title: "Doula Persalinan",
      desc: "Pendampingan emosional dan fisik agar proses melahirkan lebih tenang dan nyaman.",
      href: "/layanan/doula-persalinan",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777390569/doulas_xun5bj.jpg",
    },
    {
      title: "Paket Perawatan Nifas",
      desc: "Perawatan ibu pasca melahirkan agar proses pemulihan berjalan optimal.",
      href: "/layanan/perawatan-nifas",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777390035/nifas_qwzvii.jpg",
    },
    {
      title: "Perawatan Bayi",
      desc: "Perawatan bayi baru lahir oleh bidan berpengalaman langsung di rumah.",
      href: "/layanan/perawatan-bayi",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777389669/perawatan-bayi_ysq9wk.jpg",
    },
    {
      title: "Infus ke Rumah",
      desc: "Layanan infus medis di rumah untuk membantu pemulihan kesehatan ibu.",
      href: "/layanan/infus-rumah",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777389506/jasa_infus_ygih1c.jpg",
    },
  ];

  return (
    <section
      className="section bg-[rgb(var(--color-bg))]"
      aria-labelledby="layanan-bidan-on-call"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[560px] mb-10">
          <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
            Layanan Bidan On Call
          </p>

          <h2
            id="layanan-bidan-on-call"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Layanan Homecare Kebidanan untuk Ibu & Bayi
          </h2>

          <p className="caption mt-2">
            Berbagai layanan kesehatan ibu hamil, persalinan, dan bayi baru lahir
            langsung di rumah dengan standar medis profesional.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.href}
              className="
                group
                flex flex-col
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                overflow-hidden
                bg-[rgb(var(--color-surface))]
                transition-all duration-300
                hover:shadow-[var(--shadow-elevated)]
                hover:border-[rgb(var(--color-border-strong))]
              "
            >

              {/* IMAGE */}
              <div className="relative w-full h-[150px] bg-[rgb(var(--color-soft))] overflow-hidden">
                <Image
                  src={cloudinaryImage(service.image, "card")}
                  alt={`Layanan ${service.title} oleh bidan ke rumah`}
                  fill
                  sizes="(max-width:768px) 100vw, 360px"
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.04]
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-4">

                <h3 className="h3 text-[rgb(var(--color-dark))] mb-2">
                  {service.title}
                </h3>

                <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-muted))] mb-4 line-clamp-3">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={service.href}
                    className="
                      inline-flex items-center gap-1
                      text-[12px]
                      font-medium
                      text-[rgb(var(--color-primary))]
                      transition-all
                      hover:gap-2
                    "
                  >
                    Lihat layanan
                    <span className="text-[14px]">→</span>
                  </Link>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}