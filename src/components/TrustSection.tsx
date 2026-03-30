"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function TrustSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773633676/bidan_profesional_ugvr1j.jpg";

  const points = [
    "Tenaga bidan profesional dan berpengalaman",
    "Pelayanan langsung ke rumah",
    "Peralatan medis steril",
    "Konsultasi kesehatan ibu dan bayi",
    "Pelayanan cepat dan responsif",
  ];

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Tenaga bidan profesional"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="max-w-[520px]">

            {/* label */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Kepercayaan
            </p>

            {/* headline */}
            <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))] mb-6">
              Kenapa Memilih Layanan Kami
            </h2>

            {/* trust list */}
            <div className="space-y-3">

              {points.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-start gap-3
                    border border-[rgb(var(--color-border))]
                    rounded-[var(--radius-md)]
                    p-3
                    bg-[rgb(var(--color-surface))]
                    text-[13px]
                    leading-[1.6]
                    text-[rgb(var(--color-text))]
                  "
                >

                  {/* bullet */}
                  <span className="w-[7px] h-[7px] mt-[6px] rounded-full bg-[rgb(var(--color-primary))]" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}