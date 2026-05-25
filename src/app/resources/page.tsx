import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Best CMA Exam Study Materials & Review Courses (2026)",
  description:
    "Recommended CMA exam prep resources: review courses, textbooks, and study guides from Gleim, Wiley, Becker, and Hock. Compare features, pricing, and pass rates.",
  alternates: { canonical: "/resources" },
};

const RESOURCES = [
  {
    name: "Gleim CMA Review",
    description:
      "Most comprehensive question bank with 3,000+ MCQs and essay practice. Adaptive learning technology identifies weak areas. Includes audio lectures and exam rehearsals.",
    features: [
      "3,000+ practice questions",
      "Adaptive learning technology",
      "Unlimited access until you pass",
      "Audio lectures included",
    ],
    price: "$1,299 (both parts)",
    url: "https://www.gleim.com/cma-review/",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Wiley CMAexcel",
    description:
      "Official IMA partner. Bite-sized lessons with video lectures from expert instructors. Includes virtual exam simulations and performance tracking dashboard.",
    features: [
      "Official IMA learning partner",
      "4,000+ practice questions",
      "Video lectures included",
      "Virtual exam simulations",
    ],
    price: "$1,350 (both parts)",
    url: "https://www.efficientlearning.com/cma/",
    badge: "IMA Partner",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    name: "Becker CMA Review",
    description:
      "Well-known brand in accounting exam prep. SkillMaster video lectures break down complex topics. Includes printed textbooks and final review materials.",
    features: [
      "SkillMaster video lectures",
      "Printed + digital textbooks",
      "Final review course included",
      "1-year access",
    ],
    price: "$1,499 (both parts)",
    url: "https://www.becker.com/cma-review/",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    name: "Hock International CMA",
    description:
      "Budget-friendly option with strong fundamentals. Textbook-focused approach with clear explanations. Good for self-disciplined studiers who prefer reading over video.",
    features: [
      "Most affordable option",
      "Comprehensive textbooks",
      "1,000+ practice questions",
      "Free trial available",
    ],
    price: "$699 (both parts)",
    url: "https://www.hockinternational.com/cma/",
    badge: "Best Value",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

const BOOKS = [
  {
    name: "Gleim CMA Review Books",
    description: "Detailed textbooks covering every CMA topic with practice questions at the end of each chapter.",
    url: "https://www.gleim.com/cma-review/books/",
  },
  {
    name: "Wiley CMAexcel Exam Review",
    description: "Official study guide aligned with IMA learning outcome statements. Updated annually.",
    url: "https://www.wiley.com/en-us/cmaexcel",
  },
  {
    name: "IMA Practice Questions",
    description: "Free sample questions directly from the IMA website. Great supplement to any review course.",
    url: "https://www.imanet.org/cma-certification/cma-exam/practice-questions",
  },
];

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best CMA Exam Review Courses",
    description: "Comparison of top CMA exam prep courses and study materials.",
    itemListElement: RESOURCES.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.name,
      url: r.url,
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link> &gt; Resources
      </div>

      <h1 className="text-3xl font-bold text-gray-900">
        Best CMA Exam Study Materials & Review Courses
      </h1>
      <p className="mt-3 text-gray-600">
        We reviewed the top CMA exam prep courses to help you choose the right
        one. All recommendations are based on content quality, pass rates, and
        value for money.
      </p>
      <p className="mt-2 text-xs text-gray-400">
        Disclosure: Some links below are affiliate links. We may earn a
        commission at no extra cost to you.
      </p>

      <AdSlot className="mt-8" slot="resources-top" />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        CMA Review Courses
      </h2>

      <div className="mt-6 space-y-6">
        {RESOURCES.map((r) => (
          <div
            key={r.name}
            className="rounded-lg border border-gray-200 p-6 transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {r.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${r.badgeColor}`}
                  >
                    {r.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{r.description}</p>
              </div>
              <div className="ml-6 shrink-0 text-right">
                <div className="text-lg font-bold text-gray-900">{r.price}</div>
              </div>
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {r.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <AdSlot className="mt-8" slot="resources-mid" />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Study Guides & Books
      </h2>

      <div className="mt-6 space-y-4">
        {BOOKS.map((b) => (
          <a
            key={b.name}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900">{b.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{b.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-blue-50 p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Free CMA Practice Questions
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Want to start practicing right now? We offer 1,200+ free CMA practice
          questions with detailed explanations covering all 12 exam topics.
        </p>
        <Link
          href="/cma"
          className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Start Practicing Free
        </Link>
      </div>

      <AdSlot className="mt-8" slot="resources-bottom" />
    </div>
  );
}
