import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Systemparadokset – Hvordan sette fart der treghet regjerer",
  description:
    "En podcast om store organisasjoner, komplekse systemer og hva som skal til for å skape bevegelse der treghet regjerer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#141518]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
