import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

/* ============================= */
/* GLOBAL SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://bangun-in.com"),

  title: {
    default: "Bangun.in — Konsultan Arsitektur & Engineering Indonesia",
    template: "%s | Bangun.in Engineering Consultant",
  },

  description:
    "PT Bangun Cipta Solusi (bangun.in) adalah konsultan arsitektur, engineering, topografi, dan geoteknik yang menyediakan solusi perencanaan dan manajemen konstruksi profesional di Indonesia.",

  keywords: [
    "konsultan arsitektur",
    "engineering consultant",
    "konsultan teknik",
    "perencanaan wilayah",
    "geoteknik",
    "topografi",
    "konsultan konstruksi",
  ],

  openGraph: {
    title: "Bangun.in Engineering Consultant",
    description:
      "Konsultan arsitektur, engineering, dan konstruksi terintegrasi untuk proyek profesional.",
    url: "https://bangun-in.com",
    siteName: "Bangun.in",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bangun.in Engineering Consultant",
    description:
      "Konsultan arsitektur, engineering, dan konstruksi profesional.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ============================= */
/* ORGANIZATION SCHEMA */
/* ============================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Bangun Cipta Solusi",
  url: "https://bangun-in.com",
  logo: "https://bangun-in.com/logo.png",
  email: "bangunciptasolusi01@gmail.com",
  telephone: "+62-877-6550-5935",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Perjuangan No. 88",
    addressLocality: "Jakarta Barat",
    addressCountry: "Indonesia",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans text-gray-900 bg-white">

        {/* JSON LD GLOBAL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <ThemeProvider>
          <Navbar />

          <main className="pt-20">
            {children}
          </main>

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}