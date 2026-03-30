"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type ServiceItem = {
  id: number;
  text: string;
};

export default function SolutionSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg";

  const services: ServiceItem[] = [
    { id: 1, text: "Pemeriksaan kehamilan di rumah" },
    { id: 2, text: "Pendampingan persalinan profesional" },
    { id: 3, text: "Perawatan ibu nifas" },
    { id: 4, text: "Perawatan bayi baru lahir" },
    { id: 5, text: "Layanan infus medis" },
    { id: 6, text: "Tindakan medis ringan" },
  ];

  return (
    <section
      className="section bg-[rgb(var(--color-soft))]"
      aria-labelledby="solution-heading"
    >
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* =========================
              IMAGE
          ========================== */}
          <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Layanan bidan profesional datang ke rumah untuk perawatan ibu dan bayi"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
              priority={false}
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          </div>

          {/* =========================
              CONTENT
          ========================== */}
          <div className="max-w-[540px]">

            {/* LABEL */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Solusi Perawatan Ibu & Bayi di Rumah
            </p>

            {/* HEADLINE */}
            <h2
              id="solution-heading"
              className="text-[22px] md:text-[26px] font-semibold leading-[1.3] tracking-[-0.01em] text-[rgb(var(--color-dark))] mb-4"
            >
              Perawatan Lebih Nyaman dengan
              <span className="block">
                Layanan Bidan On Call ke Rumah
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="body text-[rgb(var(--color-muted))] mb-4">
              Kini Anda tidak perlu repot datang ke klinik atau rumah sakit.
              Layanan homecare kebidanan memungkinkan ibu dan bayi mendapatkan
              perawatan langsung di rumah dengan lebih nyaman dan aman.
            </p>

            <p className="body text-[rgb(var(--color-muted))] mb-6">
              Tim bidan profesional kami siap memberikan berbagai layanan
              kesehatan ibu dan anak dengan pendekatan yang personal,
              hangat, dan sesuai kebutuhan.
            </p>

            {/* =========================
                SERVICE GRID (2 COLUMN)
            ========================== */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">

              {services.map((service) => (
                <div
                  key={service.id}
                  className="
                    card-premium
                    !p-4
                    flex items-start gap-3
                  "
                >
                  {/* bullet */}
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[rgb(var(--color-primary))]" />

                  {/* text */}
                  <span className="text-[13px] leading-[1.6] text-[rgb(var(--color-text))]">
                    {service.text}
                  </span>
                </div>
              ))}

            </div>

            {/* CLOSING */}
            <p className="body text-[rgb(var(--color-muted))]">
              Semua layanan dilakukan dengan standar medis yang aman dan
              profesional, sehingga ibu dan bayi mendapatkan perawatan terbaik
              sejak masa kehamilan hingga setelah persalinan.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}