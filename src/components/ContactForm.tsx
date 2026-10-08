"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Front-end only for launch: simulate success.
    // Wire to Formspree, Resend, or your API when ready.
    window.setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/5 px-6 py-10 text-center">
        <p className="font-serif text-2xl text-forest">Dank je wel</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Je bericht is ontvangen. Ik neem zo snel mogelijk persoonlijk contact met
          je op.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-terracotta hover:text-terracotta-deep"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Naam *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-field"
            placeholder="Jouw naam"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field"
            placeholder="naam@voorbeeld.nl"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
          Telefoon <span className="font-normal text-taupe">(optioneel)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="input-field"
          placeholder="+31 …"
        />
      </div>

      <div>
        <label htmlFor="audience" className="mb-1.5 block text-sm font-medium text-charcoal">
          Ik ben *
        </label>
        <select id="audience" name="audience" required className="input-field" defaultValue="">
          <option value="" disabled>
            Maak een keuze
          </option>
          <option value="bedrijf">Bedrijf / organisatie</option>
          <option value="ondernemer">Startende ondernemer</option>
          <option value="student">Student / jonge professional</option>
          <option value="integratie">Terugkeer naar de arbeidsmarkt</option>
          <option value="anders">Anders / weet ik nog niet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field resize-y"
          placeholder="Vertel kort waar je staat en wat je zoekt…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-terracotta-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Versturen…" : "Verstuur bericht"}
      </button>

      {status === "error" && (
        <p className="text-sm text-terracotta-deep">
          Er ging iets mis. Probeer het opnieuw of mail direct naar{" "}
          {contactEmail}.
        </p>
      )}
    </form>
  );
}
