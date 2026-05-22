import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      from: "turnaj@lukaveckopana.cz",
      to: ["jan.bartos11@gmail.com", "jan.bartos@cdt.cz"],
      subject: `Nová přihláška: ${teamName}`,
      text: emailContent,
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
