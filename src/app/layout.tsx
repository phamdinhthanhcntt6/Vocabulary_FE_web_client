import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
