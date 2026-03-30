export default function TargetSection() {
  const targets: string[] = [
    "Ingin perawatan kehamilan nyaman di rumah",
    "Tidak ingin antre di klinik",
    "Butuh pendampingan personal",
    "Ingin memastikan janin sehat",
    "Memiliki aktivitas padat",
  ];

  return (
    <section className="section-tight bg-soft">
      <div className="container-main space-y-6">

        <h2 className="h2">Layanan Ini Cocok Untuk Anda Jika…</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {targets.map((item) => (
            <div key={item} className="card-premium text-[12px]">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}