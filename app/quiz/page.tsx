"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, ScoreKey } from "@/lib/questions";
import { computeResultId, Scores } from "@/lib/diagnosis";

const initialScores: Scores = { p: 0, pw: 0, sp: 0, cl: 0, ld: 0 };

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>({ ...initialScores });
  const [selected, setSelected] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"in" | "out">("in");

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    if (selected !== null || animating) return;
    setSelected(optionIndex);

    const option = question.options[optionIndex];
    const newScores = { ...scores };
    (Object.entries(option.scores) as [ScoreKey, number][]).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });

    setTimeout(() => {
      setAnimating(true);
      setDirection("out");
      setTimeout(() => {
        if (current + 1 >= questions.length) {
          const resultId = computeResultId(newScores);
          sessionStorage.setItem("diagnosisResult", resultId);
          router.push(`/ad?id=${resultId}`);
        } else {
          setScores(newScores);
          setCurrent((c) => c + 1);
          setSelected(null);
          setDirection("in");
          setAnimating(false);
        }
      }, 300);
    }, 400);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-12">

      {/* Header: question count + progress */}
      <div className="w-full max-w-lg mb-10">
        <div className="flex items-baseline justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="font-accent text-2xl text-ink">Q.{current + 1}</span>
            <span className="text-ink-muted text-xs">/ {questions.length}</span>
          </div>
          <span className="text-ink-muted text-xs">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-[2px] bg-border rounded-full overflow-hidden">
          <div
            className="progress-bar h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div
        className={`w-full max-w-lg transition-all duration-300 ${
          direction === "out"
            ? "opacity-0 translate-x-3"
            : "opacity-100 translate-x-0"
        }`}
      >
        {/* Question text */}
        <div className="mb-8">
          <p className="text-ink-muted text-xs mb-2">
            {question.sub || "最もあてはまるものを選んでください"}
          </p>
          <h2 className="font-display text-xl md:text-2xl text-ink leading-relaxed">
            {question.text}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`option-card w-full text-left px-5 py-4 rounded-sm flex items-center gap-4
                ${selected === i
                  ? "!border-vermillion !bg-vermillion/[0.06] ring-1 ring-vermillion/20"
                  : selected !== null
                    ? "opacity-35 cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
            >
              <span
                className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-200
                  ${selected === i
                    ? "bg-vermillion text-white"
                    : "border border-border text-ink-muted"
                  }
                `}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span
                className={`text-sm leading-relaxed ${
                  selected === i ? "text-ink font-medium" : "text-ink-soft"
                }`}
              >
                {opt.text}
              </span>
              {selected === i && (
                <svg className="ml-auto shrink-0 text-vermillion" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Diamond dot progress */}
      <div className="flex items-center gap-2 mt-12">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${
              i < current
                ? "w-2 h-2 bg-vermillion rotate-45"
                : i === current
                  ? "w-3 h-3 bg-vermillion rotate-45"
                  : "w-1.5 h-1.5 bg-border rotate-45"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
