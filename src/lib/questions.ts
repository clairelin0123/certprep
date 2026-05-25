import { prisma } from "./db";

export async function getExamBySlug(slug: string) {
  return prisma.exam.findUnique({
    where: { slug },
    include: {
      parts: {
        include: { topics: { include: { _count: { select: { questions: true } } } } },
        orderBy: { number: "asc" },
      },
    },
  });
}

export async function getPartWithTopics(examSlug: string, partSlug: string) {
  const exam = await prisma.exam.findUnique({ where: { slug: examSlug } });
  if (!exam) return null;

  return prisma.part.findUnique({
    where: { examId_slug: { examId: exam.id, slug: partSlug } },
    include: {
      topics: {
        include: { _count: { select: { questions: true } } },
      },
    },
  });
}

export async function getTopicWithQuestions(
  examSlug: string,
  partSlug: string,
  topicSlug: string
) {
  const exam = await prisma.exam.findUnique({ where: { slug: examSlug } });
  if (!exam) return null;

  const part = await prisma.part.findUnique({
    where: { examId_slug: { examId: exam.id, slug: partSlug } },
  });
  if (!part) return null;

  return prisma.topic.findUnique({
    where: { partId_slug: { partId: part.id, slug: topicSlug } },
    include: {
      questions: { orderBy: { createdAt: "asc" } },
      part: { include: { exam: true } },
    },
  });
}

export async function getQuestionsByTopic(topicId: string) {
  return prisma.question.findMany({
    where: { topicId },
    orderBy: { createdAt: "asc" },
  });
}
