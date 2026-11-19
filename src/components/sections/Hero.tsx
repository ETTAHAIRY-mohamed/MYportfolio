"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
import { profile, stats } from "@/data/content";
import { asset } from "@/lib/assets";
import CountUp from "@/components/ui/CountUp";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, delay, ease: EASE },
});

const Hero = () => {
  // Halo doré qui suit la souris
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--hx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--hy", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-32 lg:pt-28"
    >
      {/* Décor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[640px] w-[640px] animate-glow rounded-full bg-gold-500/15 blur-[140px]" />
        <div className="absolute -bottom-56 -left-48 h-[540px] w-[540px] rounded-full bg-gold-700/15 blur-[150px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 62% 42%, #000 0%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 62% 42%, #000 0%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(620px circle at var(--hx, 70%) var(--hy, 30%), rgba(214,182,111,0.09), transparent 60%)",
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Texte */}
          <div>
            <motion.div
              {...fade(0.1)}
              className="inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-400/[0.07] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold-200">
                {profile.statusLabel} ·{" "}
                <span className="whitespace-nowrap">{profile.statusFocus}</span>
              </span>
            </motion.div>

            <motion.div {...fade(0.2)} className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold-500/60" />
              <p className="eyebrow">{profile.role}</p>
            </motion.div>

            <motion.h1
              {...fade(0.3)}
              className="mt-6 font-display text-[clamp(3.4rem,9.5vw,7.5rem)] font-medium leading-[0.92] tracking-tight text-ivory-50"
            >
              <span className="block">{profile.firstName}</span>
              <span className="block italic text-gold-gradient">
                {profile.lastName}
              </span>
            </motion.h1>

            <motion.p
              {...fade(0.45)}
              className="mt-8 max-w-xl text-base leading-relaxed text-ivory-300 sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              {...fade(0.6)}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a href={asset(profile.cv)} download className="btn btn-gold">
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger mon CV
              </a>
              <a href="#contact" className="btn btn-ghost">
                Me contacter
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-3 sm:ml-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ivory-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/60 hover:text-gold-300"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ivory-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/60 hover:text-gold-300"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fade(0.75)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ivory-400"
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-500" aria-hidden="true" />
                {profile.location}
              </span>
              <a
                href={profile.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-500" aria-hidden="true" />
                {profile.phone}
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px] lg:justify-self-end"
          >
            {/* Cadre décalé */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 translate-x-1.5 translate-y-3 rounded-t-[220px] rounded-b-2xl border border-gold-500/30 sm:-inset-4 sm:translate-x-3"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] rounded-b-2xl border border-gold-500/40 bg-ink-800 shadow-[0_40px_120px_-30px_rgba(214,182,111,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(profile.portrait)}
                alt={`Portrait de ${profile.fullName}`}
                width={1000}
                height={1250}
                className="h-full w-full object-cover object-top"
                fetchPriority="high"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
              />
            </div>

            <div className="absolute -left-4 bottom-20 animate-float rounded-xl border border-gold-500/30 bg-ink-900/85 px-5 py-4 backdrop-blur-xl sm:-left-10">
              <p className="eyebrow !text-[10px]">En cours</p>
              <p className="mt-1 font-display text-lg leading-tight text-ivory-50">
                Master 2
              </p>
              <p className="text-xs text-ivory-300">Université de Rouen</p>
            </div>

            <div className="absolute -right-3 bottom-4 hidden rounded-xl border border-white/10 bg-ink-900/85 px-4 py-3 backdrop-blur-xl sm:block lg:-right-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-400">
                Dernière mission
              </p>
              <p className="mt-1 font-display text-base text-gold-200">
                Flutter · CDI
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chiffres clés */}
        <motion.dl
          {...fade(0.9)}
          className="mt-20 grid grid-cols-2 border-y border-white/[0.08] lg:mt-24 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-2 py-7 text-center sm:px-6 ${
                index > 0 ? "lg:border-l lg:border-white/[0.08]" : ""
              } ${index % 2 === 1 ? "border-l border-white/[0.08] lg:border-l" : ""} ${
                index > 1 ? "border-t border-white/[0.08] lg:border-t-0" : ""
              }`}
            >
              <dd className="font-display text-5xl font-medium text-gold-gradient sm:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ivory-400">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        <a
          href="#skills"
          className="mx-auto mt-12 hidden w-fit flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ivory-400 transition-colors hover:text-gold-300 lg:flex"
        >
          Découvrir
          <ArrowDown className="h-4 w-4 animate-float" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
