import Link from "next/link";
import QuizEngine from "@/components/QuizEngine";
import { getTopicWithQuestions } from "@/lib/questions";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { topic: topicSlug } = await params;
  const topic = await getTopicWithQuestions("cma", "part-2", topicSlug);
  if (!topic) return { title: "Quiz Not Found" };

  return {
    title: `Quiz: ${topic.name} — CMA Part 2 Timed Practice`,
    description: `Timed CMA Part 2 quiz for ${topic.name}. ${topic.questions.length} questions with instant scoring and explanations.`,
    alternates: { canonical: `/cma/part-2/${topicSlug}/quiz` },
  };
}

export default async function QuizPage({ params }: Props) {
  const { topic: topicSlug } = await params;
  const topic = await getTopicWithQuestions("cma", "part-2", topicSlug);
  if (!topic) notFound();

  const questions = topic.questions.map((q) => ({
    ...q,
    options: q.options as string[],
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/cma" className="hover:text-blue-600">
          CMA
        </Link>{" "}
        &gt;{" "}
        <Link href="/cma/part-2" className="hover:text-blue-600">
          Part 2
        </Link>{" "}
        &gt;{" "}
        <Link
          href={`/cma/part-2/${topicSlug}`}
          className="hover:text-blue-600"
        >
          {topic.name}
        </Link>{" "}
        &gt; Quiz
      </div>

      <QuizEngine
        questions={questions}
        topicName={topic.name}
        topicId={topic.id}
        topicSlug={topicSlug}
        partSlug="part-2"
      />
    </div>
  );
}
