// ------------------------------------------------------
// TARGET SECTION — Audience Qualification
// Bidan On Call Landing Page
// ------------------------------------------------------

type TargetItem = {
  id: string;
  title: string;
};

const targets: TargetItem[] = [
  {
    id: "comfort",
    title: "Ingin mendapatkan perawatan kehamilan yang nyaman di rumah",
  },
  {
    id: "no-queue",
    title: "Tidak ingin menghabiskan waktu antre di klinik atau rumah sakit",
  },
  {
    id: "personal",
    title: "Membutuhkan pendampingan personal selama masa kehamilan",
  },
  {
    id: "healthy",
    title: "Ingin memastikan kondisi ibu dan janin tetap sehat",
  },
  {
    id: "busy",
    title: "Memiliki aktivitas padat dan keterbatasan waktu",
  },
];

export default function TargetSection() {
  return (
    <section
      className="section-tight bg-[rgb(var(--color-soft))]"
      aria-labelledby="target-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="target-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Layanan Ini Cocok untuk Anda Jika…
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Layanan bidan homecare ini dirancang khusus untuk ibu hamil yang
            membutuhkan kenyamanan, fleksibilitas, dan pendampingan profesional
            tanpa harus keluar rumah.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {targets.map((item) => (
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