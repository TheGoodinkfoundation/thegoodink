import Link from "next/link";
import { quizData } from "../../data/quizData";

export default function QuizLevelPage() {
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
          Dooro mowduuc, kadibna ku celceli su&apos;aalaha.
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

              <div className="mt-6 space-y-6">
                {topic.subtopics.map((subtopic) => (
                  <div key={subtopic.title} className="rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-xl font-semibold">
                      {subtopic.title}
                    </h3>

                    <div className="mt-5 space-y-5">
                      {subtopic.questions.map((q, index) => (
                        <div
                          key={q.question}
                          className="rounded-xl border border-slate-200 bg-white p-5"
                        >
                          <p className="font-semibold">
                            {index + 1}. {q.question}
                          </p>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {q.options.map((option) => (
                              <button
                                key={option}
                                className="rounded-xl border border-slate-300 px-4 py-3 text-left hover:bg-blue-50"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}