"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: string;
  topicSlug: string;
  topicName: string;
}

interface MockExamEngineProps {
  questions: ExamQuestion[];
  partSlug: string;
  partTitle: string;
}

const EXAM_DURATION = 10800; // 3 hours in seconds
const STORAGE_KEY_PREFIX = "certprep-mock-exam-";

export default function MockExamEngine({
  questions,
  partSlug,
  partTitle,
}: MockExamEngineProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null)
  );
  const [flagged, setFlagged] = useState<Set<number>>(() => new Set());
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [started, setStarted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const startTimeRef = useRef<number>(0);

  // Restore state from localStorage on mount
  useEffect(() => {
    const key = STORAGE_KEY_PREFIX + partSlug;
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.questionIds?.join(",") === questions.map((q) => q.id).join(",")) {
          setAnswers(state.answers);
          setFlagged(new Set(state.flagged));
          setTimeLeft(state.timeLeft);
          setStarted(true);
          setCurrentIndex(state.currentIndex || 0);
          return;
        }
      }
    } catch {}
  }, [partSlug, questions]);

  // Save state to localStorage periodically
  useEffect(() => {
    if (!started || submitted) return;
    const key = STORAGE_KEY_PREFIX + partSlug;
    const state = {
      questionIds: questions.map((q) => q.id),
      answers,
      flagged: Array.from(flagged),
      timeLeft,
      currentIndex,
    };
    localStorage.setItem(key, JSON.stringify(state));
  }, [started, submitted, partSlug, questions, answers, flagged, timeLeft, currentIndex]);

  // Timer
  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  // Auto-submit when timer expires
  useEffect(() => {
    if (timeLeft === 0 && started && !submitted) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, started, submitted]);

  const handleStart = () => {
    setStarted(true);
    startTimeRef.current = Date.now();
  };

  const handleSelectAnswer = (optionIndex: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const toggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) next.delete(currentIndex);
      else next.add(currentIndex);
      return next;
    });
  };

  const handleSubmit = useCallback(async () => {
    setSubmitted(true);
    const key = STORAGE_KEY_PREFIX + partSlug;
    localStorage.removeItem(key);

    // Calculate results
    let score = 0;
    const topicStats: Record<string, { name: string; correct: number; total: number }> = {};

    questions.forEach((q, i) => {
      if (!topicStats[q.topicSlug]) {
        topicStats[q.topicSlug] = { name: q.topicName, correct: 0, total: 0 };
      }
      topicStats[q.topicSlug].total++;
      if (answers[i] === q.correctIndex) {
        score++;
        topicStats[q.topicSlug].correct++;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 72;
    const timeSpent = EXAM_DURATION - timeLeft;

    const topicBreakdown = Object.entries(topicStats).map(([slug, s]) => ({
      topicSlug: slug,
      topicName: s.name,
      correct: s.correct,
      total: s.total,
    }));

    const answersData = questions.map((q, i) => ({
      questionId: q.id,
      selected: answers[i],
      correct: q.correctIndex,
      topicSlug: q.topicSlug,
    }));

    const result = {
      partSlug,
      score,
      total: questions.length,
      percentage,
      passed,
      timeSpent,
      answers: answersData,
      topicBreakdown,
    };

    // Try save to server
    try {
      await fetch("/api/exam-attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });
    } catch {
      // Save to localStorage as fallback
      const localResults = JSON.parse(
        localStorage.getItem("certprep-exam-results") || "[]"
      );
      localResults.push({ ...result, completedAt: new Date().toISOString() });
      localStorage.setItem("certprep-exam-results", JSON.stringify(localResults));
    }

    // Store result for results page
    sessionStorage.setItem("certprep-last-exam-result", JSON.stringify(result));
    router.push(`/cma/mock-exam/${partSlug}/results`);
  }, [answers, questions, partSlug, timeLeft, router]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const answeredCount = answers.filter((a) => a !== null).length;
  const unansweredCount = questions.length - answeredCount;

  // Pre-start screen
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">{partTitle}</h1>
        <p className="mt-2 text-gray-600">Mock Exam</p>
        <div className="mt-8 rounded-lg border border-gray-200 p-6 text-left">
          <h2 className="font-semibold text-gray-900">Exam Details</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>100 multiple-choice questions</li>
            <li>3-hour time limit (auto-submits when time expires)</li>
            <li>Pass mark: 72% (72/100 correct)</li>
            <li>You can flag questions and return to them</li>
            <li>Progress saved if you refresh the page</li>
          </ul>
        </div>
        <button
          onClick={handleStart}
          className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700"
        >
          Begin Exam
        </button>
      </div>
    );
  }

  // Review screen
  if (showReview) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="text-xl font-bold text-gray-900">Review Before Submit</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg bg-green-50 p-4 text-center">
            <div className="text-2xl font-bold text-green-700">{answeredCount}</div>
            <div className="text-green-600">Answered</div>
          </div>
          <div className="rounded-lg bg-amber-50 p-4 text-center">
            <div className="text-2xl font-bold text-amber-700">{unansweredCount}</div>
            <div className="text-amber-600">Unanswered</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">{flagged.size}</div>
            <div className="text-purple-600">Flagged</div>
          </div>
        </div>

        {(unansweredCount > 0 || flagged.size > 0) && (
          <div className="mt-6">
            {unansweredCount > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700">Unanswered Questions:</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {answers.map((a, i) =>
                    a === null ? (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentIndex(i);
                          setShowReview(false);
                        }}
                        className="h-8 w-8 rounded bg-amber-100 text-xs font-medium text-amber-700 hover:bg-amber-200"
                      >
                        {i + 1}
                      </button>
                    ) : null
                  )}
                </div>
              </div>
            )}
            {flagged.size > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700">Flagged Questions:</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Array.from(flagged)
                    .sort((a, b) => a - b)
                    .map((i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentIndex(i);
                          setShowReview(false);
                        }}
                        className="h-8 w-8 rounded bg-purple-100 text-xs font-medium text-purple-700 hover:bg-purple-200"
                      >
                        {i + 1}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => setShowReview(false)}
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Back to Exam
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Submit Exam
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];

  return (
    <div className="mx-auto max-w-6xl px-4 py-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
        <div className="text-sm text-gray-600">
          Question <span className="font-bold">{currentIndex + 1}</span> of{" "}
          {questions.length}
        </div>
        <div
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            timeLeft < 300
              ? "bg-red-100 text-red-700"
              : timeLeft < 900
              ? "bg-amber-100 text-amber-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {formatTime(timeLeft)}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowNav(!showNav)}
            className="rounded border px-3 py-1 text-xs text-gray-600 hover:bg-gray-100"
          >
            {showNav ? "Hide Nav" : "Show Nav"}
          </button>
          <button
            onClick={() => setShowReview(true)}
            className="rounded bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700"
          >
            Review & Submit
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Question area */}
        <div className="flex-1">
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-medium uppercase text-gray-400">
                {question.topicName}
              </span>
              <button
                onClick={toggleFlag}
                className={`rounded px-2 py-0.5 text-xs font-medium ${
                  flagged.has(currentIndex)
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-500 hover:bg-purple-50"
                }`}
              >
                {flagged.has(currentIndex) ? "Flagged" : "Flag"}
              </button>
            </div>
            <p className="mb-6 text-lg text-gray-900">{question.text}</p>

            <div className="space-y-3">
              {question.options.map((option, i) => {
                const isSelected = answers[currentIndex] === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectAnswer(i)}
                    className={`w-full rounded-lg border p-4 text-left transition ${
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <span className="mr-2 font-semibold text-gray-400">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
                }
                disabled={currentIndex === questions.length - 1}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Question navigator sidebar */}
        {showNav && (
          <div className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-4 rounded-lg border border-gray-200 p-4">
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Questions ({answeredCount}/{questions.length})
              </h3>
              <div className="grid grid-cols-10 gap-1">
                {questions.map((_, i) => {
                  let bg = "bg-gray-100 text-gray-600";
                  if (i === currentIndex) bg = "bg-blue-600 text-white";
                  else if (flagged.has(i) && answers[i] !== null)
                    bg = "bg-purple-200 text-purple-800";
                  else if (flagged.has(i)) bg = "bg-purple-100 text-purple-700";
                  else if (answers[i] !== null) bg = "bg-green-100 text-green-700";
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-medium ${bg}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 space-y-1 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded bg-green-100" />
                  Answered
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded bg-purple-100" />
                  Flagged
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded bg-gray-100" />
                  Unanswered
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
