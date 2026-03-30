"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function AboutHero() {
  const image: string =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773759200/perawatan_bidan_nuiofc.jpg";

  return (
    <section id="hero" className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* CONTENT */}
          <div className="max-w-xl">

            {/* LABEL */}
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Tentang Kami
            </p>

            {/* HEADLINE */}
            <h1 className="h1 text-[rgb(var(--color-dark))] mb-5">
              Tentang Layanan{" "}
              <span className="text-[rgb(var(--color-primary))]">
                Bidan On Call
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="body-lg text-[rgb(var(--color-muted))]">
              Kami berkomitmen memberikan pelayanan kesehatan ibu dan bayi yang
              aman, profesional, dan nyaman melalui layanan homecare kebidanan
              yang lebih personal dan terpercaya.
            </p>

          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            {/* IMAGE */}
            <Image
              src={cloudinaryImage(image, "lcp")}
              alt="Pelayanan bidan ke rumah"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
              priority
            />

            {/* SOFT OVERLAY (premium feel) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-dark))]/10 to-transparent" />

          </div>

        </div>

      </div>
    </section>
  );
}