"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="section bg-[rgb(var(--color-soft))]">

      <div className="container-main">

        <div
          className="
            text-center
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            bg-[rgb(var(--color-surface))]
            px-6 py-10
            md:px-10 md:py-12
            shadow-[var(--shadow-soft)]
          "
        >

          {/* LABEL */}
          <p className="text-[10px] uppercase tracking-[1.6px] text-[rgb(var(--color-primary))] font-medium mb-3">
            Konsultasi Gratis
          </p>

          {/* HEADLINE */}
          <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.35] text-[rgb(var(--color-dark))] mb-3">
            Butuh Bidan ke Rumah?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[13px] leading-[1.6] text-[rgb(var(--color-muted))] max-w-[420px] mx-auto mb-6">
            Hubungi kami sekarang untuk konsultasi dan booking layanan.
          </p>

          {/* CTA BUTTON */}
          <Link
            href="/kontak"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5 py-2.5
              text-[13px]
              font-medium
              rounded-[var(--radius-md)]
              text-[rgb(var(--color-white))]
              bg-[rgb(var(--color-primary))]
              transition-all
              hover:opacity-90
              focus:outline-none
              focus:shadow-[var(--shadow-focus)]
            "
          >
            Hubungi via WhatsApp
          </Link>

        </div>

      </div>

    </section>
  );
}