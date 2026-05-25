import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { topicId, topicSlug, partSlug, score, total, percentage } = body;

  const attempt = await prisma.quizAttempt.create({
    data: {
      userId: session.user.id,
      topicId,
      topicSlug,
      partSlug,
      score,
      total,
      percentage,
    },
  });

  return NextResponse.json({ id: attempt.id }, { status: 201 });
}
