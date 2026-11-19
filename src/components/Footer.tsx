import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navItems, profile } from "@/data/content";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.08] bg-ink-950">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/50 font-display text-xl italic text-gold-300">
                {profile.initials}
              </span>
              <span className="font-display text-2xl text-ivory-50">
                {profile.fullName}
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-300">
              {profile.role} (Flutter, Spring Boot, Angular), en Master 2 à
              l&apos;Université de Rouen. À la recherche d&apos;un stage de fin
              d&apos;études (PFE).
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory-200 transition-colors hover:border-gold-500/60 hover:text-gold-300"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory-200 transition-colors hover:border-gold-500/60 hover:text-gold-300"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory-200 transition-colors hover:border-gold-500/60 hover:text-gold-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page">
            <h3 className="eyebrow">Navigation</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory-300 transition-colors hover:text-gold-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-ivory-300">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all transition-colors hover:text-gold-300"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                <a
                  href={profile.phoneHref}
                  className="transition-colors hover:text-gold-300"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-ivory-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Tous droits
            réservés.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 uppercase tracking-[0.22em] transition-colors hover:text-gold-300"
          >
            Retour en haut
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
