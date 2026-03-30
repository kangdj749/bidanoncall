export default function Trust() {
  const trustPoints: string[] = [
    "Didampingi oleh tenaga berpengalaman dalam persalinan",
    "Pendekatan personal sesuai kondisi setiap ibu",
    "Komunikasi hangat & suportif sepanjang proses",
    "Fokus pada kenyamanan fisik & emosional ibu",
  ];

  return (
    <section className="section">
      <div className="container-main">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT - CONTENT */}
          <div>
            <h2 className="h2 mb-4">
              Pendampingan Profesional yang Membuat Ibu Lebih Tenang
            </h2>

            <p className="body text-[rgb(var(--color-muted))] mb-6">
              Bidan On Call menghadirkan layanan pendampingan persalinan dengan pendekatan
              yang hangat, personal, dan profesional.
              <br /><br />
              Kami memahami bahwa setiap ibu memiliki perjalanan yang berbeda,
              sehingga setiap pendampingan disesuaikan dengan kebutuhan fisik
              dan emosional ibu secara menyeluruh.
            </p>

            {/* TRUST LIST */}
            <div className="grid sm:grid-cols-2 gap-3">

              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="
                    card-premium
                    flex items-start gap-3
                    text-[13.5px]
                  "
                >
                  <div className="mt-[6px] h-2 w-2 rounded-full bg-[rgb(var(--color-primary))]" />

                  <p className="text-[rgb(var(--color-text))] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT - HIGHLIGHT CARD */}
          <div
            className="
              rounded-[var(--radius-lg)]
              border border-[rgb(var(--color-border))]
              bg-[rgb(var(--color-surface))]
              p-6 md:p-7
              shadow-[var(--shadow-soft)]
            "
          >
            <p className="body text-[rgb(var(--color-text))] mb-4">
              Lebih dari sekadar pendamping, kami hadir sebagai support system
              yang memastikan ibu tidak merasa sendirian dalam proses persalinan.
            </p>

            <p className="caption">
              Dukungan yang tepat dapat membantu ibu merasa lebih percaya diri,
              lebih tenang, dan lebih siap menghadapi setiap fase persalinan.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}