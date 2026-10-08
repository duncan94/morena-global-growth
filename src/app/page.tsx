import Link from "next/link";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import EstherPhoto from "@/components/EstherPhoto";
import SectionHeading from "@/components/SectionHeading";
import { audiences } from "@/data/audiences";
import { services } from "@/data/services";

const benefits = [
  {
    title: "Scherp én liefdevol",
    text: "Ik stel de vragen die anderen vaak uit de weg gaan — altijd met respect en oprechte betrokkenheid.",
  },
  {
    title: "Intuïtief en strategisch",
    text: "Ik luister naar wat gezegd wordt én naar wat nog niet uitgesproken is. Daar ontstaat beweging.",
  },
  {
    title: "Geen standaardadvies",
    text: "Geen druk, geen oppervlakkige motivatie. Wel inzichten die blijven hangen en stappen die werken.",
  },
  {
    title: "Internationale ervaring",
    text: "Brede ervaring met mensen uit verschillende culturen en organisaties — warm, menselijk en doelgericht.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              Morena Global Growth Coaching
            </p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-forest sm:text-5xl lg:text-[3.35rem]">
              Groei die begint bij eerlijkheid — en leidt tot blijvende verandering
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Ik help mensen hun zelfvertrouwen versterken, patronen doorbreken en
              heldere keuzes maken. Voor ondernemers, organisaties, studenten en
              vrouwen die de stap terug naar de arbeidsmarkt willen zetten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Plan een kennismaking</Button>
              <Button href="/mijn-aanpak" variant="secondary">
                Ontdek mijn aanpak
              </Button>
            </div>
            <p className="mt-8 text-sm text-taupe">
              Opgericht door{" "}
              <Link href="/over-mij" className="font-medium text-forest underline-offset-4 hover:underline">
                Esther Murina
              </Link>{" "}
              · Nederland, met internationale blik
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-copper/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-sage/15 blur-2xl" />
              <EstherPhoto
                caption="Oprichter · Coach & trainer"
                aspect="portrait"
                priority
                className="shadow-xl shadow-charcoal/10 ring-1 ring-sand"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="border-y border-sand bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-12 text-center md:px-8 md:py-14">
          <div className="ornament mb-6 text-sm">✦</div>
          <blockquote className="font-serif text-2xl font-medium leading-snug text-forest md:text-3xl">
            “Succesvol ondernemen begint niet bij meer kennis, maar bij het toepassen
            van de juiste inzichten op het juiste moment.”
          </blockquote>
          <p className="mt-5 text-sm text-muted">
            Ik help je ontdekken wat écht bij jou past — en breng visie, doelen en
            potentieel samen naar concrete resultaten.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Waarom Morena"
            title="Warm. Scherp. Gericht op wat écht werkt."
            description="Mensen ervaren mij als scherp, liefdevol en eerlijk. Echte groei begint waar eerlijkheid de ruimte krijgt."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <article
                key={item.title}
                className="card-lift rounded-2xl border border-sand bg-white p-6 shadow-sm"
              >
                <span className="font-serif text-2xl text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl font-medium text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-section-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Diensten"
              title="Trainingen & coaching die raken"
              description="Van business coaching tot begeleiding terug naar de arbeidsmarkt — altijd op maat, altijd menselijk."
            />
            <Button href="/diensten" variant="secondary" className="shrink-0 self-start md:self-auto">
              Alle diensten
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                href={`/diensten#${service.id}`}
                className="card-lift group flex flex-col rounded-2xl border border-sand bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                  {service.format.split("·")[0].trim()}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-forest group-hover:text-terracotta transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-sage">{service.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-5 text-sm font-medium text-forest">
                  Meer informatie →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Voor wie"
            title="Voor mensen die willen groeien"
            description="Of je leiding geeft, onderneemt, studeert of opnieuw de arbeidsmarkt betreedt — je bent welkom."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {audiences.map((audience) => (
              <article
                key={audience.id}
                className="rounded-2xl border border-sand bg-white p-7 shadow-sm"
              >
                <h3 className="font-serif text-xl font-medium text-forest">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {audience.description}
                </p>
                <Link
                  href={audience.serviceHref}
                  className="mt-4 inline-block text-sm font-medium text-terracotta hover:text-terracotta-deep"
                >
                  Bekijk passende begeleiding →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/voor-wie" variant="secondary">
              Meer over de doelgroepen
            </Button>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20 lg:gap-16">
          <EstherPhoto
            aspect="square"
            className="shadow-lg shadow-charcoal/8 ring-1 ring-sand"
          />
          <div>
            <SectionHeading
              eyebrow="Over mij"
              title="Goedendag, ik ben Esther Murina"
              description="44 jaar, met een brede internationale achtergrond. Mijn passie is om mensen te helpen groeien — in werk, onderneming en leven."
            />
            <p className="mt-5 text-base leading-relaxed text-muted">
              Als voormalig onderneemster weet ik hoe het is om kansen te grijpen,
              maar ook om moeilijke periodes te doorstaan. Die ervaringen vormen de
              basis van mijn trainingen. Ik geloof dat iedereen talenten heeft — en
              met de juiste begeleiding doelen kan bereiken.
            </p>
            <div className="mt-8">
              <Button href="/over-mij" variant="secondary">
                Lees mijn verhaal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
