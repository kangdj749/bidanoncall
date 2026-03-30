// ------------------------------------------------------
// CTA SECTION — Conversion Focused
// Bidan On Call Landing Page
// ------------------------------------------------------

"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="section bg-[rgb(var(--color-dark))]"
      aria-labelledby="cta-heading"
    >
      <div className="container-main">

        <div className="max-w-[720px] mx-auto text-center space-y-4">

          {/* HEADLINE */}
          <h2
            id="cta-heading"
            className="h2 text-[rgb(var(--color-white))]"
          >
            Mulai Perawatan Kehamilan yang Lebih Nyaman Hari Ini
          </h2>

          {/* SUBTEXT */}
          <p className="body text-[rgb(var(--color-muted))]">
            Konsultasi dengan bidan profesional dari rumah, tanpa antre,
            lebih nyaman, dan tetap aman untuk ibu dan janin.
          </p>

          {/* TRUST POINTS */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[rgb(var(--color-subtle))] caption">
            <span>Respon cepat</span>
            <span>•</span>
            <span>Konsultasi mudah</span>
            <span>•</span>
            <span>Tanpa ribet</span>
          </div>

          {/* CTA BUTTON */}
          <div className="pt-2">
            <Link
              href="https://wa.me/6285720038494"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Chat WhatsApp Sekarang
            </Link>
          </div>

          {/* MICRO TRUST */}
          <p className="caption text-[rgb(var(--color-subtle))]">
            Layanan bidan homecare profesional untuk ibu hamil
          </p>

        </div>

      </div>
    </section>
  );
}