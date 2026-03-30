"use client";

import Link from "next/link";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import Image from "next/image";

export default function HeroSection() {
 const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773759200/perawatan_bidan_nuiofc.jpg";


  return (
    <section className="section bg-soft">
      <div className="container-main grid md:grid-cols-2 gap-8 items-center">

        {/* TEXT */}
        <div className="space-y-4">
          <h1 className="h1 text-[rgb(var(--color-dark))]">
            Perawatan Ibu Hamil Lebih Nyaman Tanpa Harus Keluar Rumah
          </h1>

          <p className="body text-[rgb(var(--color-muted))]">
            Layanan bidan profesional langsung ke rumah untuk memastikan kesehatan ibu dan janin tetap optimal selama masa kehamilan.
          </p>

          <ul className="space-y-2 text-[12px] text-[rgb(var(--color-text))]">
            {[
              "Pemeriksaan rutin oleh bidan berpengalaman",
              "Konsultasi kesehatan ibu & janin",
              "Nyaman, aman, tanpa antre",
              "Fleksibel sesuai kebutuhan Anda",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>

          <Link href="https://wa.me/6285720038494" className="btn-primary inline-block">
            Konsultasi Sekarang
          </Link>
        </div>

        <div className="relative w-full h-[260px] md:h-[320px] rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
        
                    <Image
                      src={cloudinaryImage(image, "lcp")}
                      alt="Pelayanan bidan ke rumah"
                      fill
                      sizes="(max-width:768px) 100vw, 520px"
                      className="object-cover"
                      priority
                    />
        
                  </div>

      </div>
    </section>
  );
}