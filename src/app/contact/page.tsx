import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Esther Murina van Morena Global Growth Coaching. Plan een kennismaking of stel je vraag.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Contact"
                title="Laten we kennismaken"
                description="Vertel kort waar je staat en wat je zoekt. Ik reageer persoonlijk en kijken we samen wat een volgende stap kan zijn."
              />

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                    Esther Murina
                  </p>
                  <p className="mt-2 font-serif text-xl text-forest">
                    Morena Global Growth Coaching
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    <li>Nederland · internationaal perspectief</li>
                    <li>
                      <a
                        href="mailto:info@morenaglobalgrowth.nl"
                        className="font-medium text-forest underline-offset-4 hover:underline"
                      >
                        info@morenaglobalgrowth.nl
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-sand bg-ivory p-6">
                  <p className="text-sm font-medium text-forest">Wat kun je verwachten?</p>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      Een warme, eerlijke reactie op je bericht
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      Een vrijblijvend kennismakingsgesprek waar passend
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      Geen druk of standaardverkoop — wel oprechte aandacht
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-sand bg-white p-7 shadow-sm md:p-10">
                <h2 className="font-serif text-2xl font-medium text-forest">
                  Stuur een bericht
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Velden met * zijn verplicht. Je gegevens worden alleen gebruikt om
                  te reageren op je aanvraag.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
