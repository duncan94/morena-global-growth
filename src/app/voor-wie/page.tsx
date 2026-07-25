import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import { audiences } from "@/data/audiences";

export const metadata: Metadata = {
  title: "Voor wie",
  description:
    "Morena Global Growth Coaching werkt met bedrijven, startende ondernemers, studenten en vrouwen met een integratieachtergrond die terugkeren naar de arbeidsmarkt.",
};

const signals = [
  "Je voelt dat er meer in je zit, maar de volgende stap is onduidelijk",
  "Je wilt keuzes maken vanuit vertrouwen, niet vanuit druk of angst",
  "Je zoekt begeleiding die scherp is én menselijk — zonder standaardpraatjes",
  "Je wilt groeien in werk, onderneming of richting, met iemand die écht luistert",
];

export default function VoorWiePage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Voor wie
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl">
            Voor mensen die willen groeien — op hun eigen manier
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Ik werk met bedrijven, startende ondernemers, studenten en vrouwen met
            een integratieachtergrond. Wat hen bindt: de wens om te groeien met
            begeleiding die warm, eerlijk en resultaatgericht is.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {audiences.map((audience, i) => (
              <article
                key={audience.id}
                id={audience.id}
                className="scroll-mt-28 flex flex-col rounded-3xl border border-sand bg-white p-8 shadow-sm md:p-10"
              >
                <span className="font-serif text-3xl text-copper/80">0{i + 1}</span>
                <h2 className="mt-3 font-serif text-2xl font-medium text-forest md:text-3xl">
                  {audience.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {audience.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-charcoal"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={audience.serviceHref}
                  className="mt-8 inline-flex text-sm font-medium text-terracotta hover:text-terracotta-deep"
                >
                  Bekijk bijbehorende dienst →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Herken je dit?"
              title="Dan past Morena mogelijk bij jou"
              description="Je hoeft niet alles al te weten. Een open houding en de wens om te groeien zijn genoeg om te beginnen."
            />
            <ul className="space-y-4">
              {signals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-2xl border border-sand bg-white px-5 py-4 text-sm leading-relaxed text-muted shadow-sm"
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Button href="/contact">Plan een kennismaking</Button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8">
          <div className="ornament mb-8 text-sm">✦</div>
          <p className="font-serif text-2xl leading-snug text-forest md:text-3xl">
            “Ik geloof dat iedereen talenten heeft en dat iedereen, met de juiste
            begeleiding en het juiste vertrouwen, zijn of haar doelen kan bereiken.”
          </p>
          <p className="mt-5 text-sm text-taupe">— Esther Murina</p>
        </div>
      </section>

      <CTA
        title="Twijfel je of dit bij jou past?"
        description="Stuur een kort bericht. We kijken samen of en hoe ik je kan helpen — zonder druk, met oprechte aandacht."
        secondaryLabel="Bekijk diensten"
        secondaryHref="/diensten"
      />
    </>
  );
}
