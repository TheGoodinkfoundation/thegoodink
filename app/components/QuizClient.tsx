"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function QuizClient({ questions }: { questions: Question[] }) {
  const [selected, setSelected] = useState<Record<number, string>>({});

  return (
    <div className="mt-8 space-y-6">
      {questions.map((q, index) => (
        <div key={q.question} className="rounded-2xl border bg-white p-6">
          <p className="font-semibold">
            {index + 1}. {q.question}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {q.options.map((option) => {
              const chosen = selected[index];
              const isCorrect = option === q.answer;
              const isChosen = chosen === option;

              let style = "border-slate-300 hover:bg-slate-50";

              if (chosen && isCorrect) style = "border-green-500 bg-green-100";
              if (chosen && isChosen && !isCorrect)
                style = "border-red-500 bg-red-100";

              return (
                <button
                  key={option}
                  onClick={() =>
                    setSelected((prev) => ({ ...prev, [index]: option }))
                  }
                  className={`rounded-xl border px-4 py-3 text-left ${style}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}