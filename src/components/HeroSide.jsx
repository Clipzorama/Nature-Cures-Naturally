import { ArrowDown } from "lucide-react";
import root from "@/assets/rooter.png";
import sacral from "@/assets/sacral.png";
import yellow from "@/assets/yellow.png";
import blocked from "@/assets/blocked.png";
import blue from "@/assets/blue.png";
import green from "@/assets/green.png";
import purple from "@/assets/purple.png";




export const HeroSide = () => {



    return (

        <section id="hero" className="flex flex-col items-center justify-center px-4 relative min-h-screen">
            <div className="container max-w-4xl mx-auto text-center z-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-5">
                    <span className="text-primary opacity-0 animate-fade-in">Nature </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Cures </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">Naturally</span>
                </h1>
                <p className="text-md text-pretty px-6 md:text-lg md:px-10 max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mb-4">
                    Empowering you to eat with purpose, live with intention, and heal naturally because your body deserves what nature provides.
                </p>

                <div className="flex justify-center gap-2 md:absolute md:inset-0 md:items-center md:justify-center md:gap-10">
                    <img src={root} alt="root chakra" className="w-10 h-10 md:w-20 md:h-20 md:absolute md:top-[90%] md:left-[10%] lg:w-21 lg:h-21" />
                    <img src={sacral} alt="sacral chakra" className="w-10 h-10 md:w-20 md:h-20 md:absolute md:top-[75%] md:left-[0%] lg:w-24 lg:h-24" />
                    <img src={yellow} alt="solar plexus chakra" className="w-10 h-10 md:w-20 md:h-20 md:absolute md:top-[50%] md:-translate-y-1/2 md:-right-[2%] lg:w-24 lg:h-24" />
                    <img src={green} alt="heart chakra" className="w-10 h-10 md:w-20 md:h-20 md:absolute md:top-[50%] md:-left-[2%] md:-translate-y-1/2 lg:w-24 lg:h-24" />
                    <img src={blue} alt="throat chakra" className="w-10 h-10 md:w-20 md:h-20 md:absolute md:-top-[85%] md:right-[15%] lg:w-24 lg:h-24" />
                    <img src={blocked} alt="third eye chakra" className="w-10 h-10 md:w-20 md:h-16 md:absolute md:-top-[80%] md:left-[15%] lg:w-24 lg:h-20" />
                    <img src={purple} alt="crown chakra" className="w-10 h-10 md:w-20 md:h-20 md:absolute md:-top-[100%] md:translate-x-1/2 md:right-[50%] lg:w-24 lg:h-24 " />
                </div>

            

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span>Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-primary" />

            </div>
        </section>
    );
}