export interface ProposalFile {
  name: string;
  url: string;
  type: string;
}

export interface ProposalsSectionProps {
  title: string;
  description: string;
  files: ProposalFile[];
}

export default function ProposalsSection({
  title,
  description,
  files,
}: ProposalsSectionProps) {
  return (
    <section className="mt-8 rounded-[2rem] bg-blue-50 p-6 shadow-sm md:p-10">
      <h2 className="text-3xl font-black text-slate-950">{title}</h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p>

      <div className="mt-8 space-y-3">
        {files.map((file) => (
          <a
            key={file.url}
            href={file.url}
            download
            className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm transition hover:bg-slate-50 hover:shadow-md"
          >
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-black text-sm">
                {file.type === "Word" && "📄"}
                {file.type === "PDF" && "📕"}
              </div>
            </div>
            <div className="flex-1">
              <p className="font-black text-slate-950">{file.name}</p>
              <p className="text-sm text-slate-600">{file.type}</p>
            </div>
            <div className="flex-shrink-0 text-blue-600 font-bold">
              ↓
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="/propozice"
          className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
        >
          Zobrazit propozice
        </a>
      </div>
    </section>
  );
}
