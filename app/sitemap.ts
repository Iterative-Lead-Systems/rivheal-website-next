import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rivheal.com";
  const routes = [
    {
      path: "/",
      priority: 1.0,
      freq: "weekly" as const,
      lastModified: "2026-10-12",
    },
    {
      path: "/emr",
      priority: 0.9,
      freq: "monthly" as const,
      lastModified: "2026-10-12",
    },
    {
      path: "/patient-portal",
      priority: 0.9,
      freq: "monthly" as const,
      lastModified: "2026-10-12",
    },
    {
      path: "/request-demo",
      priority: 0.9,
      freq: "monthly" as const,
      lastModified: "2026-10-12",
    },
    {
      path: "/contact",
      priority: 0.8,
      freq: "monthly" as const,
      lastModified: "2026-10-12",
    },
    {
      path: "/privacy",
      priority: 0.4,
      freq: "yearly" as const,
      lastModified: "2026-10-12",
    },
    {
      path: "/terms",
      priority: 0.4,
      freq: "yearly" as const,
      lastModified: "2026-10-12",
    },
  ];

  return routes.map(({ path, priority, freq, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}
