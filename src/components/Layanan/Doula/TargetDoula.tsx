export default function Target() {
  const items: string[] = [
    "Merasa cemas menghadapi persalinan pertama",
    "Ingin pendamping profesional selain keluarga",
    "Menginginkan proses persalinan yang lebih tenang",
    "Membutuhkan dukungan emosional yang intens",
    "Ingin lebih siap secara mental & fisik",
  ];

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="h2 mb-3">
            Layanan Ini Tepat Untuk Ibu yang Ingin Persalinan Lebih Tenang
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Pendampingan doula dari Bidan On Call dirancang untuk membantu ibu
            menghadapi proses persalinan dengan rasa aman, percaya diri, dan dukungan penuh.
          </p>
        </div>

        {/* GRID LIST */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">

          {items.map((item) => (
            <div
              key={item}
              className="
                card-premium
                flex items-start gap-3
                text-[13.5px]
                leading-relaxed
              "
            >
              {/* DOT INDICATOR */}
              <div className="mt-[6px] h-2 w-2 rounded-full bg-[rgb(var(--color-primary))]" />

              {/* TEXT */}
              <p className="text-[rgb(var(--color-text))]">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* FOOTNOTE */}
        <div className="max-w-2xl mx-auto text-center mt-10">
          <p className="caption">
            Layanan ini membantu ibu merasa lebih siap secara mental dan emosional
            dalam menghadapi proses persalinan di rumah maupun fasilitas kesehatan.
          </p>
        </div>

      </div>
    </section>
  );
}