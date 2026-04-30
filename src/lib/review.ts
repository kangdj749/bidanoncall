import type { TestimonialItem } from "@/types/review";

const SHEET_ID = process.env.GOOGLE_SHEET_ID_LP as string;
const TAB_NAME = "testimonial";

const URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;

/* ================= NORMALIZE ================= */
function normalize(row: Record<string, unknown>): TestimonialItem {
  return {
    type: String(row.type ?? "") as TestimonialItem["type"],
    name: String(row.name ?? "") || undefined,
    text: String(row.text ?? "") || undefined,
    video_url: String(row.video_url ?? "") || undefined,
    image_url: String(row.image_url ?? "") || undefined,
    rating: Number(row.rating ?? 5),
    status: String(row.status ?? "draft") as "draft" | "published",
  };
}

/* ================= GET ALL ================= */
export async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 300, tags: ["testimonial"] },
    });

    if (!res.ok) return [];

    // 🔥 FIX DI SINI
    
    const data: Record<string, unknown>[] = await res.json();

    if (!Array.isArray(data)) {
    console.error("Invalid OpenSheet response");
    return [];
    }

    if (!res.ok) {
    console.error("OpenSheet fetch failed:", res.status, URL);
    return [];
    }
    
    return data
      .map((row) => normalize(row))
      .filter((item: TestimonialItem) => item.status === "published");

  } catch (err) {
    console.error("getTestimonials error:", err);
    return [];
  }
}