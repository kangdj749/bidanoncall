"use client";

const videos = [
  "https://www.youtube.com/embed/XQ6ettCnr8Y",
  "https://www.youtube.com/embed/vNiZBALE00I",
];

export default function VideoTestimoni() {
  return (
    <section className="section">
      <div className="container-main space-y-6">

        <h2 className="h2 text-center">
          Cerita Nyata dari Ibu dan Proses Layanan
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {videos.map((src) => (
            <div
              key={src}
              className="rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--color-border))]"
            >
              <iframe
                src={src}
                className="h-full w-[420px] md:h-[460px]"
                allowFullScreen
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}