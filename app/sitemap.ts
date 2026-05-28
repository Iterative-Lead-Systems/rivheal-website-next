import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rivheal.com";
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/request-demo", priority: 0.9, freq: "monthly" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
    { path: "/privacy", priority: 0.4, freq: "yearly" as const },
    { path: "/terms", priority: 0.4, freq: "yearly" as const },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
