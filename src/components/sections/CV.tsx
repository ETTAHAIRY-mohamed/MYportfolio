import { Download, ExternalLink, FileText } from "lucide-react";
import { cvFacts, profile } from "@/data/content";
import { asset } from "@/lib/assets";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const CV = () => {
  return (
    <section id="cv" className="section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-gold-500/[0.07] blur-[140px]"
      />

      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Curriculum"
          title={
            <>
              Mon <em className="text-gold-gradient">CV</em>, en un coup
              d&apos;œil
            </>
          }
          description="Consultez l'aperçu ci-contre ou téléchargez la version PDF complète : parcours, compétences et projets sur une page."
        />

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          {/* Informations + actions */}
          <div>
            <Reveal>
              <dl className="border-t border-white/[0.08]">
                {cvFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 border-b border-white/[0.08] py-4"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ivory-400">
                      {fact.label}
                    </dt>
                    <dd className="text-right font-display text-xl text-ivory-50">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={asset(profile.cv)} download className="btn btn-gold">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Télécharger le PDF
                </a>
                <a
                  href={asset(profile.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Ouvrir dans un onglet
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs text-ivory-400">
                <FileText className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
                Format PDF · 1 page
              </p>
            </Reveal>
          </div>

          {/* Aperçu du CV */}
          <Reveal delay={0.1}>
            <a
              href={asset(profile.cv)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir le CV en PDF dans un nouvel onglet"
              className="group relative mx-auto block w-full max-w-[520px]"
            >
              {/* Cadre décalé */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rotate-[3.5deg] rounded-lg border border-gold-500/30 transition-transform duration-700 group-hover:rotate-[5deg]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -rotate-[2deg] rounded-lg border border-white/10 bg-ink-800 transition-transform duration-700 group-hover:-rotate-[3.5deg]"
              />

              <div className="relative overflow-hidden rounded-lg border border-gold-500/40 bg-white shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9),0_0_90px_-25px_rgba(214,182,111,0.35)] transition-transform duration-700 group-hover:-translate-y-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(profile.cvPreview)}
                  alt={`Aperçu du CV de ${profile.fullName}`}
                  width={1400}
                  height={1981}
                  loading="lazy"
                  className="block h-auto w-full"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink-950/80 via-transparent to-transparent pb-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-ink-900/90 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-200 backdrop-blur">
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Ouvrir le PDF
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CV;
