"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type TrustPoint = string;

export default function TrustSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773633676/bidan_profesional_ugvr1j.jpg";

  const points: TrustPoint[] = [
    "Tenaga bidan profesional dan berpengalaman",
    "Pelayanan langsung ke rumah",
    "Peralatan medis steril dan aman",
    "Konsultasi kesehatan ibu dan bayi",
    "Pelayanan cepat dan responsif",
  ];

  return (
    <section
      className="section bg-[rgb(var(--color-soft))]"
      aria-labelledby="keunggulan-bidan-on-call"
    >
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Bidan profesional memberikan layanan ke rumah untuk ibu dan bayi"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />

            {/* subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          </div>

          {/* CONTENT */}
          <div className="max-w-[560px]">

            {/* label */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Keunggulan Layanan
            </p>

            {/* headline */}
            <h2
              id="keunggulan-bidan-on-call"
              className="h2 text-[rgb(var(--color-dark))] mb-3"
            >
              Kenapa Memilih Bidan On Call untuk Perawatan Ibu & Bayi
            </h2>

            {/* supporting text (SEO boost) */}
            <p className="caption mb-6">
              Layanan bidan ke rumah memberikan kemudahan, kenyamanan, dan
              keamanan bagi ibu hamil, ibu nifas, dan bayi dengan standar
              pelayanan medis profesional.
            </p>

            {/* TRUST GRID (2 kolom biar compact) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {points.map((item) => (
                <div
                  key={item}
                  className="
                    card-premium
                    flex items-start gap-3
                    p-3
                    text-[13px]
                    leading-[1.6]
                    group
                  "
                >

                  {/* bullet icon */}
                  <span className="
                    w-[18px] h-[18px]
                    flex items-center justify-center
                    rounded-full
                    bg-[rgb(var(--color-primary))]/10
                    mt-[2px]
                    shrink-0
                  ">
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgb(var(--color-primary))]" />
                  </span>

                  {/* text */}
                  <span className="text-[rgb(var(--color-text))]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}