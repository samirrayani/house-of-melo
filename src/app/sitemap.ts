import type { MetadataRoute } from "next";

const BASE_URL = "https://house-of-melo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/baltimore",
    "/the-rise",
    "/greatness",
    "/beyond",
    "/community",
    "/the-memoir",
    "/exhibition",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
