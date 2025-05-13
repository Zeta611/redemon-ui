import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReDemon-UI",
  description: "Reactive Synthesis by Demonstration for UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen w-screen`}
      >
        <div className="top-0 backdrop-blur-lg py-2">
          <div className="flex justify-between items-end gap-2 px-6 max-w-xl md:max-w-2xl">
            <Link
              href="/"
              className="text-lg lg:text-xl font-bold [font-variant:small-caps]"
            >
              <span className="[font-variant:small-caps]">ReDemon</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5 ml-1 text-sm">
                UI
              </span>
            </Link>
            <div className="flex gap-2">{/*<ThemeChangeButton />*/}</div>
          </div>
        </div>
        <Separator />
        {children}
      </body>
    </html>
  );
}
