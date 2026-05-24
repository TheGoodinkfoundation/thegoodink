import Link from "next/link";
import QuizClient from "../../components/QuizClient";
import { quizData } from "../../data/quizData";

export default function Page() {
  const level = quizData["fasalada-1-4"];

  const questions = level.topics.flatMap((topic) =>
    topic.subtopics.flatMap((subtopic) => subtopic.questions)
  );

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto max-w-4xl">
        <Link href="/quiz" className="text-sm font-semibold text-blue-700">
          ← Ku noqo Imtixaan Quiz
        </Link>

        <h1 className="mt-8 text-5xl font-bold text-[#071f3f]">
          {level.title}
        </h1>

        <p className="mt-4 text-slate-600">
          Dooro jawaabta saxda ah. Jawaabta saxda ah waxay noqonaysaa cagaar,
          qaladkuna casaan.
        </p>

        <QuizClient questions={questions} />
      </section>
    </main>
  );
}