import type { Metadata } from "next";
import Link from "next/link";
import {
  generateCityMetadata,
  generateCitySchemas,
} from "@/lib/seo/cityPage";
import { cities } from "@/lib/seo/cities";
import { generateAIContent } from "@/lib/seo/contentAI";

/* ============================= */
/* TYPES */
/* ============================= */

type PageProps = {
  params: {
    service: string;
    city: string;
  };
};

/* ============================= */
/* HELPERS */
/* ============================= */

function formatService(service: string): string {
  return service.replace(/-/g, " ");
}

function formatCity(city: string): string {
  return city.replace(/-/g, " ");
}

/* ============================= */
/* METADATA (SEO OPTIMIZED) */
/* ============================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = formatService(params.service);
  const city = formatCity(params.city);

  return generateCityMetadata({
    city,
    service,
    slug: params.service,
    description: `Layanan ${service} (Bidan On Call) di ${city}. Bidan datang ke rumah untuk perawatan ibu hamil, persalinan, nifas, dan bayi baru lahir.`,
  });
}

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page({ params }: PageProps) {
  const city = formatCity(params.city);
  const cleanService = formatService(params.service);

  const ai = generateAIContent({
    city,
    service: cleanService,
  });

  const { serviceSchema, breadcrumbSchema } = generateCitySchemas({
    city,
    service: cleanService,
    slug: params.service,
    description: ai.intro,
  });

  return (
    <>
      {/* ================= JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="section-tight bg-[rgb(var(--color-soft))]">
        <div className="container-main max-w-[820px]">

          <p className="caption text-[rgb(var(--color-primary))] mb-2">
            Layanan Bidan di {city}
          </p>

          <h1 className="h1 mb-4">
            {cleanService} – Bidan ke Rumah di {city}
          </h1>

          <p className="body-lg text-[rgb(var(--color-muted))]">
            {ai.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontak" className="btn-primary">
              Konsultasi Sekarang
            </Link>

            <Link href="/layanan" className="btn-outline">
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-tight">
        <div className="container-main grid md:grid-cols-2 gap-5">

          {/* PROBLEM */}
          <div className="card-premium">
            <h2 className="h3 mb-2">
              Tantangan Perawatan Ibu & Bayi di {city}
            </h2>
            <p className="body text-[rgb(var(--color-muted))]">
              {ai.problem}
            </p>
          </div>

          {/* SOLUTION */}
          <div className="card-premium">
            <h2 className="h3 mb-2">
              Solusi Bidan On Call di {city}
            </h2>
            <p className="body text-[rgb(var(--color-muted))]">
              {ai.solution}
            </p>
          </div>

        </div>
      </section>

      {/* ================= VALUE GRID (COMPACT CARD) ================= */}
      <section className="section-tight bg-[rgb(var(--color-soft))]">
        <div className="container-main">

          <h2 className="h2 mb-6 max-w-[520px]">
            Layanan Homecare Bidan di {city}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              "Pemeriksaan kehamilan di rumah",
              "Pendampingan persalinan",
              "Perawatan ibu nifas",
              "Perawatan bayi baru lahir",
            ].map((item) => (
              <div
                key={item}
                className="card-premium flex items-start gap-3"
              >
                <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[rgb(var(--color-primary))]" />
                <p className="body text-[rgb(var(--color-text))]">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-tight">
        <div className="container-main max-w-[720px] text-center">

          <h2 className="h2 mb-3">
            Butuh Bidan ke Rumah di {city}?
          </h2>

          <p className="caption mb-6">
            {ai.closing}
          </p>

          <Link href="/kontak" className="btn-primary">
            Hubungi Bidan Sekarang
          </Link>

        </div>
      </section>

      {/* ================= INTERNAL LINK ================= */}
      <section className="section-tight">
        <div className="container-main">

          <h3 className="h3 mb-4">
            Layanan Terkait
          </h3>

          <div className="flex flex-wrap gap-3">

            <Link href="/layanan/paket-hamil" className="btn-outline">
              Perawatan Ibu Hamil
            </Link>

            <Link href="/layanan/doula-persalinan" className="btn-outline">
              Doula Persalinan
            </Link>

            <Link href="/layanan/perawatan-nifas" className="btn-outline">
              Perawatan Nifas
            </Link>

            <Link href="/layanan/perawatan-bayi" className="btn-outline">
              Perawatan Bayi
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

/* ============================= */
/* STATIC GENERATION */
/* ============================= */

export async function generateStaticParams() {
  const services = [
    "bidan-ke-rumah",
    "perawatan-ibu-hamil",
    "perawatan-nifas",
    "perawatan-bayi",
  ];

  return services.flatMap((service) =>
    cities.map((city) => ({
      service,
      city: city.toLowerCase().replace(/\s+/g, "-"),
    }))
  );
}