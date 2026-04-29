// app/layanan/perawatan-bayi/page.tsx

import type { Metadata } from "next";
import HeroBayi from "@/components/Layanan/bayi/HeroBayi";
import ProblemBayi from "@/components/Layanan/bayi/ProblemBayi";
import SolutionBayi from "@/components/Layanan/bayi/SolutionBayi";
import ServiceListBayi from "@/components/Layanan/bayi/ServiceListBayi";
import TrustBayi from "@/components/Layanan/bayi/TrustBayi";
import CTABayi from "@/components/Layanan/bayi/CTABayi";
import GalleryLayanan from "@/components/Layanan/GalleryLayanan";
import { getGalleryByService } from "@/lib/gallery";
import { Link } from "lucide-react";
import CityServiceList from "../LinkCitySection";


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

export default async function Page() {
    const gallery = await getGalleryByService("bayi");

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
        <GalleryLayanan images={gallery?.images || []} />
        {/* 🔥 CITY SEO */}
        <CityServiceList service="perawatan-bayi" />

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

              <Link
                href="/layanan/doula-persalinan"
                className="btn-outline"
              >
                Doula Persalinan
              </Link>

              <Link
                href="/layanan/paket-nifas"
                className="btn-outline"
              >
                Perawatan Nifas
              </Link>

             

              <Link
                href="/layanan/jasa-infus-rumah"
                className="btn-outline"
              >
                Infus ke Rumah
              </Link>

	      <Link
                href="/layanan/paket-ibu-hamil"
                className="btn-outline"
              >
                Paket Ibu Hamil
              </Link>
            </div>
          </div>
        </section>
        <CTABayi />
      </main>
    </>
  );
}