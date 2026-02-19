# ⚾ baseball-diagnosis — プロジェクト概要

Claude Code がこのプロジェクトを引き継ぐための情報です。

---

## プロジェクトの目的

野球選手タイプ診断のWebサイト。  
10問の質問に答えると、性格・行動パターンから「あなたが野球選手なら何番・どのポジション・どんなタイプか」を診断する。  
**Adsterra のインタースティシャル広告で収益化する**のが主目的。  
バイラル拡散（X/Twitter シェア）でPVを稼ぐ設計にしている。

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 15（App Router） |
| スタイル | Tailwind CSS |
| 言語 | TypeScript |
| ビルド | `next build` → `/out` に静的エクスポート |
| ホスティング | Cloudflare Pages（無料） |
| ドメイン | Cloudflare Registrar 推奨（年$8〜） |
| 広告 | Adsterra インタースティシャル |

`next.config.ts` で `output: "export"` を指定済み。サーバーサイド機能は使えない。

---

## ディレクトリ構成

```
baseball-diagnosis/
├── app/
│   ├── page.tsx          ← トップページ（スタジアム夜景テーマ）
│   ├── layout.tsx        ← OGP・メタデータ設定
│   ├── globals.css       ← カスタムスタイル（Bebas Neue フォント使用）
│   ├── quiz/
│   │   └── page.tsx      ← 10問の診断ページ
│   ├── ad/
│   │   └── page.tsx      ← Adsterra インタースティシャル（5秒カウントダウン）
│   └── result/
│       └── page.tsx      ← 診断結果ページ（シェアボタン付き）
├── lib/
│   ├── questions.ts      ← 10問 × 4択（5軸スコアリング）
│   ├── results.ts        ← 50種類の結果データ
│   └── diagnosis.ts      ← スコア → 結果ID の変換ロジック
├── CLAUDE.md             ← このファイル
└── README.md             ← デプロイ手順
```

---

## ページ遷移フロー

```
/ (TOP)
  ↓ 「診断スタート」ボタン
/quiz
  ↓ 10問回答完了（sessionStorageに結果IDを保存）
/ad?id={resultId}          ← ★ ここでAdsterraの広告を表示（5秒）
  ↓ 「結果を見る」ボタン or カウントダウン終了
/result?id={resultId}      ← 診断結果 + Xシェアボタン
```

---

## 診断ロジック

### スコアの5軸

| キー | 意味 | 高いと… |
|------|------|---------|
| `p` | 投手傾向 | SP / RP / CP に分類 |
| `pw` | パワー | スラッガー・長距離砲 |
| `sp` | スピード・俊敏性 | リードオフ・守備型 |
| `cl` | 勝負強さ・クラッチ力 | クローザー・クラッチヒッター |
| `ld` | リーダーシップ・エース気質 | 4番・エース |

### 結果の種類（50種類）

| ポジション | 種類数 |
|-----------|--------|
| 先発投手（SP） | 9種 |
| リリーフ（RP） | 6種 |
| クローザー（CP） | 3種 |
| 捕手（C） | 4種 |
| 一塁手〜右翼手（内外野） | 25種 |
| 指名打者（DH） | 3種 |
| **合計** | **50種** |

結果IDの一覧は `lib/results.ts` の `export const resultIds = Object.keys(results)` を参照。

---

## 広告設定（最重要）

`app/ad/page.tsx` の先頭にある定数を書き換えるだけで広告が有効になる：

```typescript
// ここにAdsterraで発行したZone IDを設定する
const ADSTERRA_ZONE_ID = "YOUR_ADSTERRA_ZONE_ID_HERE";
```

**Adsterra でのZone ID 取得手順：**
1. https://adsterra.com → Publishers → My Sites → サイトURLを追加
2. Ad Units → Create Ad Unit → **Interstitial** を選択
3. 発行された Zone ID をコピーして上記に貼り付け

Zone ID が未設定のままだとプレースホルダー表示になる（開発時は問題なし）。

---

## デザイン方針

- **テーマ：** 夜のスタジアム・ダークネイビー基調
- **フォント：** Bebas Neue（スコアボード風タイトル）+ Noto Sans JP（本文）
- **アクセントカラー：** ゴールド（`#f5a623`）
- **アニメーション：** `animate-fade-up`（CSS keyframes定義済み）
- generic な AI っぽいデザイン（紫グラデ・Inter フォントなど）は使わない

---

## 今後のTODO（優先度順）

- [ ] **Adsterra Zone ID を設定**（収益化の最優先事項）
- [ ] **.com ドメイン取得** → Cloudflare Registrar 推奨
- [ ] **Cloudflare Pages にデプロイ**（GitHub連携 → 自動ビルド）
- [ ] **OGP画像の追加**（X シェア時のサムネイル）→ `public/og.png` に置く
- [ ] X（Twitter）アカウントでバイラル施策
- [ ] Google Analytics or Cloudflare Analytics でPV計測
- [ ] 診断結果を55種類以上に増やす

---

## ローカル開発

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # /out に静的ファイル生成
```

---

## デプロイ手順（概要）

1. GitHub にプッシュ
2. Cloudflare Pages → Connect to Git → リポジトリ選択
3. Build command: `npm run build` / Output directory: `out`
4. カスタムドメインを追加

詳細は `README.md` を参照。
