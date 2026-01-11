import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://prabakarandev.in";

  // Define all pages with their properties
  const pages: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    // Add new pages here as your site grows:
    // { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    // { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
