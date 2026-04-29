// app/layanan/perawatan-nifas/page.tsx

import type { Metadata } from "next";

import HeroNifas from "@/components/Layanan/nifas/HeroNifas";
import ProblemNifas from "@/components/Layanan/nifas/ProblemNifas";
import SolutionNifas from "@/components/Layanan/nifas/SolutionNifas";
import ServiceListNifas from "@/components/Layanan/nifas/ServiceListNifas";
import CTANifas from "@/components/Layanan/nifas/CTANifas";
import GalleryLayanan from "@/components/Layanan/GalleryLayanan";
import { getGalleryByService } from "@/lib/gallery";
import CityServiceList from "../LinkCitySection";
import Link from "next/link";

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

export default async function Page() {
  const gallery = await getGalleryByService("nifas");
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
        <GalleryLayanan images={gallery?.images || []} />
        {/* 🔥 CITY SEO */}
        <CityServiceList service="paket-nifas" />

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

        <CTANifas />

        
      </main>
    </>
  );
}