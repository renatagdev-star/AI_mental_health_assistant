// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import HeaderPlaceholder from "@/components/landing/HeaderPlaceholder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "AI Mental Assistant (UI Demo)",
  description: "Frontend showcase for the Nordora AI mental health assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased bg-gradient-to-b from-cyan-50 via-emerald-50 to-teal-100`}
      >
        {/* Global Header (UI only – no auth logic) */}
        <HeaderPlaceholder />

        {/* Page content (offset due to fixed header) */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
