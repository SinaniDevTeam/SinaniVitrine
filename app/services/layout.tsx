import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Production audiovisuelle, studio photo & vidéo, studio podcast, marketing digital, community management et formation. Découvrez tous les services de SINANI à Conakry, Guinée.",
  alternates: {
    canonical: "https://sinani.net/services",
  },
  openGraph: {
    url: "https://sinani.net/services",
    title: "Services | SINANI",
    description:
      "Production audiovisuelle, studio photo & vidéo, marketing digital et formation à Conakry, Guinée.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
