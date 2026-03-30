// ------------------------------------------------------
// PROBLEM SECTION — Enterprise SaaS Style
// Bidan On Call Landing Page
// ------------------------------------------------------

type ProblemItem = {
  id: string;
  title: string;
};

const problems: ProblemItem[] = [
  {
    id: "time",
    title: "Sulit meluangkan waktu ke fasilitas kesehatan",
  },
  {
    id: "queue",
    title: "Antrean panjang dan lingkungan kurang nyaman",
  },
  {
    id: "support",
    title: "Minimnya pendampingan personal",
  },
  {
    id: "worry",
    title: "Kekhawatiran terhadap kondisi janin",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="section-tight"
      aria-labelledby="problem-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="problem-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Tidak Semua Ibu Hamil Mendapat Pendampingan yang Optimal
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Banyak ibu hamil menghadapi tantangan dalam mendapatkan layanan yang
            nyaman, cepat, dan personal selama masa kehamilan.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((item) => (
            <article
              key={item.id}
              className="
                card-premium
                flex items-start gap-3
                text-[rgb(var(--color-text))]
              "
            >
              {/* DOT / ICON */}
              <div
                className="
                  mt-1
                  h-2 w-2 rounded-full
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