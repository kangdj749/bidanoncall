export default function ProblemSection() {
  const problems: string[] = [
    "Sulit meluangkan waktu ke fasilitas kesehatan",
    "Antrean panjang dan lingkungan kurang nyaman",
    "Minimnya pendampingan personal",
    "Kekhawatiran terhadap kondisi janin",
  ];

  return (
    <section className="section-tight">
      <div className="container-main space-y-6">

        <h2 className="h2 text-[rgb(var(--color-dark))]">
          Tidak Semua Ibu Hamil Mendapat Pendampingan yang Optimal
        </h2>

        <p className="body text-[rgb(var(--color-muted))] max-w-[640px]">
          Banyak ibu hamil menghadapi berbagai tantangan selama masa kehamilan.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((item) => (
            <div key={item} className="card-premium text-[12px]">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}