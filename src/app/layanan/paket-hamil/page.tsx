import type { Metadata } from "next"
import Link from "next/link"

import ProblemSection from "@/components/Layanan/hamil/ProblemSection"
import AgitateSection from "@/components/Layanan/hamil/AgitateSection"
import SolutionSection from "@/components/Layanan/hamil/SolutionSection"
import CTASection from "@/components/Layanan/hamil/CTASection"
import CityServiceList from "../LinkCitySection"
import { cities } from "@/lib/seo/cities"
import HeroSection from "@/components/Layanan/hamil/HeroSection"
import USPSection from "@/components/Layanan/hamil/USPSection"
import DetailPackageSection from "@/components/Layanan/hamil/DetailPackageSection"
import TargetSection from "@/components/Layanan/hamil/TargetSection"
import TestimoniSection from "@/components/Layanan/hamil/TestimoniSection"

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Jasa Arsitek Profesional Indonesia | Desain Rumah & Bangunan Modern",

  description:
    "Jasa arsitek profesional untuk desain rumah, bangunan komersial, dan proyek konstruksi di seluruh Indonesia. Desain modern, fungsional, dan efisien.",

  keywords: [
    "jasa arsitek",
    "arsitek indonesia",
    "desain rumah modern",
    "jasa desain rumah",
    "arsitek profesional",
  ],

  alternates: {
    canonical: "/layanan/paket-hamil",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Jasa Arsitek Profesional - Bangun.in",
    description:
      "Desain rumah dan bangunan modern dengan pendekatan arsitektur profesional.",
    url: "https://bidanoncall/layanan/paket-hamil",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Arsitek Profesional - Bangun.in",
    description:
      "Solusi desain arsitektur modern dan profesional.",
  },
}

/* ============================= */
/* JSON-LD */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Arsitektur",
  provider: {
    "@type": "Organization",
    name: "Bangun.in",
    url: "https://bidanoncall.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Architectural Design",
  url: "https://bidanoncall.com/layanan/paket-hamil",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://bidanoncall.com" },
    { "@type": "ListItem", position: 2, name: "Layanan", item: "https://bidanoncall.com/layanan" },
    { "@type": "ListItem", position: 3, name: "Arsitektur", item: "https://bidanoncall.com/layanan/paket-hamil" },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bangun.in",
  url: "https://bidanoncall.com",
}

/* 🔥 ADVANCED SEO — CITY LIST */
const cityListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Jasa Arsitek ${city}`,
    url: `https://bidanoncall.com/layanan/paket-hamil/${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
  })),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu jasa arsitek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jasa arsitek adalah layanan profesional untuk merancang bangunan mulai dari konsep hingga gambar kerja.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah melayani seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami melayani berbagai kota di Indonesia.",
      },
    },
  ],
}

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[rgb(var(--color-bg))]">

        {/* HERO */}
        <HeroSection />
        <ProblemSection />
        <AgitateSection />
        <SolutionSection />
        <USPSection />
        <DetailPackageSection />
        <TargetSection />
        <TestimoniSection />


        <CityServiceList service="paket-hamil" />

     
        {/* ============================= */}
        {/* RELATED SERVICES */}
        {/* ============================= */}

        <section className="section-tight bg-[rgb(var(--color-soft))]">
          <div className="container-main">

            <h3 className="h3 mb-4">
              Layanan Terkait
            </h3>

            <div className="flex flex-wrap gap-3">

              <Link href="/layanan/doula-persalinan" className="btn btn-outline">
                Doula Persalinan
              </Link>

              <Link href="/layanan/perawatan-nifas" className="btn btn-outline">
                Paket Perawatan Nipas
              </Link>

              <Link href="/layanan/perawatan-bayi" className="btn btn-outline">
                Perawatan Bayi
              </Link>

              <Link href="/layanan/inpus-rumah" className="btn btn-outline">
                Jasa Infus ke Rumah
              </Link>

            </div>

          </div>
        </section>

        {/* CTA */}
        <CTASection />

      </main>
    </>
  )
}