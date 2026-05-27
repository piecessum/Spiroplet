import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Спироплёт — спироплётная экосистема",
  description:
    "Спироплёт — система спирального или кольцевого переплёта с круглыми отверстиями диаметром 5,5 мм и шагом 4 мм. Единый стандарт для форматов A4, B5 и A5.",
  metadataBase: new URL("https://spiroplet.ru"),
  openGraph: {
    title: "Спироплёт — спироплётная экосистема",
    description:
      "Единый стандарт спирального переплёта: отверстия 5,5 мм с шагом 4 мм для форматов A4, B5 и A5.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
