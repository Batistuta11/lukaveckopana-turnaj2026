export interface InformationSectionProps {
  title: string;
  paragraphs: string[];
  forTeams: {
    title: string;
    items: string[];
  };
  forVisitors: {
    title: string;
    items: string[];
  };
}

export default function InformationSection({
  title,
  paragraphs,
  forTeams,
  forVisitors,
}: InformationSectionProps) {
  return (
    <section className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
      <h2 className="text-3xl font-black text-slate-950">{title}</h2>

      <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-slate-100 p-6">
          <h3 className="text-xl font-black text-slate-950">
            {forTeams.title}
          </h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            {forTeams.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-slate-100 p-6">
          <h3 className="text-xl font-black text-slate-950">
            {forVisitors.title}
          </h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            {forVisitors.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
