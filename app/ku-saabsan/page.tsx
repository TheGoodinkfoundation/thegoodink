import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="bg-[#071f3f] px-6 py-5 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            The Good Ink Foundation
          </Link>

          <Link href="/" className="text-sm">
            Home
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Ku saabsan</h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          The Good Ink Foundation is built on the belief that education should be
          accessible to everyone, regardless of where they come from.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          We are starting with free mathematics education in Somali through
          videos, quizzes and simple learning resources.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Our long-term aim is to build learning tools that help students
          understand, practise and grow with confidence.
        </p>
      </section>
    </main>
  );
}