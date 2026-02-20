import { questions, type ScoreKey } from "./questions";

// ── Types ──────────────────────────────────────────────
export type Scores = Record<ScoreKey, number>;
type NormalizedScores = Record<ScoreKey, number>;

// ── Score range (auto-computed from question loadings) ─
function computeRanges(): Record<ScoreKey, { min: number; max: number }> {
  const axes: ScoreKey[] = ["p", "pw", "sp", "cl", "ld"];
  const result = {} as Record<ScoreKey, { min: number; max: number }>;
  for (const axis of axes) {
    let min = 0;
    let max = 0;
    for (const q of questions) {
      for (const loading of q.loadings) {
        if (loading.axis === axis) {
          const hi = 2 * loading.weight;
          const lo = -2 * loading.weight;
          max += Math.max(hi, lo);
          min += Math.min(hi, lo);
        }
      }
    }
    result[axis] = { min, max };
  }
  return result;
}

const SCORE_RANGE = computeRanges();

function normalize(raw: Scores): NormalizedScores {
  const result = {} as NormalizedScores;
  for (const axis of ["p", "pw", "sp", "cl", "ld"] as const) {
    const { min, max } = SCORE_RANGE[axis];
    result[axis] = max === min ? 50 : ((raw[axis] - min) / (max - min)) * 100;
  }
  return result;
}

// ── Distance computation ───────────────────────────────
const AXIS_WEIGHTS: Record<ScoreKey, number> = {
  p: 1.5,
  pw: 1.0,
  sp: 1.0,
  cl: 0.8,
  ld: 0.8,
};

function weightedDistanceSq(a: NormalizedScores, b: NormalizedScores): number {
  let sum = 0;
  for (const key of ["p", "pw", "sp", "cl", "ld"] as const) {
    const d = a[key] - b[key];
    sum += AXIS_WEIGHTS[key] * d * d;
  }
  return sum;
}

// ── 90 Result Profiles ─────────────────────────────────
// Each value = ideal normalized score [0-100] for that axis.
//   p  = pitcher tendency
//   pw = power
//   sp = speed/agility
//   cl = clutch/big game
//   ld = leadership/ace

