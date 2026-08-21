import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import RecipeLearnStrip from "@/Effects/RecipeLearnStrip";

import food1 from "@/food/food1.webp";
import food2 from "@/food/food2.webp";
import food3 from "@/food/food3.webp";
import food4 from "@/food/food4.webp";
import food5 from "@/food/food5.webp";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: "food1",
    name: "Ripe Plantain • Boiled Eggs • Salted Fish",
    shortName: "Plantain & Eggs",
    image: food1,
    intro:
      "Plantain as a rice replacement with clean protein sides. Balanced plate for everyday energy.",
    tags: ["Energy", "Protein", "Minerals"],
    ingredients: [
      {
        name: "Ripe plantain",
        benefit:
          "Good potassium for blood-pressure support; vitamin A for vision.",
      },
      {
        name: "Salted fish",
        benefit:
          "Protein + vitamin D, selenium, and omega-3s that support heart health.",
      },
      {
        name: "Boiled eggs",
        benefit: "Complete protein with essential vitamins and minerals.",
      },
      {
        name: "Tomato",
        benefit:
          "Vitamins A/C/K + potassium; lycopene antioxidant for cell health.",
      },
      {
        name: "Garlic",
        benefit:
          "Immune support; antibacterial, anti-inflammatory, antioxidant.",
      },
    ],
  },
  {
    id: "food2",
    name: "Okra & Salted Fish Stew over Basmati",
    shortName: "Okra & Salted Fish",
    image: food2,
    intro:
      "Nutrient-dense okra stew with salted fish, herbs, and spices served on basmati.",
    tags: ["Digestion", "Immunity", "Blood sugar"],
    ingredients: [
      {
        name: "Basmati rice",
        benefit:
          "Lower Glycemic Index; may aid blood-sugar control, heart health, and digestion.",
      },
      {
        name: "Okra",
        benefit:
          "Vitamins, minerals, fiber, antioxidants; supports digestion & cholesterol/blood sugar balance.",
      },
      {
        name: "Red bell pepper",
        benefit:
          "Vitamin C + antioxidants for immune support and healthy vision.",
      },
      {
        name: "Salted fish",
        benefit:
          "Protein + vitamin D, selenium, omega-3s; supports heart health.",
      },
      { name: "Fresh herbs & spices", benefit: "Flavor + phytonutrients." },
    ],
  },
  {
    id: "food3",
    name: "Stew Salmon over Green Pea Basmati + Fresh Tomato",
    shortName: "Stewed Salmon",
    image: food3,
    intro:
      "Omega-3 rich salmon on green-pea basmati with aromatics and fresh tomato.",
    tags: ["Heart", "Brain", "Antioxidants"],
    ingredients: [
      {
        name: "Basmati rice",
        benefit:
          "Supports heart health, digestion, and steady blood-sugar management.",
      },
      {
        name: "Green peas",
        benefit:
          "Protein + fiber + antioxidants; supports digestion, heart, eyes.",
      },
      {
        name: "Salmon",
        benefit:
          "Omega-3s for brain/heart; selenium for bones and thyroid function.",
      },
      { name: "Onion", benefit: "Vitamins + bioactives; overall wellness." },
      {
        name: "Tomato",
        benefit:
          "Vitamins A/C/K + potassium; lycopene antioxidant for cell health.",
      },
    ],
  },
  {
    id: "food4",
    name: "Cinnamon Strawberry Iced Tea",
    shortName: "Strawberry Iced Tea",
    image: food4,
    intro:
      "Cooling green tea with cinnamon, honey, and strawberries; mint garnish.",
    tags: ["Antioxidants", "Heart", "Blood sugar"],
    ingredients: [
      {
        name: "Cinnamon",
        benefit:
          "May help lower blood sugar; supports heart health (LDL/triglycerides).",
      },
      { name: "Green tea", benefit: "Packed with antioxidants." },
      {
        name: "Strawberries",
        benefit:
          "Vitamin C for immune support; antioxidants for inflammation balance.",
      },
      {
        name: "Honey",
        benefit:
          "Antioxidants; soothing and antimicrobial; gentler glycemic impact.",
      },
      {
        name: "Peppermint (garnish)",
        benefit: "Cooling aroma; digestion comfort.",
      },
      { name: "Water", benefit: "Hydration." },
    ],
  },
  {
    id: "food5",
    name: "Butternut Squash & Shrimp Stew over Basmati",
    shortName: "Squash & Shrimp",
    image: food5,
    intro:
      "Comforting squash stew with juicy shrimp and basmati for a balanced bowl.",
    tags: ["Immune", "Protein", "Digestion"],
    ingredients: [
      {
        name: "Butternut squash",
        benefit:
          "Vitamins A/C + fiber and beta-carotene for immune support.",
      },
      {
        name: "Basmati rice",
        benefit:
          "Lower GI; supports blood-sugar control, heart health, and digestion.",
      },
      {
        name: "Shrimp",
        benefit:
          "Lean protein + omega-3s; B12, selenium, iodine for metabolism and thyroid.",
      },
      { name: "Fresh herbs & spices", benefit: "Flavor + phytonutrients." },
      {
        name: "Garlic",
        benefit:
          "Immune support; antibacterial, anti-inflammatory, antioxidant.",
      },
    ],
  },
];

