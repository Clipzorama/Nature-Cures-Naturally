const PHRASES = [
  "Want To Make This Yourself?",
  "1:1 Cooking Lesson",
  "Learn Once, Enjoy Forever",
  "Family Recipes, Modern Health",
  "Healthy, Homemade, Unforgettable",
  "Your Apron, My Guidance",
  "Master The Recipe, Your Way!",
];

function Run({ items, ariaHidden = false }) {
  return (
    <div aria-hidden={ariaHidden} className="flex flex-none items-center gap-10 pr-10">
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
}

export default function RecipeLearnStrip({ active = true }) {
  return (
    <div
      className="
        mask-edges-lg mt-20 rounded-2xl border-2 border-primary
        bg-background/70 overflow-hidden
      "
    >
      <div
        className={`
          marquee-track flex min-w-[200%] whitespace-nowrap py-4
          ${active ? "marquee-play" : "marquee-pause"}
        `}
      >
        <Run items={PHRASES} />
        <Run items={PHRASES} ariaHidden />
      </div>
    </div>
  );
}
