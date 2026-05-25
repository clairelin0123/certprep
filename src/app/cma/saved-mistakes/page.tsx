"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import QuestionCard from "@/components/QuestionCard";
import { getSavedMistakes, clearMistakes } from "@/lib/mistakes";

interface QuestionWithTopic {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: string;
  topic: { name: string; part: { slug: string } };
}

export default function SavedMistakesPage() {
  const [questions, setQuestions] = useState<QuestionWithTopic[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuestions = async () => {
    const ids = getSavedMistakes();
    if (ids.length === 0) {
      setQuestions([]);
      setLoading(false);
      return;
    }

    const res = await fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
    });
    const data = await res.json();
    setQuestions(
      data.map((q: QuestionWithTopic) => ({
        ...q,
        options: q.options as string[],
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleClear = () => {
    clearMistakes();
    setQuestions([]);
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-gray-500">
        Loading saved mistakes...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/cma" className="hover:text-blue-600">CMA</Link> &gt; Saved Mistakes
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Saved Mistakes</h1>
          <p className="mt-1 text-gray-600">
            {questions.length} question{questions.length !== 1 ? "s" : ""} saved for review
          </p>
        </div>
        {questions.length > 0 && (
          <div className="flex gap-3">
            <Link
              href="/cma/saved-mistakes/quiz"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Practice Quiz
            </Link>
            <button
              onClick={handleClear}
              className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {questions.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-500">No saved mistakes yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Wrong answers are automatically saved during quizzes. You can also bookmark any question after revealing the answer.
          </p>
          <Link
            href="/cma"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Start Practicing
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          {questions.map((q, i) => (
            <div key={q.id}>
              <div className="mb-1 text-xs text-gray-400">
                {q.topic.part.slug === "part-1" ? "Part 1" : "Part 2"} &middot; {q.topic.name}
              </div>
              <QuestionCard question={q} number={i + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
