import Link from "next/link";
import { results, type Result } from "@/lib/results";
import AdBanner from "@/components/AdBanner";

/* ── Position group definitions ── */
const GROUPS: { label: string; positions: string[]; color: string }[] = [
  { label: "投手",   positions: ["SP", "RP", "CP"], color: "#1c4f80" },
  { label: "捕手",   positions: ["C"],              color: "#16524a" },
  { label: "内野手", positions: ["1B", "2B", "3B", "SS"], color: "#6e4a14" },
  { label: "外野手", positions: ["LF", "CF", "RF"], color: "#385a16" },
  { label: "指名打者", positions: ["DH"],           color: "#4e1870" },
];

/** Show native ad after these group indices (0-based): after 投手, after 外野手 */
const AD_AFTER_GROUPS = new Set([0, 3]);

/* Gather results into groups */
function groupResults(): { label: string; color: string; items: Result[] }[] {
  const all = Object.values(results);
  return GROUPS.map((g) => ({
    label: g.label,
    color: g.color,
    items: all.filter((r) => g.positions.includes(r.position)),
  }));
}

export default function ResultsListPage() {
  const groups = groupResults();
  const total = Object.keys(results).length;

  return (
    <main className="min-h-dvh pb-16">
      {/* Header */}
      <header className="px-6 pt-14 pb-8">
        <Link href="/" className="text-ink-muted text-[13px] mb-6 inline-block">
          ← トップ
        </Link>
        <h1 className="font-display font-extrabold text-[1.6rem] text-ink leading-tight mb-1">
          診断結果一覧
        </h1>
        <p className="text-ink-muted text-[13px]">
          全{total}種類の選手タイプ
        </p>
      </header>

      {/* Groups with interleaved native ads */}
      {groups.map((group, groupIdx) => (
        <div key={group.label}>
          <section className="mb-6">
            {/* Group header */}
            <div
              className="px-6 py-2.5 flex items-center justify-between"
              style={{ backgroundColor: group.color }}
            >
              <span className="text-white text-[13px] font-bold tracking-wider">
                {group.label}
              </span>
              <span className="text-white/50 text-[11px]">
                {group.items.length}種類
              </span>
            </div>

            {/* Result rows */}
            <div>
              {group.items.map((r, i) => (
                <Link
                  key={r.id}
                  href={`/result?id=${r.id}`}
                  className="flex items-center gap-3.5 px-6 py-3.5 active:bg-paper-warm transition-colors"
                  style={i < group.items.length - 1 ? { borderBottom: "1px solid #e8e0d6" } : undefined}
                >
                  <span className="text-2xl w-8 text-center shrink-0">{r.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-ink text-[15px] font-medium truncate">{r.title}</span>
                      {r.battingOrder && (
                        <span className="text-ink-muted text-[10px] shrink-0">{r.battingOrder}番</span>
                      )}
                    </div>
                    <p className="text-ink-muted text-[12px] truncate">{r.positionLabel} — {r.subtitle}</p>
                  </div>
                  <span className="text-ink-muted/30 text-[13px] shrink-0">›</span>
                </Link>
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
          className="flex items-center justify-center w-full bg-vermillion active:bg-vermillion-dark text-white font-bold text-[15px] py-[14px] rounded-md transition-colors"
        >
          診断してみる →
        </Link>
      </div>
    </main>
  );
}
