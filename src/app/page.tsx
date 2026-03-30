import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

/* ============================= */
/* SEO METADATA — FIXED */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Bidan On Call ke Rumah | Layanan Kesehatan Ibu & Bayi Profesional",

  description:
    "Layanan bidan on call ke rumah untuk ibu hamil, persalinan, nifas, dan perawatan bayi. Praktis, aman, dan tanpa antre. Tersedia di berbagai kota di Indonesia.",

  keywords: [
    "bidan on call",
    "bidan ke rumah",
    "homecare bidan",
    "bidan panggilan",
    "perawatan ibu hamil",
    "bidan profesional",
    "layanan kesehatan ibu dan bayi",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Bidan On Call ke Rumah | Perawatan Ibu & Bayi Lebih Nyaman",
    description:
      "Nikmati layanan bidan profesional langsung ke rumah. Aman, cepat, dan tanpa ribet.",
    url: "https://bidanoncall.com",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bidan On Call ke Rumah",
    description:
      "Layanan bidan profesional langsung ke rumah untuk ibu & bayi.",
  },
};

/* ============================= */
/* JSON-LD — ADD (IMPORTANT SEO) */
/* ============================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bidan On Call",
  url: "https://bidanoncall.com",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Bidan On Call",
  description:
    "Layanan bidan ke rumah untuk pemeriksaan kehamilan, persalinan, nifas, dan perawatan bayi.",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  url: "https://bidanoncall.com",
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu layanan bidan on call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Layanan bidan on call adalah layanan di mana bidan profesional datang langsung ke rumah untuk memberikan perawatan ibu dan bayi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah layanan tersedia di kota saya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami melayani berbagai kota di Indonesia. Silakan hubungi kami untuk memastikan ketersediaan di lokasi Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja layanan yang tersedia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Layanan meliputi pemeriksaan kehamilan, pendampingan persalinan, perawatan nifas, dan perawatan bayi.",
      },
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
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="bg-[rgb(var(--color-bg))]">
        <HomeClient />
      </main>
    </>
  );
}