// ------------------------------------------------------
// USP SECTION — Trust & Differentiation
// Bidan On Call Landing Page
// ------------------------------------------------------

type USPItem = {
  id: string;
  title: string;
};

const points: USPItem[] = [
  {
    id: "professional",
    title: "Bidan profesional dan berpengalaman",
  },
  {
    id: "homecare",
    title: "Pelayanan langsung ke rumah",
  },
  {
    id: "sterile",
    title: "Peralatan medis steril dan aman",
  },
  {
    id: "personal",
    title: "Pendampingan personal selama kehamilan",
  },
  {
    id: "fast",
    title: "Respon cepat dan jadwal fleksibel",
  },
];

export default function USPSection() {
  return (
    <section
      className="section-tight bg-[rgb(var(--color-soft))]"
      aria-labelledby="usp-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="usp-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Kenapa Memilih Layanan Bidan On Call
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Kami menghadirkan layanan homecare bidan yang profesional, responsif,
            dan berfokus pada kenyamanan serta keamanan ibu dan janin.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {points.map((item) => (
            <article
              key={item.id}
              className="
                card-premium
                flex items-start gap-3
                text-[rgb(var(--color-text))]
              "
            >
              {/* CHECK INDICATOR */}
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