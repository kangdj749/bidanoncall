import type { Metadata } from "next";

import ArchitectureSection from "@/components/Layanan/ArchitectureSection";
import CTALayananSection from "@/components/Layanan/CTALayananSection";
import EngineeringSection from "@/components/Layanan/EngineeringSection";
import ServicesHeroSection from "@/components/Layanan/ServicesHeroSection";
import SistemKerjaSection from "@/components/Layanan/SistemKerjaSection";
import SpatialPlanningSection from "@/components/Layanan/SpatialPlanningSection";
import TopographyGeotechSection from "@/components/Layanan/TopographyGeotechSection";

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  title: "Layanan Konsultan Arsitektur & Engineering",
  description:
    "Bangun.in menyediakan layanan konsultan arsitektur, engineering, perencanaan wilayah, topografi, dan geoteknik untuk mendukung pembangunan yang terencana dan profesional.",

  alternates: {
    canonical: "https://bangun-in.com/layanan",
  },

  openGraph: {
    title: "Layanan Engineering Consultant | Bangun.in",
    description:
      "Layanan profesional konsultan arsitektur, engineering, geoteknik, dan topografi.",
    url: "https://bangun-in.com/layanan",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Layanan Engineering Consultant | Bangun.in",
    description:
      "Solusi profesional untuk arsitektur, engineering, dan konstruksi.",
  },
};

/* ============================= */
/* STRUCTURED DATA */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  name: "Bangun.in Engineering Consultant",
  url: "https://bangun-in.com/layanan",
  serviceType: [
    "Architecture Design",
    "Engineering Consultant",
    "Urban Planning",
    "Geotechnical Engineering",
    "Topography Survey",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja layanan yang disediakan Bangun.in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bangun.in menyediakan layanan arsitektur, engineering, perencanaan wilayah, topografi, dan geoteknik.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Bangun.in melayani proyek di seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan konsultansi kami dapat mendukung proyek di berbagai wilayah Indonesia.",
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
      item: "https://bangun-in.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://bangun-in.com/layanan",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON LD */}

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

      <main className="relative">

        <ServicesHeroSection />

        <SpatialPlanningSection />

        <ArchitectureSection />

        <EngineeringSection />

        <TopographyGeotechSection />

        <SistemKerjaSection />

        {/* SEO INTERNAL LINK */}

        <section className="container-main py-12">
          <h2 className="text-[18px] font-semibold mb-4">
            Layanan Konsultan Kami
          </h2>

          <div className="flex flex-wrap gap-4 text-[13px]">
            <a href="/layanan#arsitektur" className="underline">
              Layanan Arsitektur
            </a>

            <a href="/layanan#engineering" className="underline">
              Layanan Engineering
            </a>

            <a href="/layanan#geoteknik" className="underline">
              Layanan Geoteknik
            </a>
          </div>
        </section>

        <CTALayananSection />

      </main>
    </>
  );
}