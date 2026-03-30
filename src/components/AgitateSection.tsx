"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type RiskItem = {
  id: number;
  text: string;
};

export default function AgitateSection() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773632084/babymombidan_per1gb.jpg";

  const risks: RiskItem[] = [
    { id: 1, text: "Ibu mengalami kelelahan berlebih" },
    { id: 2, text: "Proses pemulihan setelah melahirkan lebih lama" },
    { id: 3, text: "Bayi tidak mendapatkan perawatan yang optimal" },
    { id: 4, text: "Stres dan kecemasan pada ibu meningkat" },
  ];

  return (
    <section
      className="section bg-[rgb(var(--color-bg))]"
      aria-labelledby="agitate-heading"
    >
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* =========================
              TEXT CONTENT
          ========================== */}
          <div className="max-w-[540px]">

            {/* LABEL */}
            <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
              Risiko Tanpa Pendampingan
            </p>

            {/* HEADLINE */}
            <h2
              id="agitate-heading"
              className="text-[22px] md:text-[26px] font-semibold leading-[1.3] tracking-[-0.01em] text-[rgb(var(--color-dark))] mb-4"
            >
              Tanpa Perawatan yang Tepat,
              <span className="block">
                Kondisi Ibu & Bayi Bisa Memburuk
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="body text-[rgb(var(--color-muted))] mb-6">
              Kurangnya pendampingan kesehatan selama masa kehamilan dan setelah
              persalinan dapat meningkatkan risiko komplikasi, baik untuk ibu
              maupun bayi. Perawatan yang tepat sejak awal sangat penting untuk
              menjaga kesehatan dan mempercepat pemulihan.
            </p>

            {/* =========================
                RISK GRID (2 COLUMN)
            ========================== */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">

              {risks.map((risk) => (
                <div
                  key={risk.id}
                  className="
                    card-premium
                    !p-4
                    flex items-start gap-3
                  "
                >
                  {/* bullet */}
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[rgb(var(--color-primary))]" />

                  {/* text */}
                  <span className="text-[13px] leading-[1.6] text-[rgb(var(--color-text))]">
                    {risk.text}
                  </span>
                </div>
              ))}

            </div>

            {/* CLOSING */}
            <p className="body text-[rgb(var(--color-muted))]">
              Dengan dukungan bidan profesional, ibu dapat menjalani masa
              kehamilan dan pasca persalinan dengan lebih aman, nyaman, dan
              terarah — tanpa harus selalu pergi ke fasilitas kesehatan.
            </p>

          </div>

          {/* =========================
              IMAGE
          ========================== */}
          <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">

            <Image
              src={cloudinaryImage(image, "natural")}
              alt="Risiko kesehatan ibu dan bayi tanpa pendampingan bidan profesional di rumah"
              fill
              sizes="(max-width:768px) 100vw, 520px"
              className="object-cover"
              priority={false}
            />

            {/* subtle overlay biar lebih premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          </div>

        </div>

      </div>
    </section>
  );
}