import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { type, ...fields } = body;

    let subject = "";
    let html = "";

    if (type === "actor") {
      subject = `Nouvelle candidature Talent — ${fields.prenom} ${fields.nom}`;
      html = `
        <h2>Nouvelle candidature Talent</h2>
        <p><strong>Type(s) de talent:</strong> ${fields.talentTypes || "—"}</p>
        <hr>
        <h3>Informations personnelles</h3>
        <p><strong>Prénom:</strong> ${fields.prenom}</p>
        <p><strong>Nom:</strong> ${fields.nom}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Téléphone:</strong> ${fields.telephone || "—"}</p>
        <p><strong>Âge:</strong> ${fields.age || "—"}</p>
        <p><strong>Nationalité:</strong> ${fields.nationalite || "—"}</p>
        <p><strong>Ville:</strong> ${fields.ville || "—"}</p>
        <p><strong>Genre:</strong> ${fields.genre || "—"}</p>
        <hr>
        <h3>Profil</h3>
        <p><strong>Expérience:</strong> ${fields.experience}</p>
        <p><strong>Quartier:</strong> ${fields.quartier || "—"}</p>
        <p><strong>Langues:</strong> ${fields.langues || "—"}</p>
        <p><strong>Biographie:</strong></p>
        <p style="white-space: pre-wrap;">${fields.bio}</p>
        ${fields.notes ? `<hr><h3>Informations complémentaires</h3><p style="white-space: pre-wrap;">${fields.notes}</p>` : ""}
        <hr>
        <h3>Disponibilités & Présence</h3>
        <p><strong>Disponible pour:</strong> ${fields.disponibilites || "—"}</p>
        <p><strong>Instagram:</strong> ${fields.instagram || "—"}</p>
        <p><strong>Facebook:</strong> ${fields.facebook || "—"}</p>
        ${fields.portfolio ? `<p><strong>Portfolio:</strong> <a href="${fields.portfolio}">${fields.portfolio}</a></p>` : ""}
      `;
    } else {
      subject = `Nouveau projet Podcast — ${fields.titre}`;
      html = `
        <h2>Nouveau projet Podcast</h2>
        <h3>Coordonnées</h3>
        <p><strong>Nom:</strong> ${fields.nom}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Téléphone:</strong> ${fields.telephone || "—"}</p>
        <p><strong>Adresse:</strong> ${fields.adresse || "—"}</p>
        <hr>
        <h3>Concept</h3>
        <p><strong>Titre:</strong> ${fields.titre}</p>
        <p><strong>Catégorie:</strong> ${fields.categorie}</p>
        ${fields.videoUrl ? `<p><strong>Vidéo de présentation:</strong> <a href="${fields.videoUrl}">${fields.videoUrl}</a></p>` : ""}
        <p><strong>Public cible:</strong></p>
        <p style="white-space: pre-wrap;">${fields.publicCible}</p>
        ${fields.notes ? `<hr><p><strong>Informations complémentaires:</strong></p><p style="white-space: pre-wrap;">${fields.notes}</p>` : ""}
      `;
    }

    const attachments = [];
    if (fields.references && fields.references.content) {
      attachments.push({
        filename: fields.references.name,
        content: fields.references.content,
      });
    }

    const data = await resend.emails.send({
      from: "Candidatures SINANI <onboarding@resend.dev>",
      to: ["contact@agencesinani.com"],
      subject,
      html,
      attachments,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
