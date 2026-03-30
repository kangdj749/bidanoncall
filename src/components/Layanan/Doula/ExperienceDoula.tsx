export default function Experience() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="text-center max-w-[620px] mx-auto mb-10">

          <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-primary))] mb-3">
            Pengalaman Persalinan
          </p>

          <h2 className="h2 text-[rgb(var(--color-dark))] mb-3">
            Persalinan Lebih Tenang, Nyaman, dan Penuh Pendampingan
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Dengan layanan homecare bidan on call, ibu tidak hanya menjalani 
            proses persalinan, tetapi merasakan pengalaman yang lebih positif, 
            terarah, dan penuh dukungan profesional.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-[760px] mx-auto">

          {[
            "Lebih rileks menghadapi kontraksi",
            "Lebih percaya diri saat proses melahirkan",
            "Mengurangi rasa takut dan kecemasan",
            "Pengalaman persalinan lebih nyaman di rumah",
          ].map((item) => (
            <div
              key={item}
              className="
                card-premium
                flex items-start gap-3
                py-4 px-4
              "
            >

              {/* ICON */}
              <span
                className="
                  mt-[2px]
                  text-[rgb(var(--color-primary))]
                  text-[13px]
                "
              >
                ✓
              </span>

              {/* TEXT */}
              <p className="text-[13px] leading-[1.5] text-[rgb(var(--color-text))]">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}