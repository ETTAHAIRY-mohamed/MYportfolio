"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { contactSubjects, profile } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const fieldClass =
  "mt-2 w-full border-b border-white/15 bg-transparent py-3 text-base text-ivory-50 placeholder:text-ivory-400/50 transition-colors duration-300 focus:border-gold-400 focus:outline-none";
const labelClass = "block text-[11px] uppercase tracking-[0.22em] text-ivory-400";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mailOpened, setMailOpened] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Site statique (GitHub Pages) : pas de serveur pour recevoir le formulaire.
  // On ouvre donc le client mail du visiteur avec le message pré-rempli.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    setMailOpened(true);
  };

  const contactRows = [
    {
      icon: Phone,
      label: "Téléphone",
      value: profile.phone,
      href: profile.phoneHref,
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: profile.location,
      href: "https://www.google.com/maps/search/?api=1&query=Rouen%2C+France",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ettahairy Mohamed",
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
    },
  ];

  return (
    <section id="contact" className="section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/[0.08] blur-[150px]"
      />

      <div className="container-x">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Construisons quelque chose d&apos;
              <em className="text-gold-gradient">exceptionnel</em>
            </>
          }
          description="Un stage de fin d'études, un projet, une idée ? Écrivez-moi : je réponds avec plaisir."
        />

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Coordonnées */}
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ivory-400">
                E-mail
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-3 inline-flex items-start gap-3 break-words font-display text-[clamp(1.25rem,5vw,1.75rem)] leading-tight text-ivory-50 transition-colors hover:text-gold-300 xl:text-[2rem]"
              >
                {profile.email}
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-12 border-t border-white/[0.08]">
                {contactRows.map((row) => (
                  <li key={row.label} className="border-b border-white/[0.08]">
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        row.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-5 py-5 transition-colors hover:bg-white/[0.02] md:px-2"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 transition-colors duration-300 group-hover:bg-gold-400/10">
                        <row.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[10px] uppercase tracking-[0.22em] text-ivory-400">
                          {row.label}
                        </span>
                        <span className="mt-1 block text-ivory-50">
                          {row.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-ivory-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-400/[0.07] px-5 py-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold-200">
                  {profile.statusLabel} ·{" "}
                  <span className="whitespace-nowrap">{profile.statusFocus}</span>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="card p-7 sm:p-10"
              aria-label="Formulaire de contact"
            >
              <h3 className="font-display text-3xl text-ivory-50">
                Envoyez-moi un message
              </h3>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <label className={labelClass}>
                  Nom complet
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Votre nom"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  E-mail
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="vous@mail.com"
                    className={fieldClass}
                  />
                </label>
              </div>

              <div className="mt-8">
                <label className={labelClass}>
                  Sujet
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                    className={fieldClass}
                  />
                </label>
                <div className="mt-4 flex flex-wrap gap-2">
                  {contactSubjects.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject })}
                      className="chip cursor-pointer"
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className={labelClass}>
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande…"
                    className={`${fieldClass} resize-none`}
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-gold mt-10 w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                Envoyer le message
              </button>

              {mailOpened && (
                <p
                  role="status"
                  className="mt-5 text-center text-sm leading-relaxed text-ivory-300"
                >
                  Votre application de messagerie s&apos;ouvre avec le message
                  pré-rempli. Si rien ne s&apos;ouvre, écrivez-moi à{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-gold-300 underline underline-offset-4"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
