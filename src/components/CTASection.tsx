"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="section bg-[rgb(var(--color-soft))]"
      aria-labelledby="cta-heading"
    >
      <div className="container-main">
        <div
          className="
            relative
            overflow-hidden
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            bg-[rgb(var(--color-surface))]
            px-6 py-10 md:px-12 md:py-12
            shadow-[var(--shadow-soft)]
            text-center
          "
        >
          {/* subtle gradient accent */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(228,0,120,0.04),transparent)]" />

          <div className="relative z-10">
            {/* LABEL */}
            <p className="caption uppercase tracking-[1.6px] text-primary mb-3">
              Konsultasi Gratis Bidan
            </p>

            {/* HEADLINE */}
            <h2
              id="cta-heading"
              className="h2 text-[rgb(var(--color-dark))]"
            >
              Butuh Layanan Bidan ke Rumah?
            </h2>

            {/* DESCRIPTION */}
            <p className="body mt-3 text-[rgb(var(--color-muted))] max-w-[520px] mx-auto">
              Konsultasikan kebutuhan perawatan ibu hamil, ibu nifas, dan bayi
              langsung dengan tim bidan profesional kami. Respon cepat, aman,
              dan nyaman tanpa harus ke rumah sakit.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/kontak"
                className="btn-primary inline-flex items-center justify-center"
              >
                Hubungi via WhatsApp
              </Link>

              <Link
                href="/layanan"
                className="btn-outline inline-flex items-center justify-center"
              >
                Lihat Layanan
              </Link>
            </div>

            {/* TRUST MINI */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12.5px] text-[rgb(var(--color-muted))]">
              <span>Respon cepat</span>
              <span>•</span>
              <span>Bidan profesional</span>
              <span>•</span>
              <span>Layanan ke rumah</span>
            </div>
          </div>
        </div>

        {/* SEO hidden */}
        <div className="sr-only">
          Hubungi layanan bidan on call ke rumah untuk perawatan ibu hamil,
          persalinan, ibu nifas, dan bayi baru lahir dengan tenaga bidan
          profesional berpengalaman dan pelayanan cepat.
        </div>
      </div>
    </section>
  );
}