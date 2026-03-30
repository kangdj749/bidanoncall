export default function AgitateSection() {
  const risks: string[] = [
    "Kesehatan ibu tidak terpantau dengan baik",
    "Perkembangan janin tidak optimal",
    "Kelelahan fisik dan stres berlebih",
    "Potensi komplikasi terlambat ditangani",
  ];

  return (
    <section className="section-tight bg-soft">
      <div className="container-main space-y-6">

        <h2 className="h2 text-[rgb(var(--color-dark))]">
          Risiko Bisa Terjadi Tanpa Disadari
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {risks.map((item) => (
            <div key={item} className="card-premium text-[12px]">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}