"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function SolutionSection() {

  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632861/muslim-doula_qih1wg.jpg";

  const services = [
    "pemeriksaan kehamilan",
    "pendampingan persalinan",
    "perawatan ibu nifas",
    "perawatan bayi baru lahir",
    "layanan infus medis",
    "tindakan medis ringan",
  ];

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Layanan bidan datang ke rumah"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="max-w-[520px]">

            {/* label */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Solusi Perawatan Ibu & Bayi
            </p>

            {/* headline */}
            <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))] mb-4">
              Solusi Praktis dengan
              <span className="block">
                Layanan Bidan ke Rumah
              </span>
            </h2>

            {/* intro text */}
            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))] mb-6">
              Kami menghadirkan layanan homecare kebidanan yang memungkinkan
              Anda mendapatkan perawatan kesehatan langsung di rumah tanpa harus
              datang ke fasilitas kesehatan.
            </p>

            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))] mb-6">
              Dengan layanan Bidan On Call, tim bidan profesional kami siap
              membantu memberikan berbagai pelayanan kesehatan ibu dan bayi.
            </p>

            {/* services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

              {services.map((service, i) => (
                <div
                  key={i}
                  className="
                    flex items-start gap-2
                    border border-[rgb(var(--color-border))]
                    rounded-[var(--radius-md)]
                    p-3
                    bg-[rgb(var(--color-surface))]
                    text-[13px]
                    text-[rgb(var(--color-text))]
                    leading-[1.6]
                  "
                >

                  <span className="w-[6px] h-[6px] mt-[6px] rounded-full bg-[rgb(var(--color-primary))]" />

                  <span>{service}</span>

                </div>
              ))}

            </div>

            {/* closing */}
            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))]">
              Semua layanan dilakukan dengan standar medis yang aman dan
              profesional sehingga ibu dan bayi mendapatkan perawatan terbaik
              selama masa kehamilan hingga setelah persalinan.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}