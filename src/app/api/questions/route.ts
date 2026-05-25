import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const topicId = searchParams.get("topicId");
  const partSlug = searchParams.get("part");
  const topicSlug = searchParams.get("topic");
  const difficulty = searchParams.get("difficulty");

  if (topicId) {
    const questions = await prisma.question.findMany({
      where: {
        topicId,
        ...(difficulty ? { difficulty } : {}),
      },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(questions);
  }

  if (partSlug && topicSlug) {
    const exam = await prisma.exam.findUnique({ where: { slug: "cma" } });
    if (!exam) return NextResponse.json({ error: "Exam not found" }, { status: 404 });

    const part = await prisma.part.findUnique({
      where: { examId_slug: { examId: exam.id, slug: partSlug } },
    });
    if (!part) return NextResponse.json({ error: "Part not found" }, { status: 404 });

    const topic = await prisma.topic.findUnique({
      where: { partId_slug: { partId: part.id, slug: topicSlug } },
      include: { questions: { orderBy: { createdAt: "asc" } } },
    });
    if (!topic) return NextResponse.json({ error: "Topic not found" }, { status: 404 });

    return NextResponse.json(topic.questions);
  }

  return NextResponse.json(
    { error: "Provide topicId or part+topic query params" },
    { status: 400 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const ids: string[] = body.ids;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: "Provide ids array in body" }, { status: 400 });
  }

  const questions = await prisma.question.findMany({
    where: { id: { in: ids } },
    include: { topic: { include: { part: true } } },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json(questions);
}
