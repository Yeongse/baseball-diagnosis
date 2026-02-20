# タスク: lib/results.ts の全面リライト

## 背景

`lib/results.ts` に定義されている野球選手タイプ診断の結果データを、
以下の仕様に従って全面的に書き直してください。
現在のファイルには84種類の結果が定義されています。

---

## 型定義の変更

以下の新しい型に変更してください。

```typescript
export type Result = {
  id: string;
  position: string;        // SP / RP / CP / C / 1B / 2B / 3B / SS / LF / CF / RF / DH / UTIL
  positionLabel: string;   // 先発投手 / リリーフ投手 / etc.
  battingOrder: number | null;  // 1〜9（投手はnull）
  title: string;
  subtitle: string;
  description: string;     // 複数セクションで構成された長文（後述）
  traits: string[];        // 特徴ワード4つ（ハッシュタグ用）
  comparePlayer: string;   // 似ているタイプの選手名
  color: string;           // tailwind bgカラー
};
```

**削除するフィールド:**
- `emoji` → 不要なので削除
- `strengths` → `description` に統合
- `weaknesses` → `description` に統合
- `behaviors` → `description` に統合

---

## 打順のルール

- **野手（C / 1B / 2B / 3B / SS / LF / CF / RF / DH）は必ず 1〜9 の整数を設定**
- DH制9人打線を前提とするため、**9番打者のバリエーションも各ポジションに作ること**
- 投手（SP / RP / CP）は `null`
- UTIL（ユーティリティ・代打専門）は `null` でも可

---

## 多様性のルール（重要）

以下のルールを守って、偏りのない結果セットを作ること。

### ポジション×打順の多様性
- 同じポジションでも打順が異なる複数の結果を作る
- 例: サードが3番・4番・5番に偏るのはNG
  - サード1番（俊足型）、2番（現代型）、3番（コンタクト）、4番（主砲）、5番（パワー）、6番（守備重視）、7番（宗タイプ）、8番（守備職人）、9番（つなぎ役）など
- 9番打者は「次の1番につなぐ役割」「意外な長打力」「守備職人で打撃は諦め型」など個性を持たせる

### 「宗タイプ」を必ず含める
- 強肩・守備が圧倒的に上手いが打撃は平均以下、7〜9番に置かれる選手
- このタイプはサード・ショート・外野などに存在する

### 外野手の細分化
- 同じ外野手でも技巧派・パワー型・守備型・走塁型・強肩型など違いを出す
- LF / CF / RF それぞれ同じ役割のコピーにならないこと
  - 例: CF1番（センターリードオフ）と LF1番（レフトリードオフ）は説明・特徴を変える

### 9番打者のバリエーション例（参考）
- 9番ショート: 守備のエキスパートで打撃は割り切り型
- 9番センター: 俊足で1番につなぐ役割
- 9番サード: 強肩守備職人（宗タイプ）
- 9番捕手: 投手リードに全集中、打撃は二の次
- 9番DH: ベテランの代打要員兼DH

---

## description の書き方ガイドライン

`description` は以下の **4つのセクション** を改行で繋いだ長文にしてください。
各セクションは `【セクション名】` という見出しで始め、セクション間は空行で区切ります。

```
【あなたはこんな野球選手】
〜 野球選手としてのタイプ説明（2〜3文）〜

【強みと弱み】
〜 強み・弱みの両面を説明（3〜4文）〜

【振る舞いの特徴】
〜 日常の行動パターンや対人関係における特徴（3〜4文）〜

【恋愛での特徴】
〜 恋愛・パートナーシップにおける傾向（2〜3文）〜
```

### 各セクションの書き方

#### 【あなたはこんな野球選手】
- これまで通り、そのポジション・打順・タイプとしての野球選手像を描写する
- 「チームの中でどう輝くか」「どんな場面で真価を発揮するか」を中心に書く

#### 【強みと弱み】
- 強みは「自然と発揮できる能力や傾向」。「〜が得意」「〜に長けている」の形で
- 弱みは批判的にならず「〜しすぎる傾向がある」「〜が苦手」の形で
- 強みと弱みを対比させながら1つの流れとして書く（箇条書き不可、文章で）
- 例: "一度決めたら最後まで諦めない粘り強さが最大の武器。その反面、自分のペースを崩されると本来の力を出しにくく、周囲のペースに引っ張られてしまうことがある。"

#### 【振る舞いの特徴】
- 日常の行動パターンや対人関係における特徴
- 診断コンテンツらしく「あるある」「わかる」と思ってもらえる表現にする
- 例: "大事な場面ほど落ち着いて見えるが、内心では誰より燃えている。仕事では縁の下の力持ちに徹するが、評価されると素直に喜ぶタイプ。何事も準備に時間をかけるため即興は苦手だが、完成度は誰よりも高い。"

