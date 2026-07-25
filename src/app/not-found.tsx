import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-hero-glow flex flex-1 items-center">
      <div className="mx-auto max-w-xl px-5 py-24 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-forest">
          Pagina niet gevonden
        </h1>
        <p className="mt-4 text-muted">
          Deze pagina bestaat niet (meer). Ga terug naar home of neem contact op.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Naar home</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
