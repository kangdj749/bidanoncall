// ------------------------------------------------------
// AGITATE SECTION — Risk Awareness (Enterprise SaaS)
// Bidan On Call Landing Page
// ------------------------------------------------------

type RiskItem = {
  id: string;
  title: string;
};

const risks: RiskItem[] = [
  {
    id: "monitoring",
    title: "Kesehatan ibu tidak terpantau secara optimal",
  },
  {
    id: "fetal",
    title: "Perkembangan janin berisiko tidak terdeteksi dini",
  },
  {
    id: "fatigue",
    title: "Kelelahan fisik dan stres yang tidak tertangani",
  },
  {
    id: "complication",
    title: "Potensi komplikasi terlambat mendapatkan penanganan",
  },
];

export default function AgitateSection() {
  return (
    <section
      className="section-tight bg-[rgb(var(--color-soft))]"
      aria-labelledby="agitate-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="agitate-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Risiko Kehamilan Bisa Terjadi Tanpa Disadari
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Tanpa pendampingan yang tepat, berbagai risiko selama masa kehamilan
            dapat berkembang secara perlahan dan tidak terdeteksi sejak dini.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {risks.map((item) => (
            <article
              key={item.id}
              className="
                card-premium
                flex items-start gap-3
                text-[rgb(var(--color-text))]
              "
            >
              {/* INDICATOR (Warning Style) */}
              <div
                className="
                  mt-1
                  h-2.5 w-2.5 rounded-full
                  bg-[rgb(var(--color-primary))]
                  shrink-0
                "
              />

              {/* TEXT */}
              <p className="body leading-relaxed">
                {item.title}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}