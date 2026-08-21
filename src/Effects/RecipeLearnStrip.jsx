import React, { useEffect, useRef } from "react";
import { Leaf } from "lucide-react";

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
    <div ref={ref} aria-hidden={ariaHidden} className="recipe-marquee-run">
      {items.map((t, i) => (
        <div key={i} className="recipe-marquee-item">
          <span>{t}</span>
          <span className="recipe-marquee-leaf" aria-hidden="true">
            <Leaf size={17} strokeWidth={1.5} />
          </span>
        </div>
      ))}
    </div>
  );
});

export default function RecipeLearnStrip({ active = true }) {
  const runRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!runRef.current) return;

    const measure = () => {
      const w = runRef.current.offsetWidth || 0;
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
    <aside className="recipe-marquee" aria-label="Private cooking lesson invitation">
      <div className="recipe-marquee-label">
        <span>Cook with Nicole</span>
      </div>
      <div className="recipe-marquee-viewport">
        <div
          ref={trackRef}
          className={`recipe-marquee-track ${
            active ? "marquee-play-dyn" : "marquee-pause-dyn"
          }`}
        >
          <Run ref={runRef} items={PHRASES} />
          <Run items={PHRASES} ariaHidden />
        </div>
      </div>
    </aside>
  );
}
