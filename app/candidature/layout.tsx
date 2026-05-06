import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidature",
  description:
    "Rejoignez SINANI en tant qu'acteur, mannequin ou créateur de contenu, ou soumettez votre concept de podcast à notre équipe de production à Conakry, Guinée.",
  alternates: {
    canonical: "https://sinani.net/candidature",
  },
  openGraph: {
    url: "https://sinani.net/candidature",
    title: "Candidature | SINANI",
    description:
      "Rejoignez les talents SINANI ou soumettez votre concept de podcast à Conakry, Guinée.",
  },
};

export default function CandidatureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
