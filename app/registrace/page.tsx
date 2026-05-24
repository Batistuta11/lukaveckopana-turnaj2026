import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import RegistrationForm from "@/components/RegistrationForm";
import tournamentData from "@/content/tournament.json";

export const metadata: Metadata = {
  title: "Přihláška mužstva",
  description:
    "Přihláška mužstva na 25. ročník turnaje O pohár obce Lukavec v malé kopané.",
  alternates: {
    canonical: "/registrace",
  },
  openGraph: {
    title: "Přihláška mužstva na turnaj Lukavec 2026",
    description:
      "Online přihláška mužstva na jubilejní 25. ročník turnaje v malé kopané v Lukavci.",
    url: "/registrace",
  },
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-5xl px-5 py-8">
        <BackButton href="/" label="← Zpět na hlavní stránku" />

        <div className="overflow-hidden rounded-[2rem] bg-white p-5 shadow-xl md:p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
            Přihláška na turnaj
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            Přihláška mužstva na {tournamentData.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Chceš se zúčastnit turnaje? Vyplň formulář níže a my ti potvrdíme
            přijetí tvé přihlášky. Všechna pole jsou povinná.
          </p>

          <div className="mt-8">
            <RegistrationForm />
          </div>

          <div className="mt-8 space-y-4 rounded-3xl bg-slate-50 p-6 text-slate-700">
            <p>
              <strong>Máš dotaz?</strong> Kontaktuj jednoho z pořadatelů:
            </p>
            <ul className="space-y-2">
              {tournamentData.proposals.organizers.map((organizer) => (
                <li key={organizer.name}>
                  <strong>{organizer.name}:</strong>{" "}
                  <a
                    href={`tel:${organizer.mobile.replace(/\s+/g, "")}`}
                    className="text-blue-600 underline"
                  >
                    {organizer.mobile}
                  </a>
                  {" | "}
                  <a
                    href={`mailto:${organizer.email}`}
                    className="text-blue-600 underline"
                  >
                    {organizer.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
