export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          The Good Ink Foundation
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          Accessible mathematics education in Somali.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Free mathematics lessons, quizzes and educational resources designed
          to make learning more accessible.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            YouTube Channel
          </a>

          <a
            href="#"
            className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold hover:bg-slate-100"
          >
            Quiz Platform Soon
          </a>
        </div>
      </section>
    </main>
  );
}