import type { Metadata } from "next";
import Link from "next/link";

import ProblemSection from "@/components/Layanan/hamil/ProblemSection";
import AgitateSection from "@/components/Layanan/hamil/AgitateSection";
import SolutionSection from "@/components/Layanan/hamil/SolutionSection";
import CTASection from "@/components/Layanan/hamil/CTASection";
import CityServiceList from "../LinkCitySection";
import { cities } from "@/lib/seo/cities";
import HeroSection from "@/components/Layanan/hamil/HeroSection";
import USPSection from "@/components/Layanan/hamil/USPSection";
import DetailPackageSection from "@/components/Layanan/hamil/DetailPackageSection";
import TargetSection from "@/components/Layanan/hamil/TargetSection";
import TestimoniSection from "@/components/Layanan/hamil/TestimoniSection";
import GalleryLayanan from "@/components/Layanan/GalleryLayanan";
import { getGalleryByService } from "@/lib/gallery";

/* ============================= */
/* SEO METADATA — FIXED */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bidanoncall.com"),

  title:
    "Bidan On Call ke Rumah | Layanan Pemeriksaan Kehamilan di Rumah",

  description:
    "Layanan bidan on call ke rumah untuk pemeriksaan ibu hamil, konsultasi kehamilan, dan pendampingan persalinan. Praktis, aman, dan nyaman tanpa perlu ke klinik.",

  keywords: [
    "bidan on call",
    "bidan ke rumah",
    "pemeriksaan kehamilan di rumah",
    "layanan ibu hamil",
    "bidan panggilan",
    "homecare bidan",
  ],

  alternates: {
    canonical: "/layanan/paket-hamil",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Bidan On Call ke Rumah | Perawatan Kehamilan Nyaman",
    description:
      "Nikmati layanan bidan profesional langsung ke rumah. Aman, praktis, dan tanpa antre.",
    url: "https://bidanoncall.com/layanan/paket-hamil",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bidan On Call ke Rumah",
    description:
      "Perawatan kehamilan lebih nyaman dengan layanan bidan ke rumah.",
  },
};

/* ============================= */
/* JSON-LD — FIXED */
/* ============================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Layanan Bidan On Call ke Rumah",
  provider: {
    "@type": "Organization",
    name: "Bidan On Call",
    url: "https://bidanoncall.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: "Homecare Bidan",
  description:
    "Layanan bidan profesional yang datang ke rumah untuk pemeriksaan kehamilan dan konsultasi ibu hamil.",
  url: "https://bidanoncall.com/layanan/paket-hamil",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Paket Hamil",
      item: "https://bidanoncall.com/layanan/paket-hamil",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bidan On Call",
  url: "https://bidanoncall.com",
};

/* 🔥 CITY SEO */
const cityListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Bidan On Call ${city}`,
    url: `https://bidanoncall.com/layanan/paket-hamil/${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
  })),
};

/* 🔥 FAQ SEO — RELEVAN */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah bidan bisa datang ke rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan bidan on call memungkinkan bidan profesional datang langsung ke rumah untuk pemeriksaan dan konsultasi.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja layanan dalam paket kehamilan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Layanan meliputi pemeriksaan ibu dan janin, konsultasi, edukasi persiapan persalinan, dan monitoring kesehatan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah aman pemeriksaan di rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sangat aman karena dilakukan oleh bidan profesional dengan peralatan medis yang steril dan sesuai standar.",
      },
    },
  ],
};

/* ============================= */
/* PAGE */
/* ============================= */

export default async function Page() {
  const gallery = await getGalleryByService("hamil");
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

        {/* HERO */}
        <HeroSection />

        {/* CORE FLOW (Conversion Structure) */}
        <ProblemSection />
        <AgitateSection />
        <SolutionSection />
        <USPSection />
        <DetailPackageSection />
        <TargetSection />
        <TestimoniSection />
        <GalleryLayanan images={gallery?.images || []} />

        {/* 🔥 CITY SEO */}
        <CityServiceList service="paket-ibu-hamil" />

        {/* ============================= */}
        {/* RELATED SERVICES — REFACTOR */}
        {/* ============================= */}
        <section className="section-tight bg-[rgb(var(--color-soft))]">
          <div className="container-main space-y-4">

            <div className="max-w-[520px] space-y-2">
              <h3 className="h3 text-[rgb(var(--color-dark))]">
                Layanan Terkait
              </h3>
              <p className="caption">
                Pilihan layanan lain untuk mendukung kesehatan ibu & bayi
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

            {[
              { href: "/layanan/doula-persalinan", label: "Doula Persalinan" },
              { href: "/layanan/paket-nifas", label: "Perawatan Nifas" },
              { href: "/layanan/perawatan-bayi", label: "Perawatan Bayi" },
              { href: "/layanan/jasa-infus-rumah", label: "Infus ke Rumah" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  inline-flex items-center justify-center
                  h-[36px] px-4
                  rounded-[var(--radius-md)]
                  border border-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-primary))]
                  text-[12.5px] font-medium
                  transition-all duration-200
                  hover:bg-[rgb(var(--color-primary))]
                  hover:text-[rgb(var(--color-white))]
                  hover:shadow-[var(--shadow-soft)]
                "
              >
                {item.label}
              </Link>
            ))}

          </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />

      </main>
    </>
  );
}