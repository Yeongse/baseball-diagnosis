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
      }, 280);
    }, 350);
  };

  return (
    <main className="min-h-dvh flex flex-col px-5 pt-12 pb-8">

      {/* Progress header */}
      <div className="w-full max-w-lg mx-auto mb-8">
        <div className="flex items-baseline justify-between mb-2.5">
          <span className="font-accent text-xl text-ink">Q.{current + 1}</span>
          <span className="text-ink-muted text-[11px]">{current + 1} / {questions.length}</span>
        </div>
        <div className="h-[3px] bg-paper-warm rounded-full overflow-hidden">
          <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question area — grows to fill */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-lg mx-auto">
        <div
          className={`transition-all duration-280 ${
            direction === "out" ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          {/* Question */}
          <div className="mb-7">
            <p className="text-ink-muted text-[12px] mb-1.5">
              {question.sub || "最もあてはまるものを選んでください"}
            </p>
            <h2 className="font-display text-[1.3rem] text-ink leading-snug">
              {question.text}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`option-card w-full text-left px-4 py-[14px] rounded-md flex items-center gap-3.5
                  ${selected === i
                    ? "!border-vermillion !bg-[#fdf2f1]"
                    : selected !== null
                      ? "opacity-30 !cursor-default"
                      : "cursor-pointer"
                  }
                `}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 transition-colors duration-150
                    ${selected === i
                      ? "bg-vermillion text-white"
                      : "border-[1.5px] border-border text-ink-muted"
                    }
                  `}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className={`text-[15px] leading-snug ${selected === i ? "text-ink font-medium" : "text-ink-soft"}`}>
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
      </div>

      {/* Dot progress at bottom */}
      <div className="flex items-center justify-center gap-[6px] pt-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i < current
                ? "w-[7px] h-[7px] bg-vermillion"
                : i === current
                  ? "w-[9px] h-[9px] bg-vermillion"
                  : "w-[5px] h-[5px] bg-border"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
