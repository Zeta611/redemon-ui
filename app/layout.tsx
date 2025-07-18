import type { Metadata } from "next";
import { Montserrat, Tsukimi_Rounded } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const tsukimiRounded = Tsukimi_Rounded({
  weight: ["500", "600", "700"],
  variable: "--font-rounded",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReDemon UI",
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
        className={`${tsukimiRounded.variable} ${montserrat.variable} flex h-screen w-screen flex-col font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
