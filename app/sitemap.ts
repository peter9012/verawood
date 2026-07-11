import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes: Array<{ path: string; priority: number }> = [
    { path: "",              priority: 1.0 },
    { path: "/collections",  priority: 0.9 },
    { path: "/products",     priority: 0.9 },
    { path: "/samples",      priority: 0.8 },
    { path: "/gallery",      priority: 0.7 },
    { path: "/craftsmanship",priority: 0.7 },
    { path: "/about",        priority: 0.6 },
    { path: "/sustainability",priority: 0.6 },
    { path: "/contact",      priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
