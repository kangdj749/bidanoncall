// ------------------------------------------------------
// SOLUTION SECTION — Value Proposition (Enterprise SaaS)
// Bidan On Call Landing Page
// ------------------------------------------------------

type ServiceItem = {
  id: string;
  title: string;
};

const services: ServiceItem[] = [
  {
    id: "check",
    title: "Pemeriksaan kondisi ibu dan janin secara menyeluruh",
  },
  {
    id: "monitor",
    title: "Pemantauan perkembangan kehamilan secara berkala",
  },
  {
    id: "consult",
    title: "Konsultasi kesehatan personal langsung di rumah",
  },
  {
    id: "education",
    title: "Edukasi persiapan persalinan yang terarah",
  },
];

export default function SolutionSection() {
  return (
    <section
      className="section"
      aria-labelledby="solution-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="solution-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Solusi Praktis: Layanan Bidan Datang ke Rumah
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Nikmati layanan homecare bidan profesional yang membantu memastikan
            kesehatan ibu dan janin tetap terpantau dengan nyaman, aman, dan
            tanpa harus keluar rumah.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((item) => (
            <article
              key={item.id}
              className="
                card-premium
                flex items-start gap-3
                text-[rgb(var(--color-text))]
              "
            >
              {/* POSITIVE INDICATOR */}
              <div
                className="
                  mt-1
                  h-2.5 w-2.5 rounded-full
                  bg-[rgb(var(--color-primary-soft))]
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