"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import QuizEngine from "@/components/QuizEngine";
import { getSavedMistakes } from "@/lib/mistakes";

interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: string;
}

export default function SavedMistakesQuizPage() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      // Shuffle questions
      const shuffled = data
        .map((q: QuizQuestion) => ({ ...q, options: q.options as string[] }))
        .sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-gray-500">
        Loading quiz...
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-lg text-gray-500">No saved mistakes to quiz on.</p>
        <Link
          href="/cma"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Start Practicing
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/cma" className="hover:text-blue-600">CMA</Link>{" "}
        &gt;{" "}
        <Link href="/cma/saved-mistakes" className="hover:text-blue-600">Saved Mistakes</Link>{" "}
        &gt; Quiz
      </div>

      <QuizEngine questions={questions} topicName="Saved Mistakes Review" />
    </div>
  );
}
