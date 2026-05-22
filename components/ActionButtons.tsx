export interface ActionButtonsProps {
  mainWebUrl: string;
  newsUrl: string;
}

export default function ActionButtons({
  mainWebUrl,
  newsUrl,
}: ActionButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={mainWebUrl}
        className="rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white hover:bg-blue-800"
      >
        Hlavní web KMKL
      </a>

      <a
        href={newsUrl}
        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
      >
        Aktuality
      </a>
    </div>
  );
}
