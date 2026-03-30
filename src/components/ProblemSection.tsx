"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ProblemSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773630914/babyandmom_rhhoq2.jpg";

  const problems: string[] = [
    "Tubuh mudah lelah selama kehamilan",
    "Bayi sering rewel",
    "Produksi ASI belum lancar",
    "Luka persalinan belum pulih",
    "Kesulitan merawat bayi baru lahir",
  ];

  return (
    <section className="section bg-soft">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* IMAGE */}
          <div
            className="
              relative w-full h-[260px] md:h-[360px]
              overflow-hidden
              rounded-[var(--radius-lg)]
              border border-[rgb(var(--color-border))]
              bg-[rgb(var(--color-surface))]
              shadow-[var(--shadow-soft)]
            "
          >
            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Kondisi ibu hamil dan bayi yang membutuhkan perawatan bidan di rumah"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-[560px]">

            {/* LABEL */}
            <p className="caption text-primary mb-3">
              Kondisi umum ibu & bayi
            </p>

            {/* HEADLINE */}
            <h2 className="h2 mb-4">
              Tidak Semua Keluhan Ibu & Bayi
              <span className="block">
                Harus Ditangani di Rumah Sakit
              </span>
            </h2>

            {/* INTRO */}
            <p className="body text-muted mb-6">
              Banyak kondisi ibu hamil, ibu nifas, dan bayi baru lahir yang 
              sebenarnya dapat ditangani dengan layanan{" "}
              <strong>bidan ke rumah</strong> secara aman, nyaman, dan lebih personal.
            </p>

            {/* PROBLEM GRID (COMPACT 2 COL) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

              {problems.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start gap-3
                    p-3
                    rounded-[var(--radius-md)]
                    border border-[rgb(var(--color-border))]
                    bg-[rgb(var(--color-surface))]
                    text-[13px]
                    text-[rgb(var(--color-text))]
                    leading-[1.55]
                  "
                >
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[rgb(var(--color-primary))]" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            {/* CLOSING */}
            <p className="body text-muted">
              Pergi ke klinik atau rumah sakit seringkali terasa melelahkan, 
              terutama bagi ibu dalam masa pemulihan. 
              Layanan homecare bidan menjadi solusi yang lebih praktis dan nyaman.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}