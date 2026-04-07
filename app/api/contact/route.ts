import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["contact@agencesinani.com"],
      subject: `Nouveau message : ${subject || "Contact depuis le site"}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet choisi:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}