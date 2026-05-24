import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="bg-[#071f3f] px-6 py-5 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            The Good Ink Foundation
          </Link>

          <div className="flex gap-6 text-sm">
            <a href="#practice">Practice Quiz</a>
            <Link href="/ku-saabsan">Ku saabsan</Link>
          </div>
        </nav>
      </header>

      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/students.png')" }}
      >
        <div className="absolute inset-0 bg-[#071f3f]/65" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            The Good Ink Foundation
          </h1>

          <p className="mt-6 text-xl text-slate-100">
            Learn mathematics. Practice with quizzes. Build confidence.
          </p>
        </div>
      </section>

      <section id="practice" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Practice Quiz</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Quizzes will be organised by grade level, so students can practise at
            the right level.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Grade 1-3", "Grade 4-6", "Grade 7-9", "Grade 10+"].map((grade) => (
              <div
                key={grade}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold">{grade}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}