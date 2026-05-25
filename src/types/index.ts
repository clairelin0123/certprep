export interface Exam {
  id: string;
  name: string;
  slug: string;
  parts: Part[];
}

export interface Part {
  id: string;
  examId: string;
  name: string;
  slug: string;
  number: number;
  topics: Topic[];
}

export interface Topic {
  id: string;
  partId: string;
  name: string;
  slug: string;
  weight: number;
  questions: Question[];
}

export interface Question {
  id: string;
  topicId: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}
