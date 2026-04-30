// components/TestimonialSection.tsx

import { getTestimonials } from "@/lib/review";
import RatingSummary from "./RatingSummary";
import VideoSlider from "./VideoSlider";
import ReviewSlider from "./ReviewSlider";
import ProofGallery from "./ProofGallery";

export default async function TestimonialSection() {
  const data = await getTestimonials();

  /* ================= FILTER DATA ================= */

  const videos: string[] = data
  .filter((i) => i.type === "video" && i.video_url)
  .map((i) => (i.video_url as string).trim())
  .filter((url) => url !== "" && url !== "-");

  const reviews = data
    .filter((i) => i.type === "review" && i.text)
    .map((i) => ({
      name: i.name || "Pasien",
      text: i.text as string,
      rating: i.rating ?? 5,
    }));

  const images: string[] = data
    .filter((i) => i.type === "image" && i.image_url)
    .map((i) => i.image_url as string);

  /* ================= RATING CALC ================= */

  const total = reviews.length;

  const rating =
    total > 0
      ? Number(
          (
            reviews.reduce((acc, cur) => acc + (cur.rating || 5), 0) / total
          ).toFixed(1)
        )
      : 5;

  /* ================= RENDER ================= */

  return (
    <section className="section bg-[rgb(var(--color-bg))]">
      <div className="container-main space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="h2">
            Dipercaya Banyak Ibu di Indonesia
          </h2>

          <p className="caption max-w-[520px] mx-auto">
            Ribuan pengalaman nyata dari ibu yang telah menggunakan layanan
            Bidan On Call. Aman, profesional, dan penuh perhatian.
          </p>

          <RatingSummary rating={rating} total={total} />
        </div>

        {/* VIDEO TESTIMONI */}
        {videos.length > 0 && (
          <VideoSlider videos={videos} />
        )}

        {/* REVIEW TEXT */}
        {reviews.length > 0 && (
          <ReviewSlider reviews={reviews} />
        )}

        {/* PROOF IMAGE (WA / GOOGLE) */}
        {images.length > 0 && (
          <ProofGallery images={images} />
        )}

      </div>
    </section>
  );
}