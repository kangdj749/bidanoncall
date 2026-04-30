import type { TestimonialItem } from "@/types/review";

const SHEET_ID = process.env.GOOGLE_SHEET_ID_LP as string;
const TAB_NAME = "testimonial";

const URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;

export type TestimonialItem = {
  type: "video" | "review" | "image";
  name?: string;
  text?: string;
  video_url?: string;
  image_url?: string;
  rating?: number;
  status: string;
};

/* ================= NORMALIZE ================= */
function normalize(row: Record<string, unknown>): TestimonialItem {
  return {
    type: String(row.type ?? "") as TestimonialItem["type"],
    name: String(row.name ?? ""),
    text: String(row.text ?? ""),
    video_url: String(row.video_url ?? ""),
    image_url: String(row.image_url ?? ""),
    rating: Number(row.rating ?? 5),
    status: String(row.status ?? "draft") as "draft" | "published",
  };
}

/* ================= GET ALL ================= */
export async function getTestimonials() {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 300, tags: ["testimonial"] },
    });

    if (!res.ok) return [];

    const data = await res.json();

    return data
      .map((row: Record<string, unknown>) => normalize(row))
      .filter((item: TestimonialItem) => item.status === "published");
  } catch (err) {
    console.error("getTestimonials error:", err);
    return [];
  }
}