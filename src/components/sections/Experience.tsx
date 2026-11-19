import { Briefcase, MapPin } from "lucide-react";
import { experiences, experienceTypeLabel } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

const Experience = () => {
  return (
    <section id="experience" className="section">
      {/* Halo d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold-600/[0.06] blur-[140px]"
      />

      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Parcours"
          title={
            <>
              Une expérience <em className="text-gold-gradient">concrète</em>,
              de la conception au déploiement
            </>
          }
          description="Trois expériences professionnelles en développement mobile et full-stack, dont une mission en CDI."
        />

        <ol>
          {experiences.map((experience, index) => (
            <li
              key={`${experience.company}-${experience.year}`}
              className="relative grid gap-6 border-l border-white/10 pb-14 pl-7 last:pb-0 md:grid-cols-[210px_1fr] md:gap-0 md:border-l-0 md:pl-0"
            >
              {/* Point (mobile) */}
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_0_5px_rgba(214,182,111,0.15)] md:hidden"
              />

              {/* Année */}
              <Reveal className="relative md:border-r md:border-white/10 md:pb-14 md:pr-10 md:text-right md:[li:last-child_&]:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -right-[5px] top-3 hidden h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_0_5px_rgba(214,182,111,0.15)] md:block"
                />
                <p className="font-display text-6xl italic leading-none text-outline-gold md:text-7xl">
                  {experience.year}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ivory-400">
                  {experience.period}
                </p>
              </Reveal>

              {/* Carte */}
              <Reveal delay={0.1} className="md:pb-14 md:pl-10 md:[li:last-child_&]:pb-0">
                <SpotlightCard className="card p-7 md:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-medium leading-tight text-ivory-50 md:text-4xl">
                        {experience.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        <span className="flex items-center gap-2 font-medium text-gold-300">
                          <Briefcase className="h-4 w-4" aria-hidden="true" />
                          {experience.company}
                        </span>
                        <span className="flex items-center gap-2 text-ivory-400">
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full border border-gold-500/40 bg-gold-400/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-200">
                      {experienceTypeLabel[experience.type]}
                    </span>
                  </div>

                  {experience.summary && (
                    <p className="mt-6 leading-relaxed text-ivory-200">
                      {experience.summary}
                    </p>
                  )}

                  <ul className="mt-6 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-4 text-sm leading-relaxed text-ivory-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6">
                    {experience.technologies.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
