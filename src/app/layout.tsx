import type { Metadata } from "next";
import { Barlow_Condensed, Rajdhani } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nhjjhawaii.com"),
  title: "NHJJ Hawaii — Awareness · Movement · Jujitsu · Self-Defense",
  description:
    "New Hope Jiu-Jitsu Hawaii. Train with purpose — awareness, movement, jujitsu, and self-defense for all levels in Hawaii.",
  openGraph: {
    siteName: "NHJJ Hawaii",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${rajdhani.variable}`}>
      <body className="min-h-full flex flex-col antialiased" style={{ background: "#060c14", color: "#f0f8ff" }}>
        {children}
      </body>
    </html>
  );
}
