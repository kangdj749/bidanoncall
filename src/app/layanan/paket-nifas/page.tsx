// app/layanan/perawatan-nifas/page.tsx

import type { Metadata } from "next";

import HeroNifas from "@/components/Layanan/nifas/HeroNifas";
import ProblemNifas from "@/components/Layanan/nifas/ProblemNifas";
import SolutionNifas from "@/components/Layanan/nifas/SolutionNifas";
import ServiceListNifas from "@/components/Layanan/nifas/ServiceListNifas";
import CTANifas from "@/components/Layanan/nifas/CTANifas";

/* ============================= */
/* SEO */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Perawatan Nifas ke Rumah | Bidan On Call - Pemulihan Ibu Lebih Cepat",

  description:
    "Layanan perawatan nifas ke rumah oleh bidan profesional. Pijat nifas, pijat laktasi, perawatan luka, dan konsultasi untuk mempercepat pemulihan ibu setelah melahirkan.",

  keywords: [
    "perawatan nifas",
    "bidan ke rumah",
    "pijat nifas",
    "pijat laktasi",
    "perawatan ibu setelah melahirkan",
  ],

  alternates: {
    canonical: "/layanan/perawatan-nifas",
  },

  openGraph: {
    title: "Perawatan Nifas ke Rumah - Bidan On Call",
    description:
      "Pemulihan ibu pasca melahirkan lebih cepat dengan layanan bidan profesional ke rumah.",
    url: "https://bidanoncall.com/layanan/perawatan-nifas",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Perawatan Nifas ke Rumah - Bidan On Call",
    description:
      "Layanan pijat nifas, laktasi, dan pemulihan ibu pasca melahirkan.",
  },
};

/* ============================= */
/* JSON LD */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perawatan Nifas ke Rumah",
  provider: {
    "@type": "Organization",
    name: "Bidan On Call",
    url: "https://bidanoncall.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Postpartum Care",
  description:
    "Layanan perawatan nifas di rumah meliputi pijat nifas, pijat laktasi, perawatan luka, dan konsultasi.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="bg-[rgb(var(--color-bg))]">
        <HeroNifas />
        <ProblemNifas />
        <SolutionNifas />
        <ServiceListNifas />
        <CTANifas />
      </main>
    </>
  );
}