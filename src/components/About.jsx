import Nicole from "@/assets/nicole.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/Effects/SpotlightCard";
import {
  Leaf,
  Apple,
  Sprout,
  Brain,
  HeartPulse,
  ClipboardList,
  Droplet,
  Salad,
  Smile,
  Utensils,
  GraduationCap,
  FileText,
  NotebookPen,
  BookOpenCheck,
  Award,
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

// GSAP THE CARD CONCEPT TITLES

export const AboutSection = () => {

    const healing = [
        {name: "Herbal Remedies", icon: Leaf},
        {name: "Whole Foods Nutrition", icon: Apple},
        {name: "Plant-Based Healing", icon: Sprout},
        {name: "Mind-Body Connection", icon: Brain},
        {name: "Emotional Wellbeing", icon: HeartPulse},
    ]

    const coaching = [
        {name: "Meal Planning", icon: ClipboardList},
        {name: "Detox Guidance", icon: Droplet},
        {name: "Plant-Based Healing", icon: Salad},
        {name: "Lifestyle Coaching", icon: Smile},
        {name: "Mindful Eating", icon: Utensils},
    ]

    const certification = [
        {name: "IIN Certified Coach", icon: GraduationCap},
        {name: "Health History Assessment", icon: FileText},
        {name: "Wellness Journals", icon: NotebookPen},
        {name: "Organic Meal Guides", icon: BookOpenCheck},
        {name: "Depression Studies Certificate", icon: Award},
    ]

    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);



    useGSAP(() => {
        gsap.from(headingRef.current, {
            opacity: 0,
            x: 50,
            duration: 0.5,
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                end: "top 1%",
                toggleActions: "play none none none",
                scrub: true,
            },
        });

        gsap.from(textRef.current, {
            opacity: 0,
            x: -150,
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

        // Animate healer cards
        gsap.from(".healer", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".healer",
            start: "top 100%",
            end: "top 10%",
            toggleActions: "play none none none",
            scrub: true,
        },
        });

        // Animate coacher cards
        gsap.from(".coacher", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".coacher",
            start: "top 100%",
            end: "top 40%",
            toggleActions: "play none none none",
            scrub: true,
        },
        });

        // Animate certificer cards
        gsap.from(".certificer", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".certificer",
            start: "top 100%",
            end: "top 70%",
            toggleActions: "play none none none",
            scrub: true,
        },
        });

    }, {dependencies: []});

    return (
        <section id="about" className="py-32 relative min-h-screen">
            <SpotlightCard spotlightColor="rgba(140, 0, 0, 0.3)">

                <h1 ref={headingRef} className="px-2 md:px-4 text-center text-3xl md:text-4xl text-card mb-20 font-bold">With hands in the soil and heart in the kitchen, I'm Nicole Wynaar 🪷</h1>
                <div className="container flex flex-col items-center lg:items-start lg:flex-row lg: gap-10 md:gap-20">

                    {/* left side */}
                    <div className="flex flex-col w-[100%] md:w-[70%]" ref={textRef}>
                        <h2 className="text-primary text-3xl text-center">About Me ❤️</h2>
                        <p className="text-pretty text-primary text-md md:text-lg text-center mt-12 mb-8">
                            Growing up in a family rooted in the land, I was raised on my mothers side of the family farm, where we grew our own fruits and vegetables. Everything we cooked came straight from the garden. 
                            From as early as five years old, I was taught not only how to cook but also how to plant and care for the food we ate. My grandparents passed down this knowledge with love and care, teaching me how to live in harmony with nature.
                        </p>
                        <p className="text-pretty text-primary text-md md:text-lg text-center mb-8">
                            When we were sick, whether it was a cold, a headache, or even more chronic issues like high blood pressure, we didn't run to the hospital. My grandmother believed in the power of nature and would make healing remedies using herbs from our own garden. 
                            She managed her diabetes and high blood pressure with natural remedies like garlic and ginger tea, and I was right there with her, learning every step of the way.
                        </p>
                        <p className="text-pretty text-primary text-md md:text-lg text-center mb-8">
                            I didn't just want to cook. I wanted to educate. I believe food is medicine, and what we eat should nourish and heal us. Our bodies are organic, and they thrive on what nature provides. 
                            Nature Curious Naturally is my way of reconnecting people to the healing wisdom of food and sharing how a natural, holistic lifestyle can support lifelong health and wellness.
                        </p>
                        <div className="flex sm-flex-row gap-4 mt-4 justify-center">
                            <a href="#contact" className="px-4 py-2 rounded-1xl bg-button border border-primary text-primary hover:bg-button/60 transition-colors duration-300 font-medium">
                                Connect
                            </a>

                            <a href="/RESUME.pdf" download className="px-4 py-2 rounded-1xl border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium">
                                Download My CV
                            </a>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="flex flex-col w-[70%]">
                        <img className="w-full max-h-[750px] object-cover rounded-2xl" ref={imageRef} src={Nicole} alt="My Picture" />

                    </div>
                </div>
            </SpotlightCard>
            {/* Clean card concept ill add here */}
            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-center text-3xl md:text-4xl text-card mb-10 font-bold">The Tools That Nourish 🌸</h1>

                <section className="py-10">
                    {/* Healing Practices & Philosophies */}
                    <h2 className="text-2xl font-bold text-center mb-6 text-primary">
                        Healing Practices & Philosophies 🍃
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 p-4 max-lg:gap-3 w-full">
                        {healing.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                            key={idx}
                            className="card p-4 bg-card shadow-lg rounded-xl text-center hover:bg-primary hover:text-black transition-colors duration-300 hover:shadow-xl healer"
                            >
                            <Icon className="mx-auto mb-2 text-black" size={32} />
                            <p className="text-sm font-medium">{item.name}</p>
                            </div>
                        );
                        })}
                    </div>
                    </section>

                    <section className="py-10">
                    {/* Coaching Services */}
                    <h2 className="text-2xl font-bold text-center mb-6 text-primary">
                        Coaching Services 🧑‍🤝‍🧑
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 p-4 max-lg:gap-3 w-full">
                        {coaching.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                            key={idx}
                            className="card p-4 bg-card shadow-lg rounded-xl text-center hover:bg-primary hover:text-black transition-colors duration-300 hover:shadow-xl coacher"
                            >
                            <Icon className="mx-auto mb-2 text-black" size={32} />
                            <p className="text-sm font-medium">{item.name}</p>
                            </div>
                        );
                        })}
                    </div>
                    </section>

                    <section className="py-10">
                    {/* Tools & Certifications */}
                    <h2 className="text-2xl font-bold text-center mb-6 text-primary">
                        Tools & Certifications 🌟
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 p-4 max-lg:gap-3 w-full">
                        {certification.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                            key={idx}
                            className="card p-4 bg-card shadow-lg rounded-xl text-center hover:bg-primary hover:text-black transition-colors duration-300 hover:shadow-xl certificer"
                            >
                            <Icon className="mx-auto mb-2 text-black" size={32} />
                            <p className="text-sm font-medium">{item.name}</p>
                            </div>
                        );
                        })}
                    </div>
                </section>
            </div>
        </section>

    );
}