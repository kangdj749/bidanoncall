"use client";

const painPoints: string[] = [
  "Stres dan kecemasan berlebih saat proses persalinan",
  "Kesulitan mengatur napas dan emosi ketika kontraksi",
  "Kurangnya rasa percaya diri menghadapi momen melahirkan",
  "Pengalaman persalinan yang terasa tegang dan tidak nyaman",
];

export default function Agitate() {
  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[620px] mx-auto text-center mb-10">

          <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-primary))] mb-3">
            Risiko Tanpa Pendampingan
          </p>

          <h2 className="h2 text-[rgb(var(--color-dark))] mb-3">
            Tanpa Pendamping yang Tepat, Persalinan Bisa Terasa Lebih Berat
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Kondisi emosional ibu sangat mempengaruhi kelancaran persalinan.
            Tanpa dukungan yang tepat, tekanan fisik dan mental bisa meningkat.
          </p>

        </div>

        {/* GRID — COMPACT CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px] mx-auto">

          {painPoints.map((item) => (
            <div
              key={item}
              className="
                group
                flex items-start gap-3
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-md)]
                px-4 py-4
                bg-[rgb(var(--color-surface))]
                transition-all duration-300
                hover:border-[rgb(var(--color-border-strong))]
                hover:shadow-[var(--shadow-soft)]
              "
            >

              {/* ICON DOT */}
              <div className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[rgb(var(--color-primary))] shrink-0" />

              {/* TEXT */}
              <p className="text-[13.5px] leading-[1.65] text-[rgb(var(--color-text))]">
                {item}
              </p>

            </div>
          ))}

        </div>

        {/* FOOTNOTE */}
        <p className="caption text-center mt-8 max-w-[620px] mx-auto">
          Dukungan yang tepat membantu ibu merasa lebih tenang, fokus, dan
          percaya diri selama proses persalinan.
        </p>

      </div>
    </section>
  );
}