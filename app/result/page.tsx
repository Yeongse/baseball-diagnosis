"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

function ResultContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const result = results[id];
  const [imgFailed, setImgFailed] = useState(false);

  if (!result) {
    return (
      <main className="min-h-dvh flex flex-col items-center justify-center px-6">
        <p className="text-ink-muted mb-4 text-[15px]">結果が見つかりませんでした</p>
        <Link href="/" className="text-navy underline underline-offset-4 text-sm">TOPへ戻る</Link>
      </main>
    );
  }

  const fieldPosition = FIELD_KEY[result.position] || "P";

  const shareText = `【Scout Report】\n選手タイプ：${result.title}（${result.positionLabel}${result.battingOrder ? ` ${result.battingOrder}番` : ""}）\n${result.traits.map(t => `#${t}`).join(" ")}\n\n友達と最強チームを組もう`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`;

  return (
    <main className="min-h-dvh bg-paper">

      {/* ━━━ Scout Report Header ━━━ */}
      <section className="relative w-full bg-navy-dark px-6 pt-14 pb-6">
        {/* Back link */}
        <div className="absolute top-4 left-5">
          <Link href="/" className="text-white/40 text-[13px] active:text-white/60">
            ← 戻る
          </Link>
        </div>

        <div className="max-w-sm mx-auto flex flex-col items-center">
          {/* App icon small */}
          <Image
            src="/app_icon.png"
            alt="Scout Report"
            width={40}
            height={40}
            className="mb-3 opacity-60"
          />
          <p className="text-gold text-[11px] tracking-[0.25em] font-bold uppercase mb-1 fade-in">
            Scout Report
          </p>
          <p className="text-white/40 text-[10px] tracking-wider fade-in">
            Player Type Assessment
          </p>
        </div>
      </section>

      {/* ━━━ Scout Report Card ━━━ */}
      <section className="px-5 -mt-1">
        <div className="max-w-sm mx-auto bg-white border border-border rounded-lg overflow-hidden shadow-sm">

          {/* Report header with position badge */}
          <div className="px-5 pt-5 pb-4 border-b border-dashed border-border">
            <div className="flex items-center gap-2 mb-3 fade-in">
              <span className="text-[11px] font-bold px-3 py-[3px] rounded-sm bg-navy text-white">
                {result.positionLabel}
              </span>
              {result.battingOrder && (
                <span className="text-[11px] font-bold px-3 py-[3px] rounded-sm border border-navy text-navy">
                  {result.battingOrder}番打者
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold text-[1.6rem] text-ink leading-tight mb-1.5 fade-in-d1">
              {result.title}
            </h1>
            <p className="text-ink-muted text-[13px] leading-relaxed fade-in-d1">
              {result.subtitle}
            </p>
          </div>

          {/* Result image */}
          <div className="relative aspect-[3/4] w-full bg-paper-light fade-in-d2">
            {!imgFailed ? (
              <img
                src={`/images/results/${result.id}.webp`}
                alt={result.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-navy/30">
                  {result.positionLabel}
                </span>
              </div>
            )}
          </div>

          {/* Traits — scout evaluation items */}
          <div className="px-5 py-4 border-t border-dashed border-border">
            <p className="text-[10px] text-ink-muted tracking-[0.15em] uppercase mb-3 font-bold">
              Evaluation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {result.traits.map((trait) => (
                <div
                  key={trait}
                  className="bg-paper-light rounded px-3 py-2.5 text-center border-l-[3px] border-gold"
                >
                  <span className="text-[13px] font-medium text-ink">#{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar player */}
          <div className="px-5 py-4 border-t border-dashed border-border">
            <p className="text-[10px] text-ink-muted tracking-[0.15em] uppercase mb-2.5 font-bold">
              Comparable Player
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xl">🏅</span>
              <p className="text-ink font-medium text-[14px] leading-snug">{result.comparePlayer}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━ Detailed Report ━━━ */}
      <section className="px-5 mt-6">
        <div className="max-w-sm mx-auto bg-white border border-border rounded-lg overflow-hidden shadow-sm">
          <div className="px-5 pt-5 pb-1">
            <p className="text-[10px] text-ink-muted tracking-[0.15em] uppercase font-bold mb-1">
              Detailed Report
            </p>
          </div>

          <div className="px-5 pb-5">
            {result.description.split("\n\n").map((section, i) => {
              const headingMatch = section.match(/^【(.+?)】\n?([\s\S]*)$/);
              if (!headingMatch) return null;
              const [, heading, body] = headingMatch;
              return (
                <div key={i} className={i > 0 ? "mt-5" : "mt-3"}>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-[12px] text-navy font-bold tracking-wider">{heading}</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <p className="text-ink-soft text-[14px] leading-[1.95] pl-3.5">{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ Team Diamond section ━━━ */}
      <section className="px-5 mt-6">
        <div className="max-w-sm mx-auto bg-white border border-border rounded-lg overflow-hidden shadow-sm">
          <div className="px-5 pt-5 pb-1">
            <p className="text-[10px] text-ink-muted tracking-[0.15em] uppercase font-bold">
              Team Formation
            </p>
          </div>

          {/* Diamond SVG */}
          <div className="flex justify-center py-4">
            <svg viewBox="0 0 260 215" width="240" height="200">
              {/* Outfield arc */}
              <path
                d="M12 58 Q130 -8 248 58"
                fill="none" stroke="#D6CCBC" strokeWidth="0.8" strokeDasharray="4 4"
              />
              {/* Diamond basepaths */}
              <path
                d="M130 192 L216 150 L130 106 L44 150 Z"
                fill="none" stroke="#D6CCBC" strokeWidth="1.2"
              />

              {/* Position nodes */}
              {FIELD_POSITIONS.map((pos) => {
                const isMine = pos.key === fieldPosition;
                return (
                  <g key={pos.key}>
                    {isMine && (
                      <circle
                        cx={pos.x} cy={pos.y} r="18"
                        fill="none" stroke="#C5973E"
                        strokeWidth="1.5" opacity="0.4"
                        className="diamond-pulse"
                      />
                    )}
                    <circle
                      cx={pos.x} cy={pos.y}
                      r={isMine ? 17 : 14}
                      fill={isMine ? "#1B3A5C" : "#ffffff"}
                      stroke={isMine ? "#1B3A5C" : "#D6CCBC"}
                      strokeWidth={isMine ? 0 : 1.5}
                      strokeDasharray={isMine ? "0" : "4 3"}
                    />
                    <text
                      x={pos.x} y={pos.y}
                      textAnchor="middle" dominantBaseline="central"
                      fill={isMine ? "#ffffff" : "#7A8694"}
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

          <div className="px-5 pb-5 text-center">
            <p className="font-display font-bold text-[1rem] text-ink mb-1">
              あなたは<span className="text-navy">{result.positionLabel}</span>を担当！
            </p>
            <p className="text-ink-muted text-[12px] leading-relaxed">
              残り8ポジション、友達に診断させて<br />
              <span className="font-medium text-ink-soft">最強のチームを完成させよう</span>
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ Share section ━━━ */}
      <section className="px-5 pt-8 pb-12">
        <div className="max-w-sm mx-auto">
          <p className="text-[10px] text-ink-muted tracking-[0.15em] uppercase font-bold text-center mb-4">
            Share Your Report
          </p>

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
                navigator.share({ title: "野球選手タイプ診断 — Scout Report", text: shareText, url: siteUrl });
              } else {
                navigator.clipboard.writeText(`${shareText} ${siteUrl}`);
                alert("コピーしました！");
              }
            }}
            className="share-btn flex items-center justify-center gap-2 w-full bg-white border border-border text-ink font-bold text-[15px] py-[14px] rounded-md mt-2.5"
          >
            結果をコピー
          </button>

          {/* Banner ad — below share, above links */}
          <div className="mt-8 mb-6">
            <AdBanner size="rectangle" />
          </div>

          {/* Retry / links */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/quiz"
              className="text-navy text-[14px] font-medium underline underline-offset-4"
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
