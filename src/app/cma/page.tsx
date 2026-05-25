import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { getExamBySlug } from "@/lib/questions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CMA Exam Practice Questions — Part 1 & Part 2 (Free)",
  description:
    "Free CMA exam practice questions for Part 1 (Financial Planning, Performance & Analytics) and Part 2 (Strategic Financial Management). 1,200+ questions with explanations.",
  alternates: { canonical: "/cma" },
};

export default async function CMAPage() {
  const exam = await getExamBySlug("cma");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://certprep.study";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CMA Exam Practice Questions",
    description: "1,200+ free practice questions for the Certified Management Accountant exam covering all 12 topics.",
    provider: {
      "@type": "Organization",
      name: "CertPrep",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: exam?.parts.map((part) => ({
      "@type": "CourseInstance",
      name: part.name,
      courseMode: "Online",
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "CMA Exam", item: `${siteUrl}/cma` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <h1 className="text-3xl font-bold text-gray-900">
        CMA Exam Practice Questions
      </h1>
      <p className="mt-3 text-gray-600">
        The Certified Management Accountant (CMA) exam has two parts. Select a
        part below to begin practicing.
      </p>

      <AdSlot className="mt-8" slot="cma-top" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {exam?.parts.map((part) => {
          const totalQuestions = part.topics.reduce(
            (sum, t) => sum + t._count.questions,
            0
          );
          return (
            <Link
              key={part.id}
              href={`/cma/${part.slug}`}
              className="rounded-lg border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {part.name}
              </h2>
              <div className="mt-3 text-sm text-gray-500">
                <p>{part.topics.length} topics</p>
                <p>{totalQuestions} practice questions</p>
              </div>
            </Link>
          );
        })}
      </div>

      {!exam && (
        <p className="mt-8 text-gray-500">
          No exam data found. Run the seed script to populate questions.
        </p>
      )}
    </div>
  );
}
