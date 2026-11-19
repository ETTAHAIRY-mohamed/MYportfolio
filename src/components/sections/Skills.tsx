"use client";

import { motion } from "framer-motion";
import { Globe, Heart } from "lucide-react";
import {
  domains,
  interests,
  languages,
  skillGroups,
} from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="Expertise"
          title={
            <>
              Un savoir-faire{" "}
              <em className="whitespace-nowrap text-gold-gradient">full-stack</em>{" "}
              &amp; mobile
            </>
          }
          description="Des technologies maîtrisées de bout en bout pour concevoir des applications fiables, sécurisées et agréables à utiliser."
        />

        {/* Domaines d'expertise */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => (
            <Reveal key={domain.name} delay={index * 0.08}>
              <SpotlightCard className="card h-full p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-300">
                    <domain.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl italic text-white/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium text-ivory-50">
                  {domain.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-300">
                  {domain.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-24">
          <Reveal>
            <div className="mb-10 flex items-center gap-5">
              <h3 className="font-display text-3xl text-ivory-50 md:text-4xl">
                Technologies
              </h3>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.name}
                delay={(index % 3) * 0.08}
                className={
                  index === skillGroups.length - 1 ? "md:col-span-2" : ""
                }
              >
                <SpotlightCard className="card h-full p-7">
                  <div className="flex items-center gap-3">
                    <group.icon
                      className="h-5 w-5 text-gold-400"
                      aria-hidden="true"
                    />
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory-100">
                      {group.name}
                    </h4>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Langues & centres d'intérêt */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-3xl text-ivory-50">
                <Globe className="h-5 w-5 text-gold-400" aria-hidden="true" />
                Langues
              </h3>
            </Reveal>
            <div className="mt-8 space-y-7">
              {languages.map((language, index) => (
                <Reveal key={language.name} delay={index * 0.1}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-2xl text-ivory-50">
                      {language.name}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-ivory-400">
                      {language.level}
                    </span>
                  </div>
                  <div className="mt-3 h-px w-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2 + index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="bg-gold-gradient h-[3px] -translate-y-px rounded-full"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-3xl text-ivory-50">
                <Heart className="h-5 w-5 text-gold-400" aria-hidden="true" />
                Centres d&apos;intérêt
              </h3>
            </Reveal>
            <ul className="mt-8 flex flex-wrap gap-4">
              {interests.map((interest, index) => (
                <Reveal key={interest.name} delay={index * 0.1}>
                  <li className="card flex items-center gap-4 px-6 py-4">
                    <span className="text-2xl" aria-hidden="true">
                      {interest.icon}
                    </span>
                    <span className="font-display text-xl text-ivory-50">
                      {interest.name}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
