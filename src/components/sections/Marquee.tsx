import { marqueeItems } from "@/data/content";

// Bandeau défilant décoratif des technologies (dupliqué pour une boucle continue).
const Marquee = () => {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-hidden="true"
      className="marquee-mask relative overflow-hidden border-b border-white/[0.06] py-7"
    >
      <div className="flex w-max animate-marquee">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center whitespace-nowrap pr-12 font-display text-3xl italic text-ivory-400 md:text-4xl"
          >
            {item}
            <span className="ml-12 inline-block h-1.5 w-1.5 rotate-45 bg-gold-500" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
