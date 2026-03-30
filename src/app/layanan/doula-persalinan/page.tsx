import type { Metadata } from "next"
import Link from "next/link"

import CityServiceList from "../LinkCitySection"
import { cities } from "@/lib/seo/cities"

import Hero from "@/components/Layanan/Doula/HeroDoula"
import Problem from "@/components/Layanan/Doula/ProblemDoula"
import Agitate from "@/components/Layanan/Doula/AgitateDoula"
import Solution from "@/components/Layanan/Doula/SolutionDoula"
import USP from "@/components/Layanan/Doula/USPDoula"
import Experience from "@/components/Layanan/Doula/ExperienceDoula"
import Target from "@/components/Layanan/Doula/TargetDoula"
import Trust from "@/components/Layanan/Doula/TrustDoula"
import Testimonial from "@/components/Layanan/Doula/TestimonialDoula"
import CTA from "@/components/Layanan/Doula/CTADoula"

/* ============================= */
/* SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Doula Persalinan ke Rumah | Pendampingan Ibu Melahirkan Nyaman & Aman",

  description:
    "Layanan doula persalinan ke rumah untuk membantu ibu melahirkan dengan lebih tenang, nyaman, dan minim stres. Didampingi tenaga profesional & berpengalaman.",

  keywords: [
    "doula persalinan",
    "bidan ke rumah",
    "persalinan nyaman di rumah",
    "pendamping melahirkan",
    "homecare ibu melahirkan",
    "bidan on call",
  ],

  alternates: {
    canonical: "/layanan/doula-persalinan",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Doula Persalinan ke Rumah | Bidan On Call Indonesia",
    description:
      "Pendampingan persalinan oleh tenaga profesional langsung ke rumah. Lebih nyaman, aman, dan penuh empati.",
    url: "https://bidanoncall.com/layanan/doula-persalinan",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Doula Persalinan ke Rumah | Bidan On Call",
    description:
      "Pendampingan persalinan aman & nyaman langsung di rumah Anda.",
  },
}

/* ============================= */
/* JSON-LD */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Layanan Doula Persalinan ke Rumah",
  provider: {
    "@type": "Organization",
    name: "Bidan On Call",
    url: "https://bidanoncall.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Homecare Persalinan & Pendampingan Ibu",
  url: "https://bidanoncall.com/layanan/doula-persalinan",
}

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
    {
      "@type": "ListItem",
      position: 3,
      name: "Doula Persalinan",
      item: "https://bidanoncall.com/layanan/doula-persalinan",
    },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bidan On Call",
  url: "https://bidanoncall.com",
}

const cityListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Bidan Doula Persalinan ${city}`,
    url: `https://bidanoncall.com/layanan/doula-persalinan/${city
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
      name: "Apa itu layanan doula persalinan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doula persalinan adalah pendamping profesional yang membantu ibu selama proses melahirkan agar lebih tenang, nyaman, dan minim stres.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah layanan bisa ke rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan Bidan On Call menyediakan pendampingan persalinan langsung ke rumah dengan standar medis yang aman.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah tersedia di seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami melayani berbagai kota di Indonesia dengan sistem homecare bidan profesional.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[rgb(var(--color-bg))]">

        {/* SECTION FLOW (CONVERSION DRIVEN) */}
        <Hero />
        <Problem />
        <Agitate />
        <Solution />
        <USP />
        <Experience />
        <Target />
        <Trust />
        <Testimonial />

        {/* CITY SEO */}
        <CityServiceList service="doula-persalinan" />

        {/* RELATED SERVICES */}
        <section className="section-tight bg-[rgb(var(--color-soft))]">
          <div className="container-main">

            <h3 className="h3 mb-5 text-[rgb(var(--color-dark))]">
              Layanan Homecare Lainnya
            </h3>

            <div className="flex flex-wrap gap-3">

              <Link href="/layanan/paket-hamil" className="btn-outline">
                Paket Ibu Hamil
              </Link>

              <Link href="/layanan/perawatan-nifas" className="btn-outline">
                Perawatan Nifas
              </Link>

              <Link href="/layanan/perawatan-bayi" className="btn-outline">
                Perawatan Bayi
              </Link>

              <Link href="/layanan/infus-rumah" className="btn-outline">
                Infus ke Rumah
              </Link>

            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <CTA />

      </main>
    </>
  )
}