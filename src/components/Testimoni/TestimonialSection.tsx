import { getTestimonials } from "@/lib/review";
import type { TestimonialItem } from "@/types/review";

import RatingSummary from "./RatingSummary";
import VideoSlider from "./VideoSlider";
import ReviewSlider from "./ReviewSlider";
import ProofGallery from "./ProofGallery";

export default async function TestimonialSection() {
  const data: TestimonialItem[] = await getTestimonials(); // ✅ kasih type jelas

  /* ================= VIDEO ================= */
  const videos: string[] = data
    .filter((i: TestimonialItem) => i.type === "video" && i.video_url)
    .map((i: TestimonialItem) => (i.video_url as string).trim())
    .filter((url: string) => url !== "" && url !== "-");

  /* ================= REVIEW ================= */
  const reviews = data
    .filter((i: TestimonialItem) => i.type === "review" && i.text)
    .map((i: TestimonialItem) => ({
      name: i.name || "Pasien",
      text: i.text as string,
      rating: i.rating ?? 5,
    }));

  /* ================= IMAGE ================= */
  const images: string[] = data
    .filter((i: TestimonialItem) => i.type === "image" && i.image_url)
    .map((i: TestimonialItem) => (i.image_url as string).trim());

  const total = reviews.length;
  const rating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + (r.rating ?? 5), 0) / reviews.length
      : 5;

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="h2">
            Dipercaya Banyak Ibu di Indonesia
          </h2>

          <p className="caption max-w-[520px] mx-auto">
            Layanan bidan profesional dengan pengalaman nyata dari pasien.
          </p>

          <RatingSummary rating={rating} total={total} />
        </div>

        {/* VIDEO */}
        {videos.length > 0 && (
          <VideoSlider videos={videos} />
        )}

        {/* REVIEW */}
        {reviews.length > 0 && (
          <ReviewSlider reviews={reviews} />
        )}

        {/* PROOF */}
        {images.length > 0 && (
          <ProofGallery images={images} />
        )}

      </div>
    </section>
  );
}