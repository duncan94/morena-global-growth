type PhotoPlaceholderProps = {
  label?: string;
  caption?: string;
  aspect?: "portrait" | "square" | "wide";
  className?: string;
};

const aspectClasses = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export default function PhotoPlaceholder({
  label = "Foto Esther Murina",
  caption = "Professionele portretfoto volgt",
  aspect = "portrait",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <figure className={`overflow-hidden rounded-2xl ${className}`}>
      <div
        className={`relative flex ${aspectClasses[aspect]} w-full items-end justify-center overflow-hidden bg-gradient-to-br from-sand via-ivory to-copper/30`}
      >
        {/* Soft abstract portrait suggestion */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-[18%] h-[42%] w-[38%] -translate-x-1/2 rounded-full bg-gradient-to-b from-taupe/40 to-forest/25 blur-[1px]" />
          <div className="absolute bottom-0 left-1/2 h-[48%] w-[70%] -translate-x-1/2 rounded-t-[50%] bg-gradient-to-t from-forest/30 to-sage/20" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(44,42,39,0.08)_100%)]" />
        <div className="relative z-10 mb-8 px-6 text-center">
          <p className="font-serif text-lg text-forest/80">{label}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-taupe">{caption}</p>
        </div>
      </div>
    </figure>
  );
}
