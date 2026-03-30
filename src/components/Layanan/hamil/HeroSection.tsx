"use client";

import Link from "next/link";
import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Feature = {
  title: string;
};

export default function HeroSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773759200/perawatan_bidan_nuiofc.jpg";

  const features: Feature[] = [
    { title: "Pemeriksaan rutin bidan berpengalaman" },
    { title: "Konsultasi kesehatan ibu & janin" },
    { title: "Nyaman tanpa antre di klinik" },
    { title: "Jadwal fleksibel ke rumah" },
  ];

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* ================= TEXT ================= */}
        <div className="max-w-[540px]">

          {/* LABEL */}
          <p className="caption uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] mb-3">
            Layanan Bidan ke Rumah
          </p>

          {/* HEADLINE */}
          <h1 className="h1 text-[rgb(var(--color-dark))] mb-4">
            Perawatan Ibu Hamil Lebih Nyaman Tanpa Harus Keluar Rumah
          </h1>

          {/* DESCRIPTION */}
          <p className="body-lg text-[rgb(var(--color-muted))] mb-6">
            Layanan bidan profesional langsung ke rumah untuk membantu pemeriksaan kehamilan,
            konsultasi kesehatan ibu & janin, serta memastikan kondisi tetap optimal tanpa harus ke klinik.
          </p>

          {/* FEATURES GRID (2 COLUMN COMPACT) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">

            {features.map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-2.5
                  border border-[rgb(var(--color-border))]
                  rounded-[var(--radius-md)]
                  px-3 py-2.5
                  bg-[rgb(var(--color-surface))]
                  text-[12.5px]
                  leading-[1.5]
                  text-[rgb(var(--color-text))]
                "
              >
                <span className="w-[6px] h-[6px] mt-[6px] rounded-full bg-[rgb(var(--color-primary))]" />
                <span>{item.title}</span>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">

            <Link
              href="https://wa.me/6285720038494"
              className="btn-primary inline-flex items-center justify-center"
            >
              Konsultasi via WhatsApp
            </Link>

            <Link
              href="/layanan"
              className="btn-outline inline-flex items-center justify-center"
            >
              Lihat Layanan
            </Link>

          </div>

        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative">

          <div
            className="
              relative w-full h-[260px] md:h-[340px]
              rounded-[var(--radius-lg)]
              overflow-hidden
              border border-[rgb(var(--color-border))]
              bg-[rgb(var(--color-surface))]
              shadow-[var(--shadow-soft)]
            "
          >

            {/* IMAGE */}
            <Image
              src={cloudinaryImage(image, "lcp")}
              alt="Pelayanan bidan ke rumah untuk ibu hamil"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
              priority
            />

            {/* OVERLAY GRADIENT (PREMIUM FEEL) */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[rgb(var(--color-dark))/20]
                via-transparent
                to-transparent
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}