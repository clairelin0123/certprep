import Link from "next/link";

interface TopicCardProps {
  name: string;
  slug: string;
  weight: number;
  questionCount: number;
  href: string;
}

export default function TopicCard({
  name,
  weight,
  questionCount,
  href,
}: TopicCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
    >
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <div className="mt-2 flex gap-4 text-sm text-gray-500">
        <span>{weight}% of exam</span>
        <span>{questionCount} questions</span>
      </div>
    </Link>
  );
}
