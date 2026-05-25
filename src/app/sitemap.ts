import type { MetadataRoute } from "next";

const TOPICS = {
  "part-1": [
    "external-financial-reporting",
    "planning-budgeting-forecasting",
    "performance-management",
    "cost-management",
    "internal-controls",
    "technology-analytics",
  ],
  "part-2": [
    "financial-statement-analysis",
    "corporate-finance",
    "decision-analysis",
    "risk-management",
    "investment-decisions",
    "professional-ethics",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://certprep.study";

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/cma`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/cma/part-1`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/cma/part-2`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/cma/mock-exam`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/cma/mock-exam/part-1`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/cma/mock-exam/part-2`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/cma/saved-mistakes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];

  const topicPages: MetadataRoute.Sitemap = Object.entries(TOPICS).flatMap(
    ([partSlug, topics]) =>
      topics.flatMap((topicSlug) => [
        {
          url: `${siteUrl}/cma/${partSlug}/${topicSlug}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        },
        {
          url: `${siteUrl}/cma/${partSlug}/${topicSlug}/quiz`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        },
      ])
  );

  return [...staticPages, ...topicPages];
}
