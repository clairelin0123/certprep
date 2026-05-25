"use client";

interface TopicScore {
  topicSlug: string;
  topicName: string;
  avgPercentage: number;
  attempts: number;
}

export default function TopicHeatmap({ topics }: { topics: TopicScore[] }) {
  if (topics.length === 0) return null;

  const getColor = (pct: number) => {
    if (pct >= 80) return "bg-green-100 text-green-800 border-green-200";
    if (pct >= 72) return "bg-green-50 text-green-700 border-green-100";
    if (pct >= 60) return "bg-yellow-50 text-yellow-800 border-yellow-200";
    if (pct >= 40) return "bg-orange-50 text-orange-800 border-orange-200";
    return "bg-red-50 text-red-800 border-red-200";
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <div
          key={topic.topicSlug}
          className={`rounded-lg border p-4 ${getColor(topic.avgPercentage)}`}
        >
          <div className="text-sm font-medium">{topic.topicName}</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold">{topic.avgPercentage}%</span>
            <span className="text-xs opacity-70">{topic.attempts} attempts</span>
          </div>
        </div>
      ))}
    </div>
  );
}
