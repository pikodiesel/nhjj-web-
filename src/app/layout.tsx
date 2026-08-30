import type { Metadata, Viewport } from "next"
import { Bebas_Neue, Barlow_Condensed } from "next/font/google"
import "./globals.css"

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nhjjhawaii.com"),
  title: "NHJJ Hawaii — New Hope Jiu-Jitsu · Waipahu, Oahu",
  description:
    "New Hope Jiu-Jitsu Hawaii — Waipahu, Oahu. Awareness, movement, jujitsu, self-defense. Sundays 2:30–4:30 PM. Every class is free. All ages, all skill levels.",
  openGraph: {
    siteName: "NHJJ Hawaii",
    type: "website",
    images: [{ url: "/nhjj-icon.png" }],
  },
  twitter: { card: "summary_large_image" },
}

/* Charcoal ground carries into the mobile browser chrome. */
export const viewport: Viewport = {
  themeColor: "#262626",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
