import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import tournamentData from "@/content/tournament.json";

export const metadata: Metadata = {
  title: "Propozice turnaje",
  description:
    "Propozice 25. ročníku turnaje O pohár obce Lukavec: pravidla, systém, startovné, harmonogram a kontakty pořadatelů.",
  alternates: {
    canonical: "/propozice",
  },
  openGraph: {
    title: "Propozice turnaje Lukavec 2026",
    description:
      "Pravidla, systém turnaje, startovné, harmonogram a kontakty k turnaji O pohár obce Lukavec.",
    url: "/propozice",
  },
};

export default function PropozicePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-5xl px-5 py-8">
        <BackButton href="/" label="← Zpět na hlavní stránku" />

        <div className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
            Propozice turnaje
          </p>

          <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            {tournamentData.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Podrobné propozice turnaje najdeš níže. Stránka obsahuje informace k pravidlům,
            startovnému, systému, časovému harmonogramu a dalším organizačním pokynům.
          </p>

          <div className="mt-8 space-y-10 text-slate-700">
            {tournamentData.proposals.sections.map((section) => (
              <div key={section.title} className="rounded-3xl bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-2 leading-8 text-slate-700">{section.content}</p>
              </div>
            ))}

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-slate-950">Stáhnout propozice</h2>
              <p className="mt-2 text-slate-700">
                Dokument propozic je k dispozici ke stažení ve formátu Word. Pokud potřebuješ
                mít propozice v offline režimu, použij níže uvedený odkaz.
              </p>

              <a
                href={tournamentData.proposals.files[0].url}
                download
                className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white hover:bg-blue-800"
              >
                Stáhnout propozice
              </a>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-slate-950">Kontakty pořadatelů</h2>
              <div className="mt-4 space-y-4 text-slate-700">
                {tournamentData.proposals.organizers.map((organizer) => (
                  <div
                    key={organizer.name}
                    className="rounded-3xl bg-white p-5 shadow-sm"
                  >
                    <p className="font-black text-slate-950">
                      {organizer.name}, {organizer.location}
                    </p>
                    <p>
                      mobil: <a className="text-blue-600 underline" href={`tel:${organizer.mobile.replace(/\s+/g, "")}`}>
                        {organizer.mobile}
                      </a>
                    </p>
                    <p>
                      e-mail: <a className="text-blue-600 underline" href={`mailto:${organizer.email}`}>
                        {organizer.email}
                      </a>
                    </p>
                    <p>
                      www: <a className="text-blue-600 underline" href={organizer.website}>
                        {organizer.website}
                      </a>
                    </p>
                  </div>
                ))}
                <p className="text-sm text-slate-600">
                  {tournamentData.proposals.organizersFooter}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                Pokud budeš mít dotazy k propozicím, napiš na oficiální stránky hlavního webu KMKL
                nebo využij kontaktní informace uvedené v dokumentu.
              </p>
              <p>
                Pro další informace se vrátíš zpět na hlavní stránku kliknutím na tlačítko nahoře.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
