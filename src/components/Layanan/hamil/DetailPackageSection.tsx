export default function DetailPackageSection() {
  const items: string[] = [
    "Pemeriksaan rutin kehamilan",
    "Monitoring kesehatan ibu & janin",
    "Konsultasi langsung dengan bidan",
    "Edukasi pola hidup sehat",
    "Rekomendasi tindakan medis",
  ];

  return (
    <section className="section">
      <div className="container-main space-y-6">

        <h2 className="h2">Apa yang Anda Dapatkan</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item} className="card-premium text-[12px]">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}