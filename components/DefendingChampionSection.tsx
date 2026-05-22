export interface DefendingChampionData {
  eyebrow: string;
  teamName: string;
  title: string;
  description: string;
  badges: string[];
  imagePath?: string;
}

export interface DefendingChampionSectionProps {
  champion: DefendingChampionData;
}

export default function DefendingChampionSection({
  champion,
}: DefendingChampionSectionProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl">
      <div className="grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">
            {champion.eyebrow}
          </p>

          <p className="mt-5 text-5xl font-black leading-none text-white md:text-7xl">
            {champion.teamName}
          </p>

          <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
            {champion.title}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {champion.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {champion.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {champion.imagePath && (
          <div className="relative min-h-72 md:min-h-full">
            <img
              src={champion.imagePath}
              alt={`Tým ${champion.teamName}, vítěz minulého ročníku`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent md:bg-gradient-to-r md:from-slate-950/40 md:to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
