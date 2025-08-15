import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



// Recipe Strip

import RecipeLearnStrip from "@/Effects/RecipeLearnStrip";


// images
import food1 from "@/food/food1.webp";
import food2 from "@/food/food2.webp";
import food3 from "@/food/food3.webp";
import food4 from "@/food/food4.webp";
import food5 from "@/food/food5.webp";

// The food and its information
const dishes = [
  {
    id: "food1",
    name: "Ripe Plantain • Boiled Eggs • Salted Fish",
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
    ],
  },
  {
    id: "food2",
    name: "Okra & Salted Fish Stew over Basmati",
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
        name: "Garlic",
        benefit:
          "Immune support; antibacterial, anti-inflammatory, antioxidant.",
      },
      {
        name: "Tomato",
        benefit:
          "Vitamins A/C/K + potassium; lycopene antioxidant for cell health.",
      },
      { name: "Fresh herbs & spices", benefit: "Aroma + anti-oxidative support." },
    ],
  },
  {
    id: "food4",
    name: "Cinnamon Strawberry Iced Tea",
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
      { name: "Peppermint (garnish)", benefit: "Cooling aroma; digestion comfort." },
      { name: "Water", benefit: "Hydration." },
    ],
  },
  {
    id: "food5",
    name: "Butternut Squash & Shrimp Stew over Basmati",
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
    ],
  },
];

