"use client";

import { useState } from "react";
import BookmarkButton from "./BookmarkButton";

interface QuestionCardProps {
  question: {
    id: string;
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    difficulty: string;
  };
  number: number;
}

export default function QuestionCard({ question, number }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (revealed) return;
    setSelected(index);
  };

  const handleReveal = () => {
    if (selected === null) return;
    setRevealed(true);
  };

  const getOptionClass = (index: number) => {
    const base = "w-full rounded-lg border p-3 text-left text-sm transition";
    if (!revealed) {
      if (selected === index) return `${base} border-blue-500 bg-blue-50`;
      return `${base} border-gray-200 hover:border-gray-400`;
    }
    if (index === question.correctIndex) return `${base} border-green-500 bg-green-50`;
    if (index === selected) return `${base} border-red-500 bg-red-50`;
    return `${base} border-gray-200 opacity-60`;
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Question {number}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            question.difficulty === "easy"
              ? "bg-green-100 text-green-700"
              : question.difficulty === "hard"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {question.difficulty}
        </span>
      </div>
      <p className="mb-4 text-gray-900">{question.text}</p>
      <div className="space-y-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={getOptionClass(i)}
          >
            <span className="mr-2 font-medium text-gray-400">
              {String.fromCharCode(65 + i)}.
            </span>
            {option}
          </button>
        ))}
      </div>
      {!revealed && (
        <button
          onClick={handleReveal}
          disabled={selected === null}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-40"
        >
          Check Answer
        </button>
      )}
      {revealed && (
        <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-medium text-gray-900">Explanation:</p>
              <p className="mt-1">{question.explanation}</p>
            </div>
            <BookmarkButton
              questionId={question.id}
              autoSave={selected !== question.correctIndex}
            />
          </div>
        </div>
      )}
    </div>
  );
}
