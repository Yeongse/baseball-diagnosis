export type Scores = {
  p: number;   // pitcher tendency
  pw: number;  // power
  sp: number;  // speed / agility
  cl: number;  // clutch / big game
  ld: number;  // leadership / ace
};

export function computeResultId(scores: Scores): string {
  const { p, pw, sp, cl, ld } = scores;

  // ─── PITCHER PATH (p >= 8) ───────────────────────────────────
  if (p >= 8) {
    // CLOSER — high clutch + power
    if (cl >= 7 && (pw >= 7 || ld >= 8)) {
      if (pw >= 9) return "cp_power";
      if (ld >= 8) return "cp_mental";
      return "cp_finesse";
    }

    // RELIEVER — speed focused OR moderate clutch
    if (sp >= 7 || (cl >= 6 && ld < 7 && p < 13)) {
      if (pw >= 7) return "rp_power";
      if (cl >= 7) return "rp_setup";
      if (sp >= 9) return "rp_loogy";
      if (cl >= 6) return "rp_specialist";
      return "rp_long";
    }
    if (cl >= 8 && sp >= 6) return "rp_fire";

    // STARTER
    if (pw >= 8 && ld >= 7) return "sp_power_ace";
    if (pw >= 8 && sp >= 6) return "sp_strikeout";
    if (pw >= 8) return "sp_young_ace";
    if (sp >= 7 && cl >= 7) return "sp_control";
    if (sp >= 7 && ld >= 6) return "sp_finesse_ace";
    if (ld >= 7 && cl >= 6) return "sp_veteran";
    if (cl >= 7) return "sp_consistent";
    if (sp >= 6) return "sp_lefty_finesse";
    return "sp_groundball";
  }

  // ─── BATTER PATH ─────────────────────────────────────────────

  // DH — high power, low speed
  if (pw >= 8 && sp <= 4) {
    if (ld >= 7 && cl >= 6) return "dh_veteran";
    if (cl >= 7) return "dh_cleanup";
    return "dh_5spot";
  }

  // CATCHER — pitcher-adjacent + moderate stats
  if (p >= 5 && sp <= 6 && pw <= 6) {
    if (cl >= 8) return "c_clutch";
    if (ld >= 7) return "c_veteran";
    if (sp >= 5) return "c_leadoff";
    return "c_defensive";
  }

  // CENTER FIELD — very high speed + decent leadership
  if (sp >= 8) {
    if (pw >= 7 && cl >= 6) return "cf_allround";
    if (pw >= 6) return "cf_3spot";
    if (ld >= 7) return "cf_leadoff";
    return "cf_defensive";
  }

  // SHORTSTOP — high speed, moderate power
  if (sp >= 7 && pw <= 6) {
    if (ld >= 7) return "ss_leadoff";
    if (cl >= 7) return "ss_allround";
    if (cl >= 5) return "ss_2spot";
    return "ss_anchor";
  }

  // SECOND BASE — speed focused
  if (sp >= 6 && pw <= 5) {
    if (sp >= 8) return "2b_leadoff";
    if (cl >= 7) return "2b_clutch";
    if (ld < 5) return "2b_defensive";
    return "2b_connector";
  }

  // RIGHT FIELD — power + speed combo
  if (pw >= 7 && sp >= 6) {
    if (cl >= 8) return "rf_cleanup";
    if (pw >= 9) return "rf_power";
    return "rf_3spot";
  }

  // THIRD BASE — power focused
  if (pw >= 7) {
    if (pw >= 9 && cl >= 7) return "3b_slugger";
    if (ld >= 7 && cl >= 7) return "3b_cleanup";
    if (cl >= 6) return "3b_5spot";
    return "3b_contact";
  }

  // LEFT FIELD — moderate power
  if (pw >= 6) {
    if (pw >= 8 || ld >= 7) return "lf_cleanup";
    if (sp >= 6) return "lf_contact";
    return "lf_7spot";
  }

  // FIRST BASE — remaining power types
  if (pw >= 5) {
    if (pw >= 7) return "1b_slugger";
    if (cl >= 7) return "1b_cleanup";
    if (sp >= 5) return "1b_contact";
    return "1b_cleanup";
  }

  // SHORTSTOP all-round (fallback for balanced scorers)
  if (sp >= 5 && pw >= 5) return "ss_allround";

  // CATCHER fallback
  return "c_defensive";
}
