export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          The Good Ink Foundation
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Mathematics education in Somali, made accessible.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Free lessons, quizzes and learning resources for students who want to
          understand mathematics in a language that feels closer to them.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-blue-700 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            YouTube coming soon
          </a>

          <a
            href="#quiz"
            className="rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold hover:bg-slate-100"
          >
            View quiz plan
          </a>
        </div>
      </section>

      <section id="quiz" className="border-t border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold">Video lessons</h2>
            <p className="mt-3 text-slate-600">
              Clear explanations of core mathematics topics in Somali.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold">Practice quizzes</h2>
            <p className="mt-3 text-slate-600">
              Simple exercises that help students check their understanding.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold">Long-term mission</h2>
            <p className="mt-3 text-slate-600">
              Building accessible educational resources that can grow into a
              larger learning platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}