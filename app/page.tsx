"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-20 relative overflow-hidden">

      {/* Background diamond motifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="diamond-outline absolute w-[420px] h-[420px] -right-32 top-1/2 -translate-y-1/2 opacity-60" />
        <div className="diamond-outline absolute w-[180px] h-[180px] -left-12 top-[15%] opacity-40" />
        <div className="diamond-outline absolute w-[100px] h-[100px] right-[20%] bottom-[10%] opacity-30" />
      </div>

      {/* Small diamond mark */}
      <div className="diamond-sm mb-10 animate-appear" />

      {/* English label */}
      <p
        className="text-ink-muted text-xs tracking-[0.35em] uppercase mb-5 animate-appear-up opacity-0 stagger-1"
      >
        Baseball Player Diagnosis
      </p>

      {/* Title */}
      <h1 className="font-display text-5xl md:text-7xl text-ink text-center leading-[1.15] tracking-wide animate-appear-up opacity-0 stagger-2">
        野球選手<br />
        <span className="text-vermillion">タイプ診断</span>
      </h1>

      {/* Red accent rule */}
      <div className="rule-vermillion mx-auto mt-7 mb-8 animate-appear-up opacity-0 stagger-3" />

      {/* Subtitle */}
      <p className="text-ink-soft text-center text-sm leading-relaxed max-w-sm font-body animate-appear-up opacity-0 stagger-3">
        10問の質問に答えるだけで、<br />
        あなたの野球選手タイプが判明。<br />
        <span className="text-vermillion font-medium">55種類</span>の結果からぴったりの選手像を診断します。
      </p>

      {/* Stats */}
      <div className="flex items-center gap-10 mt-10 animate-appear-up opacity-0 stagger-4">
        {[
          { num: "10", unit: "問", label: "質問数" },
          { num: "55", unit: "種", label: "結果" },
          { num: "2", unit: "分", label: "所要時間" },
        ].map((s, i) => (
          <div key={s.label} className="text-center">
            <div className="flex items-baseline justify-center gap-0.5">
              <span className="font-accent text-3xl text-ink">{s.num}</span>
              <span className="text-sm text-ink-muted">{s.unit}</span>
            </div>
            <span className="text-[11px] text-ink-muted mt-1 block">{s.label}</span>
            {i < 2 && (
              <span className="sr-only">,</span>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 animate-appear-up opacity-0 stagger-5">
        <Link
          href="/quiz"
          className="group inline-flex items-center gap-3 bg-vermillion hover:bg-vermillion-dark text-white font-bold text-lg px-10 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          <span className="tracking-wider font-display text-xl">診断スタート</span>
          <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* Position tags */}
      <div className="mt-16 flex flex-wrap justify-center gap-2 max-w-md animate-appear-up opacity-0 stagger-6">
        {["先発投手", "クローザー", "4番打者", "遊撃手", "1番打者", "DH", "リリーフ", "捕手"].map((pos) => (
          <span
            key={pos}
            className="text-xs border border-border text-ink-muted px-3 py-1 rounded-sm"
          >
            {pos}
          </span>
        ))}
        <span className="text-xs text-ink-muted/60 px-2 py-1">ほか</span>
      </div>

      {/* Footer note */}
      <p className="mt-14 text-ink-muted/50 text-[11px] text-center animate-appear-up opacity-0 stagger-7">
        ※ 診断結果の前に広告が表示されます
      </p>
    </main>
  );
}
