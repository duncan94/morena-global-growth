import Link from "next/link";
import { contactEmail } from "@/data/site";

const links = [
  { href: "/over-mij", label: "Over mij" },
  { href: "/mijn-aanpak", label: "Mijn aanpak" },
  { href: "/diensten", label: "Diensten" },
  { href: "/voor-wie", label: "Voor wie" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-depth text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-medium tracking-wide text-cream">
              Morena
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-copper">
              Global Growth Coaching
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/90">
              Coaching en training die mensen helpt groeien — in werk, onderneming
              en leven. Warm, scherp en gericht op blijvende verandering.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Navigatie
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/90 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sand/90">
              <li>Esther Murina</li>
              <li>Nederland · internationaal actief</li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition hover:text-white"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full border border-copper/50 px-5 py-2.5 text-sm font-medium text-cream transition hover:border-copper hover:bg-white/5"
            >
              Plan een kennismaking
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Morena Global Growth Coaching. Alle rechten voorbehouden.</p>
          <p>Opgericht door Esther Murina</p>
        </div>
      </div>
    </footer>
  );
}
