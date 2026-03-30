"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function AboutStory() {
  const image: string =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773759735/ibu_dan_bayi_csbccf.jpg";

  return (
    <section id="cerita" className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Perawatan ibu dan bayi di rumah"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-dark))]/10 to-transparent" />

          </div>

          {/* CONTENT */}
          <div className="max-w-xl">

            {/* LABEL */}
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Cerita Kami
            </p>

            {/* HEADLINE */}
            <h2 className="h2 text-[rgb(var(--color-dark))] mb-5">
              Mengapa Layanan Ini{" "}
              <span className="text-[rgb(var(--color-primary))]">
                Hadir
              </span>
            </h2>

            {/* VALUE BLOCK (upgrade dari highlight box) */}
            <div className="card-premium mb-5">
              <p className="body text-[rgb(var(--color-text))]">
                Layanan ini hadir dari kebutuhan banyak keluarga yang membutuhkan
                perawatan ibu dan bayi tanpa harus datang ke fasilitas kesehatan.
              </p>
            </div>

            {/* PARAGRAPH */}
            <p className="body text-[rgb(var(--color-muted))]">
              Dengan pengalaman tenaga bidan profesional, kami berupaya memberikan
              pelayanan kesehatan yang lebih mudah diakses, nyaman, dan tetap
              berkualitas tinggi untuk setiap keluarga.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}