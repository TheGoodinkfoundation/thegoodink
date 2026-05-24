export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          The Good Ink Foundation
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Accessible mathematics education in Somali.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          We create free mathematics lessons, quizzes and learning resources for
          students who learn best in Somali.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-blue-700 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Watch on YouTube
          </a>

          <a
            href="#quiz"
            className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            Try quizzes soon
          </a>
        </div>
      </section>

      <section id="quiz" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">What we are building</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Video lessons</h3>
              <p className="mt-2 text-sm text-slate-600">
                Clear explanations of mathematics topics in Somali.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Quizzes</h3>
              <p className="mt-2 text-sm text-slate-600">
                Practice questions that help students check their understanding.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Free access</h3>
              <p className="mt-2 text-sm text-slate-600">
                Learning resources designed to be simple, useful and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-slate-500">
        Contact: contact@thegoodink.org
      </footer>
    </main>
  );
}