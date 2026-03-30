"use client";

type ValueItem = {
  title: string;
  desc: string;
};

export default function AboutValues() {
  const values: ValueItem[] = [
    {
      title: "Profesional",
      desc: "Ditangani oleh tenaga bidan berpengalaman dengan standar medis yang jelas.",
    },
    {
      title: "Aman",
      desc: "Mengutamakan keselamatan ibu dan bayi dalam setiap tindakan perawatan.",
    },
    {
      title: "Nyaman",
      desc: "Pelayanan dilakukan di rumah untuk memberikan rasa tenang bagi keluarga.",
    },
    {
      title: "Responsif",
      desc: "Tim kami siap memberikan pelayanan dengan cepat dan tepat waktu.",
    },
    {
      title: "Empati",
      desc: "Kami memahami kebutuhan ibu dan keluarga dengan pendekatan yang humanis.",
    },
    {
      title: "Berkualitas",
      desc: "Memberikan layanan terbaik dengan standar perawatan yang terus ditingkatkan.",
    },
  ];

  return (
    <section id="nilai" className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-xl mb-12">

          <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
            Nilai Pelayanan
          </p>

          <h2 className="h2 text-[rgb(var(--color-dark))] mb-4">
            Komitmen Kami dalam{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Setiap Pelayanan
            </span>
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Kami mengedepankan pelayanan yang berfokus pada keamanan, kenyamanan,
            dan kualitas perawatan bagi ibu dan bayi, dengan pendekatan yang
            profesional dan penuh empati.
          </p>

        </div>

        {/* VALUES GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {values.map((item) => (
            <div
              key={item.title}
              className="card-premium group"
            >

              {/* ICON */}
              <div className="mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgb(var(--color-primary))]/10">
                  <svg
                    className="w-4 h-4 text-[rgb(var(--color-primary))]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </span>
              </div>

              {/* TITLE */}
              <h3 className="h3 text-[rgb(var(--color-dark))] mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="body text-[rgb(var(--color-muted))]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}