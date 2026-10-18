// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rivheal.com";
  return [
    {
      url: `${base}/`,
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/request-demo`,
      lastModified: "2026-10-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: "2026-10-17",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
