import type { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://certprep.study";

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/cma`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/cma/part-1`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/cma/part-2`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/cma/saved-mistakes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];

  const topics = await prisma.topic.findMany({
    include: { part: true },
  });

  const topicPages: MetadataRoute.Sitemap = topics.flatMap((topic) => {
    const partSlug = topic.part.slug;
    return [
      {
        url: `${siteUrl}/cma/${partSlug}/${topic.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${siteUrl}/cma/${partSlug}/${topic.slug}/quiz`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      },
    ];
  });

  return [...staticPages, ...topicPages];
}
