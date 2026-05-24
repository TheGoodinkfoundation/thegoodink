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
            <Link href="/quiz">Imtixaan Quiz</Link>
              Imtixaan Quiz
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

<section id="practice" className="bg-white px-6 py-20">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="text-4xl font-bold text-[#071f3f]">Imtixaan Quiz</h2>

    <p className="mt-3 text-lg text-slate-600">
      Dooro fasalkaaga si aad u bilowdo imtixaanka.
    </p>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Fasallada 1-4",
          text: "Su’aalo aasaasi ah oo ku habboon bilowga waxbarashada.",
          icon: "📘",
        },
        {
          title: "Fasallada 5-8",
          text: "Layliyo dhexe oo xoojinaya fahamka xisaabta.",
          icon: "✏️",
        },
        {
          title: "Fasallada 9-12",
          text: "Imtixaanno heer sare ah oo loogu talagalay ardayda horumarsan.",
          icon: "🎓",
        },
      ].map((grade) => (
        <div
          key={grade.title}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
            {grade.icon}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-[#071f3f]">
            {grade.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {grade.text}
          </p>

          <button className="mt-6 rounded-full bg-[#071f3f] px-6 py-3 text-sm font-semibold text-white">
            Bilow imtixaanka
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}