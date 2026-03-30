export default function Solution() {
  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-[520px]">

          <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-primary))] mb-3">
            Solusi Pendampingan Persalinan
          </p>

          <h2 className="h2 mb-4 text-[rgb(var(--color-dark))]">
            Pendampingan Bidan Profesional, Langsung di Rumah Anda
          </h2>

          <p className="body text-[rgb(var(--color-muted))] mb-7">
            Layanan homecare Bidan On Call membantu ibu menjalani proses persalinan 
            dengan lebih tenang, aman, dan penuh pendampingan. 
            Kami hadir bukan hanya secara medis, tetapi juga secara emosional.
          </p>

          {/* BENEFIT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {[
              "Pendampingan emosional selama persalinan",
              "Bimbingan teknik napas & relaksasi",
              "Dukungan saat kontraksi berlangsung",
              "Koordinasi dengan tenaga medis",
            ].map((item) => (
              <div
                key={item}
                className="
                  card-premium
                  flex items-start gap-3
                  py-4 px-4
                "
              >
                <span
                  className="
                    mt-[2px]
                    text-[rgb(var(--color-primary))]
                    text-[13px]
                  "
                >
                  ✓
                </span>

                <p className="text-[13px] leading-[1.5] text-[rgb(var(--color-text))]">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            relative
            border border-[rgb(var(--color-border))]
            rounded-[var(--radius-lg)]
            bg-[rgb(var(--color-surface))]
            p-6 md:p-8
            shadow-[var(--shadow-soft)]
            overflow-hidden
          "
        >

          {/* subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary)/0.05)] to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-4">

            <h3 className="h3 text-[rgb(var(--color-dark))]">
              Ibu Tidak Sendirian
            </h3>

            <p className="body text-[rgb(var(--color-muted))]">
              Kami memastikan setiap ibu mendapatkan pendampingan penuh selama proses 
              persalinan di rumah — lebih nyaman, lebih tenang, dan tetap sesuai standar medis.
            </p>

            <div className="pt-2">
              <span
                className="
                  inline-block
                  text-[11.5px]
                  text-[rgb(var(--color-primary))]
                  font-medium
                  tracking-[0.2px]
                "
              >
                ✔ Homecare • ✔ Respons Cepat • ✔ Bidan Berpengalaman
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}