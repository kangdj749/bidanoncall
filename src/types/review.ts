export type TestimonialType = "video" | "review" | "image";

export interface TestimonialItem {
  type: TestimonialType;

  name?: string;
  text?: string;

  video_url?: string;
  image_url?: string;

  rating?: number;

  status: "draft" | "published";
}