import Link from "next/link";

const levels = [
  {
    title: "Fasalada 1-4",
    description: "Su’aalo aasaasi ah oo ku saabsan xisaabta.",
    href: "/quiz/fasalada-1-4",
  },
  {
    title: "Fasalada 5-8",
    description: "Layliyo dhexe oo xoojinaya fahamka xisaabta.",
    href: "/quiz/fasalada-5-8",
  },
  {
    title: "Fasalada 9-12",
    description: "Imtixaanno heer sare ah oo loogu talagalay ardayda horumarsan.",
    href: "/quiz/fasalada-9-12",
  },
];

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-[#071f3f]">Imtixaan Quiz</h1>
        <p className="mt-4 text-lg text-slate-600">
          Dooro fasalkaaga si aad u bilowdo imtixaanka.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <Link
              key={level.href}
              href={level.href}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm hover:shadow-md"
            >
              <h2 className="text-2xl font-bold text-[#071f3f]">
                {level.title}
              </h2>
              <p className="mt-3 text-slate-600">{level.description}</p>
              <p className="mt-6 font-semibold text-blue-700">
                Bilow imtixaanka →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}