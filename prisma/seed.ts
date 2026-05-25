import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { part1Questions } from "./seed-part1";
import { part2Questions } from "./seed-part2-questions";

const adapter = new PrismaPg(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

const CMA_DATA = {
  name: "CMA",
  slug: "cma",
  parts: [
    {
      name: "Part 1: Financial Planning, Performance & Analytics",
      slug: "part-1",
      number: 1,
      topics: [
        { name: "External Financial Reporting Decisions", slug: "external-financial-reporting", weight: 15 },
        { name: "Planning, Budgeting & Forecasting", slug: "planning-budgeting-forecasting", weight: 20 },
        { name: "Performance Management", slug: "performance-management", weight: 20 },
        { name: "Cost Management", slug: "cost-management", weight: 15 },
        { name: "Internal Controls", slug: "internal-controls", weight: 15 },
        { name: "Technology & Analytics", slug: "technology-analytics", weight: 15 },
      ],
    },
    {
      name: "Part 2: Strategic Financial Management",
      slug: "part-2",
      number: 2,
      topics: [
        { name: "Financial Statement Analysis", slug: "financial-statement-analysis", weight: 20 },
        { name: "Corporate Finance", slug: "corporate-finance", weight: 20 },
        { name: "Decision Analysis", slug: "decision-analysis", weight: 25 },
        { name: "Risk Management", slug: "risk-management", weight: 10 },
        { name: "Investment Decisions", slug: "investment-decisions", weight: 10 },
        { name: "Professional Ethics", slug: "professional-ethics", weight: 15 },
      ],
    },
  ],
};

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.question.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.part.deleteMany();
  await prisma.exam.deleteMany();

  // Create exam
  const exam = await prisma.exam.create({
    data: {
      name: CMA_DATA.name,
      slug: CMA_DATA.slug,
    },
  });
  console.log(`Created exam: ${exam.name}`);

  for (const partData of CMA_DATA.parts) {
    const part = await prisma.part.create({
      data: {
        examId: exam.id,
        name: partData.name,
        slug: partData.slug,
        number: partData.number,
      },
    });
    console.log(`  Created part: ${part.name}`);

    const questionSource = partData.number === 1 ? part1Questions : part2Questions;

    for (const topicData of partData.topics) {
      const topic = await prisma.topic.create({
        data: {
          partId: part.id,
          name: topicData.name,
          slug: topicData.slug,
          weight: topicData.weight,
        },
      });

      const questions = questionSource[topicData.slug] || [];
      for (const q of questions) {
        await prisma.question.create({
          data: {
            topicId: topic.id,
            text: q.text,
            options: q.options,
            correctIndex: q.correctIndex,
            explanation: q.explanation,
            difficulty: q.difficulty,
          },
        });
      }
      console.log(`    Created topic: ${topicData.name} (${questions.length} questions)`);
    }
  }

  const totalQuestions = await prisma.question.count();
  console.log(`\nSeeding complete! Total questions: ${totalQuestions}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
