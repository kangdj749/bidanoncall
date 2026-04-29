// app/testimoni/page.tsx
import type { Metadata } from "next";

import HeroTestimoni from "@/components/Testimoni/HeroTestimoni";
import StatsProof from "@/components/Testimoni/StatsProof";
import VideoTestimoni from "@/components/Testimoni/VideoTestimoni";
import WhatsAppProof from "@/components/Testimoni/WhatsAppProof";
import GoogleReview from "@/components/Testimoni/GoogleReview";
import CTATestimoni from "@/components/Testimoni/CTATestimoni";

export const metadata: Metadata = {
  title: "Testimoni Bidan On Call | Review Ibu & Bayi",
  description:
    "Lihat pengalaman nyata ibu yang menggunakan layanan bidan ke rumah. Testimoni video, WhatsApp, dan Google review Bidan On Call.",
  alternates: {
    canonical: "/testimoni",
  },
};

export default function Page() {
  return (
    <main className="bg-[rgb(var(--color-bg))]">
      <HeroTestimoni />
      <StatsProof />
      <VideoTestimoni />
      <WhatsAppProof />
      <GoogleReview />
      <CTATestimoni />
    </main>
  );
}