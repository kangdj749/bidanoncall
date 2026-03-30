"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ProblemSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773630914/babyandmom_rhhoq2.jpg";

  const problems = [
    "tubuh mudah lelah selama kehamilan",
    "bayi sering rewel",
    "produksi ASI belum lancar",
    "luka persalinan belum pulih",
    "kesulitan merawat bayi baru lahir",
  ];

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Ibu dan bayi membutuhkan perawatan setelah melahirkan"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="max-w-[520px]">

            {/* micro label */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Kondisi yang sering dialami ibu
            </p>

            {/* headline */}
            <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))] mb-4">
              Tidak Semua Kondisi Ibu dan Bayi
              <span className="block">
                Harus ke Rumah Sakit
              </span>
            </h2>

            {/* intro text */}
            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))] mb-5">
              Banyak ibu hamil dan ibu baru melahirkan mengalami berbagai keluhan
              kesehatan sehari-hari yang sebenarnya dapat ditangani dengan
              perawatan kebidanan yang tepat.
            </p>

            {/* problem list */}
            <ul className="space-y-2 mb-6">

              {problems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] text-[rgb(var(--color-text))]"
                >

                  {/* bullet */}
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[rgb(var(--color-primary))]" />

                  <span className="leading-[1.6]">{item}</span>

                </li>
              ))}

            </ul>

            {/* closing text */}
            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))]">
              Namun pergi ke klinik atau rumah sakit seringkali terasa melelahkan,
              terutama bagi ibu yang masih dalam masa pemulihan setelah
              melahirkan.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}