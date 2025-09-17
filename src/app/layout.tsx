import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vocabulary Duo",
  description: "Learn vocabulary with fun and games",
  icons: {
    icon: "/favicon.ico.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo2.className} antialiased`}>{children}</body>
    </html>
  );
}
