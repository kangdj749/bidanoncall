export default function USP() {
  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="text-center max-w-[640px] mx-auto mb-10">

          <p className="caption uppercase tracking-[0.14em] text-[rgb(var(--color-primary))] mb-3">
            Keunggulan Layanan
          </p>

          <h2 className="h2 text-[rgb(var(--color-dark))] mb-3">
            Kenapa Ibu Lebih Nyaman dengan Bidan On Call?
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Layanan homecare kami dirancang untuk memberikan pengalaman persalinan 
            yang lebih tenang, aman, dan penuh pendampingan secara personal.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-[760px] mx-auto">

          {[
            "Bidan berpengalaman dalam pendampingan persalinan",
            "Pendekatan personal & fokus pada kenyamanan ibu",
            "Pendampingan emosional dan bukan hanya medis",
            "Membantu ibu lebih siap secara mental & fisik",
            "Fleksibel mengikuti kondisi dan kebutuhan persalinan",
            "Layanan homecare langsung ke rumah ibu",
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