export type ScoreKey = "p" | "pw" | "sp" | "cl" | "ld";

export type Option = {
  text: string;
  scores: Partial<Record<ScoreKey, number>>;
};

export type Question = {
  id: number;
  text: string;
  sub?: string;
  options: Option[];
};

// Axes:
//  p  = pitcher tendency (高いほど投手向き)
//  pw = power (高いほどパワータイプ)
//  sp = speed/agility (高いほどスピード・技巧タイプ)
//  cl = clutch / big game mentality (高いほど勝負強い)
//  ld = leadership / ace mentality (高いほど主役タイプ)

export const questions: Question[] = [
  {
    id: 1,
    text: "仕事やタスクに取り組む時、あなたは？",
    sub: "最も近いものを選んでください",
    options: [
      { text: "最初から最後まで一人でやり抜く", scores: { p: 2, ld: 1 } },
      { text: "自分の得意な場面だけ集中してこなす", scores: { p: 1, sp: 1 } },
      { text: "チームをまとめてリードする", scores: { ld: 2, cl: 1 } },
      { text: "データや分析で最適解を導き出す", scores: { sp: 1, cl: 2 } },
    ],
  },
  {
    id: 2,
    text: "大事な場面・プレッシャーがかかる時のあなたは？",
    options: [
      { text: "いつも以上の力が湧いてくる", scores: { cl: 2, pw: 1 } },
      { text: "冷静に、いつも通りこなす", scores: { cl: 2, p: 1 } },
      { text: "チームを鼓舞しながら引っ張る", scores: { ld: 2, cl: 1 } },
      { text: "役割に徹して確実にこなす", scores: { p: 2, sp: 1 } },
    ],
  },
  {
    id: 3,
    text: "あなたの最大の長所は？",
    options: [
      { text: "誰にも負けないパワー・迫力", scores: { pw: 3 } },
      { text: "圧倒的なスピード・身のこなし", scores: { sp: 3 } },
      { text: "抜群の安定感・コントロール", scores: { p: 2, cl: 1 } },
      { text: "勝負強さ・決断力", scores: { cl: 2, ld: 1 } },
    ],
  },
  {
    id: 4,
    text: "チームの中でのあなたの立ち位置は？",
    options: [
      { text: "エース・チームの絶対的中心", scores: { ld: 2, p: 1 } },
      { text: "縁の下の力持ち・陰のキーマン", scores: { p: 2, sp: 1 } },
      { text: "ここぞという場面を任されるスペシャリスト", scores: { cl: 2, pw: 1 } },
      { text: "スピードスター・チームの起爆剤", scores: { sp: 2, cl: 1 } },
    ],
  },
  {
    id: 5,
    text: "好きな「勝ち方」はどれ？",
    options: [
      { text: "圧倒的な力でねじ伏せる", scores: { pw: 2, ld: 1 } },
      { text: "スマートに相手を翻弄する", scores: { sp: 1, p: 2 } },
      { text: "最後の最後でひっくり返す", scores: { cl: 3 } },
      { text: "少しずつ積み上げて逃げ切る", scores: { p: 2, sp: 1 } },
    ],
  },
  {
    id: 6,
    text: "失敗した時のあなたは？",
    options: [
      { text: "すぐ切り替えて次に挑む", scores: { cl: 2, sp: 1 } },
      { text: "原因をとことん分析して改善する", scores: { p: 2, ld: 1 } },
      { text: "「次こそは」とさらに燃える", scores: { pw: 1, cl: 2 } },
      { text: "チームと一緒に乗り越える方法を考える", scores: { ld: 2, p: 1 } },
    ],
  },
  {
    id: 7,
    text: "理想のヒーロー像は？",
    options: [
      { text: "毎試合コツコツ活躍する縁の下の力持ち", scores: { p: 2, sp: 1 } },
      { text: "大一番で決める絶対的な勝負師", scores: { cl: 3 } },
      { text: "力でねじ伏せる圧倒的スター", scores: { pw: 2, ld: 1 } },
      { text: "スピードと頭脳で翻弄するプレーヤー", scores: { sp: 2, cl: 1 } },
    ],
  },
  {
    id: 8,
    text: "休日はどう過ごすことが多い？",
    options: [
      { text: "一人でじっくり自分を磨く（読書・練習など）", scores: { p: 2, pw: 1 } },
      { text: "体を動かして汗を流す", scores: { sp: 2, pw: 1 } },
      { text: "仲間と過ごしてリフレッシュ", scores: { ld: 2, cl: 1 } },
      { text: "次の戦略・計画を練る", scores: { p: 1, ld: 2 } },
    ],
  },
  {
    id: 9,
    text: "自分の武器・売りは？",
    options: [
      { text: "誰にも負けない圧倒的パワー", scores: { pw: 3 } },
      { text: "誰よりも速い足・瞬発力", scores: { sp: 3 } },
      { text: "完璧なコントロール・精度", scores: { p: 2, cl: 1 } },
      { text: "勝負師としての嗅覚", scores: { cl: 2, ld: 1 } },
    ],
  },
  {
    id: 10,
    text: "理想のチームでの役割は？",
    options: [
      { text: "試合の主役として輝く", scores: { ld: 2, pw: 1 } },
      { text: "縁の下で支えるサポーター", scores: { p: 2, sp: 1 } },
      { text: "ここぞという場面を任される", scores: { cl: 2, ld: 1 } },
      { text: "動き回ってチームを活性化する", scores: { sp: 2, cl: 1 } },
    ],
  },
];
