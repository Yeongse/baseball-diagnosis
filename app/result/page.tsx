"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { results } from "@/lib/results";

function ResultContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const result = results[id];

  if (!result) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-5">
        <p className="text-ink-muted mb-4">結果が見つかりませんでした</p>
        <Link href="/" className="text-vermillion underline underline-offset-4">TOPへ戻る</Link>
      </main>
    );
  }

  const shareText = `私の野球選手タイプは「${result.title}」(${result.positionLabel}${result.battingOrder ? ` ${result.battingOrder}番` : ""})でした！あなたは？`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-16 relative overflow-hidden">

      {/* Background diamond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="diamond-outline absolute w-[300px] h-[300px] -right-20 top-[20%] opacity-40" />
      </div>

      {/* Label */}
      <p className="text-ink-muted text-xs tracking-[0.25em] uppercase mb-6 animate-appear-up opacity-0 stagger-1">
        診断結果
      </p>

      {/* Emoji */}
      <div className="text-6xl mb-5 animate-appear-up opacity-0 stagger-2">
        {result.emoji}
      </div>

      {/* Position + batting order badges */}
      <div className="flex items-center gap-2 mb-5 animate-appear-up opacity-0 stagger-2">
        <span className={`${result.color} text-white text-xs font-bold px-3 py-1 rounded-sm`}>
          {result.positionLabel}
        </span>
        {result.battingOrder && (
          <span className="bg-ink text-paper text-xs font-bold px-3 py-1 rounded-sm">
            {result.battingOrder}番打者
          </span>
        )}
      </div>

      {/* Result card */}
      <div className="w-full max-w-md result-card rounded-sm p-7 mb-6 animate-appear-up opacity-0 stagger-3">

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl text-ink text-center leading-tight mb-1">
          {result.title}
        </h1>
        <p className="text-ink-muted text-sm text-center mb-6">{result.subtitle}</p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <div className="w-1.5 h-1.5 bg-vermillion rotate-45" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Description */}
        <p className="text-ink-soft text-sm leading-[1.9] mb-6">
          {result.description}
        </p>

        {/* Traits */}
        <div className="flex flex-wrap gap-2 mb-6">
          {result.traits.map((trait) => (
            <span
              key={trait}
              className="text-xs border border-border text-ink-muted px-3 py-1.5 rounded-sm"
            >
              #{trait}
            </span>
          ))}
        </div>

        {/* Compare player */}
        <div className="bg-paper-warm border border-border rounded-sm px-4 py-3 flex items-start gap-3">
          <span className="text-xl mt-0.5">🏅</span>
          <div>
            <p className="text-ink-muted text-xs mb-0.5">似ているタイプ</p>
            <p className="text-ink font-medium text-sm">{result.comparePlayer}</p>
          </div>
        </div>
      </div>

      {/* Share buttons */}
      <div className="w-full max-w-md space-y-3 animate-appear-up opacity-0 stagger-4">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn flex items-center justify-center gap-3 w-full bg-ink hover:bg-ink-soft text-paper font-bold py-4 rounded-sm transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-sm">X（Twitter）でシェア</span>
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
          className="share-btn flex items-center justify-center gap-3 w-full bg-white/60 border border-border hover:border-ink-muted text-ink font-bold py-4 rounded-sm transition-colors"
        >
          <span className="text-sm">📋 結果をコピー</span>
        </button>
      </div>

      {/* Retry */}
      <div className="mt-10 flex flex-col items-center gap-3 animate-appear-up opacity-0 stagger-5">
        <Link
          href="/quiz"
          className="text-vermillion hover:text-vermillion-dark text-sm font-medium underline underline-offset-4 transition-colors"
        >
          もう一度診断する
        </Link>
        <Link
          href="/"
          className="text-ink-muted/50 hover:text-ink-muted text-xs transition-colors"
        >
          ← トップへ戻る
        </Link>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-ink-muted text-sm">読み込み中...</span>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
