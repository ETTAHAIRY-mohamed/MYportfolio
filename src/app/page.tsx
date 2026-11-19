import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import CV from "@/components/sections/CV";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <CV />
      <Contact />
    </>
  );
}
