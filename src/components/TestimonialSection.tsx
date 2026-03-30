"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type Testimonial = {
  name: string;
  city: string;
  image: string;
  text: string;
};

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
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
    <section
      className="section bg-[rgb(var(--color-bg))]"
      aria-labelledby="testimonial-heading"
    >
      <div className="container-main">
        {/* HEADER */}
        <div className="max-w-[560px] mb-12">
          <p className="caption uppercase tracking-[1.6px] text-primary mb-3">
            Testimoni Pasien
          </p>

          <h2 id="testimonial-heading" className="h2 text-[rgb(var(--color-dark))]">
            Pengalaman Ibu Menggunakan Layanan Bidan ke Rumah
          </h2>

          <p className="body mt-3 text-[rgb(var(--color-muted))]">
            Banyak ibu hamil dan keluarga telah merasakan manfaat layanan
            homecare bidan kami untuk perawatan ibu dan bayi yang lebih nyaman di rumah.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="
                card-premium
                flex flex-col
                justify-between
                gap-4
                min-h-[180px]
              "
            >
              {/* QUOTE ICON */}
              <div className="text-[rgb(var(--color-primary))] text-[18px] leading-none">
                “
              </div>

              {/* TEXT */}
              <p className="body text-[rgb(var(--color-text))]">
                {item.text}
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 pt-2 border-t border-[rgb(var(--color-border))]">
                <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden border border-[rgb(var(--color-border))]">
                  <Image
                    src={cloudinaryImage(item.image, "thumb")}
                    alt={`Testimoni ${item.name} layanan bidan ke rumah`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <div className="leading-[1.3]">
                  <p className="text-[13.5px] font-semibold text-[rgb(var(--color-dark))]">
                    {item.name}
                  </p>
                  <p className="caption">
                    {item.city}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TRUST BOOST (mini social proof) */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="card-premium text-center py-4">
            <p className="text-[18px] font-semibold text-[rgb(var(--color-dark))]">
              500+
            </p>
            <p className="caption">Ibu telah dilayani</p>
          </div>

          <div className="card-premium text-center py-4">
            <p className="text-[18px] font-semibold text-[rgb(var(--color-dark))]">
              4.9 / 5
            </p>
            <p className="caption">Rating kepuasan layanan</p>
          </div>

          <div className="card-premium text-center py-4">
            <p className="text-[18px] font-semibold text-[rgb(var(--color-dark))]">
              24 Jam
            </p>
            <p className="caption">Respon cepat layanan</p>
          </div>
        </div>

        {/* SEO hidden */}
        <div className="sr-only">
          Testimoni layanan bidan on call ke rumah membantu ibu hamil,
          ibu nifas, dan perawatan bayi baru lahir dengan pelayanan profesional,
          cepat, dan aman langsung di rumah tanpa harus ke rumah sakit.
        </div>
      </div>
    </section>
  );
}