"use client";

export default function TrustInfus() {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main max-w-3xl mx-auto text-center">

        <h2 className="h2 mb-4">
          Aman, Nyaman, dan Terpercaya
        </h2>

        <p className="body text-[rgb(var(--color-muted))]">
          Ditangani tenaga medis profesional dengan prosedur yang aman dan standar kesehatan yang terjaga.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">

          {[
            "Tenaga Medis Profesional",
            "Prosedur Steril",
            "Datang ke Rumah",
          ].map((text) => (
            <div key={text} className="card-premium text-sm text-center">
              {text}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}