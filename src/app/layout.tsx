import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

/* ============================= */
/* FONT SYSTEM */
/* ============================= */

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
  metadataBase: new URL("https://bidanoncall.com"),

  title: {
    default: "Bidan On Call — Layanan Bidan ke Rumah 24 Jam",
    template: "%s | Bidan On Call",
  },

  description:
    "Layanan bidan ke rumah 24 jam untuk ibu hamil, persalinan, dan perawatan bayi. Praktis, aman, dan nyaman tanpa perlu ke klinik.",

  keywords: [
    "bidan ke rumah",
    "bidan on call",
    "perawatan ibu hamil",
    "bidan 24 jam",
    "layanan kesehatan ibu dan bayi",
    "homecare bidan",
    "bidan panggilan",
  ],

  alternates: {
    canonical: "https://bidanoncall.com",
  },

  openGraph: {
    title: "Bidan On Call — Layanan Bidan ke Rumah",
    description:
      "Solusi praktis perawatan ibu hamil dan bayi dengan layanan bidan profesional langsung ke rumah.",
    url: "https://bidanoncall.com",
    siteName: "Bidan On Call",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bidan On Call — Bidan ke Rumah",
    description:
      "Layanan bidan profesional ke rumah untuk ibu hamil & bayi.",
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
  "@type": "MedicalOrganization",
  name: "Bidan On Call",
  url: "https://bidanoncall.com",
  logo: "https://bidanoncall.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-857-2003-8494",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian"],
  },
};

/* ============================= */
/* ROOT LAYOUT */
/* ============================= */

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
      <body className="font-sans bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] antialiased">

        {/* JSON-LD GLOBAL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <ThemeProvider>
          {/* ================= NAVBAR ================= */}
          <Navbar />

          {/* ================= MAIN ================= */}
          <main className="pt-20 min-h-screen">
            {children}
          </main>

          {/* ================= FOOTER ================= */}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}