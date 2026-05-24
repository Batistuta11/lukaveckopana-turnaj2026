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

const payment = tournamentData.proposals.payment;
const paymentQrPayload = [
  "SPD",
  "1.0",
  `ACC:${payment.iban}`,
  `AM:${payment.amount}`,
  `CC:${payment.currency}`,
  `X-VS:${payment.variableSymbol}`,
  `MSG:${payment.message}`,
].join("*");
const paymentQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
  paymentQrPayload
)}`;

export default function PropozicePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-5xl px-5 py-8">
        <BackButton href="/" label="← Zpět na hlavní stránku" />

        <div className="overflow-hidden rounded-[2rem] bg-white p-5 shadow-xl md:p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
            Propozice turnaje
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
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
                {section.title === "Startovné a registrace" && (
                  <div className="mt-6 grid gap-5 rounded-3xl bg-white p-5 shadow-sm md:grid-cols-[auto_1fr] md:items-center">
                    <img
                      src={paymentQrUrl}
                      alt="QR kód pro platbu startovného"
                      width={240}
                      height={240}
                      className="mx-auto h-48 w-48 rounded-2xl border border-slate-200 bg-white p-2 md:mx-0"
                    />
                    <div>
                      <h3 className="text-xl font-black text-slate-950">
                        {payment.title}
                      </h3>
                      <dl className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                        <div>
                          <dt className="font-black text-slate-950">Částka</dt>
                          <dd>1200 Kč</dd>
                        </div>
                        <div>
                          <dt className="font-black text-slate-950">Účet</dt>
                          <dd>{payment.account}</dd>
                        </div>
                        <div>
                          <dt className="font-black text-slate-950">Variabilní symbol</dt>
                          <dd>{payment.variableSymbol}</dd>
                        </div>
                        <div>
                          <dt className="font-black text-slate-950">Poznámka</dt>
                          <dd>Název týmu</dd>
                        </div>
                      </dl>
                      <p className="mt-4 rounded-2xl bg-yellow-50 p-4 text-sm font-bold leading-6 text-yellow-900">
                        {payment.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-slate-950">Stáhnout propozice</h2>
              <p className="mt-2 text-slate-700">
                Dokument propozic je k dispozici ke stažení ve formátu PDF i
                Word. Pokud potřebuješ mít propozice v offline režimu, použij
                níže uvedené odkazy.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {tournamentData.proposals.files.map((file) => (
                  <a
                    key={file.url}
                    href={file.url}
                    download
                    className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white hover:bg-blue-800"
                  >
                    Stáhnout {file.type}
                  </a>
                ))}
              </div>
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
