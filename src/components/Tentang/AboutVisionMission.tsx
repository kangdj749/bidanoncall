"use client";

export default function AboutVisionMission() {
  const missions: string[] = [
    "Memberikan pelayanan kesehatan ibu dan bayi yang profesional",
    "Menyediakan edukasi kesehatan untuk keluarga",
    "Meningkatkan kualitas perawatan ibu dan bayi",
  ];

  return (
    <section id="visi-misi" className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* VISI */}
          <div className="card-premium bg-[rgb(var(--color-soft))]">

            {/* LABEL */}
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Visi
            </p>

            {/* TITLE */}
            <h3 className="h3 text-[rgb(var(--color-dark))] leading-relaxed">
              Menjadi layanan homecare kebidanan terpercaya bagi keluarga.
            </h3>

          </div>

          {/* MISI */}
          <div className="card-premium">

            {/* LABEL */}
            <p className="caption-label text-[rgb(var(--color-primary))] mb-3">
              Misi
            </p>

            {/* LIST */}
            <div className="space-y-4">

              {missions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  {/* ICON */}
                  <span className="mt-[3px] flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[rgb(var(--color-primary))]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </span>

                  {/* TEXT */}
                  <p className="body text-[rgb(var(--color-text))] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}