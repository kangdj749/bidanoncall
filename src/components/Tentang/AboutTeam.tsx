"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type TeamMember = {
  name: string;
  role: string;
  experience: string;
  image: string;
};

export default function AboutTeam() {
  const team: TeamMember[] = [
    {
      name: "Bidan Nurhati Karlina",
      role: "Bidan Senior",
      experience: "10+ tahun pengalaman",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777391046/APNQkAEInMUwJycHwAfjlP4yH2C2UXwoRt35YtjGp4txakvuJ00_aLVqvfvUfoIuz4_fgUzicjsHxxMQ2y_v16GPbUI_KwerFyw6w1KapKbGen4srrN0BpXw36vCgUh6Sb_hqZQDlt5aBg_s680-w680-h510-rw_o9d4bj.webp",
    },
    {
      name: "Didin Suwarli",
      role: "Terapis Hijama & Pijat Relaksasi Profesional",
      experience: "3+ tahun pengalaman",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773760540/bidan_xncksi.jpg",
    },
  ];

  return (
    <section id="tim" className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-xl mb-12">

          <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
            Tim Kami
          </p>

          <h2 className="h2 text-[rgb(var(--color-dark))] mb-4">
            Tim Bidan{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Profesional
            </span>
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Tim bidan kami terdiri dari tenaga profesional berpengalaman dalam
            menangani kesehatan ibu dan bayi, dengan pendekatan yang lebih
            personal, aman, dan sesuai standar medis.
          </p>

        </div>

        {/* TEAM GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {team.map((item) => (
            <div
              key={item.name}
              className="card-premium text-center group"
            >

              {/* AVATAR */}
              <div className="relative w-[84px] h-[84px] mx-auto mb-4 rounded-full overflow-hidden border border-[rgb(var(--color-border))]">

                <Image
                  src={cloudinaryImage(item.image, "thumb")}
                  alt={item.name}
                  fill
                  sizes="84px"
                  className="object-cover"
                />

              </div>

              {/* NAME */}
              <p className="body font-semibold text-[rgb(var(--color-dark))] leading-snug">
                {item.name}
              </p>

              {/* ROLE */}
              <p className="caption text-[rgb(var(--color-subtle))] mb-3">
                {item.role}
              </p>

              {/* EXPERIENCE */}
              <div className="inline-flex items-center justify-center px-3 py-[4px] rounded-full bg-[rgb(var(--color-elevated))]">
                <span className="caption text-[rgb(var(--color-muted))]">
                  {item.experience}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}