const padNumber = (number) => String(number).padStart(2, "0");

const recipeHeadingWords = "Food made with memory, care & purpose.".split(" ");

function RecipeImage({ dish, index, reduceMotion }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Motion.div
        key={dish.id}
        className="recipe-image-wrap"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, rotate: -1.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.035, rotate: 1 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={dish.image}
          alt={`${dish.name}, prepared by Nature Cures Naturally`}
          className={`recipe-hero-image recipe-hero-image--${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </Motion.div>
    </AnimatePresence>
  );
}

function RecipeDetails({ dish, index, reduceMotion }) {
  const itemMotion = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Motion.div
        key={dish.id}
        className="recipe-detail-inner"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: reduceMotion ? 0 : 0.055 },
          },
        }}
      >
        <Motion.div variants={itemMotion} className="recipe-detail-kicker">
          <span>Recipe {padNumber(index + 1)}</span>
          <span className="recipe-kicker-rule" aria-hidden="true" />
          <span>Homemade nourishment</span>
        </Motion.div>

        <Motion.h3 variants={itemMotion} className="recipe-title">
          {dish.name}
        </Motion.h3>

        <Motion.p variants={itemMotion} className="recipe-intro">
          {dish.intro}
        </Motion.p>

        <Motion.ul variants={itemMotion} className="recipe-tags" aria-label="Wellness benefits">
          {dish.tags.map((tag) => (
            <li key={tag}>
              <Leaf size={13} strokeWidth={1.8} aria-hidden="true" />
              {tag}
            </li>
          ))}
        </Motion.ul>

        <Motion.div variants={itemMotion} className="recipe-ingredients-heading">
          <p>Ingredients &amp; benefits</p>
          <span>{padNumber(dish.ingredients.length)} elements</span>
        </Motion.div>

        <Motion.ol variants={itemMotion} className="recipe-ingredients">
          {dish.ingredients.map((ingredient, ingredientIndex) => (
            <li key={ingredient.name}>
              <span className="recipe-ingredient-number" aria-hidden="true">
                {padNumber(ingredientIndex + 1)}
              </span>
              <div>
                <p>{ingredient.name}</p>
                <span>{ingredient.benefit}</span>
              </div>
            </li>
          ))}
        </Motion.ol>
      </Motion.div>
    </AnimatePresence>
  );
}

export const RecipeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const stripRef = useRef(null);
  const touchStartX = useRef(null);
  const [stripActive, setStripActive] = useState(false);

  const dish = dishes[activeIndex];
  const headerMotion = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } },
      }
    : {
        hidden: {},
        visible: {},
      };
  const headingMotion = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {},
        visible: {
          transition: { delayChildren: 0.08, staggerChildren: 0.065 },
        },
      };
  const headingWordMotion = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 34, rotateX: -32 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
        },
      };
  const headerCopyMotion = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.58, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % dishes.length);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + dishes.length) % dishes.length);
  }, []);

  useGSAP(
    () => {
      if (reduceMotion) return;

      const revealTargets = sectionRef.current.querySelectorAll("[data-recipe-reveal]");
      gsap.from(revealTargets, {
        opacity: 0,
        y: 36,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [reduceMotion] },
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

      if (isTyping) return;
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  useEffect(() => {
    const element = stripRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStripActive(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 55) return;
    if (distance < 0) next();
    else previous();
  };

  return (
    <section ref={sectionRef} id="recipes" className="recipe-section" aria-labelledby="recipes-title">
      <div className="recipe-orb recipe-orb--one" aria-hidden="true" />
      <div className="recipe-orb recipe-orb--two" aria-hidden="true" />

      <Motion.header
        className="container recipe-section-header"
        variants={headerMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.65 }}
      >
        <Motion.h2
          id="recipes-title"
          aria-label="Food made with memory, care & purpose."
          variants={headingMotion}
        >
          {recipeHeadingWords.map((word, index) => (
            <Motion.span
              key={`${word}-${index}`}
              className="recipe-heading-word"
              variants={headingWordMotion}
              aria-hidden="true"
            >
              {word}
              {index < recipeHeadingWords.length - 1 ? "\u00a0" : ""}
            </Motion.span>
          ))}
        </Motion.h2>
        <Motion.p variants={headerCopyMotion}>
          Explore colorful, home-cooked recipes inspired by family tradition and the
          everyday goodness of real ingredients.
        </Motion.p>
      </Motion.header>

      <div className="container" data-recipe-reveal>
        <article className="recipe-showcase">
          <div
            className="recipe-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span className="recipe-watermark" aria-hidden="true">
              {padNumber(activeIndex + 1)}
            </span>
            <span className="recipe-botanical recipe-botanical--left" aria-hidden="true" />
            <span className="recipe-botanical recipe-botanical--right" aria-hidden="true" />
            <span className="recipe-plate-shadow" aria-hidden="true" />

            <RecipeImage dish={dish} index={activeIndex} reduceMotion={reduceMotion} />

            <div className="recipe-navigation">
              <button type="button" onClick={previous} aria-label="View previous recipe">
                <ArrowLeft size={19} aria-hidden="true" />
              </button>

              <div className="recipe-progress-wrap">
                <span className="recipe-count">
                  <strong>{padNumber(activeIndex + 1)}</strong>
                  <span aria-hidden="true">/</span>
                  <span>{padNumber(dishes.length)}</span>
                </span>
                <span className="recipe-progress" aria-hidden="true">
                  <Motion.span
                    animate={{ scaleX: (activeIndex + 1) / dishes.length }}
                    transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
                  />
                </span>
              </div>

              <button type="button" onClick={next} aria-label="View next recipe">
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="recipe-detail-panel" aria-live="polite">
            <RecipeDetails dish={dish} index={activeIndex} reduceMotion={reduceMotion} />
          </div>
        </article>
      </div>

      <nav className="container recipe-filmstrip-shell" aria-label="Choose a recipe" data-recipe-reveal>
        <div className="recipe-filmstrip" role="tablist" aria-label="Recipe collection">
          {dishes.map((item, index) => {
            const selected = activeIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`View recipe ${index + 1}: ${item.name}`}
                tabIndex={selected ? 0 : -1}
                className={selected ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span className="recipe-filmstrip-image">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="recipe-filmstrip-copy">
                  <small>Recipe {padNumber(index + 1)}</small>
                  <strong>{item.shortName}</strong>
                </span>
                <span className="recipe-filmstrip-marker" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </nav>

      <div ref={stripRef} className="recipe-learn-wrap" data-recipe-reveal>
        <RecipeLearnStrip active={stripActive && !reduceMotion} />
      </div>
    </section>
  );
};
