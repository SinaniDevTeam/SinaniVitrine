import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SINANI pour vos projets de production audiovisuelle, marketing digital ou location de studio à Conakry, Guinée. Email : contact@agencesinani.com — Tél : +224 612 41 41 71.",
  alternates: {
    canonical: "https://sinani.net/contact",
  },
  openGraph: {
    url: "https://sinani.net/contact",
    title: "Contact | SINANI",
    description:
      "Contactez SINANI pour vos projets audiovisuels ou marketing digital à Conakry, Guinée.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
