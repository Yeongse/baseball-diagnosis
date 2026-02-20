"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex flex-col px-6 pt-10 pb-10">

      {/* Spacer — push content to visual center */}
      <div className="flex-1 min-h-[24px]" />

      {/* App icon + headline block */}
      <div className="fade-in flex flex-col items-center text-center">
        {/* App icon */}
        <div className="w-[280px] mb-6">
          <Image
            src="/app_icon.png"
            alt="Scout Report"
            width={820}
            height={575}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Scout Report badge */}
        <div className="scout-stamp text-navy mb-5">
          Scout Report
        </div>

        <h1 className="font-display font-extrabold text-[2.4rem] leading-[1.1] text-ink mb-3">
          野球選手<br />
          <span className="text-navy">タイプ診断</span>
        </h1>
        <div className="w-12 h-[2px] bg-gold mb-5" />
        <p className="text-ink-soft text-[15px] leading-relaxed max-w-[300px]">
          10問の質問に答えるだけ。<br />
          AIが<span className="font-accent text-gold text-lg">90</span>種類以上の中から<br />
          あなたの選手タイプを<span className="text-navy font-bold">ジャッジ！</span>
        </p>
      </div>

      {/* Stats row */}
      <div className="flex items-end justify-center gap-10 mt-8 fade-in-d1">
        {[
          { num: "10", label: "問" },
          { num: "90+", label: "種" },
          { num: "2", label: "分" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="font-accent text-[1.6rem] leading-none text-navy">{s.num}</span>
            <span className="text-[11px] text-ink-muted mt-1">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[28px]" />

      {/* CTA */}
      <div className="fade-in-d2">
        <Link
          href="/quiz"
          className="group flex items-center justify-center gap-2 w-full bg-navy active:bg-navy-dark text-white font-bold text-[17px] py-4 rounded-md transition-colors"
        >
          <span className="font-display tracking-wider text-[1.15rem]">診断スタート</span>
          <span className="text-lg transition-transform group-active:translate-x-0.5">→</span>
        </Link>
      </div>

      {/* Team challenge card */}
      <div className="mt-6 border border-border rounded-lg overflow-hidden fade-in-d3 bg-white">
        <div className="px-4 py-4 flex items-center gap-4">
          {/* Mini diamond icon */}
          <div className="shrink-0 relative w-12 h-12">
            <svg viewBox="0 0 48 48" className="w-full h-full">
              <path d="M24 6 L42 24 L24 42 L6 24 Z" fill="none" stroke="#1B3A5C" strokeWidth="1.5" opacity="0.4" />
              {[
                [24, 8], [14, 18], [34, 18], [10, 28], [24, 24], [38, 28], [24, 38],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill={i === 4 ? "#C5973E" : "#D6CCBC"} opacity={i === 4 ? 1 : 0.5} />
              ))}
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-ink font-bold text-[14px] leading-snug">
              友達と<span className="text-navy">最強チーム</span>を組もう
            </p>
            <p className="text-ink-muted text-[11px] mt-0.5 leading-relaxed">
              診断結果をシェアして9人揃えよう
            </p>
          </div>
          <span className="text-ink-muted/30 text-lg shrink-0">›</span>
        </div>
      </div>

      {/* Position tags */}
      <div className="flex flex-wrap justify-center gap-1.5 mt-5 fade-in-d4">
        {["先発投手", "クローザー", "4番打者", "遊撃手", "1番打者", "DH", "捕手"].map((pos) => (
          <span key={pos} className="text-[11px] text-ink-muted/70 border border-border px-2.5 py-0.5 rounded-full">
            {pos}
          </span>
        ))}
        <span className="text-[11px] text-ink-muted/40 px-1 py-0.5">ほか</span>
      </div>

      {/* Results list link */}
      <div className="text-center mt-5 fade-in-d5">
        <Link
          href="/results"
          className="text-ink-muted text-[13px] underline underline-offset-4 active:text-ink-soft"
        >
          結果一覧を見る
        </Link>
      </div>

      {/* Footer note */}
      <p className="text-ink-muted/40 text-[10px] text-center mt-5">
        ※ 診断結果の前に広告が表示されます
      </p>
    </main>
  );
}
