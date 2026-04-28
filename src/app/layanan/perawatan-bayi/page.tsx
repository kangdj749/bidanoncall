// app/layanan/perawatan-bayi/page.tsx

import type { Metadata } from "next";

import HeroBayi from "@/components/Layanan/bayi/HeroBayi";
import ProblemBayi from "@/components/Layanan/bayi/ProblemBayi";
import SolutionBayi from "@/components/Layanan/bayi/SolutionBayi";
import ServiceListBayi from "@/components/Layanan/bayi/ServiceListBayi";
import TrustBayi from "@/components/Layanan/bayi/TrustBayi";
import CTABayi from "@/components/Layanan/bayi/CTABayi";

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Perawatan Bayi ke Rumah | Bidan On Call - Newborn Care Profesional",

  description:
    "Layanan perawatan bayi baru lahir oleh bidan berpengalaman. Newborn care, pijat bayi, baby spa, imunisasi, cukur rambut & tindik bayi langsung ke rumah.",

  keywords: [
    "perawatan bayi",
    "newborn care",
    "pijat bayi",
    "baby spa",
    "bidan ke rumah bayi",
  ],

  alternates: {
    canonical: "/layanan/perawatan-bayi",
  },

  openGraph: {
    title: "Perawatan Bayi ke Rumah - Bidan On Call",
    description:
      "Perawatan bayi baru lahir lebih aman & nyaman dengan bidan profesional ke rumah.",
    url: "https://bidanoncall.com/layanan/perawatan-bayi",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Perawatan Bayi ke Rumah - Bidan On Call",
    description:
      "Newborn care, pijat bayi, baby spa & imunisasi langsung ke rumah.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perawatan Bayi ke Rumah",
  provider: {
    "@type": "Organization",
    name: "Bidan On Call",
    url: "https://bidanoncall.com",
  },
  serviceType: "Newborn Care",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-[rgb(var(--color-bg))]">
        <HeroBayi />
        <ProblemBayi />
        <SolutionBayi />
        <ServiceListBayi />
        <TrustBayi />
        <CTABayi />
      </main>
    </>
  );
}