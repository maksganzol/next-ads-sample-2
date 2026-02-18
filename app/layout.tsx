import type { Metadata } from "next";
import "./globals.css";
import NextAdsScript from "@/components/NextAdsScript";

export const metadata: Metadata = {
  title: "Блог - Интересные статьи на каждый день",
  description: "Статьи о путешествиях, технологиях, кулинарии, здоровье и творчестве",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <NextAdsScript />
      </body>
    </html>
  );
}
