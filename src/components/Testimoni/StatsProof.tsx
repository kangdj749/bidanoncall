"use client";

const stats = [
  { label: "Ibu Dilayani", value: "500+" },
  { label: "Rating", value: "4.9/5" },
  { label: "Respon", value: "< 5 Menit" },
];

export default function StatsProof() {
  return (
    <section className="section-tight">
      <div className="container-main grid grid-cols-2 md:grid-cols-3 gap-4">

        {stats.map((item) => (
          <div key={item.label} className="card-premium text-center">
            <div className="h2 text-primary">{item.value}</div>
            <div className="caption">{item.label}</div>
          </div>
        ))}

      </div>
    </section>
  );
}