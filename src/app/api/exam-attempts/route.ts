import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const session = await auth();
  const body = await request.json();

  const {
    partSlug,
    score,
    total,
    percentage,
    passed,
    timeSpent,
    answers,
    topicBreakdown,
  } = body;

  const attempt = await prisma.examAttempt.create({
    data: {
      userId: session?.user?.id || null,
      partSlug,
      score,
      total,
      percentage,
      passed,
      timeSpent,
      answers,
      topicBreakdown,
    },
  });

  return NextResponse.json({ id: attempt.id }, { status: 201 });
}
