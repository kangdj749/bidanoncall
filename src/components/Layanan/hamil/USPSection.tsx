export default function USPSection() {
  const points: string[] = [
    "Bidan profesional dan berpengalaman",
    "Pelayanan langsung ke rumah",
    "Peralatan medis steril",
    "Pendampingan personal",
    "Respon cepat & fleksibel",
  ];

  return (
    <section className="section-tight bg-soft">
      <div className="container-main space-y-6">

        <h2 className="h2">Kenapa Memilih Bidan On Call</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {points.map((item) => (
            <div key={item} className="card-premium text-[12px]">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}