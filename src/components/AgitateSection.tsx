"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function AgitateSection() {

  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632084/babymombidan_per1gb.jpg";

  const risks = [
    "ibu mengalami kelelahan berlebih",
    "proses pemulihan setelah melahirkan lebih lama",
    "bayi tidak mendapatkan perawatan yang optimal",
    "stres dan kecemasan pada ibu",
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* TEXT AREA */}
          <div>

            {/* label */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Risiko yang sering terjadi
            </p>

            {/* headline */}
            <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))] mb-4">
              Tanpa Perawatan yang Tepat,
              <span className="block">
                Kondisi Ini Bisa Memburuk
              </span>
            </h2>

            {/* intro */}
            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))] mb-6 max-w-[520px]">
              Kurangnya pendampingan kesehatan selama masa kehamilan dan setelah
              persalinan dapat menyebabkan berbagai risiko kesehatan bagi ibu
              maupun bayi.
            </p>

            {/* risk cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

              {risks.map((risk, i) => (
                <div
                  key={i}
                  className="
                    border
                    border-[rgb(var(--color-border))]
                    rounded-[var(--radius-md)]
                    p-3
                    bg-[rgb(var(--color-surface))]
                    text-[13px]
                    leading-[1.6]
                    text-[rgb(var(--color-text))]
                    flex items-start gap-2
                  "
                >

                  <span className="w-[6px] h-[6px] mt-[6px] rounded-full bg-[rgb(var(--color-primary))]" />

                  <span>{risk}</span>

                </div>
              ))}

            </div>

            {/* closing */}
            <p className="text-[13px] leading-[1.65] text-[rgb(var(--color-muted))] max-w-[520px]">
              Karena itu, dukungan tenaga kesehatan profesional sangat penting
              agar ibu dan bayi mendapatkan perawatan yang tepat serta tetap
              sehat selama masa kehamilan dan setelah persalinan.
            </p>

          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Pendampingan bidan profesional untuk ibu dan bayi"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}