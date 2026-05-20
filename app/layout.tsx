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
  metadataBase: new URL("https://sinani.net"),
  title: {
    default: "SINANI — Incubateur Audiovisuel & Agence de Publicité en Guinée",
    template: "%s | SINANI",
  },
  description:
    "SINANI est un incubateur audiovisuel et une agence de publicité basée à Conakry, Guinée. Production audiovisuelle, studio photo & vidéo, marketing digital. Raconter la Guinée, inspirer le Monde.",
  keywords: [
    "incubateur audiovisuel Guinée",
    "agence publicité Conakry",
    "production audiovisuelle Guinée",
    "studio photo vidéo Conakry",
    "marketing digital Guinée",
    "SINANI",
  ],
  authors: [{ name: "SINANI", url: "https://sinani.net" }],
  creator: "SINANI",
  publisher: "SINANI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sinani.net",
    siteName: "SINANI",
    title: "SINANI — Incubateur Audiovisuel & Agence de Publicité en Guinée",
    description:
      "Production audiovisuelle, studio photo & vidéo, marketing digital à Conakry. Raconter la Guinée, inspirer le Monde.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SINANI — Incubateur Audiovisuel & Agence de Publicité",
    description:
      "Production audiovisuelle, studio, marketing digital en Guinée.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sinani.net",
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SINANI",
  url: "https://sinani.net",
  logo: "https://sinani.net/FAVICON/Noir_2.png",
  description:
    "Incubateur audiovisuel et agence de publicité basée à Conakry, Guinée.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nongo 2ème pont au carrefour Idiamine",
    addressLocality: "Conakry",
    addressCountry: "GN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+224-612-41-41-71",
    contactType: "customer service",
    email: "contact@agencesinani.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
