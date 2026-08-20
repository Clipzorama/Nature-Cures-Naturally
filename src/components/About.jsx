import Nicole from "@/assets/nicole.webp";
import WelcomeVideo from "@/assets/NCN Video.mp4";
import WelcomePoster from "@/assets/ncn-video-poster.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
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
  Play,
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

// GSAP THE CARD CONCEPT TITLES

export const AboutSection = () => {
    // For media control
    const isMobile = window.innerWidth <= 767; 
    const isTablet = window.innerWidth <= 1024; 
    const startPointR = isMobile ? "top 60%" : isTablet ? "top 70%" : "top 90%";
    const startPointA = isMobile ? "power1.out" : isTablet ? "power1.out" : "bounce";
    const startPointS = isMobile ? false : isTablet ? true : true;





    const headingRef = useRef(null);
    const textRef = useRef(null);
    const mediaRef = useRef(null);
    const videoRef = useRef(null);
    const [isVideoPlaying, setVideoPlaying] = useState(false);

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
        {name: "CAP Culinary School", icon: FileText},
        {name: "Wellness Journals", icon: NotebookPen},
        {name: "Organic Meal Guides", icon: BookOpenCheck},
        {name: "Depression Studies Certificate", icon: Award},
    ]

    useGSAP(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

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

        gsap.from(mediaRef.current, {
            opacity: 0,
            x: 100,
            duration: 1,
            scrollTrigger: {
                trigger: mediaRef.current,
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

    const playWelcomeVideo = () => {
        videoRef.current?.play();
    };

    return (
        <section id="about" className="relative min-h-screen overflow-hidden py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-12rem] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-header/8 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-9rem] top-[30rem] h-[24rem] w-[24rem] rounded-full bg-primary/6 blur-3xl"
            />

            <h1 ref={headingRef} className="relative z-10 mb-10 px-3 text-center text-3xl font-bold text-header md:px-4 md:text-4xl">
                With hands in the soil and heart in the kitchen, I'm Nicole Wynaar 🪷
            </h1>

            <div className="container relative z-10">
                <div className="overflow-hidden rounded-[2rem] border border-primary/15 bg-foreground/[0.025] shadow-[0_28px_90px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                    <div className="grid items-center gap-10 px-5 py-7 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-14 lg:px-12 lg:py-14 xl:gap-20 xl:px-16">
                        {/* Nicole's story */}
                        <article className="order-2 flex min-w-0 flex-col lg:order-1" ref={textRef}>
                            <div className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-primary/65">
                                <span aria-hidden="true" className="h-px w-9 bg-header" />
                                Rooted in care
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">About Me</h2>
                            <p className="mt-7 text-pretty text-sm leading-7 text-primary/85 sm:text-base sm:leading-8">
                        Fruits, vegetables, and herbs are like a food puzzle: when the right pieces come together, your meals become a masterpiece and your health follows. 
                        I grew up on my family's farm, where dinner started in the soil. From age five, I learned to plant, tend, and cook with what we grew. When we were sick, 
                        my grandmother reached for the garden first to obtain garlic, ginger, and other herbs to calm headaches, support blood pressure, and complement medical care. That hands-on wisdom guides everything I do today.

                            </p>
                            <p className="mt-5 text-pretty text-sm leading-7 text-primary/85 sm:text-base sm:leading-8">
                        I don't believe in deprivation or one-size-fits-all plans. We'll begin with your story, your health history, routines, preferences, culture, and goals, 
                        and craft a plan that truly fits your life. If you love certain foods, we'll keep them. If you're busy, we'll simplify. If you've tried everything, we'll find what finally clicks.
                        Real change isn't only about macros. It's mental, physical, emotional, and spiritual, each piece in balance. We'll pair nutrient-dense, delicious meals with practical habits, gentle accountability, 
                        and evidence-informed guidance so you can see and feel steady progress.

                            </p>
                            <p className="mt-5 text-pretty text-sm leading-7 text-primary/85 sm:text-base sm:leading-8">
                        Working together means a personalized meal plan built around what you enjoy, smart swaps and simple prep to make healthy eating easy, and herbal or whole-food strategies to support wellness where appropriate. 
                        You'll have ongoing check-ins to keep you motivated and on track. Finding a diet is easy, but finding your way is the challenge, and that's where I come in. Let's put the right pieces together and build a sustainable 
                        foundation that honors your body and your life. Don't wait on your health; start where you are, with what you have, and I'll help you get the rest of the way.

                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-primary bg-button px-5 py-2.5 font-extrabold text-buttonw transition-colors duration-300 hover:bg-button/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                                    Connect with Nicole
                                    <ArrowRight aria-hidden="true" size={17} />
                                </a>
                                <span className="text-sm font-medium text-primary/55">Personal guidance, rooted in your life.</span>
                            </div>
                        </article>

                        {/* Personal welcome video */}
                        <div className="order-1 flex min-w-0 justify-center lg:order-2" ref={mediaRef}>
                            <div className="relative w-full max-w-[22rem] pb-16 sm:pb-14 lg:max-w-[23rem] lg:pb-8">
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-[-2rem] top-[12%] aspect-square rounded-full border border-primary/10"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-[-0.5rem] top-[18%] aspect-square rounded-full border border-header/15"
                                />

                                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-primary/25 bg-black shadow-[0_28px_70px_rgba(0,0,0,0.38)]">
                                    <video
                                        ref={videoRef}
                                        className="h-full w-full object-cover"
                                        src={WelcomeVideo}
                                        poster={WelcomePoster}
                                        preload="metadata"
                                        playsInline
                                        controls
                                        aria-label="A personal welcome message from Nicole Wynaar"
                                        onPlay={() => setVideoPlaying(true)}
                                        onPause={() => setVideoPlaying(false)}
                                        onEnded={() => setVideoPlaying(false)}
                                    >
                                        Your browser does not support embedded video.
                                    </video>

                                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
                                    <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                                        <span className="rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-md">
                                            A personal welcome
                                        </span>
                                        <span className="rounded-full border border-white/20 bg-black/35 px-2.5 py-1.5 text-xs font-bold text-white/90 backdrop-blur-md">
                                            2:38
                                        </span>
                                    </div>

                                    {!isVideoPlaying && (
                                        <button
                                            type="button"
                                            onClick={playWelcomeVideo}
                                            className="absolute left-1/2 top-1/2 z-10 inline-flex min-h-16 min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-background/75 text-primary shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black motion-reduce:transition-none"
                                            aria-label="Play Nicole's welcome message"
                                        >
                                            <Play aria-hidden="true" className="ml-1" fill="currentColor" size={24} />
                                        </button>
                                    )}
                                </div>

                                <div className="absolute bottom-0 right-0 z-20 flex w-[12.5rem] items-center gap-3 rounded-2xl border border-primary/20 bg-background/90 p-2.5 shadow-xl backdrop-blur-xl sm:right-[-1.5rem] lg:right-[-2.25rem]">
                                    <img
                                        src={Nicole}
                                        alt="Nicole Wynaar"
                                        className="h-14 w-14 shrink-0 rounded-xl object-cover object-top"
                                    />
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-extrabold text-primary">Nicole Wynaar</p>
                                        <p className="mt-0.5 text-[0.68rem] leading-4 text-primary/60">Founder, cook &amp; wellness guide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
