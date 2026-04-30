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
      name: "Siti Kamilaini Harjana",
      city: "Bandung",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777540275/sit_ekw6kc.png",
      text: "Pertama kali punya baby, mau cari tempat cukur dan tindik bayi yg bisa ke rmh dan harga terjangkau. Searching di ig, ketemu sama bidanoncall, baik dan ramah juga, seneng deh sampe akhirnya manggil lg untuk massage baby. Alhamdulillah anakku sehat lg setelah di massage bu bidan baik hati. Aku mau rekomendasiin ini ke temen. Jazakillah bu bidan. Nanti kalo punya baby lg pasti panggil lg 💕",
    },
    {
      name: "Mansyur Saldi",
      city: "Bandung",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777540273/mansyur_laojsc.png",
      text: "Maa syaa Allah, kayak nya bintang 5 kurang deh untuk gambarin rasa syukur dan terima kasih saya atas pendampingan Bu bidan yang luar biasa untuk saya dari mulai pra lahir, proses lahiran dan pasca lahiran. Jangan ragu untuk bunda-bunda yang mau lahiran dengan pendampingan beliau. Best pokok nya",
    },
    {
      name: "Isni Nurul Fadilah",
      city: "Bandung",
      image: "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777540273/isni_o3ak5l.png",
      text: "Bersyukur banget bisa Allah pertemukan dengan bidan Enka, setelah ngubek² nyari di google di IG buat homecare yg bisa perawatan newborn selama sepekan dan ternyata rumahnya bubid deket banget di Cipamokolan 😃 Salah satu point plus perawatan di bidan Enka itu segala aktivitas yang dilakukan selalu diselipkan dialog tauhid kepada dede Bassam, seperti ketika memandikan, menjemur, nyisir rambut dll.Jadi ada banyangan berdialog dengan bayi untuk memperkenalkan Allah lebih awal.Paket newborn bayi laki² selama sepekan hari kerja (6 hari) biayanya 900rb, ini terhitung murah dibandingkan homecare yang lain dengan benefit yang banyak.",
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