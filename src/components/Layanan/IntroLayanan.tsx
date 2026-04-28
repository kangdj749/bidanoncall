"use client";

export default function IntroLayanan() {
  return (
    <section className="section-tight bg-[rgb(var(--color-soft))]">
      <div className="container-main max-w-2xl mx-auto text-center space-y-4">

        {/* TITLE */}
        <h2 className="h2">
          Perawatan Ibu & Bayi yang Lebih{" "}
          <span className="text-[rgb(var(--color-primary))]">
            Praktis & Personal
          </span>
        </h2>

        {/* SHORT DESC */}
        <p className="body text-[rgb(var(--color-muted))]">
          Layanan homecare profesional langsung ke rumah, tanpa antre dan lebih nyaman.
        </p>

        {/* MICRO TRUST */}
        <div className="flex justify-center gap-4 pt-2 text-[12px] text-[rgb(var(--color-muted))] flex-wrap">
          <span>✓ Tanpa antre</span>
          <span>✓ Datang ke rumah</span>
          <span>✓ Bidan berpengalaman</span>
        </div>

      </div>
    </section>
  );
}