import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CMA Mock Exam — Simulate the Real Test",
  description:
    "Take a full-length CMA mock exam with 100 questions and a 3-hour timer. Weighted by topic just like the real exam.",
};

const PARTS = [
  {
    slug: "part-1",
    title: "Part 1: Financial Planning, Performance, and Analytics",
    topics: [
      { name: "External Financial Reporting", weight: 15 },
      { name: "Planning, Budgeting & Forecasting", weight: 20 },
      { name: "Performance Management", weight: 20 },
      { name: "Cost Management", weight: 15 },
      { name: "Internal Controls", weight: 15 },
      { name: "Technology & Analytics", weight: 15 },
    ],
  },
  {
    slug: "part-2",
    title: "Part 2: Strategic Financial Management",
    topics: [
      { name: "Financial Statement Analysis", weight: 20 },
      { name: "Corporate Finance", weight: 20 },
      { name: "Decision Analysis", weight: 25 },
      { name: "Risk Management", weight: 10 },
      { name: "Investment Decisions", weight: 10 },
      { name: "Professional Ethics", weight: 15 },
    ],
  },
];

export default function MockExamPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">CMA Mock Exam</h1>
      <p className="mt-2 text-gray-600">
        Simulate the real CMA exam experience. 100 multiple-choice questions, 3-hour time limit,
        weighted by topic exactly like the actual test. Pass mark: 72%.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {PARTS.map((part) => (
          <div
            key={part.slug}
            className="rounded-xl border border-gray-200 p-6"
          >
            <h2 className="text-lg font-bold text-gray-900">{part.title}</h2>
            <ul className="mt-4 space-y-1 text-sm text-gray-600">
              {part.topics.map((t) => (
                <li key={t.name} className="flex justify-between">
                  <span>{t.name}</span>
                  <span className="font-medium">{t.weight}%</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4">
              <p className="text-xs text-gray-500">
                100 questions &bull; 3 hours &bull; Pass: 72%
              </p>
            </div>
            <Link
              href={`/cma/mock-exam/${part.slug}`}
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Start Mock Exam
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
        <p className="font-medium">Tips for your mock exam:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Set aside 3 uninterrupted hours</li>
          <li>Flag questions you&apos;re unsure about and return later</li>
          <li>Aim for 72% (72/100 correct) to pass</li>
          <li>Review your topic breakdown after to identify weak areas</li>
        </ul>
      </div>
    </div>
  );
}
