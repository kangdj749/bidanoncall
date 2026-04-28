"use client";

export default function TrustBayi() {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main max-w-3xl mx-auto text-center">

        <h2 className="h2 mb-4">
          Dipercaya Banyak Orang Tua
        </h2>

        <p className="body text-[rgb(var(--color-muted))]">
          Ribuan ibu telah mempercayakan perawatan bayi mereka kepada tim bidan kami yang profesional, ramah, dan berpengalaman.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">

          {[
            "Respon Cepat",
            "Bidan Berpengalaman",
            "Datang ke Rumah",
          ].map((text) => (
            <div
              key={text}
              className="card-premium text-center text-sm"
            >
              {text}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}