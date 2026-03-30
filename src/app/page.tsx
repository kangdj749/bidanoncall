import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

/* ================================
   SEO METADATA
================================ */

export const metadata: Metadata = {
  title:
    "Bangun.in | Konsultan Arsitektur, Engineering & Geoteknik Profesional",
  description:
    "Bangun.in adalah konsultan arsitektur, engineering, topografi dan geoteknik profesional yang menghadirkan solusi perencanaan dan konstruksi terintegrasi di Indonesia.",

  keywords: [
    "konsultan arsitektur",
    "konsultan engineering",
    "jasa geoteknik",
    "konsultan topografi",
    "perencana konstruksi",
    "engineering consultant indonesia",
  ],

  alternates: {
    canonical: "https://bangunin.com",
  },

  openGraph: {
    title:
      "Bangun.in | Konsultan Arsitektur, Engineering & Geoteknik Profesional",
    description:
      "Solusi perencanaan arsitektur, engineering dan konstruksi profesional untuk proyek skala kecil hingga besar.",
    url: "https://bangunin.com",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bangun.in | Konsultan Arsitektur & Engineering Profesional",
    description:
      "Konsultan arsitektur, engineering dan geoteknik profesional di Indonesia.",
  },
};

/* ================================
   PAGE
================================ */

export default function Page() {
  return <HomeClient />;
}