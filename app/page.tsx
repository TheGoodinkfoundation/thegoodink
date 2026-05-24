import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="bg-[#071f3f] px-6 py-5 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            The Good Ink Foundation
          </Link>

          <div className="flex gap-8 text-sm">
            <a href="#practice" className="font-bold">
              Imtixaan Quiz
            </a>
            <Link href="/ku-saabsan">Ku saabsan</Link>
          </div>
        </nav>
      </header>

      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/students.png')" }}
      >
        <div className="absolute inset-0 bg-[#071f3f]/65" />

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Waxbarashada carruurta iyo dhallinyarada
          </h1>

          <p className="mt-8 text-xl text-slate-100">
            Si fudud u baro xisaabta | Ku celceli su&apos;aalaha | Kalsoonidaada dhis
          </p>
        </div>
      </section>

      <section id="practice" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Imtixaan Quiz</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Dooro fasalkaaga si aad u bilowdo imtixaanka.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Fasalka 1aad",
              "Fasalka 2aad",
              "Fasalka 3aad",
              "Fasalka 4aad+",
            ].map((grade) => (
              <div
                key={grade}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold">{grade}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dhawaan ayuu imaanayaa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}