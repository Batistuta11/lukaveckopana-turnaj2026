export interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({
  href,
  label = "← Zpět na hlavní web KMKL",
}: BackButtonProps) {
  return (
    <a
      href={href}
      className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50"
    >
      {label}
    </a>
  );
}
