import type { MetadataRoute } from "next";
import { locales } from "../../content/church";
import { posts } from "../../content/posts";

// Confirmed 2026-09-14: the client connected ukrlancaster.church (the
// domain of the church's old WordPress site) to this Vercel project —
// www.ukrlancaster.church already serves this app. `robots.ts` reads
// this same value for its `sitemap` field.
export const SITE_URL = "https://www.ukrlancaster.church";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ministries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/calendar", priority: 0.7, changeFrequency: "weekly" },
  { path: "/give", priority: 0.6, changeFrequency: "monthly" },
  { path: "/visit", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of STATIC_ROUTES) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency,
        priority,
      });
    }
  }

  for (const post of posts) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}/news/${post.slug}`,
        lastModified: post.date,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
