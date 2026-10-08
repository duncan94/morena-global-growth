import Image from "next/image";

type EstherPhotoProps = {
  caption?: string;
  aspect?: "portrait" | "square" | "wide";
  className?: string;
  priority?: boolean;
};

const aspectClasses = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export default function EstherPhoto({
  caption,
  aspect = "portrait",
  className = "",
  priority = false,
}: EstherPhotoProps) {
  return (
    <figure className={`overflow-hidden rounded-2xl bg-white ${className}`}>
      <div className={`relative ${aspectClasses[aspect]} w-full`}>
        <Image
          src="/images/esther-murina.jpeg"
          alt="Esther Murina, oprichter van Morena Global Growth Coaching"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-sand px-5 py-3 text-center text-xs uppercase tracking-[0.16em] text-taupe">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
