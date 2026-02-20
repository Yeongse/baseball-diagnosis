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
    // CLOSER — high clutch + power or leadership
    if (cl >= 7 && (pw >= 7 || ld >= 8)) {
      if (pw >= 9)            return "cp_power";
      if (sp >= 7)            return "cp_situational";
      if (ld >= 8)            return "cp_mental";
      return "cp_finesse";
    }

    // RELIEVER — speed focused OR moderate clutch
    if (sp >= 7 || (cl >= 6 && ld < 7 && p < 13)) {
      if (pw >= 7)            return "rp_power";
      if (cl >= 7 && ld >= 6) return "rp_setup";
      if (sp >= 9)            return "rp_loogy";
      if (cl >= 6 && sp >= 7) return "rp_fire";
      if (ld >= 6)            return "rp_multi";
      if (cl >= 6)            return "rp_specialist";
      if (sp >= 6)            return "rp_workhorse";
      return "rp_long";
    }
    if (cl >= 8 && sp >= 6)   return "rp_fire";

    // STARTER
    if (pw >= 8 && ld >= 7)   return "sp_power_ace";
    if (pw >= 8 && sp >= 6)   return "sp_strikeout";
    if (pw >= 8)              return "sp_young";
    if (pw >= 6 && sp >= 6 && cl >= 6 && ld >= 6) return "sp_twoway";
    if (sp >= 7 && cl >= 7)   return "sp_control";
    if (sp >= 7 && ld >= 6)   return "sp_finesse";
    if (ld >= 7 && cl >= 6)   return "sp_veteran";
    if (cl >= 7)              return "sp_consistent";
    if (sp >= 6 && pw <= 4)   return "sp_submarine";
    if (sp >= 6)              return "sp_lefty";
    return "sp_groundball";
  }

  // ─── BATTER PATH ─────────────────────────────────────────────

  // UTIL — balanced low scores
  if (pw <= 5 && sp <= 5 && cl <= 5 && ld <= 5 && p >= 4) {
    if (cl >= 5)              return "util_pinch_hitter";
    if (sp >= 5)              return "util_flexible";
    return "util_super";
  }

  // DH — high power, low speed
  if (pw >= 8 && sp <= 4) {
    if (ld >= 7 && cl >= 6)   return "dh_veteran";
    if (cl >= 7)              return "dh_cleanup";
    if (pw >= 9)              return "dh_5spot";
    if (ld >= 5)              return "dh_3spot";
    if (cl <= 4)              return "dh_9spot";
    return "dh_2spot";
  }

  // CATCHER — pitcher-adjacent + moderate stats
  if (p >= 5 && sp <= 6 && pw <= 6) {
    if (cl >= 8)              return "c_cleanup";
    if (ld >= 7 && cl >= 6)   return "c_leader";
    if (cl >= 6)              return "c_clutch";
    if (ld >= 7)              return "c_veteran";
    if (sp >= 5 && pw >= 5)   return "c_2spot";
    if (pw <= 3)              return "c_9spot";
    return "c_defensive";
  }

  // CENTER FIELD — very high speed
  if (sp >= 8) {
    if (pw >= 7 && cl >= 6)   return "cf_3spot";
    if (pw >= 6 && ld >= 6)   return "cf_allround";
    if (ld >= 7)              return "cf_leadoff";
    if (pw >= 5)              return "cf_2spot";
    if (cl >= 5)              return "cf_so_type";
    if (pw >= 4)              return "cf_defensive";
    return "cf_9spot";
  }

  // SHORTSTOP — high speed, moderate power
  if (sp >= 7 && pw <= 6) {
    if (pw >= 6 && cl >= 7)   return "ss_cleanup";
    if (ld >= 7)              return "ss_leadoff";
    if (cl >= 7)              return "ss_allround";
    if (cl >= 5 && ld >= 5)   return "ss_2spot";
    if (cl >= 5)              return "ss_clutch";
    if (ld >= 4)              return "ss_so_type";
    if (pw >= 4)              return "ss_defensive";
    return "ss_9spot";
  }

  // SECOND BASE — speed focused
  if (sp >= 6 && pw <= 5) {
    if (sp >= 8)              return "2b_leadoff";
    if (cl >= 7)              return "2b_clutch";
    if (ld >= 6)              return "2b_connector";
    if (pw >= 5)              return "2b_power";
    if (cl >= 5)              return "2b_balanced";
    if (ld < 4)               return "2b_defensive";
    return "2b_9spot";
  }

  // RIGHT FIELD — power + speed combo
  if (pw >= 7 && sp >= 6) {
    if (cl >= 8)              return "rf_cleanup";
    if (pw >= 9)              return "rf_power";
    if (ld >= 7)              return "rf_3spot";
    if (cl >= 6)              return "rf_leadoff";
    if (sp >= 7)              return "rf_2spot";
    if (cl >= 4)              return "rf_strong_arm";
    return "rf_9spot";
  }

  // THIRD BASE — power focused
  if (pw >= 7) {
    if (pw >= 9 && cl >= 7)   return "3b_cleanup";
    if (ld >= 7 && cl >= 7)   return "3b_cleanup";
    if (sp >= 7)              return "3b_leadoff";
    if (cl >= 6 && ld >= 5)   return "3b_5spot";
    if (ld >= 6)              return "3b_2spot";
    if (cl >= 5)              return "3b_contact";
    if (sp >= 5)              return "3b_defensive";
    if (cl >= 3)              return "3b_so_type";
    return "3b_9spot";
  }

  // LEFT FIELD — moderate power
  if (pw >= 6) {
    if (pw >= 8 || ld >= 7)   return "lf_cleanup";
    if (sp >= 7)              return "lf_leadoff";
    if (cl >= 7)              return "lf_contact";
    if (sp >= 6)              return "lf_2spot";
    if (cl >= 5)              return "lf_balanced";
    if (ld >= 4)              return "lf_defensive";
    return "lf_9spot";
  }

  // FIRST BASE — remaining power types
  if (pw >= 5) {
    if (pw >= 7)              return "1b_slugger";
    if (cl >= 7)              return "1b_cleanup";
    if (ld >= 7)              return "1b_veteran";
    if (sp >= 5)              return "1b_contact";
    if (cl >= 5)              return "1b_5spot";
    if (ld >= 4)              return "1b_defensive";
    return "1b_9spot";
  }

  // DH fallback — moderate power, low speed
  if (pw >= 4 && sp <= 4) {
    if (cl >= 6)              return "dh_cleanup";
    if (ld >= 5)              return "dh_3spot";
    return "dh_9spot";
  }

  // UTIL fallback
  if (cl >= 6)                return "util_pinch_hitter";
  if (sp >= 5)                return "util_flexible";
  return "util_super";
}
