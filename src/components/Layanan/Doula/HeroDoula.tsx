"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function Hero() {
  const image =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777390569/doulas_xun5bj.jpg";
  
  return (
    <section className="section bg-soft">
      <div className="container-main grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="h1 mb-4">
            Pendamping Persalinan yang Membuat Ibu Lebih{" "}
            <span className="text-primary">Tenang & Siap</span>
          </h1>

          <p className="body-lg text-muted mb-6">
            Dapatkan dukungan emosional dan fisik dari doula profesional agar
            proses melahirkan terasa lebih nyaman, terarah, dan minim stres.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Pendampingan sebelum & saat persalinan",
              "Dukungan emosional untuk ibu",
              "Membantu ibu tetap tenang & fokus",
              "Kolaborasi dengan tenaga medis",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <span className="text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>

          <button className="btn-primary">
            Konsultasi Persalinan Sekarang
          </button>
        </div>

        {/* RIGHT */}
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