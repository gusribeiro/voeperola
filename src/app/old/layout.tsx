import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "VoePerola.com",
  description: "Bem vindo a VoePerola.com!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#eee]">{children}</body>
    </html>
  );
}