export const resultProfiles: Record<string, NormalizedScores> = {
  // ============================================================
  // SP（先発投手）— 11種
  // ============================================================
  sp_power_ace:  { p: 90, pw: 75, sp: 30, cl: 70, ld: 82 },
  sp_strikeout:  { p: 88, pw: 78, sp: 35, cl: 55, ld: 42 },
  sp_finesse:    { p: 86, pw: 22, sp: 72, cl: 48, ld: 55 },
  sp_control:    { p: 88, pw: 25, sp: 70, cl: 65, ld: 42 },
  sp_young:      { p: 84, pw: 72, sp: 38, cl: 38, ld: 32 },
  sp_veteran:    { p: 82, pw: 35, sp: 40, cl: 58, ld: 75 },
  sp_groundball: { p: 84, pw: 30, sp: 48, cl: 42, ld: 35 },
  sp_lefty:      { p: 82, pw: 22, sp: 62, cl: 35, ld: 42 },
  sp_consistent: { p: 85, pw: 28, sp: 50, cl: 68, ld: 45 },
  sp_submarine:  { p: 80, pw: 18, sp: 60, cl: 32, ld: 28 },
  sp_twoway:     { p: 76, pw: 62, sp: 58, cl: 55, ld: 52 },

  // ============================================================
  // RP（リリーフ投手）— 8種
  // ============================================================
  rp_setup:      { p: 72, pw: 42, sp: 48, cl: 68, ld: 58 },
  rp_power:      { p: 72, pw: 68, sp: 35, cl: 52, ld: 38 },
  rp_long:       { p: 70, pw: 28, sp: 42, cl: 35, ld: 32 },
  rp_loogy:      { p: 68, pw: 22, sp: 72, cl: 42, ld: 28 },
  rp_specialist: { p: 70, pw: 30, sp: 55, cl: 58, ld: 25 },
  rp_fire:       { p: 68, pw: 55, sp: 48, cl: 72, ld: 35 },
  rp_workhorse:  { p: 72, pw: 35, sp: 58, cl: 45, ld: 42 },
  rp_multi:      { p: 70, pw: 38, sp: 52, cl: 42, ld: 55 },

  // ============================================================
  // CP（クローザー）— 4種
  // ============================================================
  cp_power:       { p: 78, pw: 72, sp: 30, cl: 82, ld: 58 },
  cp_finesse:     { p: 75, pw: 25, sp: 65, cl: 78, ld: 48 },
  cp_mental:      { p: 75, pw: 38, sp: 42, cl: 80, ld: 72 },
  cp_situational: { p: 75, pw: 32, sp: 60, cl: 85, ld: 38 },

  // ============================================================
  // C（捕手）— 7種
  // ============================================================
  c_2spot:     { p: 55, pw: 42, sp: 40, cl: 48, ld: 42 },
  c_cleanup:   { p: 55, pw: 45, sp: 32, cl: 78, ld: 55 },
  c_leader:    { p: 58, pw: 35, sp: 35, cl: 58, ld: 75 },
  c_clutch:    { p: 55, pw: 38, sp: 38, cl: 72, ld: 42 },
  c_veteran:   { p: 58, pw: 32, sp: 30, cl: 50, ld: 72 },
  c_defensive: { p: 56, pw: 28, sp: 42, cl: 38, ld: 48 },
  c_9spot:     { p: 55, pw: 22, sp: 35, cl: 32, ld: 35 },

  // ============================================================
  // 1B（一塁手）— 7種
  // ============================================================
  "1b_slugger":   { p: 20, pw: 78, sp: 22, cl: 55, ld: 62 },
  "1b_cleanup":   { p: 20, pw: 75, sp: 25, cl: 72, ld: 68 },
  "1b_5spot":     { p: 20, pw: 72, sp: 28, cl: 55, ld: 42 },
  "1b_contact":   { p: 22, pw: 65, sp: 35, cl: 45, ld: 38 },
  "1b_veteran":   { p: 22, pw: 68, sp: 28, cl: 48, ld: 72 },
  "1b_defensive": { p: 22, pw: 62, sp: 32, cl: 38, ld: 35 },
  "1b_9spot":     { p: 20, pw: 65, sp: 25, cl: 30, ld: 25 },

  // ============================================================
  // 2B（二塁手）— 7種
  // ============================================================
  "2b_leadoff":   { p: 18, pw: 28, sp: 78, cl: 42, ld: 62 },
  "2b_connector": { p: 22, pw: 32, sp: 72, cl: 45, ld: 55 },
  "2b_power":     { p: 18, pw: 50, sp: 68, cl: 45, ld: 38 },
  "2b_clutch":    { p: 20, pw: 35, sp: 70, cl: 72, ld: 38 },
  "2b_balanced":  { p: 20, pw: 38, sp: 68, cl: 48, ld: 42 },
  "2b_defensive": { p: 20, pw: 28, sp: 72, cl: 35, ld: 28 },
  "2b_9spot":     { p: 22, pw: 30, sp: 68, cl: 32, ld: 35 },

  // ============================================================
  // 3B（三塁手）— 8種
  // ============================================================
  "3b_leadoff":   { p: 18, pw: 58, sp: 55, cl: 42, ld: 48 },
  "3b_2spot":     { p: 20, pw: 62, sp: 50, cl: 48, ld: 55 },
  "3b_contact":   { p: 20, pw: 60, sp: 48, cl: 52, ld: 42 },
  "3b_cleanup":   { p: 18, pw: 72, sp: 42, cl: 72, ld: 72 },
  "3b_5spot":     { p: 20, pw: 68, sp: 42, cl: 58, ld: 48 },
  "3b_defensive": { p: 22, pw: 60, sp: 48, cl: 42, ld: 38 },
  "3b_so_type":   { p: 20, pw: 58, sp: 45, cl: 35, ld: 32 },
  "3b_9spot":     { p: 22, pw: 58, sp: 42, cl: 28, ld: 25 },

  // ============================================================
  // SS（遊撃手）— 8種
  // ============================================================
  ss_leadoff:  { p: 18, pw: 32, sp: 80, cl: 48, ld: 68 },
  ss_2spot:    { p: 20, pw: 38, sp: 78, cl: 52, ld: 52 },
  ss_allround: { p: 18, pw: 42, sp: 75, cl: 68, ld: 48 },
  ss_cleanup:  { p: 18, pw: 48, sp: 75, cl: 72, ld: 55 },
  ss_clutch:   { p: 20, pw: 35, sp: 75, cl: 72, ld: 35 },
  ss_so_type:  { p: 20, pw: 32, sp: 78, cl: 38, ld: 38 },
  ss_defensive:{ p: 22, pw: 35, sp: 78, cl: 35, ld: 28 },
  ss_9spot:    { p: 22, pw: 28, sp: 75, cl: 28, ld: 25 },

  // ============================================================
  // LF（左翼手）— 7種
  // ============================================================
  lf_leadoff:  { p: 18, pw: 50, sp: 55, cl: 42, ld: 58 },
  lf_2spot:    { p: 20, pw: 52, sp: 52, cl: 48, ld: 48 },
  lf_cleanup:  { p: 18, pw: 62, sp: 45, cl: 68, ld: 65 },
  lf_contact:  { p: 20, pw: 55, sp: 48, cl: 65, ld: 42 },
  lf_balanced: { p: 20, pw: 52, sp: 50, cl: 52, ld: 45 },
  lf_defensive:{ p: 22, pw: 48, sp: 52, cl: 38, ld: 35 },
  lf_9spot:    { p: 22, pw: 50, sp: 48, cl: 30, ld: 28 },

  // ============================================================
  // CF（中堅手）— 7種
  // ============================================================
  cf_leadoff:  { p: 15, pw: 25, sp: 90, cl: 42, ld: 65 },
  cf_2spot:    { p: 15, pw: 42, sp: 85, cl: 45, ld: 42 },
  cf_3spot:    { p: 15, pw: 65, sp: 82, cl: 62, ld: 55 },
  cf_allround: { p: 15, pw: 52, sp: 85, cl: 50, ld: 55 },
  cf_so_type:  { p: 15, pw: 30, sp: 88, cl: 52, ld: 32 },
  cf_defensive:{ p: 15, pw: 28, sp: 88, cl: 35, ld: 28 },
  cf_9spot:    { p: 15, pw: 22, sp: 85, cl: 28, ld: 22 },

  // ============================================================
  // RF（右翼手）— 7種
  // ============================================================
  rf_leadoff:    { p: 18, pw: 60, sp: 62, cl: 55, ld: 48 },
  rf_2spot:      { p: 20, pw: 62, sp: 60, cl: 48, ld: 42 },
  rf_3spot:      { p: 18, pw: 68, sp: 55, cl: 58, ld: 62 },
  rf_cleanup:    { p: 18, pw: 72, sp: 52, cl: 75, ld: 62 },
  rf_power:      { p: 18, pw: 75, sp: 52, cl: 52, ld: 45 },
  rf_strong_arm: { p: 22, pw: 62, sp: 58, cl: 42, ld: 38 },
  rf_9spot:      { p: 22, pw: 60, sp: 55, cl: 30, ld: 28 },

  // ============================================================
  // DH（指名打者）— 6種
  // ============================================================
  dh_2spot:   { p: 25, pw: 78, sp: 18, cl: 45, ld: 42 },
  dh_3spot:   { p: 25, pw: 82, sp: 15, cl: 52, ld: 55 },
  dh_cleanup: { p: 25, pw: 85, sp: 15, cl: 72, ld: 58 },
  dh_5spot:   { p: 25, pw: 88, sp: 12, cl: 48, ld: 38 },
  dh_veteran: { p: 28, pw: 80, sp: 18, cl: 58, ld: 72 },
  dh_9spot:   { p: 25, pw: 75, sp: 18, cl: 32, ld: 28 },

  // ============================================================
  // UTIL（ユーティリティ）— 3種
  // ============================================================
  util_super:        { p: 42, pw: 42, sp: 42, cl: 38, ld: 38 },
  util_pinch_hitter: { p: 38, pw: 48, sp: 38, cl: 58, ld: 30 },
  util_flexible:     { p: 40, pw: 35, sp: 50, cl: 40, ld: 38 },
};

// ── Main diagnosis function ────────────────────────────
export function computeResultId(rawScores: Scores): string {
  const norm = normalize(rawScores);

  let bestId = "util_super";
  let bestDist = Infinity;

  for (const [id, target] of Object.entries(resultProfiles)) {
    const d = weightedDistanceSq(norm, target);
    if (d < bestDist) {
      bestDist = d;
      bestId = id;
    }
  }

  return bestId;
}
