"use client";

import Link from "next/link";

export default function BookingProcessSection() {

  const steps = [
    {
      title: "Hubungi kami melalui WhatsApp",
      desc: "Tim kami siap merespons pertanyaan dan membantu Anda memilih layanan yang sesuai.",
    },
    {
      title: "Konsultasikan kebutuhan layanan",
      desc: "Sampaikan kondisi ibu atau bayi agar bidan dapat mempersiapkan penanganan yang tepat.",
    },
    {
      title: "Tim bidan datang ke rumah Anda",
      desc: "Bidan profesional kami akan datang sesuai jadwal untuk memberikan pelayanan kesehatan.",
    },
    {
      title: "Dapatkan perawatan yang aman dan nyaman",
      desc: "Nikmati pelayanan kebidanan dengan standar medis yang aman langsung di rumah.",
    },
  ];

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[560px] mb-10">

          <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
            Proses Layanan
          </p>

          <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))]">
            Cara Menggunakan Layanan
          </h2>

        </div>

        {/* STEPS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, i) => (
            <div
              key={i}
              className="
                relative
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                p-4
                bg-[rgb(var(--color-surface))]
                transition-all duration-200
                hover:shadow-[var(--shadow-elevated)]
                hover:border-[rgb(var(--color-border-strong))]
              "
            >

              {/* number */}
              <div
                className="
                  w-[28px] h-[28px]
                  rounded-full
                  flex items-center justify-center
                  text-[12px] font-semibold
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  mb-3
                "
              >
                {i + 1}
              </div>

              {/* title */}
              <h3 className="text-[14px] font-semibold leading-[1.45] text-[rgb(var(--color-dark))] mb-2">
                {step.title}
              </h3>

              {/* description */}
              <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-muted))]">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-10">

          <Link
            href="/kontak"
            className="
              inline-flex
              items-center
              text-[13px]
              font-medium
              text-[rgb(var(--color-primary))]
              hover:underline
            "
          >
            Hubungi kami untuk booking layanan →
          </Link>

        </div>

      </div>
    </section>
  );
}