// ------------------------------------------------------
// TESTIMONIAL SECTION — Social Proof
// Bidan On Call Landing Page
// ------------------------------------------------------

type TestimonialItem = {
  id: string;
  name: string;
  note: string;
};

const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    name: "Ibu Rina",
    note: "Pelayanannya sangat membantu, saya tidak perlu keluar rumah dan tetap bisa memantau kondisi kehamilan dengan nyaman.",
  },
  {
    id: "t2",
    name: "Ibu Sari",
    note: "Bidan sangat ramah dan profesional, saya jadi lebih tenang selama masa kehamilan.",
  },
  {
    id: "t3",
    name: "Ibu Dewi",
    note: "Sangat praktis untuk saya yang sibuk, responnya cepat dan pelayanannya memuaskan.",
  },
  {
    id: "t4",
    name: "Ibu Lina",
    note: "Pelayanan homecare ini membuat saya merasa lebih aman karena kondisi janin selalu terpantau.",
  },
];

export default function TestimoniSection() {
  return (
    <section
      className="section"
      aria-labelledby="testimonial-heading"
    >
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-[720px] space-y-3">
          <h2
            id="testimonial-heading"
            className="h2 text-[rgb(var(--color-dark))]"
          >
            Dipercaya Banyak Ibu Hamil
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Banyak ibu hamil telah merasakan manfaat layanan bidan homecare
            dengan pengalaman yang lebih nyaman, aman, dan penuh ketenangan
            selama masa kehamilan.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="
                card-premium
                flex flex-col gap-3
                text-[rgb(var(--color-text))]
              "
            >
              {/* QUOTE */}
              <p className="body leading-relaxed">
                “{item.note}”
              </p>

              {/* AUTHOR */}
              <div className="caption text-[rgb(var(--color-muted))]">
                — {item.name}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}