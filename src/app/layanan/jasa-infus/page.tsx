// app/layanan/infus-rumah/page.tsx

import type { Metadata } from "next";

import HeroInfus from "@/components/Layanan/infus/HeroInfus";
import ProblemInfus from "@/components/Layanan/infus/ProblemInfus";
import SolutionInfus from "@/components/Layanan/infus/SolutionInfus";
import InfusTypes from "@/components/Layanan/infus/InfusTypes";
import TrustInfus from "@/components/Layanan/infus/TrustInfus";
import CTAInfus from "@/components/Layanan/infus/CTAInfus";

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Jasa Infus ke Rumah | Infus Booster, Zat Besi & Medis - Bidan On Call",

  description:
    "Layanan infus ke rumah oleh tenaga medis profesional. Infus booster, zat besi, protein, dan sesuai kondisi medis untuk membantu pemulihan tubuh lebih cepat.",

  keywords: [
    "infus ke rumah",
    "infus booster",
    "infus zat besi",
    "infus vitamin",
    "jasa infus medis",
  ],

  alternates: {
    canonical: "/layanan/infus-rumah",
  },

  openGraph: {
    title: "Jasa Infus ke Rumah - Bidan On Call",
    description:
      "Pemulihan tubuh lebih cepat dengan layanan infus profesional ke rumah.",
    url: "https://bidanoncall.com/layanan/infus-rumah",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Infus ke Rumah - Bidan On Call",
    description:
      "Infus booster, zat besi & protein langsung ke rumah.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Layanan Infus ke Rumah",
  provider: {
    "@type": "Organization",
    name: "Bidan On Call",
    url: "https://bidanoncall.com",
  },
  therapyType: "Intravenous Therapy",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-[rgb(var(--color-bg))]">
        <HeroInfus />
        <ProblemInfus />
        <SolutionInfus />
        <InfusTypes />
        <TrustInfus />
        <CTAInfus />
      </main>
    </>
  );
}