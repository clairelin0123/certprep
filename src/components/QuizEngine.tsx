"use client";

import { useState, useEffect, useCallback } from "react";
import BookmarkButton from "./BookmarkButton";

interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: string;
}

interface QuizEngineProps {
  questions: QuizQuestion[];
  topicName: string;
}

export default function QuizEngine({ questions, topicName }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(questions.length * 90); // 90s per question

  useEffect(() => {
    if (finished || timeLeft <= 0) {
      if (timeLeft <= 0) setFinished(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [finished, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const question = questions[currentIndex];

  const handleSubmit = useCallback(() => {
    if (selected === null) return;
    setAnswered(true);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selected;
    setAnswers(newAnswers);
    if (selected === question.correctIndex) {
      setScore((s) => s + 1);
    }
  }, [selected, answers, currentIndex, question.correctIndex]);

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  };

  const getOptionClass = (index: number) => {
    const base = "w-full rounded-lg border p-4 text-left transition";
    if (!answered) {
      if (selected === index) return `${base} border-blue-500 bg-blue-50`;
      return `${base} border-gray-200 hover:border-gray-400`;
    }
    if (index === question.correctIndex)
      return `${base} border-green-500 bg-green-50`;
    if (index === selected && index !== question.correctIndex)
      return `${base} border-red-500 bg-red-50`;
    return `${base} border-gray-200 opacity-60`;
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Quiz Complete!</h2>
        <p className="mt-2 text-gray-600">{topicName}</p>
        <div className="mt-8">
          <div className="text-5xl font-bold text-blue-700">{pct}%</div>
          <p className="mt-2 text-gray-600">
            {score} of {questions.length} correct
          </p>
        </div>
        <div className="mt-6">
          {pct >= 72 ? (
            <p className="text-green-600 font-medium">
              Passing score! Keep it up.
            </p>
          ) : (
            <p className="text-red-600 font-medium">
              Below passing (72%). Review this topic and try again.
            </p>
          )}
        </div>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setSelected(null);
            setAnswered(false);
            setScore(0);
            setFinished(false);
            setAnswers(new Array(questions.length).fill(null));
            setTimeLeft(questions.length * 90);
          }}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            timeLeft < 60
              ? "bg-red-100 text-red-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="mb-2 h-1.5 rounded-full bg-gray-200">
        <div
          className="h-1.5 rounded-full bg-blue-600 transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 p-6">
        <div className="mb-1 flex justify-between">
          <span className="text-xs font-medium uppercase text-gray-400">
            {topicName}
          </span>
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
        <p className="mb-6 text-lg text-gray-900">{question.text}</p>

        <div className="space-y-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              className={getOptionClass(i)}
            >
              <span className="mr-2 font-semibold text-gray-400">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          ))}
        </div>

        {answered && (
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

        <div className="mt-6 flex justify-between">
          {!answered ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              {currentIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
