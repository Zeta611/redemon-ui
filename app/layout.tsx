import type { Metadata } from "next";
import { Fira_Sans, Playfair, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import Bar from "@/components/Bar";

const playfair = Playfair({
  variable: "--font-serif",
  subsets: ["latin"],
});

const playfairDisplaySC = Playfair_Display_SC({
  variable: "--font-heading",
  weight: ["700"],
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-sans",
  weight: ["400"],
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
        className={`${playfair.variable} ${playfairDisplaySC.variable} ${firaSans.variable} flex h-screen w-screen flex-col font-serif antialiased`}
      >
        <Bar />
        <Separator className="bg-orange-200" />
        {children}
      </body>
    </html>
  );
}
