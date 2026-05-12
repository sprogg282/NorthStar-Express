import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "NorthStar Express | News",
  description: "Stay updated with the latest news from NorthStar Express VTC",
}

export const viewport: Viewport = {
  themeColor: "#0f2233",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${plusJakarta.variable} font-sans`}>
        <div className="bg-pattern" />
        {children}
      </body>
    </html>
  )
}
