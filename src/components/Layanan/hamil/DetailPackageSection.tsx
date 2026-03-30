// ------------------------------------------------------
// DETAIL PACKAGE SECTION — Service Breakdown
// Bidan On Call Landing Page
// ------------------------------------------------------

type PackageItem = {
  id: string;
  title: string;
};

const items: PackageItem[] = [
  {
    id: "checkup",
    title: "Pemeriksaan rutin kondisi kehamilan",
  },
  {
    id: "monitoring",
    title: "Monitoring kesehatan ibu dan janin",
  },
  {
    id: "consultation",
    title: "Konsultasi langsung dengan bidan profesional",
  },
  {
    id: "education",
    title: "Edukasi pola hidup sehat selama kehamilan",
  },
  {
    id: "recommendation",
    title: "Rekomendasi tindakan medis yang tepat",
  },
];

export default function DetailPackageSection() {
  return (
    <section
      className="section"
      aria-labelledby="package-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="package-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Apa yang Anda Dapatkan dari Layanan Bidan Homecare
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Setiap layanan dirancang untuk memastikan kesehatan ibu dan janin
            tetap terpantau secara optimal dengan pendampingan yang aman dan
            profesional langsung di rumah.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="
                card-premium
                flex items-start gap-3
                text-[rgb(var(--color-text))]
              "
            >
              {/* INDICATOR */}
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