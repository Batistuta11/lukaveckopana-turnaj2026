export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-8">
        <a
          href="https://www.lukaveckopana.cz"
          className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          ← Zpět na hlavní web KMKL
        </a>

        <header className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl">
          <div className="px-6 py-12 md:px-12 md:py-16">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
              Klub malé kopané Lukavec
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              25. ročník turnaje O pohár obce Lukavec
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Tradiční turnaj v malé kopané v Lukavci. Přehled termínu,
              propozic, počtu mužstev, programu a důležitých informací pro
              týmy i návštěvníky.
            </p>
          </div>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Termín
            </p>
            <p className="mt-3 text-2xl font-black text-slate-950">
              1. 8. 2026
            </p>
            <p className="mt-2 text-slate-600">zahájení od 8:00</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Místo
            </p>
            <p className="mt-3 text-2xl font-black text-slate-950">
              Hřiště Lukavec
            </p>
            <p className="mt-2 text-slate-600">
              sportovní areál v Lukavci u Hořic
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">
              Stav
            </p>
            <p className="mt-3 text-2xl font-black text-slate-950">
              Připravujeme
            </p>
            <p className="mt-2 text-slate-600">
              propozice budou postupně doplněny
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-slate-950">
            Informace k turnaji
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Klub malé kopané Lukavec připravuje jubilejní 25. ročník
              tradičního turnaje v malé kopané{" "}
              <strong>O pohár obce Lukavec</strong>.
            </p>

            <p>
              Na této stránce budou postupně doplněny informace o počtu mužstev,
              systému turnaje, startovném, harmonogramu, občerstvení a
              organizačních pokynech.
            </p>

            <p>
              Stránka běží samostatně na Vercelu. Hlavní web KMKL zůstává na
              WordPressu u FORPSI a z aktuality bude na tuto stránku pouze
              odkaz.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-100 p-6">
              <h3 className="text-xl font-black text-slate-950">
                Pro mužstva
              </h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• informace k přihláškám budou doplněny</li>
                <li>• počet týmů bude upřesněn</li>
                <li>• pravidla a systém turnaje budou zveřejněny zde</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6">
              <h3 className="text-xl font-black text-slate-950">
                Pro návštěvníky
              </h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• sportovní program po celý den</li>
                <li>• občerstvení v areálu</li>
                <li>• příjemná atmosféra v Lukavci</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.lukaveckopana.cz"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white hover:bg-blue-800"
            >
              Hlavní web KMKL
            </a>

            <a
              href="https://www.lukaveckopana.cz/aktuality/"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Aktuality
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
