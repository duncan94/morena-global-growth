import type { Metadata } from "next";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import EstherPhoto from "@/components/EstherPhoto";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Esther Murina, oprichter van Morena Global Growth Coaching. Internationale achtergrond, ondernemerservaring en een missie: mensen helpen groeien.",
};

const pillars = [
  {
    title: "Internationale blik",
    text: "Brede ervaring in het werken met mensen uit verschillende culturen en organisaties.",
  },
  {
    title: "Ondernemerservaring",
    text: "Als voormalig onderneemster ken ik kansen grijpen én moeilijke periodes doorstaan.",
  },
  {
    title: "Menselijke groei",
    text: "Passie voor trainingen aan bedrijven, studenten, ondernemers en vrouwen die terugkeren naar werk.",
  },
];

export default function OverMijPage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Over mij
              </p>
              <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl">
                Goedendag, mijn naam is Esther Murina
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Ik ben 44 jaar en heb een brede internationale achtergrond. Door de
                jaren heen heb ik veel ervaring opgedaan in het werken met mensen uit
                verschillende culturen en organisaties.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Mijn passie is om mensen te helpen groeien. Daarom geef ik trainingen
                aan bedrijven, studenten, startende ondernemers en vrouwen met een
                integratieachtergrond die de stap terug naar de arbeidsmarkt willen
                zetten.
              </p>
            </div>
            <div className="lg:col-span-6">
              <EstherPhoto
                caption="Oprichter · Coach & trainer"
                aspect="portrait"
                priority
                className="mx-auto max-w-md shadow-xl shadow-charcoal/10 ring-1 ring-sand lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <div className="ornament mb-8 text-sm">✦</div>
          <h2 className="font-serif text-3xl font-medium text-forest md:text-4xl">
            Wat mij sterker heeft gemaakt
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Als voormalig onderneemster weet ik hoe het is om kansen te grijpen,
              maar ook om uitdagingen en moeilijke periodes te doorstaan. Die
              ervaringen hebben mij sterker gemaakt en vormen vandaag de basis van
              mijn trainingen.
            </p>
            <p>
              Ik geloof dat iedereen talenten heeft en dat iedereen, met de juiste
              begeleiding en het juiste vertrouwen, zijn of haar doelen kan bereiken.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-sand bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Waar ik voor sta"
            title="Drie pijlers onder mijn werk"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-sand bg-white p-7 text-center shadow-sm"
              >
                <h3 className="font-serif text-xl font-medium text-forest">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-depth">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Mijn missie
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-snug text-cream md:text-4xl">
            Mensen inspireren, hun zelfvertrouwen versterken en hen laten geloven in
            hun eigen mogelijkheden.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand/90">
            Dat is de kern van Morena Global Growth Coaching — en de belofte die ik
            meeneem in elk gesprek, elke training en elk traject.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/mijn-aanpak" variant="primary">
              Ontdek mijn aanpak
            </Button>
            <Button href="/contact" variant="light">
              Neem contact op
            </Button>
          </div>
        </div>
      </section>

      <CTA
        title="Wil je kennismaken?"
        description="Een open, eerlijk gesprek is vaak de beste eerste stap. Vertel me waar je staat — en waar je naartoe wilt."
      />
    </>
  );
}
