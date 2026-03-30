export default function Testimonial() {
  const testimonials: {
    quote: string;
    name: string;
    context: string;
  }[] = [
    {
      quote:
        "Saya merasa jauh lebih tenang saat persalinan karena ada yang mendampingi dan membimbing setiap prosesnya.",
      name: "Ibu Rina",
      context: "Persalinan pertama",
    },
    {
      quote:
        "Awalnya sangat cemas, tapi dengan pendampingan doula saya jadi lebih percaya diri dan tidak panik.",
      name: "Ibu Sari",
      context: "Ibu hamil trimester akhir",
    },
    {
      quote:
        "Pendampingannya hangat dan profesional. Saya merasa tidak sendirian menghadapi proses melahirkan.",
      name: "Ibu Dewi",
      context: "Persalinan normal",
    },
    {
      quote:
        "Teknik napas dan dukungan emosionalnya sangat membantu saya melewati kontraksi dengan lebih rileks.",
      name: "Ibu Lina",
      context: "Persalinan kedua",
    },
  ];

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="h2 mb-3">
            Pengalaman Ibu yang Lebih Tenang & Percaya Diri
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Pendampingan doula dari Bidan On Call membantu banyak ibu
            melewati proses persalinan dengan lebih nyaman, terarah,
            dan penuh dukungan emosional.
          </p>
        </div>

        {/* GRID TESTIMONIAL */}
        <div className="grid sm:grid-cols-2 gap-5">

          {testimonials.map((item) => (
            <div
              key={item.quote}
              className="
                card-premium
                flex flex-col justify-between
                gap-4
              "
            >
              {/* QUOTE */}
              <p className="text-[14px] leading-relaxed text-[rgb(var(--color-text))]">
                “{item.quote}”
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between pt-2 border-t border-[rgb(var(--color-border))]">
                <div>
                  <p className="text-[13px] font-medium text-[rgb(var(--color-text))]">
                    {item.name}
                  </p>
                  <p className="caption">
                    {item.context}
                  </p>
                </div>

                {/* SMALL ACCENT */}
                <div className="h-2 w-2 rounded-full bg-[rgb(var(--color-primary))]" />
              </div>
            </div>
          ))}

        </div>

        {/* FOOTNOTE TRUST */}
        <div className="max-w-2xl mx-auto text-center mt-10">
          <p className="caption">
            Setiap pengalaman persalinan adalah unik. Kami hadir untuk memastikan
            ibu mendapatkan dukungan terbaik sesuai kebutuhan.
          </p>
        </div>

      </div>
    </section>
  );
}