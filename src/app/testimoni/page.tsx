// app/testimoni/page.tsx

import type { Metadata } from "next";
import TestimonialSection from "@/components/Testimoni/TestimonialSection";

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Testimoni Pasien Bidan On Call | Review Nyata Layanan Bidan ke Rumah",

  description:
    "Lihat pengalaman nyata pasien Bidan On Call. Review ibu hamil, persalinan, perawatan bayi, hingga layanan infus ke rumah dengan tenaga medis profesional.",

  keywords: [
    "testimoni bidan on call",
    "review bidan ke rumah",
    "pengalaman pasien bidan",
    "review layanan kesehatan rumah",
    "bidan panggilan terpercaya",
  ],

  alternates: {
    canonical: "/testimoni",
  },

  openGraph: {
    title: "Testimoni Pasien Bidan On Call",
    description:
      "Ribuan ibu telah merasakan layanan bidan profesional langsung ke rumah.",
    url: "https://bidanoncall.com/testimoni",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Testimoni Bidan On Call",
    description:
      "Lihat pengalaman nyata pasien layanan bidan ke rumah.",
  },
};

/* ============================= */
/* JSON-LD (REVIEW SEO) */
/* ============================= */

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bidan On Call",
  url: "https://bidanoncall.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
  },
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
          __html: JSON.stringify(reviewSchema),
        }}
      />

      <main className="bg-[rgb(var(--color-bg))]">

        {/* HERO (optional tapi disarankan) */}
        <section className="section-tight text-center">
          <div className="container-main max-w-[720px] space-y-4">

            <h1 className="h1">
              Testimoni Nyata dari Pasien
            </h1>

            <p className="caption">
              Ribuan ibu telah mempercayakan layanan Bidan On Call untuk
              kehamilan, persalinan, dan perawatan bayi di rumah.
            </p>

          </div>
        </section>

        {/* 🔥 UNIFIED TESTIMONIAL */}
        <TestimonialSection />

      </main>
    </>
  );
}