import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import MockExamEngine from "@/components/MockExamEngine";
import type { Metadata } from "next";

const TOPIC_WEIGHTS: Record<string, Record<string, number>> = {
  "part-1": {
    "external-financial-reporting": 15,
    "planning-budgeting-forecasting": 20,
    "performance-management": 20,
    "cost-management": 15,
    "internal-controls": 15,
    "technology-analytics": 15,
  },
  "part-2": {
    "financial-statement-analysis": 20,
    "corporate-finance": 20,
    "decision-analysis": 25,
    "risk-management": 10,
    "investment-decisions": 10,
    "professional-ethics": 15,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ part: string }>;
}): Promise<Metadata> {
  const { part } = await params;
  const partNum = part === "part-1" ? "1" : "2";
  return {
    title: `CMA Part ${partNum} Mock Exam — 100 Questions, 3 Hours`,
    description: `Full-length CMA Part ${partNum} mock exam with 100 weighted questions and a 3-hour timer.`,
  };
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default async function MockExamPartPage({
  params,
}: {
  params: Promise<{ part: string }>;
}) {
  const { part } = await params;

  if (!TOPIC_WEIGHTS[part]) {
    notFound();
  }

  const weights = TOPIC_WEIGHTS[part];

  // Get part from DB
  const dbPart = await prisma.part.findFirst({
    where: { slug: part },
    include: {
      topics: {
        include: {
          questions: {
            select: {
              id: true,
              text: true,
              options: true,
              correctIndex: true,
              explanation: true,
              difficulty: true,
              topic: { select: { slug: true, name: true } },
            },
          },
        },
      },
    },
  });

  if (!dbPart) notFound();

  // Select weighted random questions
  const selectedQuestions: Array<{
    id: string;
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    difficulty: string;
    topicSlug: string;
    topicName: string;
  }> = [];

  for (const topic of dbPart.topics) {
    const count = weights[topic.slug] || 0;
    if (count === 0) continue;

    const shuffled = shuffleArray(topic.questions);
    const picked = shuffled.slice(0, count);

    for (const q of picked) {
      selectedQuestions.push({
        id: q.id,
        text: q.text,
        options: q.options as string[],
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        difficulty: q.difficulty,
        topicSlug: q.topic.slug,
        topicName: q.topic.name,
      });
    }
  }

  // Shuffle final question order
  const examQuestions = shuffleArray(selectedQuestions);

  const partTitle =
    part === "part-1"
      ? "Part 1: Financial Planning, Performance, and Analytics"
      : "Part 2: Strategic Financial Management";

  return (
    <MockExamEngine
      questions={examQuestions}
      partSlug={part}
      partTitle={partTitle}
    />
  );
}
