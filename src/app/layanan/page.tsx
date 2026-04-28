import type { Metadata } from "next";

import HeroLayanan from "@/components/Layanan/HeroLayanan";
import IntroLayanan from "@/components/Layanan/IntroLayanan";
import GridLayanan from "@/components/Layanan/GridLayanan";
import CTALayanan from "@/components/Layanan/CTALayanan";

/* ============================= */
/* SEO METADATA — HEALTHCARE */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title: "Layanan Bidan ke Rumah | Homecare Ibu & Bayi Profesional",

  description:
    "Layanan bidan ke rumah untuk perawatan kehamilan, persalinan, nifas, dan bayi. Solusi homecare kebidanan yang nyaman, aman, dan profesional langsung di rumah Anda.",

  keywords: [
    "bidan ke rumah",
    "homecare bidan",
    "perawatan ibu dan bayi",
    "bidan panggilan",
    "layanan bidan terdekat",
    "perawatan nifas di rumah",
    "perawatan bayi baru lahir",
    "doula persalinan",
  ],

  alternates: {
    canonical: "/layanan",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Layanan Bidan On Call | Perawatan Ibu & Bayi ke Rumah",
    description:
      "Nikmati layanan bidan profesional langsung ke rumah untuk ibu hamil, persalinan, nifas, dan bayi.",
    url: "https://bidanoncall.com/layanan",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Layanan Bidan ke Rumah Profesional",
    description:
      "Perawatan ibu & bayi lebih nyaman dengan layanan bidan ke rumah.",
  },
};

/* ============================= */
/* STRUCTURED DATA — HEALTHCARE */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Bidan On Call",
  url: "https://bidanoncall.com/layanan",
  description:
    "Layanan bidan ke rumah untuk perawatan ibu hamil, persalinan, nifas, dan bayi baru lahir.",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Paket Perawatan Kehamilan",
    },
    {
      "@type": "MedicalProcedure",
      name: "Doula Persalinan",
    },
    {
      "@type": "MedicalProcedure",
      name: "Perawatan Nifas",
    },
    {
      "@type": "MedicalProcedure",
      name: "Perawatan Bayi Baru Lahir",
    },
    {
      "@type": "MedicalProcedure",
      name: "Infus ke Rumah",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah bidan bisa datang ke rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan Bidan On Call memungkinkan bidan profesional datang langsung ke rumah untuk perawatan ibu dan bayi.",
      },
    },
    {
      "@type": "Question",
      name: "Layanan apa saja yang tersedia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menyediakan layanan perawatan kehamilan, doula persalinan, perawatan nifas, perawatan bayi, dan infus ke rumah.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://bidanoncall.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://bidanoncall.com/layanan",
    },
  ],
};

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="bg-[rgb(var(--color-bg))]">

        {/* HERO */}
        <HeroLayanan />

        {/* INTRO */}
        <IntroLayanan />

        {/* GRID */}
        <GridLayanan />

        {/* INTERNAL LINK SEO (PREMIUM STYLE) */}
        <section className="section-tight">
          <div className="container-main space-y-4">

            <h3 className="h3">
              Layanan Populer Bidan On Call
            </h3>

            <div className="flex flex-wrap gap-3">

              <a href="/layanan/paket-hamil" className="btn-outline">
                Paket Perawatan Kehamilan
              </a>

              <a href="/layanan/doula-persalinan" className="btn-outline">
                Doula Persalinan
              </a>

              <a href="/layanan/perawatan-nifas" className="btn-outline">
                Perawatan Nifas
              </a>

              <a href="/layanan/perawatan-bayi" className="btn-outline">
                Perawatan Bayi
              </a>

              <a href="/layanan/infus-rumah" className="btn-outline">
                Infus ke Rumah
              </a>

            </div>

          </div>
        </section>

        {/* CTA */}
        <CTALayanan />

      </main>
    </>
  );
}