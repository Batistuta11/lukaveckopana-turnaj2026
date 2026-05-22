export interface HeroSectionProps {
  label: string;
  title: string;
  description: string;
  gifPath?: string;
  imagePath?: string;
}

export default function HeroSection({
  label,
  title,
  description,
  gifPath,
  imagePath,
}: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl">
      {imagePath && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imagePath})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div className="relative px-6 py-12 md:px-12 md:py-16">
        {gifPath && (
          <img
            src={gifPath}
            alt="Turnaj GIF"
            className="mb-6 w-full rounded-lg"
          />
        )}
        <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
          {label}
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      </div>

      
    </header>
  );
}
