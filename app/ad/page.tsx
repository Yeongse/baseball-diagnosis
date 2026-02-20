"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";

const ADSTERRA_ZONE_ID = process.env.NEXT_PUBLIC_ADSTERRA_INTERSTITIAL_ZONE_ID ?? "";
const COUNTDOWN_SEC = 5;

function AdContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resultId = searchParams.get("id") || "";
  const [seconds, setSeconds] = useState(COUNTDOWN_SEC);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (seconds <= 0) {
      setCanClose(true);
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const handleClose = () => {
    router.push(`/result?id=${resultId}`);
  };

  const circumference = 2 * Math.PI * 22;

  return (
    <main className="fixed inset-0 z-50 bg-paper flex flex-col items-center justify-center px-6">

      {/* Close / countdown — top right */}
      <div className="absolute top-5 right-5">
        {canClose ? (
          <button
            onClick={handleClose}
            className="bg-navy active:bg-navy-dark text-white text-[14px] font-bold px-5 py-2.5 rounded-md transition-colors"
          >
            レポートを見る →
          </button>
        ) : (
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="absolute inset-0 -rotate-90" width="48" height="48">
              <circle cx="24" cy="24" r="22" fill="none" stroke="#D6CCBC" strokeWidth="2" />
              <circle
                cx="24" cy="24" r="22"
                fill="none"
                stroke="#C5973E"
                strokeWidth="2"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={`${circumference - (seconds / COUNTDOWN_SEC) * circumference}`}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <span className="font-accent text-xl text-ink">{seconds}</span>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="text-center mb-8">
        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
          Scout Report
        </p>
        <p className="font-display text-xl text-ink mb-2">レポートを作成中…</p>
        <p className="text-ink-muted text-[13px]">広告表示後にレポートをお届けします</p>
      </div>

      {/* Ad container */}
      <div
        id="adsterra-container"
        className="w-full max-w-sm bg-white border border-border rounded-md overflow-hidden"
        style={{ minHeight: "250px" }}
      >
        {ADSTERRA_ZONE_ID.length > 0 ? (
          <>
            <Script
              id="adsterra-ad"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  atOptions = {
                    'key': '${ADSTERRA_ZONE_ID}',
                    'format': 'iframe',
                    'height': 250,
                    'width': 300,
                    'params': {}
                  };
                `,
              }}
            />
            <Script
              src={`//www.highperformanceformat.com/${ADSTERRA_ZONE_ID}/invoke.js`}
              strategy="afterInteractive"
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-ink-muted text-[13px] text-center p-6">
            <p className="mb-1">広告枠（interstitial）</p>
            <p><code className="text-navy/40 text-[10px]">.env → NEXT_PUBLIC_ADSTERRA_INTERSTITIAL_ZONE_ID</code></p>
          </div>
        )}
      </div>

      {/* Skip text */}
      <p className="mt-5 text-ink-muted/40 text-[11px]">
        {canClose ? "" : `${seconds}秒後にスキップできます`}
      </p>
    </main>
  );
}

export default function AdPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh flex items-center justify-center">
          <span className="text-ink-muted text-sm">読み込み中...</span>
        </div>
      }
    >
      <AdContent />
    </Suspense>
  );
}
