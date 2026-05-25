import type { Metadata } from "next";
import TopicCard from "@/components/TopicCard";
import AdSlot from "@/components/AdSlot";
import { getPartWithTopics } from "@/lib/questions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CMA Part 1 Practice Questions — Financial Planning, Performance & Analytics",
  description:
    "600 free practice questions for CMA Part 1: External Financial Reporting, Planning & Budgeting, Performance Management, Cost Management, Internal Controls, and Technology & Analytics.",
  alternates: { canonical: "/cma/part-1" },
};

export default async function Part1Page() {
  const part = await getPartWithTopics("cma", "part-1");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Part 1: Financial Planning, Performance & Analytics
      </h1>
      <p className="mt-3 text-gray-600">
        Select a topic to practice. Each topic shows the percentage weight it
        carries on the actual CMA exam.
      </p>

      <AdSlot className="mt-8" slot="part1-top" />

      <div className="mt-8 grid gap-4">
        {part?.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            name={topic.name}
            slug={topic.slug}
            weight={topic.weight}
            questionCount={topic._count.questions}
            href={`/cma/part-1/${topic.slug}`}
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
