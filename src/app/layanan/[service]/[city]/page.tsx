import { services } from "@/data/services";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    service: string;
    city: string;
  };
}

export default function ServiceCityPage({ params }: PageProps) {
  const { service, city } = params;

  const serviceData = services.find((s) => s.slug === service);

  if (!serviceData) {
    return notFound();
  }

  const cityName = decodeURIComponent(city);

  return (
    <main
      className="
      mx-auto px-4 py-10
      max-w-[var(--container-max)]
      "
    >
      {/* Header */}
      <header className="space-y-3">
        <h1
          className="
          text-[18px] md:text-[20px]
          font-semibold
          tracking-tight
          text-[rgb(var(--color-text))]
          "
        >
          {serviceData.name} di {cityName}
        </h1>

        <p
          className="
          text-[13px]
          leading-relaxed
          text-[rgb(var(--color-muted))]
          max-w-[620px]
          "
        >
          {serviceData.description}
        </p>
      </header>

      {/* Content */}
      <section
        className="
        mt-8 space-y-4
        text-[13px]
        leading-relaxed
        text-[rgb(var(--color-text))]
        max-w-[680px]
        "
      >
        <p>
          Bangun.in menyediakan layanan{" "}
          <strong>{serviceData.name}</strong> profesional
          untuk wilayah <strong>{cityName}</strong> dan
          sekitarnya.
        </p>

        <p>
          Tim konsultan kami berpengalaman dalam
          perencanaan bangunan, penyusunan siteplan,
          hingga pengurusan perizinan seperti PBG
          dan dokumen teknis pembangunan.
        </p>

        <p>
          Jika Anda sedang merencanakan pembangunan
          di wilayah <strong>{cityName}</strong>, tim
          Bangun.in siap membantu mulai dari tahap
          perencanaan hingga realisasi proyek.
        </p>
      </section>

      {/* CTA */}
      <section
        className="
        mt-10 p-5
        rounded-[var(--radius-lg)]
        bg-[rgb(var(--color-surface))]
        border border-[rgb(var(--color-border))]
        "
      >
        <p
          className="
          text-[13px]
          text-[rgb(var(--color-text))]
          font-medium
          "
        >
          Konsultasikan proyek Anda
        </p>

        <p
          className="
          text-[12px]
          text-[rgb(var(--color-muted))]
          mt-1
          "
        >
          Tim Bangun.in siap membantu perencanaan,
          desain, hingga pengurusan perizinan.
        </p>

        <a
          href="/kontak"
          className="
          inline-flex mt-3
          text-[12px]
          font-medium
          text-[rgb(var(--color-primary))]
          hover:opacity-80
          transition
          "
        >
          Hubungi Konsultan →
        </a>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${serviceData.name} ${cityName}`,
            areaServed: cityName,
            provider: {
              "@type": "Organization",
              name: "Bangun.in",
              url: "https://bangun.in",
            },
          }),
        }}
      />
    </main>
  );
}