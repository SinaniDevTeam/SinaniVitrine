import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "SINANI",
  description:
    "SINANI est un incubateur audiovisuel et une agence de publicité basée en Guinée. Raconter la Guinée, inspirer le Monde.",
  icons: {
    icon: "/FAVICON/Noir_2.png",
    shortcut: "/FAVICON/Noir_2.png",
    apple: "/FAVICON/Noir_2.png",
    other: [
      {
        rel: "icon",
        url: "/FAVICON/Noir_2.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/FAVICON/Blanc_2.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
