export interface InfoCardProps {
  label: string;
  value: string;
  note: string;
}

export default function InfoCard({ label, value, note }: InfoCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-2 text-slate-600">{note}</p>
    </div>
  );
}
