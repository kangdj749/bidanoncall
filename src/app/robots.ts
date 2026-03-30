import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://bangun-in.com/sitemap.xml",
    host: "https://bangun-in.com",
  };
}