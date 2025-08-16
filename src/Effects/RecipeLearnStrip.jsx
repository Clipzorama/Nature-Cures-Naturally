import React, { useEffect, useRef, useState } from "react";


const PHRASES = [
  "Want To Make This Yourself?",
  "1:1 Cooking Lesson",
  "Learn Once, Enjoy Forever",
  "Family Recipes, Modern Health",
  "Healthy, Homemade, Unforgettable",
  "Your Apron, My Guidance",
  "Master The Recipe, Your Way!",
];

const Run = React.forwardRef(function Run({ items, ariaHidden = false }, ref) {
  return (
    <div ref={ref} aria-hidden={ariaHidden} className="flex flex-none items-center gap-10">
      {items.map((t, i) => (
        <div key={i} className="flex flex-none items-center gap-10">
          <span className="whitespace-nowrap text-lg md:text-2xl font-medium text-foreground/90 tracking-wide px-8">
            {t}
          </span>
          <span className="flex-none opacity-60 select-none text-2xl md:text-3xl">♦️</span>
        </div>
      ))}
    </div>
  );
});

export default function RecipeLearnStrip({ active = true }) {
  const runRef = useRef(null);
  const trackRef = useRef(null);
  const [runW, setRunW] = useState(0);

  useEffect(() => {
    if (!runRef.current) return;

    const measure = () => {
      const w = runRef.current.offsetWidth || 0;
      setRunW(w);
      if (trackRef.current) {
        trackRef.current.style.setProperty("--run-w", `${w}px`);
        trackRef.current.style.width = `${w * 2}px`; 
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(runRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="mt-20 border-t-2 border-b-2 border-primary bg-background/70 overflow-hidden">
      <div
        ref={trackRef}
        className={`
          marquee-track flex whitespace-nowrap py-4 px-10
          ${active ? "marquee-play-dyn" : "marquee-pause-dyn"}
        `}
      >
        <Run ref={runRef} items={PHRASES} />
        <Run items={PHRASES} ariaHidden />
      </div>
    </div>
  );
}
