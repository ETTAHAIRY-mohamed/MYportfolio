import { Award, MapPin } from "lucide-react";
import { certifications, education } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Formation"
          title={
            <>
              Un cursus orienté{" "}
              <em className="text-gold-gradient">systèmes intelligents</em>
            </>
          }
          description="Du baccalauréat scientifique au Master 2 à l'Université de Rouen."
        />

        <ol className="border-t border-white/[0.08]">
          {education.map((item, index) => (
            <li key={item.degree} className="border-b border-white/[0.08]">
              <Reveal delay={index * 0.06}>
                <div className="grid gap-4 py-9 transition-colors duration-500 hover:bg-white/[0.015] md:grid-cols-[170px_1.5fr_1fr_auto] md:items-center md:gap-10 md:px-4">
                  <p className="font-display text-5xl italic leading-none text-gold-gradient md:text-6xl">
                    {item.year}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-medium leading-snug text-ivory-50 md:text-3xl">
                      {item.degree}
                    </h3>
                    <p className="mt-2 font-medium text-gold-300">
                      {item.institution}
                    </p>
                  </div>

                  <div className="text-sm leading-relaxed text-ivory-300">
                    <p>{item.description}</p>
                    <p className="mt-3 flex items-start gap-2 text-ivory-400">
                      <MapPin
                        className="mt-1 h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        {item.location} · {item.period}
                      </span>
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      item.status === "En cours"
                        ? "border border-gold-400 bg-gold-400/15 text-gold-200"
                        : "border border-white/15 text-ivory-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Certifications */}
        <div className="mt-24">
          <Reveal>
            <div className="mb-10 flex items-center gap-5">
              <h3 className="flex items-center gap-3 font-display text-3xl text-ivory-50 md:text-4xl">
                <Award className="h-6 w-6 text-gold-400" aria-hidden="true" />
                Certifications
              </h3>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {certifications.map((course, index) => (
              <Reveal key={course.title} delay={index * 0.08}>
                <SpotlightCard className="card h-full p-7">
                  <div className="flex items-start justify-between">
                    <p className="font-display text-xl italic text-gold-400">
                      {course.date}
                    </p>
                    <span className="rounded-full border border-gold-500/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-200">
                      Certifié
                    </span>
                  </div>
                  <h4 className="mt-6 font-display text-2xl font-medium leading-snug text-ivory-50">
                    {course.title}
                  </h4>
                  <p className="mt-1 text-sm text-ivory-300">{course.provider}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <li key={skill} className="chip !px-2.5 !py-0.5 !text-[11px]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
