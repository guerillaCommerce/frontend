import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Clip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="relative mx-auto h-screen max-w-[420px] bg-backgroundColor">
        {children}
      </body>
    </html>
  );
}
