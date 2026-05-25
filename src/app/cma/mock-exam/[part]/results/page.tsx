"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface TopicBreakdown {
  topicSlug: string;
  topicName: string;
  correct: number;
  total: number;
}

interface ExamResult {
  partSlug: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timeSpent: number;
  topicBreakdown: TopicBreakdown[];
}

export default function MockExamResultsPage() {
  const params = useParams();
  const [result, setResult] = useState<ExamResult | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("certprep-last-exam-result");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.partSlug === params.part) {
        setResult(parsed);
      }
    }
  }, [params.part]);

  if (!result) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="text-xl font-bold text-gray-900">No exam results found</h1>
        <p className="mt-2 text-gray-600">
          Take a mock exam first to see your results.
        </p>
        <Link
          href="/cma/mock-exam"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Go to Mock Exams
        </Link>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  const partLabel = result.partSlug === "part-1" ? "Part 1" : "Part 2";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">
        Mock Exam Results — {partLabel}
      </h1>

      {/* Score card */}
      <div
        className={`mt-6 rounded-xl border-2 p-8 text-center ${
          result.passed
            ? "border-green-300 bg-green-50"
            : "border-red-300 bg-red-50"
        }`}
      >
        <div className="text-5xl font-bold">
          <span className={result.passed ? "text-green-700" : "text-red-700"}>
            {result.percentage}%
          </span>
        </div>
        <p className="mt-2 text-gray-600">
          {result.score} of {result.total} correct
        </p>
        <p
          className={`mt-2 text-lg font-semibold ${
            result.passed ? "text-green-700" : "text-red-700"
          }`}
        >
          {result.passed ? "PASSED" : "NOT PASSED"}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Pass mark: 72% &bull; Time spent: {formatTime(result.timeSpent)}
        </p>
      </div>

      {/* Topic breakdown */}
      <h2 className="mt-10 text-lg font-bold text-gray-900">
        Performance by Topic
      </h2>
      <div className="mt-4 space-y-3">
        {result.topicBreakdown
          .sort((a, b) => {
            const pctA = Math.round((a.correct / a.total) * 100);
            const pctB = Math.round((b.correct / b.total) * 100);
            return pctA - pctB;
          })
          .map((topic) => {
            const pct = Math.round((topic.correct / topic.total) * 100);
            const passing = pct >= 72;
            return (
              <div
                key={topic.topicSlug}
                className="rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    {topic.topicName}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      passing ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {pct}% ({topic.correct}/{topic.total})
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      passing ? "bg-green-500" : "bg-red-400"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/cma/mock-exam"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Take Another Exam
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
