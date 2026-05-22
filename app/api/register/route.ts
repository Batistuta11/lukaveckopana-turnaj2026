import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Chybí konfigurace pro odesílání emailu" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { teamName, captainName, email, phone } = body;

    // Validace
    if (!teamName || !captainName || !email || !phone) {
      return Response.json(
        { error: "Všechna pole jsou povinná" },
        { status: 400 }
      );
    }

    // Email obsah
    const emailContent = `
Nová přihláška mužstva na turnaj:

Název mužstva: ${teamName}
Kapitán: ${captainName}
Email: ${email}
Mobilní telefon: ${phone}

---
Přihláška byla odeslána z webu turnaje.
    `;

    // Odeslání emailu
    const response = await resend.emails.send({
      from: "Klub malé kopané Lukavec <turnaj@lukaveckopana.cz>",
      to: ["jan.bartos11@gmail.com", "jan.bartos@cdt.cz"],
      subject: `Nová přihláška: ${teamName}`,
      text: emailContent,
      replyTo: email,
    });

    if (response.error) {
      return Response.json(
        { error: "Chyba při odesílání emailu" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, message: "Přihláška odeslána!" });
  } catch (error) {
    console.error("Chyba:", error);
    return Response.json(
      { error: "Chyba serveru" },
      { status: 500 }
    );
  }
}
