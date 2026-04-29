import { getGalleries } from "../gallery";

export async function getGalleryService(layanan: string) {
  const data = await getGalleries();

  return data.find(
    (item) => item.layanan === layanan.toLowerCase()
  );
}