import type { Metadata } from "next";
import TopicCard from "@/components/TopicCard";
import AdSlot from "@/components/AdSlot";
import { getPartWithTopics } from "@/lib/questions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CMA Part 2 Practice Questions — Strategic Financial Management",
  description:
    "600 free practice questions for CMA Part 2: Financial Statement Analysis, Corporate Finance, Decision Analysis, Risk Management, Investment Decisions, and Professional Ethics.",
  alternates: { canonical: "/cma/part-2" },
};

export default async function Part2Page() {
  const part = await getPartWithTopics("cma", "part-2");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Part 2: Strategic Financial Management
      </h1>
      <p className="mt-3 text-gray-600">
        Select a topic to practice. Each topic shows the percentage weight it
        carries on the actual CMA exam.
      </p>

      <AdSlot className="mt-8" slot="part2-top" />

      <div className="mt-8 grid gap-4">
        {part?.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            name={topic.name}
            slug={topic.slug}
            weight={topic.weight}
            questionCount={topic._count.questions}
            href={`/cma/part-2/${topic.slug}`}
          />
        ))}
      </div>

      {!part && (
        <p className="mt-8 text-gray-500">
          No data found. Run the seed script to populate questions.
        </p>
      )}
    </div>
  );
}
