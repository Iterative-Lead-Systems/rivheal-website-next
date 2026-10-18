// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/login", "/dashboard"], // add your private routes
    },
    sitemap: "https://rivheal.com/sitemap.xml",
  };
}
