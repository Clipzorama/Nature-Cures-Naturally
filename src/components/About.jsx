import Nicole from "@/assets/nicole.webp";
import Nicole2 from "@/assets/helper.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const isMobile = window.innerWidth <= 767; 
    const isTablet = window.innerWidth <= 1024; 
    const startPointR = isMobile ? "top 60%" : isTablet ? "top 70%" : "top 90%";
    const startPointA = isMobile ? "power1.out" : isTablet ? "power1.out" : "bounce";
    const startPointS = isMobile ? false : isTablet ? true : true;





    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    const images = [Nicole, Nicole2]; // put your images here

    const healing = [
        {name: "Herbal Remedies", icon: Leaf},
        {name: "Whole Foods Nutrition", icon: Apple},
        {name: "Healthy Blogging", icon: Sprout},
        {name: "Mind & Body", icon: Brain},
        {name: "Emotional Wellbeing", icon: HeartPulse},
    ]

    const coaching = [
        {name: "Meal Planning", icon: ClipboardList},
        {name: "Detox Guidance", icon: Droplet},
        {name: "Online Cooking Classes", icon: Salad},
        {name: "Lifestyle Coaching", icon: Smile},
        {name: "Mindful Eating", icon: Utensils},
    ]

    const certification = [
        {name: "IIN Certified Coach", icon: GraduationCap},
        {name: "Health History", icon: FileText},
        {name: "Wellness Journals", icon: NotebookPen},
        {name: "Organic Meal Guides", icon: BookOpenCheck},
        {name: "Depression Studies Certificate", icon: Award},
    ]

    useGSAP(() => {
        gsap.from(headingRef.current, {
            opacity: 0,
            x: 50,
            duration: 0.5,
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                end: "top 10%",
                toggleActions: "play none none none",
                scrub: true,
            },
        });

        gsap.from(textRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                end: "top 35%",
                toggleActions: "play none none none",
                scrub: true,
            },
        });

        gsap.from(imageRef.current, {
            opacity: 0,
            x: 100,
            duration: 1,
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                end: "top 35%",
                toggleActions: "play none none none",
                scrub: true,
            },
        });

        gsap.from(".title", {
            opacity: 0,
            rotationX: -90,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".title",
                start: startPointR,
                end: "top 30%",
                toggleActions: "play none none none",
                scrub: startPointS,
        },
        });

        gsap.from(".title2", {
            opacity: 0,
            rotationX: -90,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".title2",
                start: startPointR,
                end: "top 30%",
                toggleActions: "play none none none",
                scrub: startPointS,
        },
        });

        gsap.from(".title3", {
            opacity: 0,
            rotationX: -90,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".title3",
                start: startPointR,
                end: "top 30%",
                toggleActions: "play none none none",
                scrub: startPointS,
        },
        });


        // Animate healer cards
        gsap.from(".healer", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.1,
        ease: startPointA,
        scrollTrigger: {
            trigger: ".healer",
            start: startPointR,
            end: "top 10%",
            toggleActions: "play none none none",
            scrub: startPointS,
        },
        });

        // Animate coacher cards
        gsap.from(".coacher", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.1,
        ease: startPointA,
        scrollTrigger: {
            trigger: ".coacher",
            start: startPointR,
            end: "top 10%",
            toggleActions: "play none none none",
            scrub: startPointS,
        },
        });

        // Animate certificer cards
        gsap.from(".certificer", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.1,
        ease: startPointA,
        scrollTrigger: {
            trigger: ".certificer",
            start: startPointR,
            end: "top 10%",
            toggleActions: "play none none none",
            scrub: startPointS,
        },
        });

    }, {dependencies: []});

    return (
        <section id="about" className="py-28 relative min-h-screen">
            <h1 ref={headingRef} className="px-2 md:px-4 text-center text-3xl text-header mb-10 font-bold">With hands in the soil and heart in the kitchen, I'm Nicole Wynaar 🪷</h1>
            <div className="container flex flex-col items-center lg:items-start lg:flex-row lg: gap-10 md:gap-20">

                {/* left side */}
                <div className="flex flex-col w-[100%] md:w-[70%]" ref={textRef}>
                    <h2 className="text-primary text-3xl text-center">About Me </h2>
                    <p className="text-pretty text-primary text-md text-center mt-12 mb-8">
                        Fruits, vegetables, and herbs are like a food puzzle: when the right pieces come together, your meals become a masterpiece and your health follows. 
                        I grew up on my family's farm, where dinner started in the soil. From age five, I learned to plant, tend, and cook with what we grew. When we were sick, 
                        my grandmother reached for the garden first to obtain garlic, ginger, and other herbs to calm headaches, support blood pressure, and complement medical care. That hands-on wisdom guides everything I do today.

                    </p>
                    <p className="text-pretty text-primary text-md text-center mb-8">
                        I don't believe in deprivation or one-size-fits-all plans. We'll begin with your story, your health history, routines, preferences, culture, and goals, 
                        and craft a plan that truly fits your life. If you love certain foods, we'll keep them. If you're busy, we'll simplify. If you've tried everything, we'll find what finally clicks.
                        Real change isn't only about macros. It's mental, physical, emotional, and spiritual, each piece in balance. We'll pair nutrient-dense, delicious meals with practical habits, gentle accountability, 
                        and evidence-informed guidance so you can see and feel steady progress.

                    </p>
                    <p className="text-pretty text-primary text-md text-center mb-8">
                        Working together means a personalized meal plan built around what you enjoy, smart swaps and simple prep to make healthy eating easy, and herbal or whole-food strategies to support wellness where appropriate. 
                        You'll have ongoing check-ins to keep you motivated and on track. Finding a diet is easy, but finding your way is the challenge, and that's where I come in. Let's put the right pieces together and build a sustainable 
                        foundation that honors your body and your life. Don't wait on your health; start where you are, with what you have, and I'll help you get the rest of the way.

                    </p>
                    <div className="flex sm-flex-row gap-4 mt-4 justify-center">
                        <a href="#contact" className="px-4 py-2 rounded-1xl bg-button border border-primary text-buttonw hover:bg-button/60 transition-colors duration-300 font-extrabold">
                            Connect
                        </a>

                        <a href="/RESUME.pdf" download className="px-4 py-2 rounded-1xl border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-extrabold">
                            Download My CV
                        </a>
                    </div>
                </div>
                {/* right side */}
                <div className="flex flex-col w-[70%] h-[320px] md:h-[550px] lg:h-[650px] ">
                    <img className="w-full max-h-[650px] object-contain rounded-2xl" ref={imageRef} src={Nicole} alt="My Picture" />
                </div>
            </div>
            {/* Clean card concept ill add here */}
            <div className="flex flex-col items-center justify-center mt-20 relative">
                <h1 className="text-center text-3xl text-header mb-10 font-bold">The Tools That Nourish 🌸</h1>

                <section className="py-10">
                    {/* Healing Practices & Philosophies */}
                    <h2 className="title text-2xl font-bold text-center px-1 mb-6 text-primary">
                        Natural Practices 🍃
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 sm:p-1 p-4 max-lg:gap-3 w-full">
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
                    <h2 className="title2 text-2xl font-bold text-center mb-6 text-primary">
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
                    <h2 className="title3 text-2xl font-bold text-center mb-6 text-primary">
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