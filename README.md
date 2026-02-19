# ⚾ 野球選手タイプ診断

10問の質問であなたの野球選手タイプを診断するWebアプリです。  
Next.js 15（静的エクスポート）+ Cloudflare Pages で完全無料で運用できます。

---

## 📁 プロジェクト構成

```
baseball-diagnosis/
├── app/
│   ├── page.tsx          ← トップページ
│   ├── quiz/page.tsx     ← 診断ページ（10問）
│   ├── ad/page.tsx       ← Adsterrインタースティシャル広告
│   ├── result/page.tsx   ← 診断結果ページ
│   └── globals.css       ← スタイル
├── lib/
│   ├── questions.ts      ← 質問データ（スコアリング込み）
│   ├── results.ts        ← 55種類の結果データ
│   └── diagnosis.ts      ← 診断ロジック（スコア→結果ID変換）
└── ...
```

---

## 🚀 セットアップ

### 1. パッケージインストール

```bash
npm install
```

### 2. ローカル確認

```bash
npm run dev
# http://localhost:3000 で確認
```

### 3. ビルド確認

```bash
npm run build
# /out フォルダに静的ファイルが生成されます
```

---

## 📺 Adsterra 広告設定

### Adsterra でインタースティシャル広告を作成

1. https://adsterra.com でアカウント作成（無料）
2. **Publishers** → **My Sites** → サイトURL を追加
3. **Ad Units** → **Create Ad Unit** → **Interstitial** を選択
4. 発行された **Zone ID**（例: `a1b2c3d4e5f6`）をコピー

### コードに設定

`app/ad/page.tsx` を開いて、上部の定数を書き換えます：

```typescript
// Before
const ADSTERRA_ZONE_ID = "YOUR_ADSTERRA_ZONE_ID_HERE";

// After
const ADSTERRA_ZONE_ID = "a1b2c3d4e5f6";  // ← あなたのZone ID
```

---

## 🌐 Cloudflare Pages デプロイ手順

### 前提：GitHubにプッシュ

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/あなたのユーザー名/baseball-diagnosis.git
git push -u origin main
```

### Cloudflare Pages に接続

1. https://dash.cloudflare.com にログイン
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. GitHubリポジトリを選択
4. ビルド設定：
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. **Save and Deploy** → 数分でデプロイ完了！

### 無料で使えるもの
- ✅ 独自ドメイン接続
- ✅ 自動HTTPS
- ✅ CDN（世界中に高速配信）
- ✅ 月500回ビルド
- ✅ 無制限リクエスト

---

## 🌍 独自ドメイン設定

### おすすめ：Cloudflare Registrar（最安値）

1. Cloudflare ダッシュボード → **Domain Registration** → **Register Domain**
2. `.com` ドメインを検索（約 $8〜10/年）
3. **Cloudflare Pages** の設定 → **Custom Domains** → ドメインを追加
4. 自動でDNSが設定されます

### 他のドメインレジストラを使う場合

| レジストラ | 価格目安 | 備考 |
|----------|---------|------|
| Cloudflare Registrar | $8-10/年 | 最安・手数料なし |
| Namecheap | $10-12/年 | 使いやすい |
| お名前.com | ¥160円/年〜 | 初年度格安注意 |

Cloudflare以外のレジストラの場合、DNSのCNAMEレコードを Cloudflare Pages の URL に向けます。

---

## 💰 収益化チェックリスト

- [ ] Adsterra アカウント作成
- [ ] インタースティシャル広告ユニット作成
- [ ] Zone ID を `app/ad/page.tsx` に設定
- [ ] ドメイン取得
- [ ] Cloudflare Pages デプロイ
- [ ] X（Twitter）でシェア導線を確認
- [ ] OGP画像を追加（シェア時の見た目改善）

---

## 🔧 カスタマイズ

### 質問を追加・変更
`lib/questions.ts` を編集してください。  
質問は10問以上にも対応しています（進捗バーが自動調整されます）。

### 結果を追加・変更
`lib/results.ts` に新しいIDとデータを追加し、  
`lib/diagnosis.ts` の条件分岐に対応するIDを追加してください。

---

## 📊 診断ロジック（概要）

10問の回答から5つの軸でスコアを集計：

| 軸 | 意味 | 高スコアの傾向 |
|----|------|-------------|
| `p` | 投手傾向 | 先発・リリーフ・クローザー |
| `pw` | パワー | スラッガー・長距離砲 |
| `sp` | スピード/俊敏性 | リードオフ・守備型 |
| `cl` | 勝負強さ | クローザー・クラッチヒッター |
| `ld` | リーダーシップ | エース・4番打者 |

合計スコアから `lib/diagnosis.ts` の条件分岐で55種類の結果に振り分けます。
