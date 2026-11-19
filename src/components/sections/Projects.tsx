"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Layers, Smartphone } from "lucide-react";
import {
  profile,
  projectCategoryLabel,
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

const categoryIcon = {
  fullstack: Layers,
  mobile: Smartphone,
} as const;

const Projects = () => {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Réalisations"
          title={
            <>
              Projets <em className="text-gold-gradient">sélectionnés</em>
            </>
          }
          description="Applications web full-stack et mobiles : de l'architecture backend à l'interface utilisateur."
        />

        {/* Filtres */}
        <Reveal>
          <div
            role="group"
            aria-label="Filtrer les projets"
            className="mb-12 flex flex-wrap gap-x-9 gap-y-3 border-b border-white/[0.08]"
          >
            {projectFilters.map((item) => {
              const isActive = filter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  aria-pressed={isActive}
                  className={`relative pb-4 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive
                      ? "text-gold-300"
                      : "text-ivory-400 hover:text-ivory-100"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="project-filter"
                      className="bg-gold-gradient absolute inset-x-0 -bottom-px h-px"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grille */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const number = String(projects.indexOf(project) + 1).padStart(2, "0");
              const Icon = categoryIcon[project.category];

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SpotlightCard className="card group flex h-full flex-col overflow-hidden">
                    {/* Visuel */}
                    <div className="relative h-40 overflow-hidden border-b border-white/[0.07] bg-ink-800">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 85% 0%, rgba(214,182,111,0.22), transparent 55%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                          backgroundSize: "auto, 32px 32px, 32px 32px",
                        }}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-3 left-6 font-display text-[7.5rem] font-medium italic leading-none text-outline-gold transition-transform duration-700 group-hover:-translate-y-2"
                      >
                        {number}
                      </span>
                      <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ivory-200 backdrop-blur">
                        <Icon className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                        {projectCategoryLabel[project.category]}
                      </span>
                    </div>

                    {/* Contenu */}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl font-medium leading-snug text-ivory-50">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ivory-300">
                        {project.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-xs text-ivory-300"
                          >
                            <span
                              aria-hidden="true"
                              className="h-1 w-1 rotate-45 bg-gold-500"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <li key={tech} className="chip !px-2.5 !py-0.5 !text-[11px]">
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {(project.github || project.demo) && (
                        <div className="mt-6 flex gap-5 border-t border-white/[0.07] pt-5">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory-300 transition-colors hover:text-gold-300"
                            >
                              <Github className="h-4 w-4" aria-hidden="true" />
                              Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory-300 transition-colors hover:text-gold-300"
                            >
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              Démo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Appel à l'action */}
        <Reveal className="mt-20">
          <div className="card flex flex-col items-center gap-6 px-6 py-12 text-center md:px-12">
            <h3 className="font-display text-3xl text-ivory-50 md:text-4xl">
              Un stage PFE ou un projet en tête&nbsp;?
            </h3>
            <p className="max-w-xl text-ivory-300">
              Je recherche un stage de fin d&apos;études en développement
              Full-Stack &amp; Mobile. Discutons-en, ou parcourez mon code sur
              GitHub.
            </p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn btn-gold">
                Me contacter
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Voir mon GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
