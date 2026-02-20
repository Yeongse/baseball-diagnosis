export type ScoreKey = "p" | "pw" | "sp" | "cl" | "ld";

export type AxisLoading = {
  axis: ScoreKey;
  weight: number; // 1.0（主軸）or ±0.5（副軸）
};

export type Question = {
  id: number;
  statement: string;
  loadings: AxisLoading[];
};

// Axes:
//  p  = pitcher tendency (高いほど投手向き)
//  pw = power (高いほどパワータイプ)
//  sp = speed/agility (高いほどスピード・技巧タイプ)
//  cl = clutch / big game mentality (高いほど勝負強い)
//  ld = leadership / ace mentality (高いほど主役タイプ)

export const LIKERT_OPTIONS = [
  { label: "とても当てはまる",     value: 2  },
  { label: "やや当てはまる",       value: 1  },
  { label: "どちらでもない",       value: 0  },
  { label: "あまり当てはまらない", value: -1 },
  { label: "全く当てはまらない",   value: -2 },
] as const;

export type LikertValue = (typeof LIKERT_OPTIONS)[number]["value"];

export const questions: Question[] = [
  // ── p (pitcher tendency) ×3 ──────────────────────────
  {
    id: 1,
    statement: "何事も最初から最後まで自分一人で完遂したいと思う",
    loadings: [
      { axis: "p", weight: 1.0 },
      { axis: "pw", weight: -0.5 },
    ],
  },
  {
    id: 2,
    statement: "物事に取り組む前に、綿密な計画を立てるのが好きだ",
    loadings: [
      { axis: "p", weight: 1.0 },
      { axis: "sp", weight: 0.5 },
    ],
  },
  {
    id: 3,
    statement: "集中力を長時間維持するのが得意だ",
    loadings: [
      { axis: "p", weight: 1.0 },
      { axis: "ld", weight: 0.5 },
    ],
  },

  // ── pw (power) ×3 ───────────────────────────────────
  {
    id: 4,
    statement: "問題を解決するとき、力強く一気に突破する方が性に合う",
    loadings: [
      { axis: "pw", weight: 1.0 },
      { axis: "sp", weight: -0.5 },
    ],
  },
  {
    id: 5,
    statement: "結果が数字ではっきり出る仕事にやりがいを感じる",
    loadings: [
      { axis: "pw", weight: 1.0 },
      { axis: "cl", weight: 0.5 },
    ],
  },
  {
    id: 6,
    statement: "自分の存在感で周囲を圧倒できると思う",
    loadings: [
      { axis: "pw", weight: 1.0 },
      { axis: "ld", weight: 0.5 },
    ],
  },

  // ── sp (speed / agility) ×3 ─────────────────────────
  {
    id: 7,
    statement: "状況が変わっても素早く対応できる方だ",
    loadings: [
      { axis: "sp", weight: 1.0 },
      { axis: "cl", weight: 0.5 },
    ],
  },
  {
    id: 8,
    statement: "一つのことをじっくりやるより複数のことを同時にこなすのが好きだ",
    loadings: [
      { axis: "sp", weight: 1.0 },
      { axis: "p", weight: -0.5 },
    ],
  },
  {
    id: 9,
    statement: "新しい環境や人間関係にすぐ馴染める方だ",
    loadings: [{ axis: "sp", weight: 1.0 }],
  },

  // ── cl (clutch / big game) ×3 ───────────────────────
  {
    id: 10,
    statement: "プレッシャーがかかるほど燃えるタイプだ",
    loadings: [
      { axis: "cl", weight: 1.0 },
      { axis: "pw", weight: 0.5 },
    ],
  },
  {
    id: 11,
    statement: "大事な場面は他の人に任せるより自分が決めたい",
    loadings: [
      { axis: "cl", weight: 1.0 },
      { axis: "ld", weight: -0.5 },
    ],
  },
  {
    id: 12,
    statement: "想定外のトラブルでも冷静に判断できる自信がある",
    loadings: [
      { axis: "cl", weight: 1.0 },
      { axis: "sp", weight: 0.5 },
    ],
  },

  // ── ld (leadership / ace) ×3 ────────────────────────
  {
    id: 13,
    statement: "チームでは自然とまとめ役になることが多い",
    loadings: [
      { axis: "ld", weight: 1.0 },
      { axis: "p", weight: 0.5 },
    ],
  },
  {
    id: 14,
    statement: "周りの人を鼓舞して、一体感を生むのが得意だ",
    loadings: [
      { axis: "ld", weight: 1.0 },
      { axis: "cl", weight: 0.5 },
    ],
  },
  {
    id: 15,
    statement: "長期的なビジョンを描いて、それに向かって進む方だ",
    loadings: [
      { axis: "ld", weight: 1.0 },
      { axis: "pw", weight: 0.5 },
    ],
  },
];
