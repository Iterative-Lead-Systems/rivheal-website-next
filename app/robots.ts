import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/patients", "/appointments", "/dashboard"], // adjust to your app routes
    },
    sitemap: "https://rivheal.com/sitemap.xml",
  };
}
