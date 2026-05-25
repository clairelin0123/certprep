import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "CertPrep — Free CMA Exam Practice Questions (2026)",
  description:
    "1,200+ free CMA exam practice questions with detailed explanations. Timed quiz mode, saved mistakes review, and coverage of all 12 CMA topics. Start practicing now.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CertPrep",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://certprep.study",
    description: "Free CMA exam practice questions with detailed explanations.",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Free CMA Exam Prep
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Practice hundreds of CMA exam questions with detailed explanations.
          Covering all topics for Part 1 and Part 2 of the Certified Management
          Accountant exam.
        </p>
        <div className="mt-8">
          <Link
            href="/cma"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
          >
            Start Practicing
          </Link>
        </div>
      </div>

      <AdSlot className="mt-12" slot="home-top" />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">100% Free</h3>
          <p className="mt-2 text-sm text-gray-600">
            All practice questions and explanations are completely free. No
            hidden paywalls.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Detailed Explanations
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Every question includes a thorough explanation of why the correct
            answer is right.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Exam-Style Format
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Practice in timed quiz mode that simulates the real CMA exam
            experience.
          </p>
        </div>
      </div>

      <AdSlot className="mt-12" slot="home-bottom" />
    </div>
  );
}
