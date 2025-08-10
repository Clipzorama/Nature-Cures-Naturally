import { useState } from "react";
import Hednick from "@/assets/hednick.webp"; // your image path

export const Inspiration = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="inspiration"className="py-32 relative min-h-screen">
      {/* Section Title */}
        <h1 className="px-2 md:px-4 text-center text-3xl md:text-4xl text-card mb-15 font-bold">
            In Spirit & Inspiration 🕊️
        </h1>

        <div className="container flex flex-col items-center text-center">
            {/* Photo with pulsating shadow */}
            <div className="relative w-full max-w-3xl mb-8">
                <img
                src={Hednick}
                alt="Hednick"
                className="w-full rounded-2xl object-cover shadow-lg"
                />
            </div>

            {/* Punchy Hero Text */}
            <p className="text-lg md:text-xl text-primary max-w-2xl mb-6">
                My son, Hednick, shared my love for the kitchen and dreamed of building
                a business with me. His passion, kindness, and creativity inspire
                every dish I make. Through this work, his spirit lives on bringing
                comfort, joy, and connection to others.
            </p>

            {/* Learn More / Show Less Button */}
            {!showMore && (
                <button
                onClick={() => setShowMore(true)}
                className="px-6 py-2 bg-button border border-primary text-primary rounded-full hover:opacity-70 transition duration-300 cursor-pointer">
                    Learn More
                </button>
            )}

            {showMore && (
                <>
                    {/* Expanded Full Paragraph */}
                    <div className="max-w-3xl text-primary text-lg md:text-xl space-y-4">
                        <p>
                            Just like me, Hednick found his passion in the kitchen early on.
                            While attending Harry S. Truman High School in New York, he joined
                            the CAP Culinary Program; the very same program I once took part
                            in, though in a different school. At home, we spent countless hours
                            cooking together, sharing recipes, laughter, and ideas. He was an
                            aspiring chef with a heart full of love, always dreaming of opening
                            a business with me where we could create and serve food that brought
                            joy to others.
                        </p>
                        <p>
                            Hednick was more than just an incredible cook. He was a kind,
                            giving soul who cared deeply for the people around him. His
                            dedication, creativity, and warmth continue to inspire me every day.
                            This business is not only built on my own passion, but also on his
                            vision: to help others find happiness through cooking, to make them
                            feel cared for, and to share the comfort of a homemade meal. Every
                            dish I make carries a piece of him, and through this work, his spirit
                            lives on.
                        </p>
                    </div>

                    {/* Show Less Button */}
                    <button
                    onClick={() => setShowMore(false)}
                    className="mt-6 px-6 py-2 bg-button border border-primary text-primary rounded-full hover:opacity-70 transition duration-300 cursor-pointer">
                        Show Less
                    </button>
                </>
            )}
        </div>
    </section>
  );
};
