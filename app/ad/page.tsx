"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";

const ADSTERRA_ZONE_ID = "YOUR_ADSTERRA_ZONE_ID_HERE";
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

  const circumference = 2 * Math.PI * 24;

  return (
    <main className="fixed inset-0 z-50 bg-paper/95 backdrop-blur-sm flex flex-col items-center justify-center px-5">

      {/* Close / countdown */}
      <div className="absolute top-6 right-6">
        {canClose ? (
          <button
            onClick={handleClose}
            className="flex items-center gap-2 bg-vermillion hover:bg-vermillion-dark text-white px-5 py-2.5 rounded-sm transition-all text-sm font-bold hover:-translate-y-0.5 active:translate-y-0"
          >
            結果を見る →
          </button>
        ) : (
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="absolute inset-0 -rotate-90" width="56" height="56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="#D1C7B8" strokeWidth="2" />
              <circle
                cx="28" cy="28" r="24"
                fill="none"
                stroke="#C93A2D"
                strokeWidth="2"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={`${circumference - (seconds / COUNTDOWN_SEC) * circumference}`}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <span className="font-accent text-2xl text-ink">{seconds}</span>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="text-center mb-10">
        <div className="diamond-sm mx-auto mb-6" />
        <h2 className="font-display text-2xl text-ink mb-2">結果を準備中…</h2>
        <p className="text-ink-muted text-sm">広告をご覧いただいた後、結果をお届けします</p>
      </div>

      {/* Ad container */}
      <div
        id="adsterra-container"
        className="w-full max-w-sm bg-white/50 border border-border rounded-sm overflow-hidden"
        style={{ minHeight: "250px" }}
      >
        {ADSTERRA_ZONE_ID !== "YOUR_ADSTERRA_ZONE_ID_HERE" ? (
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
          <div className="flex flex-col items-center justify-center h-64 text-ink-muted text-sm text-center p-6">
            <p className="mb-1">AdsterraのゾーンIDを</p>
            <p><code className="text-vermillion/70 text-xs">app/ad/page.tsx</code> に設定してください</p>
          </div>
        )}
      </div>

      {/* Skip text */}
      <p className="mt-6 text-ink-muted/50 text-xs">
        {canClose ? "" : `${seconds}秒後にスキップできます`}
      </p>
    </main>
  );
}

export default function AdPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-ink-muted text-sm">読み込み中...</span>
      </div>
    }>
      <AdContent />
    </Suspense>
  );
}
