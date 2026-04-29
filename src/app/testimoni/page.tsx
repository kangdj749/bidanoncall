import GoogleReviewPremium from "@/components/Testimoni/GoogleReviewPremium";
import RatingSummary from "@/components/Testimoni/RatingSummary";

import { getGoogleReviews, getRatingSummary } from "@/lib/review";
import { getGalleryByService } from "@/lib/gallery";
import VideoTestimoni from "@/components/Testimoni/VideoTestimoni";

export default async function Page() {
  const reviews = await getGoogleReviews();
  const { rating, total } = getRatingSummary(reviews);
  const gallery = await getGalleryByService("review");

  return (
    <main>

      {/* ⭐ AUTO RATING */}
      <RatingSummary rating={rating} total={total} />

      {/* 💬 REVIEW + GALERI */}
      <GoogleReviewPremium
        reviews={reviews}
        images={gallery?.images || []}
      />
      {/* 💬 VIDEO PROSES LAYANAN */}
      <VideoTestimoni /> 
    </main>
  );
}