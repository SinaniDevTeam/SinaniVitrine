import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
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
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
