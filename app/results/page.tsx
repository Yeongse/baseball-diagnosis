"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { results, type Result } from "@/lib/results";
import AdBanner from "@/components/AdBanner";

/* ── Position group definitions ── */
const GROUPS: { label: string; labelEn: string; positions: string[] }[] = [
  { label: "投手",   labelEn: "PITCHERS",  positions: ["SP", "RP", "CP"] },
  { label: "捕手",   labelEn: "CATCHER",   positions: ["C"] },
  { label: "内野手", labelEn: "INFIELDERS", positions: ["1B", "2B", "3B", "SS"] },
  { label: "外野手", labelEn: "OUTFIELDERS", positions: ["LF", "CF", "RF"] },
  { label: "指名打者", labelEn: "DH",       positions: ["DH"] },
  { label: "ユーティリティ", labelEn: "UTILITY", positions: ["UTIL"] },
];

/** Show native ad after these group indices (0-based): after 投手, after 外野手 */
const AD_AFTER_GROUPS = new Set([0, 3]);

/* Gather results into groups */
function groupResults(): { label: string; labelEn: string; items: Result[] }[] {
  const all = Object.values(results);
  return GROUPS.map((g) => ({
    label: g.label,
    labelEn: g.labelEn,
    items: all.filter((r) => g.positions.includes(r.position)),
  }));
}

/* ── Card component ── */
function ResultCard({ r }: { r: Result }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      href={`/result?id=${r.id}`}
      className="block group"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-paper-warm">
        {!imgFailed ? (
          <Image
            src={`/images/results/${r.id}.webp`}
            alt={r.title}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-active:scale-[1.02]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <span className="text-2xl font-display font-bold text-navy/20">
              {r.positionLabel}
            </span>
            <span className="text-[10px] text-ink-muted/40">{r.title}</span>
          </div>
        )}
      </div>

      {/* Text below image */}
      <div className="mt-2 px-0.5">
        <p className="text-ink font-bold text-[14px] leading-snug truncate">
          {r.title}
        </p>
        <p className="text-ink-muted text-[11px] mt-0.5 truncate">
          {r.positionLabel}{r.battingOrder ? ` · ${r.battingOrder}番` : ""}
        </p>
      </div>
    </Link>
  );
}

export default function ResultsListPage() {
  const groups = groupResults();
  const total = Object.keys(results).length;

  return (
    <main className="min-h-dvh pb-16 bg-paper">
      {/* Header */}
      <header className="px-6 pt-14 pb-6">
        <Link href="/" className="text-ink-muted text-[13px] mb-6 inline-block">
          ← トップ
        </Link>
        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
          All Reports
        </p>
        <h1 className="font-display font-extrabold text-[1.6rem] text-ink leading-tight mb-1">
          診断結果一覧
        </h1>
        <p className="text-ink-muted text-[13px]">
          全{total}種類の選手タイプ
        </p>
      </header>

      {/* Groups */}
      {groups.map((group, groupIdx) => (
        <div key={group.label}>
          <section className="mb-8">
            {/* Group header */}
            <div className="px-6 mb-4 flex items-baseline gap-2">
              <span className="text-ink font-display font-bold text-[1.1rem]">
                {group.label}
              </span>
              <span className="text-ink-muted/40 text-[10px] tracking-wider uppercase">
                {group.labelEn}
              </span>
              <span className="text-ink-muted/30 text-[11px] ml-auto">
                {group.items.length}種
              </span>
            </div>

            {/* Card grid — 2 columns */}
            <div className="px-5 grid grid-cols-2 gap-x-3.5 gap-y-6">
              {group.items.map((r) => (
                <ResultCard key={r.id} r={r} />
              ))}
            </div>
          </section>

          {/* Native ad between groups */}
          {AD_AFTER_GROUPS.has(groupIdx) && (
            <div className="py-4 px-6">
              <AdBanner size="native" />
            </div>
          )}
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="px-6 mt-4">
        <Link
          href="/quiz"
          className="flex items-center justify-center w-full bg-navy active:bg-navy-dark text-white font-bold text-[15px] py-[14px] rounded-md transition-colors"
        >
          診断してみる →
        </Link>
      </div>
    </main>
  );
}
