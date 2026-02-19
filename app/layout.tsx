import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "野球選手タイプ診断 | あなたは何番ポジション？",
  description:
    "10問の質問に答えるだけ！あなたの性格・行動パターンから、野球選手に例えるとどのポジション・打順・タイプかを診断します。結果は50種類以上！友達にもシェアしよう。",
  keywords: "野球, 診断, 性格診断, ポジション, 打順, 野球選手タイプ",
  openGraph: {
    title: "野球選手タイプ診断",
    description: "あなたは先発エース？4番スラッガー？クローザー？10問で判明！",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-paper-texture min-h-screen">
        {children}
      </body>
    </html>
  );
}
