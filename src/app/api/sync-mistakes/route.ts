import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { questionIds } = await request.json();
  if (!Array.isArray(questionIds)) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  // Merge with existing saved questions
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { savedQuestionIds: true },
  });

  const existing = (user?.savedQuestionIds as string[]) || [];
  const merged = [...new Set([...existing, ...questionIds])];

  await prisma.user.update({
    where: { id: session.user.id },
    data: { savedQuestionIds: merged },
  });

  return NextResponse.json({ synced: merged.length }, { status: 200 });
}
