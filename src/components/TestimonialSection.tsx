"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function TestimonialSection() {

  const testimonials = [
    {
      name: "Ibu Rina",
      city: "Bandung",
      image: "https://res.cloudinary.com/demo/image/upload/mother1.jpg",
      text: "Pelayanan bidannya sangat ramah dan profesional. Saya merasa lebih tenang menjalani masa nifas karena ada pendampingan langsung di rumah.",
    },
    {
      name: "Ibu Sari",
      city: "Bandung",
      image: "https://res.cloudinary.com/demo/image/upload/mother2.jpg",
      text: "Sangat membantu sekali, terutama untuk perawatan bayi baru lahir. Bidannya sabar dan memberikan banyak edukasi untuk kami sebagai orang tua baru.",
    },
    {
      name: "Ibu Maya",
      city: "Bandung",
      image: "https://res.cloudinary.com/demo/image/upload/mother3.jpg",
      text: "Proses booking mudah dan bidan datang tepat waktu. Pelayanannya sangat profesional dan membuat saya merasa lebih nyaman.",
    },
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">

      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[560px] mb-10">

          <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
            Testimoni
          </p>

          <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))] mb-3">
            Pengalaman Pasien
          </h2>

          <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-muted))]">
            Banyak ibu dan keluarga telah mempercayakan perawatan ibu dan bayi kepada kami.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, i) => (

            <div
              key={i}
              className="
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                p-4
                bg-[rgb(var(--color-surface))]
                transition-all duration-200
                hover:shadow-[var(--shadow-elevated)]
              "
            >

              {/* USER */}
              <div className="flex items-center gap-3 mb-3">

                <div className="relative w-[38px] h-[38px] rounded-full overflow-hidden border border-[rgb(var(--color-border))]">

                  <Image
                    src={cloudinaryImage(item.image, "preview")}
                    alt={item.name}
                    fill
                    sizes="38px"
                    className="object-cover"
                  />

                </div>

                <div>

                  <p className="text-[13px] font-semibold text-[rgb(var(--color-dark))] leading-[1.3]">
                    {item.name}
                  </p>

                  <p className="text-[12px] text-[rgb(var(--color-subtle))]">
                    {item.city}
                  </p>

                </div>

              </div>

              {/* TEXT */}
              <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-text))]">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}