#### 【恋愛での特徴】
- 恋愛・パートナーシップにおける傾向や行動パターン
- 「どんな恋愛をするか」「パートナーにどう接するか」「恋愛の落とし穴は何か」を書く
- ポジティブな面と課題の両方を盛り込む
- 例: "一度好きになったら一途で、パートナーのために全力を尽くす。ただし、自分の気持ちを言葉にするのが苦手で、想いが伝わらないまま距離が開いてしまうことも。相手の小さな変化に気づける繊細さが、長く愛される理由になっている。"

---

## 結果の種類・数の目安

| ポジション | 最低種類数 | 備考 |
|-----------|-----------|------|
| SP（先発投手） | 10〜12 | |
| RP（リリーフ） | 7〜8 | |
| CP（クローザー） | 3〜4 | |
| C（捕手） | 6〜7 | 打順1〜9を網羅 |
| 1B / 2B / 3B / SS | 各6〜8 | 打順1〜9を網羅 |
| LF / CF / RF | 各6〜7 | |
| DH | 5〜6 | |
| UTIL | 2〜3 | |
| **合計** | **90〜100種類以上** | |

---

## diagnosis.ts も合わせて更新

`lib/diagnosis.ts` の `computeResultId` 関数も、
新しい結果IDに対応するよう更新してください。

スコアの5軸（p/pw/sp/cl/ld）から結果IDを返すロジックで、
できるだけ多くの結果IDに到達できるよう条件分岐を網羅すること。

---

## 作業手順（推奨）

1. まず型定義を更新する
2. 投手系（SP/RP/CP）を書く
3. 捕手・内野手（C/1B/2B/3B/SS）を書く
4. 外野手・DH・UTIL（LF/CF/RF/DH/UTIL）を書く
5. diagnosis.ts を更新する
6. 最後に `npm run build` でビルドエラーがないか確認する

---

## 参考: 既存の結果IDリスト（現在84種類）

```
SP: sp_power_ace, sp_strikeout_artist, sp_finesse_ace, sp_control_master,
    sp_submarine, sp_comeback, sp_veteran_craftsman, sp_power_young,
    sp_groundball_specialist, sp_splitball, sp_consistent_workhorse, sp_lefty_power

RP: rp_setup_man, rp_power_bull, rp_long_reliever, rp_fireman,
    rp_specialist, rp_workhorse, rp_lefty_specialist, rp_multi_inning

CP: cp_power_closer, cp_finesse_closer, cp_mental_closer, cp_two_way

C:  c_cleanup_catcher(4番), c_clutch_hitter(6番), c_modern_leadoff(2番),
    c_defensive_specialist(8番), c_veteran_strategist(7番), c_power_8spot(8番)

1B: 1b_power_4, 1b_3spot_contact, 1b_5spot, 1b_defensive_6, 1b_veteran_dh_1b
2B: 2b_leadoff_speed, 2b_smart_2, 2b_power_5, 2b_clutch, 2b_defensive_8, 2b_6spot
3B: 3b_4cleanup, 3b_3contact, 3b_5power, 3b_defensive_arm(6番), 3b_so_type(7番),
    3b_leadoff(1番), 3b_2spot, 3b_slugger_4

SS: ss_leadoff_1, ss_smart_2, ss_cleanup_4, ss_allround_3,
    ss_defensive_arm(7番), ss_6spot, ss_8spot_glove

LF: lf_leadoff_1, lf_cleanup_4, lf_contact_5, lf_defensive_arm(7番), lf_7spot, lf_2spot
CF: cf_leadoff_1, cf_3spot, cf_cleanup_4, cf_2leadoff, cf_defensive_8, cf_allround_3, cf_6spot
RF: rf_leadoff_1, rf_3spot, rf_cleanup_4, rf_power_5, rf_defensive_strong_arm(7番), rf_6spot, rf_2spot

DH: dh_cleanup_4, dh_3spot, dh_5spot, dh_veteran_6, dh_2spot
UTIL: util_super, util_pinch_hitter, util_flexible
```

---

## 完了条件

- [ ] `lib/results.ts` の全結果の `description` が4セクション構成になっている
- [ ] 全セクションに `【あなたはこんな野球選手】` `【強みと弱み】` `【振る舞いの特徴】` `【恋愛での特徴】` が含まれている
- [ ] `emoji` / `strengths` / `weaknesses` / `behaviors` フィールドが削除されている
- [ ] すべての野手に 1〜9 の `battingOrder` が設定されている
- [ ] 9番打者のバリエーションが各ポジションに存在する
- [ ] `lib/diagnosis.ts` が新しいIDに対応している
- [ ] `npm run build` がエラーなく通る
