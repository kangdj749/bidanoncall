"use client";

import Link from "next/link";

type Step = {
  title: string;
  desc: string;
};

export default function BookingProcessSection() {
  const steps: Step[] = [
    {
      title: "Hubungi via WhatsApp",
      desc: "Tim kami siap merespons cepat dan membantu memilih layanan bidan homecare yang sesuai kebutuhan.",
    },
    {
      title: "Konsultasi kondisi ibu & bayi",
      desc: "Sampaikan kondisi kesehatan agar bidan dapat mempersiapkan penanganan yang tepat sebelum datang.",
    },
    {
      title: "Bidan datang ke rumah",
      desc: "Tenaga bidan profesional akan datang sesuai jadwal dengan peralatan medis lengkap dan steril.",
    },
    {
      title: "Perawatan aman & nyaman",
      desc: "Nikmati layanan kebidanan langsung di rumah dengan standar medis yang aman untuk ibu dan bayi.",
    },
  ];

  return (
    <section
      className="section bg-[rgb(var(--color-bg))]"
      aria-labelledby="booking-process-heading"
    >
      <div className="container-main">
        {/* HEADER */}
        <div className="max-w-[560px] mb-12">
          <p className="caption uppercase tracking-[1.6px] text-primary mb-3">
            Proses Layanan Bidan On Call
          </p>

          <h2 id="booking-process-heading" className="h2 text-[rgb(var(--color-dark))]">
            Cara Booking Layanan Bidan ke Rumah
          </h2>

          <p className="body mt-3 text-[rgb(var(--color-muted))]">
            Proses pemesanan layanan homecare bidan sangat mudah, cepat, dan
            dirancang untuk kenyamanan ibu hamil, ibu nifas, dan bayi.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="
                relative
                card-premium
                p-[18px]
                flex flex-col
                gap-3
              "
            >
              {/* connector line (desktop) */}
              {i !== steps.length - 1 && (
                <div
                  className="
                    hidden lg:block
                    absolute top-[22px] right-[-50%]
                    w-full h-[1px]
                    bg-[rgb(var(--color-border))]
                  "
                />
              )}

              {/* number */}
              <div
                className="
                  w-[30px] h-[30px]
                  rounded-full
                  flex items-center justify-center
                  text-[12px] font-semibold
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  shadow-[var(--shadow-soft)]
                "
              >
                {i + 1}
              </div>

              {/* title */}
              <h3 className="h3 text-[rgb(var(--color-dark))]">
                {step.title}
              </h3>

              {/* desc */}
              <p className="body text-[rgb(var(--color-muted))]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/kontak"
            className="btn-primary inline-flex items-center justify-center"
          >
            Booking Sekarang
          </Link>

          <Link
            href="/layanan"
            className="btn-outline inline-flex items-center justify-center"
          >
            Lihat Semua Layanan
          </Link>
        </div>

        {/* SEO hidden content */}
        <div className="sr-only">
          Layanan bidan on call ke rumah meliputi pemeriksaan kehamilan,
          perawatan ibu nifas, perawatan bayi baru lahir, hingga tindakan medis
          ringan dengan tenaga bidan profesional berpengalaman.
        </div>
      </div>
    </section>
  );
}