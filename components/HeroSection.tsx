import Image from "next/image";

export interface HeroSectionProps {
  label: string;
  title: string;
  description: string;
  gifPath?: string;
  imagePath?: string;
  logoPath?: string;
}

export default function HeroSection({
  label,
  title,
  description,
  gifPath,
  imagePath,
  logoPath,
}: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl">
      {imagePath && (
        <div className="absolute inset-0">
          <Image
            src={imagePath}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div className="relative px-6 py-12 md:px-12 md:py-16">
        {gifPath && (
          <Image
            src={gifPath}
            alt="Turnaj GIF"
            width={1200}
            height={400}
            priority
            unoptimized
            className="mb-6 w-full rounded-lg"
          />
        )}
        <div className="mb-5 flex items-center gap-4">
          {logoPath && (
            <Image
              src={logoPath}
              alt="Znak Klubu malé kopané Lukavec"
              width={80}
              height={80}
              className="h-16 w-16 rounded-full border-2 border-white/80 bg-white object-cover shadow-lg md:h-20 md:w-20"
            />
          )}
          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">
            {label}
          </p>
        </div>

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
