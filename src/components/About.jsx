import Nicole from "@/assets/nicole.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {

    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.from(headingRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                end: "top 1%",
                toggleActions: "play none none none",
                scrub: true,
            },
        });

        gsap.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                end: "top 10%",
                toggleActions: "play none none none",
                scrub: true,
            },
        });

        gsap.from(imageRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 85%",
                end: "top 1%",
                toggleActions: "play none none none",
                scrub: true,
            },
    });
    }, {dependencies: []});

    return (
        <section id="about" className="px-4 py-32 relative min-h-screen">
            <h1 ref={headingRef} className="text-center text-3xl md:text-4xl text-primary mb-20 font-bold">With hands in the soil and heart in the kitchen, I’m Nicole Wynaar.</h1>
            <div className="container flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-20">

                {/* left side */}
                <div className="flex flex-col w-[90%] md:w-[70%]" ref={textRef}>
                    <h2 className="text-primary text-3xl text-center">About Me</h2>
                    <p className="text-pretty text-primary text-lg text-center mt-12 mb-8">
                        Growing up in a family rooted in the land, I was raised on my mother’s side of the family farm, where we grew our own fruits and vegetables. Everything we cooked came straight from the garden. 
                        From as early as five years old, I was taught not only how to cook but also how to plant and care for the food we ate. My grandparents passed down this knowledge with love and care, teaching me how to live in harmony with nature.
                    </p>
                    <p className="text-pretty text-primary text-lg text-center mb-8">
                        When we were sick, whether it was a cold, a headache, or even more chronic issues like high blood pressure, we didn’t run to the hospital. My grandmother believed in the power of nature and would make healing remedies using herbs from our own garden. 
                        She managed her diabetes and high blood pressure with natural remedies like garlic and ginger tea, and I was right there with her, learning every step of the way.
                    </p>
                    <p className="text-pretty text-primary text-lg text-center mb-8">
                        I didn’t just want to cook. I wanted to educate. I believe food is medicine, and what we eat should nourish and heal us. Our bodies are organic, and they thrive on what nature provides. 
                        Nature Curious Naturally is my way of reconnecting people to the healing wisdom of food and sharing how a natural, holistic lifestyle can support lifelong health and wellness.
                    </p>
                    <div className="flex sm-flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium">
                            Let's Connect
                        </a>

                        <a href="/RESUME.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium">
                            Download My CV
                        </a>
                    </div>
                </div>
                {/* right side */}
                <div className="flex flex-col w-[70%]">
                    <img className="w-full max-h-[750px] object-cover rounded-2xl" ref={imageRef} src={Nicole} alt="My Picture" />

                </div>
            </div>

            
        </section>

    );
}