import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-xl italic text-gold-400">
            {index}
          </span>
          <span className="h-px w-12 bg-gold-500/50" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>

      <div className="mt-7 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-16">
        <Reveal delay={0.08}>
          <h2 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.16} className="md:justify-self-end">
            <p className="max-w-md text-base leading-relaxed text-ivory-300">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
