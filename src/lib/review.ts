// lib/review.ts

export interface Review {
  name: string;
  text: string;
  rating: number;
  status: string;
}

/* =============================== */
/* CONFIG */
/* =============================== */

const SHEET_ID = process.env.GOOGLE_SHEET_ID_LP as string;
const TAB_NAME = "reviews";

const URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;

/* =============================== */
/* NORMALIZER */
/* =============================== */

function normalize(row: Record<string, unknown>): Review {
  return {
    name: String(row.name ?? "").trim(),
    text: String(row.text ?? "").trim(),
    rating: Number(row.rating ?? 5),
    status: String(row.status ?? "draft"),
  };
}

/* =============================== */
/* FETCH ALL */
/* =============================== */

export async function getGoogleReviews(): Promise<Review[]> {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 300, tags: ["reviews"] },
    });

    if (!res.ok) return [];

    const data: Record<string, unknown>[] = await res.json();

    return data
      .map((row) => normalize(row))
      .filter(
        (r) =>
          r.status === "published" &&
          r.name.length > 0 &&
          r.text.length > 10
      );

  } catch (err) {
    console.error("getGoogleReviews error:", err);
    return [];
  }
}

/* =============================== */
/* RATING SUMMARY (🔥 penting) */
/* =============================== */

export function getRatingSummary(reviews: Review[]) {
  const total = reviews.length;

  if (total === 0) {
    return {
      rating: 5,
      total: 0,
    };
  }

  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / total;

  return {
    rating: Number(avg.toFixed(1)),
    total,
  };
}