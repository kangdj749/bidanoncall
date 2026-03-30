"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section bg-dark">
      <div className="container-main text-center space-y-4">

        <h2 className="h2 text-white">
          Mulai Perawatan Kehamilan yang Lebih Nyaman Hari Ini
        </h2>

        <p className="text-[12px] text-[rgb(var(--color-muted))]">
          Respon cepat • Konsultasi mudah • Tanpa ribet
        </p>

        <Link
          href="https://wa.me/6285720038494"
          className="btn-primary inline-block"
        >
          Chat WhatsApp Sekarang
        </Link>

      </div>
    </section>
  );
}