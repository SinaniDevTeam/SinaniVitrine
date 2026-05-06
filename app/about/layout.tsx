import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire de SINANI, notre vision et l'équipe derrière l'incubateur audiovisuel et l'agence de publicité basés à Conakry, Guinée.",
  alternates: {
    canonical: "https://sinani.net/about",
  },
  openGraph: {
    url: "https://sinani.net/about",
    title: "À Propos | SINANI",
    description:
      "Découvrez l'histoire de SINANI, notre vision et l'équipe derrière l'incubateur audiovisuel à Conakry.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
