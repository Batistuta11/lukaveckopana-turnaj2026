import { Resend } from "resend";

const MAX_LENGTHS = {
  teamName: 80,
  captainName: 80,
  email: 120,
  phone: 20,
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+?[0-9][0-9\s-]{7,18}$/.test(phone);
}

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
    const teamName = cleanValue(body.teamName);
    const captainName = cleanValue(body.captainName);
    const email = cleanValue(body.email).toLowerCase();
    const phone = cleanValue(body.phone);
    const website = cleanValue(body.website);

    if (website) {
      return Response.json({ success: true, message: "Přihláška odeslána!" });
    }

    if (!teamName || !captainName || !email || !phone) {
      return Response.json(
        { error: "Všechna pole jsou povinná" },
        { status: 400 }
      );
    }

    if (
      teamName.length > MAX_LENGTHS.teamName ||
      captainName.length > MAX_LENGTHS.captainName ||
      email.length > MAX_LENGTHS.email ||
      phone.length > MAX_LENGTHS.phone
    ) {
      return Response.json(
        { error: "Některé pole je příliš dlouhé" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Zadej platný email" },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return Response.json(
        { error: "Zadej platný telefon" },
        { status: 400 }
      );
    }

    const emailContent = `
Nová přihláška mužstva na turnaj:

Název mužstva: ${teamName}
Kapitán: ${captainName}
Email: ${email}
Mobilní telefon: ${phone}

---
Přihláška byla odeslána z webu turnaje.
    `;

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
