"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { results } from "@/lib/results";
import AdBanner from "@/components/AdBanner";

/* ── Map result positions to field positions on diamond ── */
const FIELD_KEY: Record<string, string> = {
  SP: "P", RP: "P", CP: "P",
  C: "C", "1B": "1B", "2B": "2B", "3B": "3B",
  SS: "SS", LF: "LF", CF: "CF", RF: "RF", DH: "DH", UTIL: "DH",
};

/* ── Field position coordinates for diamond SVG ── */
const FIELD_POSITIONS: { key: string; label: string; x: number; y: number }[] = [
  { key: "LF", label: "左",  x: 30,  y: 48 },
  { key: "CF", label: "中",  x: 130, y: 16 },
  { key: "RF", label: "右",  x: 230, y: 48 },
  { key: "SS", label: "遊",  x: 72,  y: 112 },
  { key: "2B", label: "二",  x: 188, y: 112 },
  { key: "3B", label: "三",  x: 38,  y: 153 },
  { key: "P",  label: "投",  x: 130, y: 140 },
  { key: "1B", label: "一",  x: 222, y: 153 },
  { key: "C",  label: "捕",  x: 130, y: 196 },
  { key: "DH", label: "DH",  x: 224, y: 196 },
];

/* ── Position-specific color themes ── */
const THEME: Record<string, { from: string; to: string; accent: string }> = {
  SP:   { from: "#0f2744", to: "#1c4f80", accent: "#5a9fd4" },
  RP:   { from: "#3d1c0a", to: "#6e3518", accent: "#e08a52" },
  CP:   { from: "#3d0a0a", to: "#701818", accent: "#e05252" },
  C:    { from: "#0a2e28", to: "#16524a", accent: "#48c4b0" },
  "1B": { from: "#3d2808", to: "#6e4a14", accent: "#dea448" },
  "2B": { from: "#1c1840", to: "#32306e", accent: "#8280de" },
  "3B": { from: "#3d0a0a", to: "#701818", accent: "#e06060" },
  SS:   { from: "#0c1c30", to: "#1a3e64", accent: "#5a8ec8" },
  LF:   { from: "#1c2e0a", to: "#385a16", accent: "#82c44a" },
  CF:   { from: "#0a2e14", to: "#165a2c", accent: "#48c46a" },
  RF:   { from: "#3d1c0a", to: "#6e3518", accent: "#e09060" },
  DH:   { from: "#2a0a3d", to: "#4e1870", accent: "#a852e0" },
  UTIL: { from: "#1a1a2e", to: "#2e2e48", accent: "#7a7abe" },
};

function ResultContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const result = results[id];
  const [imgFailed, setImgFailed] = useState(false);

  if (!result) {
    return (
      <main className="min-h-dvh flex flex-col items-center justify-center px-6">
        <p className="text-ink-muted mb-4 text-[15px]">結果が見つかりませんでした</p>
        <Link href="/" className="text-vermillion underline underline-offset-4 text-sm">TOPへ戻る</Link>
      </main>
    );
  }

  const theme = THEME[result.position] || THEME.SP;
  const fieldPosition = FIELD_KEY[result.position] || "P";

  const shareText = `私の野球選手タイプは「${result.title}」(${result.positionLabel}${result.battingOrder ? ` ${result.battingOrder}番` : ""})！\n友達と最強チームを組もう⚾\nあなたは何番？`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`;

  return (
    <main className="min-h-dvh">

      {/* ━━━ Hero section ━━━ */}
      <section
        className="relative w-full px-6 pt-14 pb-10 flex flex-col items-center"
        style={{ background: `linear-gradient(160deg, ${theme.from} 0%, ${theme.to} 100%)` }}
      >
        {/* Back link */}
        <div className="absolute top-4 left-5">
          <Link href="/" className="text-white/40 text-[13px] active:text-white/60">
            ← 戻る
          </Link>
        </div>

        {/* Result image / emoji fallback */}
        <div className="w-44 h-44 flex items-center justify-center mb-6 fade-in">
          {!imgFailed ? (
            <img
              src={`/images/results/${result.id}.webp`}
              alt={result.title}
              className="w-full h-full object-contain drop-shadow-xl"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <span className="text-6xl font-bold drop-shadow-lg" style={{ color: theme.accent }}>
              {result.positionLabel}
            </span>
          )}
        </div>

        {/* Position + batting order */}
        <div className="flex items-center gap-2 mb-3 fade-in-d1">
          <span
            className="text-white text-[11px] font-bold px-3 py-[3px] rounded-full"
            style={{ background: theme.accent }}
          >
            {result.positionLabel}
          </span>
          {result.battingOrder && (
            <span className="text-white/80 text-[11px] font-bold px-3 py-[3px] rounded-full border border-white/25">
              {result.battingOrder}番打者
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-[1.75rem] text-white text-center leading-tight mb-2 fade-in-d2">
          {result.title}
        </h1>
        <p className="text-white/60 text-[13px] text-center max-w-[280px] leading-relaxed fade-in-d2">
          {result.subtitle}
        </p>
      </section>

      {/* ━━━ Traits section ━━━ */}
      <section className="px-6 py-8 bg-paper-warm">
        <div className="max-w-sm mx-auto">
          <p className="text-center text-[11px] text-ink-muted tracking-[0.15em] mb-5">
            あなたの4つの特徴
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {result.traits.map((trait) => (
              <div
                key={trait}
                className="bg-white rounded-md px-3 py-3.5 text-center"
                style={{ borderLeft: `3px solid ${theme.accent}` }}
              >
                <span className="text-[13px] font-medium text-ink">#{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Description section ━━━ */}
      <section className="px-6 py-8">
        <div className="max-w-sm mx-auto">
          {result.description.split("\n\n").map((section, i) => {
            const headingMatch = section.match(/^【(.+?)】\n?([\s\S]*)$/);
            if (!headingMatch) return null;
            const [, heading, body] = headingMatch;
            return (
              <div key={i} className={i > 0 ? "mt-6" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-[11px] text-ink-muted tracking-[0.12em] shrink-0">{heading}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-ink-soft text-[15px] leading-[1.95]">{body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ━━━ Compare section ━━━ */}
      <section className="px-6 py-6 bg-paper-warm">
        <div className="max-w-sm mx-auto">
          <p className="text-[11px] text-ink-muted tracking-[0.1em] mb-2.5">似ているタイプの選手</p>
          <div className="bg-white border border-border rounded-md px-4 py-3.5 flex items-center gap-3">
            <span className="text-2xl">🏅</span>
            <p className="text-ink font-medium text-[15px] leading-snug">{result.comparePlayer}</p>
          </div>
        </div>
      </section>

      {/* ━━━ Team Diamond section ━━━ */}
      <section className="px-6 py-8 bg-paper-warm">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] text-ink-muted tracking-[0.12em]">チームを組もう</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Diamond SVG */}
          <div className="flex justify-center mb-5">
            <svg viewBox="0 0 260 215" width="260" height="215">
              {/* Outfield arc */}
              <path
                d="M12 58 Q130 -8 248 58"
                fill="none" stroke="#D1C7B8" strokeWidth="0.8" strokeDasharray="4 4"
              />
              {/* Diamond basepaths */}
              <path
                d="M130 192 L216 150 L130 106 L44 150 Z"
                fill="none" stroke="#D1C7B8" strokeWidth="1.2"
              />

              {/* Position nodes */}
              {FIELD_POSITIONS.map((pos) => {
                const isMine = pos.key === fieldPosition;
                return (
                  <g key={pos.key}>
                    {/* Pulse ring for user's position */}
                    {isMine && (
                      <circle
                        cx={pos.x} cy={pos.y} r="18"
                        fill="none" stroke={theme.accent}
                        strokeWidth="1.5" opacity="0.4"
                        className="diamond-pulse"
                      />
                    )}
                    {/* Node circle */}
                    <circle
                      cx={pos.x} cy={pos.y}
                      r={isMine ? 17 : 14}
                      fill={isMine ? theme.accent : "#ffffff"}
                      stroke={isMine ? theme.accent : "#D1C7B8"}
                      strokeWidth={isMine ? 0 : 1.5}
                      strokeDasharray={isMine ? "0" : "4 3"}
                    />
                    {/* Label */}
                    <text
                      x={pos.x} y={pos.y}
                      textAnchor="middle" dominantBaseline="central"
                      fill={isMine ? "#ffffff" : "#8C8377"}
                      fontSize={isMine ? "12" : "11"}
                      fontWeight={isMine ? "700" : "400"}
                    >
                      {isMine ? pos.label : "?"}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Team CTA text */}
          <p className="text-center font-display font-bold text-[1.05rem] text-ink mb-1.5">
            あなたは<span style={{ color: theme.accent }}>{result.positionLabel}</span>を担当！
          </p>
          <p className="text-center text-ink-muted text-[12px] leading-relaxed">
            残り8ポジション、友達に診断させて<br />
            <span className="font-medium text-ink-soft">最強のチームを完成させよう</span>
          </p>
        </div>
      </section>

      {/* ━━━ Share section ━━━ */}
      <section className="px-6 pt-8 pb-12">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] text-ink-muted tracking-[0.12em]">シェアして仲間を集めよう</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn flex items-center justify-center gap-2.5 w-full bg-ink text-white font-bold text-[15px] py-[14px] rounded-md"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Xでシェアして仲間を集める
          </a>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: "野球選手タイプ診断", text: shareText, url: siteUrl });
              } else {
                navigator.clipboard.writeText(`${shareText} ${siteUrl}`);
                alert("コピーしました！");
              }
            }}
            className="share-btn flex items-center justify-center gap-2 w-full bg-white border border-border text-ink font-bold text-[15px] py-[14px] rounded-md mt-2.5"
          >
            📋 結果をコピー
          </button>

          {/* Banner ad — below share, above links */}
          <div className="mt-8 mb-6">
            <AdBanner size="rectangle" />
          </div>

          {/* Retry / links */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/quiz"
              className="text-vermillion text-[14px] font-medium underline underline-offset-4"
            >
              もう一度診断する
            </Link>
            <Link href="/results" className="text-ink-muted text-[12px] underline underline-offset-4">
              結果一覧を見る
            </Link>
            <Link href="/" className="text-ink-muted/40 text-[12px]">
              ← トップへ戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh flex items-center justify-center">
          <span className="text-ink-muted text-sm">読み込み中...</span>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
