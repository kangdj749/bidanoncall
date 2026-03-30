"use client";

export default function ContactHeroSection() {
  return (
    <section className="relative section-tight overflow-hidden">

      {/* Soft Background Accent */}
      <div
        className="
        pointer-events-none
        absolute inset-0
        bg-gradient-to-br
        from-[rgb(var(--color-primary))]/6
        via-[rgb(var(--color-bg))]
        to-[rgb(var(--color-bg))]
      "
      />

      <div className="container-main relative">

        <div className="max-w-[520px]">

          {/* Eyebrow */}
          <p
            className="
            text-[10px]
            tracking-[1.6px]
            uppercase
            font-medium
            text-[rgb(var(--color-primary))]
            mb-3
          "
          >
            PT. Bangun Cipta Solusi (BANGUN.IN)
          </p>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

          {/* Headline */}
          <h1
            className="
            text-[20px]
            sm:text-[24px]
            font-semibold
            leading-[1.35]
            tracking-[0.2px]
            text-[rgb(var(--color-text))]
            mb-4
          "
          >
            Hubungi Kami untuk
            <span className="block text-[rgb(var(--color-primary))]">
              Kolaborasi Profesional
            </span>
          </h1>

          {/* Description */}
          <div
            className="
            space-y-3
            text-[12.5px]
            leading-[1.7]
            text-[rgb(var(--color-muted))]
            max-w-[460px]
          "
          >
            <p>
              PT. Bangun Cipta Solusi membuka ruang kolaborasi bagi instansi
              pemerintah, lembaga pendidikan, institusi swasta, maupun mitra
              strategis lainnya.
            </p>

            <p>
              Kami siap mendampingi kebutuhan perencanaan, rekayasa, dan
              manajemen konstruksi dengan pendekatan teknis yang terukur,
              profesional, dan akuntabel.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}