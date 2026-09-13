import type { MetadataRoute } from "next";

// No sitemap URL here yet — the production domain isn't decided
// (see OPEN-QUESTIONS.md). Add `sitemap: "https://<domain>/sitemap.xml"`
// once it is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
