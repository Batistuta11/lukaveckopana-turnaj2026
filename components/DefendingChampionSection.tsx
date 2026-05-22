import Image from "next/image";

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
    <section className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="grid md:grid-cols-[1fr_18rem]">
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
              {champion.eyebrow}
            </p>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
              Putovní pohár
            </span>
          </div>

          <p className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            {champion.teamName}
          </p>

          <h2 className="mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:text-3xl">
            {champion.title}
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-700">
            {champion.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {champion.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 ring-1 ring-blue-100"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {champion.imagePath && (
          <div className="relative min-h-56 md:min-h-full">
            <Image
              src={champion.imagePath}
              alt={`Tým ${champion.teamName}, vítěz minulého ročníku`}
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent md:bg-none" />
          </div>
        )}
      </div>
    </section>
  );
}
