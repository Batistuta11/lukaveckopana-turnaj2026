import Link from "next/link";

export interface WinnersTeaserData {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  imagePath?: string;
}

export interface WinnersTeaserSectionProps {
  teaser: WinnersTeaserData;
}

export default function WinnersTeaserSection({
  teaser,
}: WinnersTeaserSectionProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="grid md:grid-cols-[15rem_1fr]">
        <div className="relative min-h-48 bg-slate-900">
          {teaser.imagePath && (
            <img
              src={teaser.imagePath}
              alt="Historie vítězů turnaje"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-center p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            {teaser.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            {teaser.title}
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            {teaser.description}
          </p>
          <div className="mt-5">
            <Link
              href={teaser.href}
              className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              {teaser.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
