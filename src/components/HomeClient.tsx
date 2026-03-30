"use client";

import Hero from "@/components/Hero";
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA";

import SectionWrapper from "@/components/SectionWrapper";

import ProblemSection from "./ProblemSection";
import AgitateSection from "./AgitateSection";
import SolutionSection from "./SolutionSection";
import ServicesSection from "./ServicesSection";
import TrustSection from "./TrustSection";
import BookingProcessSection from "./BookingProcessSection";
import TestimonialSection from "./TestimonialSection";
import CtaSection from "./CTASection";

/* ================================
   STRUCTURED DATA
================================ */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bangun.in",
  url: "https://bangunin.com",
  description:
    "Konsultan arsitektur, engineering dan geoteknik profesional di Indonesia.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  name: "Bangun.in Engineering Consultant",
  provider: {
    "@type": "Organization",
    name: "PT Bangun Cipta Solusi",
  },
  areaServed: "Indonesia",
  serviceType: [
    "Architecture Design",
    "Engineering Consultant",
    "Geotechnical Engineering",
    "Topography Survey",
  ],
};

export default function HomeClient() {
  return (
    <>
      {/* WebSite Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Service Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="relative">
        <Hero />

        <ProblemSection/>

        <AgitateSection/>

        <SolutionSection />

        <SectionWrapper withDivider={false}>
          <ServicesSection />
        </SectionWrapper>
        <TrustSection/>
        <BookingProcessSection />

        <TestimonialSection />
        
        <CtaSection/>

        <HybridWhatsAppCTA />
      </main>
    </>
  );
}