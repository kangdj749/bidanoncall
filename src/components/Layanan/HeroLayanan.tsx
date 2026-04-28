"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function HeroLayanan() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773759200/perawatan_bidan_nuiofc.jpg";

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-5">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 text-[12px] px-3 py-1 rounded-full bg-[rgb(var(--color-soft))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-muted))]">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--color-primary))]" />
            Layanan Homecare Profesional
          </div>

          {/* TITLE */}
          <h1 className="h1 max-w-xl">
            Layanan Bidan ke Rumah yang Lebih{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Nyaman & Aman
            </span>
          </h1>

          {/* DESC */}
          <p className="body-lg text-[rgb(var(--color-muted))] max-w-lg">
            Perawatan ibu dan bayi langsung di rumah dengan tenaga bidan profesional, 
            tanpa antre, tanpa ribet, dan lebih personal.
          </p>

          {/* TRUST POINT */}
          <div className="flex flex-wrap gap-4 text-[12.5px] text-[rgb(var(--color-muted))]">
            <span>✓ Respon cepat</span>
            <span>✓ Bidan berpengalaman</span>
            <span>✓ Datang ke rumah</span>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2 flex-wrap">
            <a href="#layanan" className="btn-primary">
              Lihat Layanan
            </a>

            <a
              href="https://wa.me/6285720038494"
              className="btn-outline"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "lcp")}
              alt="Pelayanan bidan ke rumah"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
              priority
            />

            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* FLOATING CARD (TRUST BOOST) */}
          <div className="absolute -bottom-6 left-4 right-4 md:left-6 md:right-auto md:w-[260px]">
            <div className="card-premium text-[12.5px]">
              <p className="text-[rgb(var(--color-text))] font-medium">
                ⭐ 4.9 Rating dari Ibu
              </p>
              <p className="text-[rgb(var(--color-muted))]">
                Sudah membantu banyak ibu menjalani kehamilan & persalinan lebih tenang.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}