import Link from "next/link";
import { quizData } from "../../data/quizData";

export default function Page() {
  const level = quizData["fasalada-1-4"];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <section className="mx-auto max-w-5xl">
        <Link href="/quiz" className="text-sm font-semibold text-blue-700">
          ← Ku noqo Imtixaan Quiz
        </Link>

        <h1 className="mt-8 text-5xl font-bold text-[#071f3f]">
          {level.title}
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Dooro mowduuc iyo qayb-hoosaad si aad u bilowdo.
        </p>

        <div className="mt-10 space-y-8">
          {level.topics.map((topic) => (
            <section
              key={topic.topic}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#071f3f]">
                {topic.topic}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {topic.subtopics.map((subtopic) => (
                  <Link
                    key={subtopic.title}
                    href="#"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-blue-50"
                  >
                    <h3 className="text-xl font-semibold">
                      {subtopic.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      {subtopic.questions.length} su’aalood
                    </p>

                    <p className="mt-4 font-semibold text-blue-700">
                      Bilow →
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}