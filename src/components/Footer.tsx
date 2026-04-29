"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        bg-[rgb(var(--color-dark))]
        text-[rgb(var(--color-white))]
        border-t border-[rgb(var(--color-border))]/20
      "
    >
      <div className="container-main section-tight">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-12">

          {/* BRAND */}
          <div className="space-y-4 max-w-[280px]">
            <h3 className="h3 text-[rgb(var(--color-white))]">
              Bidan On Call
            </h3>

            <p className="body text-[rgb(var(--color-muted))]">
              Layanan bidan ke rumah untuk ibu hamil, ibu nifas, dan bayi baru lahir
              dengan pelayanan profesional, aman, dan nyaman.
            </p>
          </div>

          {/* LAYANAN */}
          <div className="space-y-4">
            <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-subtle))]">
              Layanan
            </p>

            <ul className="space-y-2.5">
              {[
                { label: "Paket Ibu Hamil", href: "/layanan/paket-ibu-hamil" },
                { label: "Doula Persalinan", href: "/layanan/doula-persalinan" },
                { label: "Paket Nifas", href: "/layanan/paket-nifas" },
                { label: "Perawatan Bayi", href: "/layanan/perawatan-bayi" },
                { label: "Jasa Infus", href: "/layanan/jasa-infus-rumah" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      body
                      text-[rgb(var(--color-muted))]
                      hover:text-[rgb(var(--color-primary))]
                      transition-colors duration-200
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGASI */}
          <div className="space-y-4">
            <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-subtle))]">
              Navigasi
            </p>

            <ul className="space-y-2.5">
              {[
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Artikel Kesehatan", href: "/blog" },
                { label: "Testimoni", href: "/testimoni" },
                { label: "Kontak", href: "/kontak" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      body
                      text-[rgb(var(--color-muted))]
                      hover:text-[rgb(var(--color-white))]
                      transition-colors duration-200
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-subtle))]">
              Konsultasi
            </p>

            <div className="space-y-2 body text-[rgb(var(--color-muted))]">
              <p>Pelayanan ke rumah (Homecare)</p>
              <p>WhatsApp: 0857-2003-8494</p>
              <p>Respon cepat setiap hari</p>
            </div>

            <Link
              href="https://wa.me/6285720038494"
              className="
                btn-primary
                inline-flex items-center justify-center
                w-full sm:w-auto
              "
            >
              Konsultasi Sekarang
            </Link>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px bg-[rgb(var(--color-border))]/20" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 caption text-[rgb(var(--color-muted))]">

          <p>
            © {new Date().getFullYear()} Bidan On Call. Seluruh hak dilindungi.
          </p>

          <div className="flex gap-5">
            <Link
              href="/kebijakan-privasi"
              className="
                hover:text-[rgb(var(--color-white))]
                transition-colors
              "
            >
              Privasi
            </Link>

            <Link
              href="/syarat-ketentuan"
              className="
                hover:text-[rgb(var(--color-white))]
                transition-colors
              "
            >
              Ketentuan
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}