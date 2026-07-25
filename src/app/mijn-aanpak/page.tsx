import type { Metadata } from "next";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Mijn aanpak",
  description:
    "De aanpak van Esther Murina: scherp, liefdevol en eerlijk. Intuïtief én strategisch — gericht op inzichten die blijven en stappen die werken.",
};

const principles = [
  {
    title: "Scherp, liefdevol en eerlijk",
    text: "Mensen ervaren mij als scherp, liefdevol en eerlijk. Ik stel de vragen die anderen vaak uit de weg gaan, maar altijd met respect en oprechte betrokkenheid. Niet om te confronteren om het confronteren, maar omdat echte groei begint waar eerlijkheid de ruimte krijgt.",
  },
  {
    title: "Luisteren naar wat niet gezegd wordt",
    text: "Als businesscoach zie ik vaak snel waar de kern zit. Ik luister niet alleen naar wat iemand zegt, maar ook naar wat nog niet wordt uitgesproken. Daar ontstaat beweging.",
  },
  {
    title: "Intuïtief én strategisch",
    text: "Ik help mensen om patronen te doorbreken, heldere keuzes te maken en weer vanuit vertrouwen leiding te nemen over hun werk, onderneming en leven.",
  },
  {
    title: "Rustig, warm en doelgericht",
    text: "Geen standaardadvies, geen druk en geen oppervlakkige motivatie. Wel inzichten die blijven hangen, gesprekken die raken en concrete stappen die leiden tot blijvende verandering.",
  },
];

const steps = [
  {
    n: "01",
    title: "Kennismaken",
    text: "We verkennen waar je staat, wat je raakt en wat je wilt bereiken. Zonder oordeel, met open aandacht.",
  },
  {
    n: "02",
    title: "De kern vinden",
    text: "Samen brengen we patronen, blokkades en kansen in beeld. Eerlijk, scherp en met respect.",
  },
  {
    n: "03",
    title: "Inzicht & richting",
    text: "We verbinden jouw visie, doelen en potentieel — en vertalen dat naar keuzes die bij jou passen.",
  },
  {
    n: "04",
    title: "Concrete stappen",
    text: "Geen abstracte motivatie, maar acties die je kunt zetten. Blijvende verandering groeit in de praktijk.",
  },
];

export default function MijnAanpakPage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Mijn aanpak
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl">
            Echte groei begint waar eerlijkheid de ruimte krijgt
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Ik ben Esther Murina. Mijn aanpak is rustig, warm en doelgericht —
            intuïtief én strategisch. Gericht op jou, niet op een vaste formule.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-sand bg-white p-8 shadow-sm"
              >
                <h2 className="font-serif text-2xl font-medium text-forest">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
          <div className="ornament mb-8 text-sm">✦</div>
          <h2 className="font-serif text-3xl font-medium text-forest md:text-4xl">
            De filosofie erachter
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Succesvol ondernemen begint niet bij meer kennis, maar bij het toepassen
            van de juiste inzichten op het juiste moment.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Ik help je ontdekken wat écht bij jou past. Met mijn technieken en
            intuïtieve aanpak brengen we jouw visie, doelen en potentieel samen naar
            concrete resultaten.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Hoe we werken"
            title="Van gesprek naar beweging"
            description="Elk traject is uniek. Deze stappen geven houvast — zonder dat het ooit een standaardrecept wordt."
            align="center"
          />
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="relative">
                <span className="font-serif text-4xl font-medium text-copper/70">
                  {step.n}
                </span>
                <h3 className="mt-3 font-serif text-xl font-medium text-forest">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex justify-center">
            <Button href="/diensten">Bekijk de diensten</Button>
          </div>
        </div>
      </section>

      <section className="bg-forest-depth">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-18">
          <p className="font-serif text-2xl leading-snug text-cream md:text-3xl">
            “Geen standaardadvies, geen druk en geen oppervlakkige motivatie. Wel
            inzichten die blijven hangen, gesprekken die raken en concrete stappen
            die leiden tot blijvende verandering.”
          </p>
          <p className="mt-6 text-sm text-copper">Esther Murina</p>
        </div>
      </section>

      <CTA
        title="Past deze aanpak bij jou?"
        description="Laten we het in een vrijblijvend gesprek verkennen. Warm, eerlijk en zonder verplichtingen."
        secondaryLabel="Lees over mij"
        secondaryHref="/over-mij"
      />
    </>
  );
}
