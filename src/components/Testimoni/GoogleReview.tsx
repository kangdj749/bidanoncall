"use client";

const reviews = [
  {
    name: "Siti Kamilaini Harjana",
    text: "Pertama kali punya baby, mau cari tempat cukur dan tindik bayi yg bisa ke rmh dan harga terjangkau.Searching di ig, ketemu sama bidanoncall, baik dan ramah juga, seneng deh sampe akhirnya manggil lg untuk massage baby. Alhamdulillah anakku sehat lg setelah di massage bu bidan baik hati. Aku mau rekomendasiin ini ke temen. Jazakillah bu bidan. Nanti kalo punya baby lg pasti panggil lg.",

  },
  {
    name: "Mansyur Saldi",
    text: "Maa syaa Allah, kayak nya bintang 5 kurang deh untuk gambarin rasa syukur dan terima kasih saya atas pendampingan Bu bidan yang luar biasa untuk saya dari mulai pra lahir, proses lahiran dan pasca lahiran. Jangan ragu untuk bunda-bunda yang mau lahiran dengan pendampingan beliau. Best pokok nya",
  },
];

export default function GoogleReview() {
  return (
    <section className="section">
      <div className="container-main space-y-6">

        <h2 className="h2 text-center">
          Review dari Google
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">

          {reviews.map((item) => (
            <div key={item.name} className="card-premium">
              <div className="h3">{item.name}</div>
              <p className="caption mt-1">{item.text}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}