export const RecipeSection = () => {
  const isMobile = window.innerWidth <= 767; 
  const isTablet = window.innerWidth <= 1024; 
  const startPoint = isMobile ? "top 65%" : isTablet ? "top 60%" : "top 75%";
  const startPoint2 = isMobile ? "top 65%" : isTablet ? "top 60%" : "top 75%";
  const endPoint = isMobile ? "top 25%" : isTablet ? "top 10%" : "top 30%";
  

  gsap.registerPlugin(ScrollTrigger);

  const [i, setI] = useState(0);
  const dish = dishes[i];

  const next = () => setI((n) => (n + 1) % dishes.length);
  const prev = () => setI((n) => (n - 1 + dishes.length) % dishes.length);

  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

// subtle scroll-in with scrub
useGSAP(() => {
  // left card
  gsap.from(leftRef.current, {
    opacity: 0,
    x: -30,
    y: 12,
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current,
      start: startPoint,
      end: endPoint,
      scrub: true,
    },
  });

  // right card (wrap around your motion.div)
  gsap.from(rightRef.current, {
    opacity: 0,
    x: 30,
    y: 12,
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current,
      start: startPoint2,
      end: endPoint,
      scrub: true,
    },
  });
  }, { scope: containerRef, dependencies: [] });

  // arrow keys for the images and the info for it 
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stripRef = useRef(null);
  const [stripActive, setStripActive] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStripActive(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="recipes" className="py-32 relative min-h-screen">
        <h1 className="px-2 md:px-4 text-center text-3xl text-header mb-5 font-bold">
            A Taste of My Food 🥣
        </h1>

        <div ref={containerRef} className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT: fixed image frame (no layout shift) */}
            <div ref={leftRef} className="relative rounded-2xl ring-2 ring-primary bg-background/40 p-4 md:p-6">
                <div className="relative w-full rounded-xl overflow-hidden mx-auto aspect-square">
                  {dishes.map((d, idx) => (
                  <img
                      key={d.id}
                      src={d.image}
                      alt={d.name}
                      className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] object-contain drop-shadow-xl transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 ${
                      idx === i ? "opacity-100" : "opacity-0"
                      }`}
                      loading={idx === i ? "eager" : "lazy"}/>
                      ))}
                </div>

                {/* Controls (frame never moves) */}
                <div className="mt-4 flex items-center justify-between">
                    <button
                        onClick={prev}
                        className="rounded-xl border-2 border-primary bg-background/70 px-3 py-2 hover:bg-button transition-colors duration-300 text-primary"
                        aria-label="Previous recipe"
                        >
                        <div className="flex items-center gap-1 cursor-pointer">
                            <ChevronLeft size={18} />
                            Prev
                        </div>
                    </button>
                    <span className="text-sm text-primary font-bold">
                        {i + 1} / {dishes.length}
                    </span>
                    <button
                        onClick={next}
                        className="rounded-xl border-2 border-primary bg-background/70 px-3 py-2 hover:bg-button transition-colors duration-300 text-primary"
                        aria-label="Next recipe">
                        <div className="flex items-center gap-1 cursor-pointer">
                            Next <ChevronRight size={18} />
                        </div>
                    </button>
                </div>
            </div>

            <div ref={rightRef} className="flex h-full" style={{ willChange: "opacity" }}>          
              {/* Right Side */}
              <AnimatePresence mode="wait">
                  <motion.div
                      key={dish.id} 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex flex-col rounded-2xl ring-2 ring-primary bg-background/30 p-6 md:p-8">
                      <motion.h2
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                          className="text-xl md:text-2xl font-bold text-primary text-pretty"
                          >
                          {dish.name}
                      </motion.h2>

                      <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.1 }}
                          className="mt-3 text-foreground/80 text-md md:text-lg text-pretty "
                          >
                          {dish.intro}
                      </motion.p>

                          {/* Tags */}
                      <motion.div
                          initial="hidden"
                          animate="show"
                          variants={{
                              hidden: { opacity: 0, y: 6 },
                              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
                          }}
                          className="mt-4 flex flex-wrap gap-2"
                          >
                          {dish.tags.map((t) => (
                              <motion.span
                              key={t}
                              variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                              className="inline-flex items-center rounded-full border border-primary bg-button px-3 py-1 text-xs md:text-1xl text-foreground"
                              >
                              {t}
                              </motion.span>
                          ))}
                      </motion.div>

                          {/* Ingredients & benefits */}
                      <div className="mt-6">
                          <motion.h3
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: 0.18 }}
                              className="font-semibold text-foreground mb-3">
                              Ingredients & Benefits
                          </motion.h3>

                          <motion.ul
                              initial="hidden"
                              animate="show"
                              variants={{
                              hidden: { opacity: 0 },
                              show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                              }}
                              className="space-y-3">
                              {dish.ingredients.map((ing) => (
                              <motion.li
                                  key={ing.name}
                                  variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                                  className="flex gap-3">
                                    {/* bullet */}
                                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-primary" />
                                  <div>
                                    <p className="font-sm text-foreground">{ing.name}</p>
                                    <p className="text-xs text-foreground/70">{ing.benefit}</p>
                                  </div>
                              </motion.li>
                              ))}
                          </motion.ul>
                      </div>

                      <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.28 }}
                          className="mt-auto pt-6 flex gap-3">
                          <button
                              onClick={next}
                              className="rounded-xl text-primary border-2 border-primary px-4 py-2 text-sm hover:bg-button transition-colors duration-300 cursor-pointer">
                              Next Recipe →
                          </button>
                      </motion.div>
                  </motion.div>
              </AnimatePresence>
            </div>                       
        </div>

        {/* Thumbnails (also fixed size to avoid shifting) */}
        <div className="container mt-10 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {dishes.map((d, idx) => (
            <button
                key={d.id}
                onClick={() => setI(idx)}
                className={`rounded-xl border-2 border-primary bg-background/30 p-2 hover:border-button transition-colors duration-300 cursor-pointer ${
                idx === i ? "border-none ring-2 ring-button" : ""
                }`}
                aria-label={`View ${d.name}`}
                title={d.name}>
                <div className="relative w-full h-24">
                <img
                    src={d.image}
                    alt={d.name}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"/>
                </div>
            </button>
            ))}
        </div>

        {/* Only animates when visible */}
        <div ref={stripRef}>
          <RecipeLearnStrip active={stripActive} />
        </div>
    </section>
  );
};
