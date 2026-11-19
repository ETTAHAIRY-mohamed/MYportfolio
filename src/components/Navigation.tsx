"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/content";
import { asset } from "@/lib/assets";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Fond flouté dès que la page défile
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section active dans le menu
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Bloque le défilement derrière le menu mobile
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !isOpen
            ? "border-b border-white/[0.07] bg-ink-900/75 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
            aria-label={`${profile.fullName} – accueil`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 font-display text-lg italic text-gold-300 transition-colors duration-300 group-hover:bg-gold-400/10">
              {profile.initials}
            </span>
            <span className="hidden whitespace-nowrap font-display text-lg tracking-wide text-ivory-100 xl:block">
              {profile.fullName}
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`relative py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 hover:text-gold-300 ${
                        isActive ? "text-gold-300" : "text-ivory-300"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-gold-400 transition-all duration-500 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={asset(profile.cv)}
              download
              className="btn btn-ghost hidden !px-5 !py-2.5 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              CV
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory-100 transition-colors hover:border-gold-500/50 lg:hidden"
            >
              <span className="sr-only">
                {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink-950/95 px-8 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Menu mobile">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-4 border-b border-white/[0.06] py-3 font-display text-4xl text-ivory-100 transition-colors hover:text-gold-300"
                    >
                      <span className="text-sm italic text-gold-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <a
              href={asset(profile.cv)}
              download
              className="btn btn-gold mt-10 self-start"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger mon CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
