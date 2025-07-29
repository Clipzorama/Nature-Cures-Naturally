import { ArrowDown } from "lucide-react";
import root from "@/assets/rooter.png";
import sacral from "@/assets/sacral.png";
import yellow from "@/assets/yellow.png";
import blocked from "@/assets/blocked.png";
import blue from "@/assets/blue.png";
import green from "@/assets/green.png";
import purple from "@/assets/purple.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";




export const HeroSide = () => {

    // GSAP to make the images appear one by one

    useGSAP(() => {
        gsap.to(".chakira-icon", {
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: "power2.inOut",
        })

    }, {dependencies: [] });



    return (

        <section id="hero" className="flex flex-col items-center justify-center px-4 relative min-h-screen">
            <div className="container max-w-4xl mx-auto text-center z-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-5">
                    <span className="text-primary opacity-0 animate-fade-in">Nature </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Cures </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">Naturally</span>
                </h1>
                <p className="text-sm text-pretty px-6 md:text-lg md:px-10 max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mb-4">
                    Empowering you to eat with purpose, live with intention, and heal naturally because your body deserves what nature provides.
                </p>

                    <img src={sacral} alt="sacral chakra" className="chakira-icon absolute w-12 h-12 -bottom-[38%] left-[14%] md:w-20 md:h-20 md:-bottom-[89%] md:left-[14%] lg:w-25 lg:h-25 transform pulse-slow opacity-0" />
                    <img src={green} alt="heart chakra" className="chakira-icon absolute w-10 h-10 top-[50%] -left-[2%] -translate-y-1/2 md:w-20 md:h-20 md:top-[50%] md:-left-[2%] md:-translate-y-1/2 lg:w-24 lg:h-24 transform pulse-slow opacity-0" />
                    <img src={blocked} alt="third eye chakra" className="chakira-icon absolute w-12 h-10 -top-[45%] left-[15%] md:w-20 md:h-16 md:-top-[80%] md:left-[15%] lg:w-24 lg:h-20 transform pulse-slow opacity-0" />
                    <img src={root} alt="root chakra" className="chakira-icon absolute w-10 h-10 -bottom-[35%] right-[16%] md:w-20 md:h-20 md:-bottom-[85%] md:right-[16%] lg:w-21 lg:h-21 transform pulse-slow opacity-0" />
                    <img src={yellow} alt="solar plexus chakra" className="chakira-icon absolute w-10 h-10 top-[50%] -translate-y-1/2 -right-[2%] md:w-20 md:h-20 md:top-[50%] md:-translate-y-1/2 md:-right-[2%] lg:w-24 lg:h-24 transform pulse-slow opacity-0" />
                    <img src={blue} alt="blue chakra" className="chakira-icon absolute w-10 h-10 -top-[45%] right-[15%] md:w-20 md:h-20 md:-top-[85%] md:right-[15%] lg:w-24 lg:h-24 transform pulse-slow opacity-0" />
                    <img src={purple} alt="crown chakra" className="chakira-icon absolute w-10 h-10 -top-[60%] translate-x-1/2 right-[50%] md:w-20 md:h-20 md:-top-[100%] md:translate-x-1/2 md:right-[50%] lg:w-24 lg:h-24 transform pulse-slow opacity-0" />

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span>Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-primary" />

            </div>
        </section>
    );
}