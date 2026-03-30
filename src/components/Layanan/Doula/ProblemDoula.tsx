export default function Problem() {
  const problems: string[] = [
    "Takut menghadapi rasa sakit saat melahirkan",
    "Kurang memahami proses persalinan",
    "Tidak ada pendamping yang fokus mendukung ibu",
    "Bingung saat harus mengambil keputusan penting",
  ];

  return (
    <section className="section">
      <div className="container-main">
        
        {/* HEADER */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="h2 mb-4">
            Persalinan Sering Kali Menjadi Momen yang Menegangkan
          </h2>

          <p className="text-muted">
            Banyak ibu merasa cemas dan tidak siap menghadapi proses persalinan,
            terutama tanpa pendampingan yang tepat.
          </p>
        </div>

        {/* GRID LIST */}
        <ul className="grid gap-4 md:grid-cols-2 text-sm">
          {problems.map((item) => (
            <li
              key={item}
              className="card-premium flex items-start gap-3"
            >
              {/* ICON DOT */}
              <span className="mt-[6px] h-2 w-2 rounded-full bg-primary flex-shrink-0" />

              {/* TEXT */}
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* FOOTNOTE */}
        <p className="text-muted text-center mt-10 max-w-xl mx-auto">
          Situasi ini membuat proses persalinan terasa lebih berat, baik secara
          fisik maupun emosional.
        </p>
      </div>
    </section>
  );
}