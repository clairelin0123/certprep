import type { Metadata } from "next";
import Link from "next/link";
import QuestionCard from "@/components/QuestionCard";
import AdSlot from "@/components/AdSlot";
import { getTopicWithQuestions } from "@/lib/questions";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = await getTopicWithQuestions("cma", "part-2", topicSlug);
  if (!topic) return { title: "Topic Not Found" };

  return {
    title: `${topic.name} — CMA Part 2 Practice Questions (Free)`,
    description: `${topic.questions.length} free practice questions for ${topic.name} with detailed explanations. CMA Part 2: Strategic Financial Management. ${topic.weight}% exam weight.`,
    alternates: { canonical: `/cma/part-2/${topicSlug}` },
  };
}

export default async function TopicPage({ params }: Props) {
  const { topic: topicSlug } = await params;
  const topic = await getTopicWithQuestions("cma", "part-2", topicSlug);
  if (!topic) notFound();

  const questions = topic.questions.map((q) => ({
    ...q,
    options: q.options as string[],
  }));

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://certprep.study";

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.slice(0, 10).map((q) => ({
      "@type": "Question",
      name: q.text,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${q.options[q.correctIndex]}. ${q.explanation}`,
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "CMA Exam", item: `${siteUrl}/cma` },
      { "@type": "ListItem", position: 3, name: "Part 2", item: `${siteUrl}/cma/part-2` },
      { "@type": "ListItem", position: 4, name: topic.name, item: `${siteUrl}/cma/part-2/${topicSlug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/cma" className="hover:text-blue-600">
          CMA
        </Link>{" "}
        &gt;{" "}
        <Link href="/cma/part-2" className="hover:text-blue-600">
          Part 2
        </Link>{" "}
        &gt; {topic.name}
      </div>

      <h1 className="text-3xl font-bold text-gray-900">{topic.name}</h1>
      <p className="mt-2 text-gray-600">
        {topic.weight}% of the CMA Part 2 exam &middot; {questions.length}{" "}
        practice questions
      </p>

      <div className="mt-4">
        <Link
          href={`/cma/part-2/${topicSlug}/quiz`}
          className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Start Quiz Mode
        </Link>
      </div>

      <AdSlot className="mt-8" slot="topic-top" />

      <div className="mt-8 space-y-6">
        {questions.map((q, i) => (
          <QuestionCard key={q.id} question={q} number={i + 1} />
        ))}
      </div>

      <AdSlot className="mt-8" slot="topic-bottom" />
    </div>
  );
}
