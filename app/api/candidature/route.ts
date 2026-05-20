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
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouvelle candidature Talent</h2>
          <p><strong>Type(s) de talent:</strong> ${fields.talentTypes || "—"}</p>
          <hr>
          <h3>Informations personnelles</h3>
          <p><strong>Prénom:</strong> ${fields.prenom}</p>
          <p><strong>Nom:</strong> ${fields.nom}</p>
          <p><strong>Email:</strong> ${fields.email}</p>
          <p><strong>Téléphone:</strong> ${fields.telephone || "—"}</p>
          <p><strong>Âge:</strong> ${fields.age || "—"}</p>
          <p><strong>Genre:</strong> ${fields.genre || "—"}</p>
          <p><strong>Adresse:</strong> ${fields.adresse || "—"}</p>
          <hr>
          <h3>Profil</h3>
          <p><strong>Expérience:</strong> ${fields.experience}</p>
          <p><strong>Langues:</strong> ${fields.langues || "—"}</p>
          ${fields.videoUrl ? `<p><strong>Vidéo de présentation:</strong> <a href="${fields.videoUrl}">${fields.videoUrl}</a></p>` : ""}
          ${fields.references?.url ? `<p><strong>Portfolio / Photos:</strong> <a href="${fields.references.url}">${fields.references.url}</a></p>` : ""}
          <p><strong>Biographie:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${fields.bio}</p>
          ${fields.notes ? `<hr><h3>Informations complémentaires</h3><p style="white-space: pre-wrap;">${fields.notes}</p>` : ""}
        </div>
      `;
    } else if (type === "presenter") {
      subject = `Nouvelle candidature Présentateur — ${fields.prenom} ${fields.nom}`;
      html = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouvelle candidature Présentateur / Animateur</h2>
          <hr>
          <h3>Informations personnelles</h3>
          <p><strong>Prénom:</strong> ${fields.prenom}</p>
          <p><strong>Nom:</strong> ${fields.nom}</p>
          <p><strong>Email:</strong> ${fields.email}</p>
          <p><strong>Téléphone:</strong> ${fields.telephone || "—"}</p>
          <p><strong>Âge:</strong> ${fields.age || "—"}</p>
          <p><strong>Genre:</strong> ${fields.genre || "—"}</p>
          <p><strong>Adresse:</strong> ${fields.adresse || "—"}</p>
          <hr>
          <h3>Profil</h3>
          <p><strong>Expérience:</strong> ${fields.experience}</p>
          <p><strong>Langues:</strong> ${fields.langues || "—"}</p>
          <p><strong>Vidéo de présentation:</strong> <a href="${fields.videoUrl}">${fields.videoUrl}</a></p>
          ${fields.references?.url ? `<p><strong>Portfolio / Photos:</strong> <a href="${fields.references.url}">${fields.references.url}</a></p>` : ""}
          <p><strong>Biographie:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${fields.bio}</p>
          ${fields.notes ? `<hr><h3>Informations complémentaires</h3><p style="white-space: pre-wrap;">${fields.notes}</p>` : ""}
        </div>
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
        <p><strong>Synopsis:</strong></p>
        <p style="white-space: pre-wrap;">${fields.synopsis}</p>
        ${fields.notes ? `<hr><p><strong>Informations complémentaires:</strong></p><p style="white-space: pre-wrap;">${fields.notes}</p>` : ""}
      `;
    }

    const attachments = [];
    if (fields.references && fields.references.content) {
      try {
        attachments.push({
          filename: fields.references.name || "portfolio",
          content: Buffer.from(fields.references.content, 'base64'),
        });
      } catch (err) {
        console.error("Error processing attachment:", err);
      }
    }

    const data = await resend.emails.send({
      from: "Candidatures SINANI <contact@agencesinani.com>",
      to: ["contact@agencesinani.com"],
      //reply_to: email,
      subject,
      html,
      attachments,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    if (scriptUrl) {
      const sheetPayload =
        type === "actor"
          ? {
            type,
            prenom: fields.prenom || "",
            nom: fields.nom || "",
            email: fields.email || "",
            telephone: fields.telephone || "",
            age: fields.age || "",
            genre: fields.genre || "",
            adresse: fields.adresse || "",
            experience: fields.experience || "",
            langues: fields.langues || "",
            bio: fields.bio || "",
            notes: fields.notes || "",
            talents: fields.talentTypes || "",
            videoUrl: fields.videoUrl || "",
            Fichier: fields.references?.url
              ? fields.references.url
              : fields.references?.content
                ? {
                  name: fields.references.name || "portfolio",
                  type: fields.references.type || "application/octet-stream",
                  content: fields.references.content,
                }
                : null,
            fichierUrl: fields.references?.url || "",
          }
          : type === "presenter"
            ? {
              type,
              prenom: fields.prenom || "",
              nom: fields.nom || "",
              email: fields.email || "",
              telephone: fields.telephone || "",
              age: fields.age || "",
              genre: fields.genre || "",
              adresse: fields.adresse || "",
              experience: fields.experience || "",
              langues: fields.langues || "",
              bio: fields.bio || "",
              notes: fields.notes || "",
              videoUrl: fields.videoUrl || "",
              Fichier: fields.references?.url
                ? fields.references.url
                : fields.references?.content
                  ? {
                    name: fields.references.name || "portfolio",
                    type: fields.references.type || "application/octet-stream",
                    content: fields.references.content,
                  }
                  : null,
              fichierUrl: fields.references?.url || "",
            }
            : {
              type,
              prenom: fields.prenom || "",
              nom: fields.nom || "",
              email: fields.email || "",
              telephone: fields.telephone || "",
              age: fields.age || "",
              genre: fields.genre || "",
              adresse: fields.adresse || "",
              titre: fields.titre || "",
              categorie: fields.categorie || "",
              synopsis: fields.synopsis || "",
              videoUrl: fields.videoUrl || "",
              notes: fields.notes || "",
            };

      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sheetPayload),
        });
      } catch (sheetError) {
        console.error("Google Sheets error:", sheetError);
      }
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Detailed API Error:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Internal Server Error"
    }, { status: 500 });
  }
}
