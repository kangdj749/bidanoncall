"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

const waImages = [
  "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777379042/testimoni_wa_2_cdc6to.jpg",
  "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777379042/testimoni_wa_2_cdc6to.jpg",
];

export default function WhatsAppProof() {
  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main space-y-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="h2">
            Bukti Percakapan Nyata Pasien
          </h2>
          <p className="caption">
            Testimoni langsung dari WhatsApp pasien yang telah menggunakan layanan Bidan On Call
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-5">

          {waImages.map((src, i) => (
            <div
              key={i}
              className="group relative rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-[2px]"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative w-full aspect-[4/5]">

                <Image
                  src={cloudinaryImage(src, "portrait")}
                  alt={`Testimoni WhatsApp Bidan On Call ${i + 1}`}
                  fill
                  sizes="(max-width:480px) 80vw, 480px"
                  className="object-cover"
                />

                {/* OVERLAY subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* FOOTER */}
              <div className="px-4 py-3 border-t border-[rgb(var(--color-border))]">
                <p className="text-[12px] text-[rgb(var(--color-muted))]">
                  Percakapan asli pasien • respon cepat • layanan ke rumah
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}