export default function SolutionSection() {
  const services: string[] = [
    "Pemeriksaan kondisi ibu dan janin",
    "Pemantauan perkembangan kehamilan",
    "Konsultasi kesehatan personal",
    "Edukasi persiapan persalinan",
  ];

  return (
    <section className="section">
      <div className="container-main space-y-6">

        <h2 className="h2 text-[rgb(var(--color-dark))]">
          Solusi Praktis: Bidan Datang ke Rumah Anda
        </h2>

        <p className="body text-[rgb(var(--color-muted))] max-w-[640px]">
          Anda bisa mendapatkan perawatan langsung di rumah dengan nyaman dan aman.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((item) => (
            <div key={item} className="card-premium text-[12px]">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}