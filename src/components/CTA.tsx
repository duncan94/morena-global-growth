import Button from "./Button";

type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  title = "Klaar om de volgende stap te zetten?",
  description = "Of je nu leiding geeft, onderneemt, studeert of de arbeidsmarkt opnieuw betreedt — groei begint bij een open, eerlijk gesprek.",
  primaryLabel = "Plan een kennismaking",
  primaryHref = "/contact",
  secondaryLabel = "Bekijk de diensten",
  secondaryHref = "/diensten",
}: CTAProps) {
  return (
    <section className="bg-forest-depth">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Laten we kennismaken
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-cream md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sand/90 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="light">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
