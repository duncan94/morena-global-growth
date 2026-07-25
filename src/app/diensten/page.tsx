import type { Metadata } from "next";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Business coaching, organisatietrainingen, begeleiding voor startende ondernemers, studenten en vrouwen die terugkeren naar de arbeidsmarkt.",
};

export default function DienstenPage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Diensten
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl">
            Trainingen & coaching
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Vijf duidelijke pakketten — altijd op maat, altijd menselijk. Kies wat
            bij jouw situatie past, of plan een kennismaking om samen te kijken.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl space-y-10 px-5 py-14 md:px-8 md:py-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-sand bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-12">
                <div
                  className={`flex flex-col justify-between p-8 md:p-10 lg:col-span-5 ${
                    index % 2 === 0 ? "bg-ivory" : "bg-forest text-cream"
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                        index % 2 === 0 ? "text-terracotta" : "text-copper"
                      }`}
                    >
                      Pakket 0{index + 1}
                    </p>
                    <h2
                      className={`mt-3 font-serif text-3xl font-medium ${
                        index % 2 === 0 ? "text-forest" : "text-cream"
                      }`}
                    >
                      {service.name}
                    </h2>
                    <p
                      className={`mt-2 text-base font-medium ${
                        index % 2 === 0 ? "text-sage" : "text-sand"
                      }`}
                    >
                      {service.tagline}
                    </p>
                    <p
                      className={`mt-5 text-sm leading-relaxed ${
                        index % 2 === 0 ? "text-muted" : "text-sand/90"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 space-y-2 text-sm">
                    <p className={index % 2 === 0 ? "text-charcoal" : "text-cream"}>
                      <span className="font-medium">Voor wie: </span>
                      <span className={index % 2 === 0 ? "text-muted" : "text-sand/90"}>
                        {service.forWhom}
                      </span>
                    </p>
                    <p className={index % 2 === 0 ? "text-muted" : "text-sand/80"}>
                      {service.duration} · {service.format}
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 p-8 md:p-10 lg:col-span-7 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                      Wat is inbegrepen
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                      Verwachte resultaten
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.outcomes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="/contact" className="w-full sm:w-auto">
                        Interesse? Neem contact op
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-sand bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8">
          <SectionHeading
            eyebrow="Maatwerk"
            title="Niet precies wat je zoekt?"
            description="Elke situatie is uniek. Vertel me wat je nodig hebt — dan kijken we samen naar een traject of training die écht past."
            align="center"
          />
          <div className="mt-8">
            <Button href="/contact">Bespreek maatwerk</Button>
          </div>
        </div>
      </section>

      <CTA
        title="Welk traject past bij jou?"
        description="In een kennismakingsgesprek verkennen we jouw situatie en wat het meeste verschil kan maken."
        secondaryLabel="Voor wie is dit"
        secondaryHref="/voor-wie"
      />
    </>
  );
}
