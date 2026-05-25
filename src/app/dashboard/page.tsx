import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import ProgressChart from "@/components/ProgressChart";
import TopicHeatmap from "@/components/TopicHeatmap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Your Progress",
  description: "Track your CMA exam preparation progress across all topics.",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/api/auth/signin");
  }

  const userId = session.user.id;

  const [quizAttempts, examAttempts] = await Promise.all([
    prisma.quizAttempt.findMany({
      where: { userId },
      orderBy: { completedAt: "desc" },
    }),
    prisma.examAttempt.findMany({
      where: { userId },
      orderBy: { completedAt: "desc" },
    }),
  ]);

  // Stats
  const totalQuizzes = quizAttempts.length;
  const avgScore =
    totalQuizzes > 0
      ? Math.round(
          quizAttempts.reduce((sum, a) => sum + a.percentage, 0) / totalQuizzes
        )
      : 0;
  const bestScore =
    totalQuizzes > 0
      ? Math.max(...quizAttempts.map((a) => a.percentage))
      : 0;

  // Score trend (last 10)
  const recentAttempts = quizAttempts.slice(0, 10).reverse();
  const chartData = recentAttempts.map((a) => ({
    label: a.topicSlug.slice(0, 8),
    value: a.percentage,
  }));

  // Topic performance heatmap
  const topicMap: Record<string, { scores: number[]; name: string }> = {};
  for (const a of quizAttempts) {
    if (!topicMap[a.topicSlug]) {
      topicMap[a.topicSlug] = { scores: [], name: a.topicSlug.replace(/-/g, " ") };
    }
    topicMap[a.topicSlug].scores.push(a.percentage);
  }
  const topicScores = Object.entries(topicMap).map(([slug, data]) => ({
    topicSlug: slug,
    topicName: data.name.replace(/\b\w/g, (c) => c.toUpperCase()),
    avgPercentage: Math.round(
      data.scores.reduce((s, v) => s + v, 0) / data.scores.length
    ),
    attempts: data.scores.length,
  }));

  // Weak topics
  const weakTopics = topicScores
    .filter((t) => t.avgPercentage < 72)
    .sort((a, b) => a.avgPercentage - b.avgPercentage);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-gray-600">
        Welcome back, {session.user.name || "Student"}
      </p>

      {/* Summary stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-5 text-center">
          <div className="text-3xl font-bold text-blue-700">{totalQuizzes}</div>
          <div className="mt-1 text-sm text-gray-500">Quizzes Taken</div>
        </div>
        <div className="rounded-lg border border-gray-200 p-5 text-center">
          <div className="text-3xl font-bold text-blue-700">{avgScore}%</div>
          <div className="mt-1 text-sm text-gray-500">Average Score</div>
        </div>
        <div className="rounded-lg border border-gray-200 p-5 text-center">
          <div className="text-3xl font-bold text-green-600">{bestScore}%</div>
          <div className="mt-1 text-sm text-gray-500">Best Score</div>
        </div>
      </div>

      {/* Mock exam history */}
      {examAttempts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-900">Mock Exam History</h2>
          <div className="mt-4 space-y-3">
            {examAttempts.slice(0, 5).map((exam) => (
              <div
                key={exam.id}
                className={`flex items-center justify-between rounded-lg border p-4 ${
                  exam.passed
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div>
                  <span className="font-medium text-gray-900">
                    {exam.partSlug === "part-1" ? "Part 1" : "Part 2"}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(exam.completedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-lg font-bold ${
                      exam.passed ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {exam.percentage}%
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      exam.passed
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {exam.passed ? "PASS" : "FAIL"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Score trend */}
      {chartData.length >= 2 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-900">Score Trend</h2>
          <p className="text-sm text-gray-500">Last {chartData.length} quiz attempts</p>
          <div className="mt-4">
            <ProgressChart data={chartData} />
          </div>
        </section>
      )}

      {/* Topic heatmap */}
      {topicScores.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-900">
            Performance by Topic
          </h2>
          <div className="mt-4">
            <TopicHeatmap topics={topicScores} />
          </div>
        </section>
      )}

      {/* Weak topics */}
      {weakTopics.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-900">
            Weak Topics (Below 72%)
          </h2>
          <div className="mt-4 space-y-2">
            {weakTopics.map((t) => (
              <div
                key={t.topicSlug}
                className="flex items-center justify-between rounded-lg border border-red-100 bg-red-50 p-3"
              >
                <span className="text-sm font-medium text-gray-900">
                  {t.topicName}
                </span>
                <span className="text-sm font-bold text-red-600">
                  {t.avgPercentage}%
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {totalQuizzes === 0 && examAttempts.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <p className="text-lg">No quiz history yet</p>
          <p className="mt-1 text-sm">
            Take a topic quiz or mock exam to start tracking your progress.
          </p>
        </div>
      )}
    </div>
  );
}
