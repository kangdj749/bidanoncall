import type { Gallery } from "@/types/gallery";

const SHEET_ID = process.env.GOOGLE_SHEET_ID_LP as string;
const TAB_NAME = "gallery";

const URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;

/* ===============================
   CONFIG (biar scalable)
================================ */
const MAX_IMAGES = 12;

const FALLBACK_IMAGES = [
  "https://res.cloudinary.com/demo/image/upload/sample.jpg", // ganti dengan default kamu
];

/* ===============================
   NORMALIZER
================================ */
function normalize(row: Record<string, unknown>): Gallery {
  const rawImages = String(row.images ?? "")
    .split("|")
    .map((i) => i.trim())
    .filter(Boolean);

  const images =
    rawImages.length > 0
      ? rawImages.slice(0, MAX_IMAGES) // ✅ LIMIT
      : FALLBACK_IMAGES; // ✅ FALLBACK

  return {
    layanan: String(row.layanan ?? "").toLowerCase(),
    images,
    label: String(row.label ?? ""),
  };
}

/* ===============================
   FETCH ALL
================================ */
export async function getGalleries(): Promise<Gallery[]> {
  try {
    const res = await fetch(URL, {
      next: {
        revalidate: 300,
        tags: ["gallery"],
      },
    });

    if (!res.ok) return [];

    const data = await res.json();

    return data.map((row: Record<string, unknown>) =>
      normalize(row)
    );
  } catch (err) {
    console.error("getGalleries error:", err);
    return [];
  }
}

/* ===============================
   GET BY LAYANAN
================================ */
export async function getGalleryByService(
  layanan: string
): Promise<Gallery | undefined> {
  const data = await getGalleries();

  return data.find(
    (item) => item.layanan === layanan.toLowerCase()
  );
}