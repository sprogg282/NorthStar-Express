import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NorthStar Express | Express Excellence",
  description:
    "Reliable Service. Proven Results. Join NorthStar Express - the premier virtual trucking company for Euro Truck Simulator 2 and American Truck Simulator.",
  keywords: ["NorthStar Express", "VTC", "TruckersMP", "ETS2", "ATS", "virtual trucking"],
  openGraph: {
    title: "NorthStar Express | Express Excellence",
    description: "Join the premier virtual trucking company",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2233",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} bg-background`}>
      <body className="antialiased font-sans">
        <div className="bg-pattern" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
