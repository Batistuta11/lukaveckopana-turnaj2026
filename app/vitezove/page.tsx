import BackButton from "@/components/BackButton";
import tournamentData from "@/content/tournament.json";

export default function VitezovePage() {
  const winners = [...tournamentData.winners.items].sort(
    (first, second) => second.year - first.year
  );

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-5xl px-5 py-8">
        <BackButton href="/" label="← Zpět na hlavní stránku" />

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <div className="bg-slate-950 p-6 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">
              Historie turnaje
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              {tournamentData.winners.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {tournamentData.winners.description}
            </p>
          </div>

          <div className="p-4 md:p-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-100 text-sm uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-black">Ročník</th>
                    <th className="px-4 py-3 font-black">Rok</th>
                    <th className="px-4 py-3 font-black">Tým</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {winners.map((winner) => {
                    const isLastKnownChampion = winner.year === 2024;

                    return (
                      <tr
                        key={`${winner.edition}-${winner.year}`}
                        className={
                          isLastKnownChampion ? "bg-blue-50" : "bg-white"
                        }
                      >
                        <td className="whitespace-nowrap px-4 py-3 font-black text-slate-950">
                          {winner.edition}.
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 font-bold text-slate-700">
                          {winner.year}
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-black text-slate-950">
                            {winner.team}
                          </span>
                          {isLastKnownChampion && (
                            <span className="ml-3 inline-flex rounded-full bg-blue-700 px-3 py-1 text-xs font-black text-white">
                              poslední uvedený vítěz
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
