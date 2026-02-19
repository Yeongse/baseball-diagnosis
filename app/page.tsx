"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex flex-col px-6 pt-16 pb-10">

      {/* Spacer — push content to visual center */}
      <div className="flex-1 min-h-[40px]" />

      {/* Headline block */}
      <div className="fade-in">
        <p className="text-ink-muted text-[11px] tracking-[0.3em] uppercase mb-4">
          Baseball Player Diagnosis
        </p>
        <h1 className="font-display font-extrabold text-[2.8rem] leading-[1.1] text-ink mb-3">
          野球選手<br />
          <span className="text-vermillion">タイプ診断</span>
        </h1>
        <div className="w-10 h-[2px] bg-vermillion mb-6" />
        <p className="text-ink-soft text-[15px] leading-relaxed max-w-[300px]">
          10問の質問に答えるだけ。<br />
          <span className="text-vermillion font-medium">55種類</span>の中から、<br />
          あなたにぴったりの選手像を診断。
        </p>
        <p className="text-ink-muted text-[13px] mt-4 leading-relaxed">
          友達と<span className="font-bold text-ink">9人揃えて最強チーム</span>を組もう。
        </p>
      </div>

      {/* Stats row */}
      <div className="flex items-end gap-8 mt-10 fade-in-d1">
        {[
          { num: "10", unit: "問" },
          { num: "55", unit: "種" },
          { num: "2", unit: "分" },
        ].map((s) => (
          <div key={s.unit} className="flex items-baseline gap-0.5">
            <span className="font-accent text-[1.7rem] leading-none text-ink">{s.num}</span>
            <span className="text-[13px] text-ink-muted">{s.unit}</span>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[32px]" />

      {/* CTA */}
      <div className="fade-in-d2">
        <Link
          href="/quiz"
          className="group flex items-center justify-center gap-2 w-full bg-vermillion active:bg-vermillion-dark text-white font-bold text-[17px] py-4 rounded-md transition-colors"
        >
          <span className="font-display tracking-wider text-[1.15rem]">診断スタート</span>
          <span className="text-lg transition-transform group-active:translate-x-0.5">→</span>
        </Link>
      </div>

      {/* Team challenge card */}
      <div className="mt-7 border border-border/80 rounded-lg overflow-hidden fade-in-d3">
        <div className="px-4 py-4 flex items-center gap-4">
          {/* Mini diamond icon */}
          <div className="shrink-0 relative w-12 h-12">
            <svg viewBox="0 0 48 48" className="w-full h-full">
              <path d="M24 6 L42 24 L24 42 L6 24 Z" fill="none" stroke="#C93A2D" strokeWidth="1.5" opacity="0.5" />
              {[
                [24, 8], [14, 18], [34, 18], [10, 28], [24, 24], [38, 28], [24, 38],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill={i === 4 ? "#C93A2D" : "#D1C7B8"} opacity={i === 4 ? 1 : 0.6} />
              ))}
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-ink font-bold text-[14px] leading-snug">
              友達と<span className="text-vermillion">最強チーム</span>を組もう
            </p>
            <p className="text-ink-muted text-[11px] mt-0.5 leading-relaxed">
              診断結果をシェアして9人揃えよう
            </p>
          </div>
          <span className="text-ink-muted/30 text-lg shrink-0">›</span>
        </div>
      </div>

      {/* Position tags */}
      <div className="flex flex-wrap gap-1.5 mt-6 fade-in-d4">
        {["先発投手", "クローザー", "4番打者", "遊撃手", "1番打者", "DH", "捕手"].map((pos) => (
          <span key={pos} className="text-[11px] text-ink-muted/70 border border-border/70 px-2.5 py-0.5 rounded-full">
            {pos}
          </span>
        ))}
        <span className="text-[11px] text-ink-muted/40 px-1 py-0.5">ほか</span>
      </div>

      {/* Results list link */}
      <Link
        href="/results"
        className="text-ink-muted text-[13px] underline underline-offset-4 mt-6 fade-in-d5 active:text-ink-soft"
      >
        結果一覧を見る
      </Link>

      {/* Footer note */}
      <p className="text-ink-muted/40 text-[10px] mt-6">
        ※ 診断結果の前に広告が表示されます
      </p>
    </main>
  );
}
