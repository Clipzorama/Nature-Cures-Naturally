import { useState } from "react";
import { LightSwitch } from "@/components/LightSwitch.jsx";
import { Menu, X } from "lucide-react";
import NCC from "@/assets/logo.png"
import { cn } from "@/lib/utils"

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Recipes", href: "#recipes"},
    {name: "Inspiration", href: "#inspiration"},
    {name: "Contact", href: "#contact"},

]

export const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full transition-all duration-300 background/80 pt-7 pb-3 z-100 border-b backdrop-blur-md ">
            <div className="container flex justify-between items-center">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <img src={NCC} alt="Logo" className="w-10 h-10 mr-4 z-100" />
                    <span className="relative z-100 transition-colors text-md">
                        <span className="text-foreground">NCN</span> LLC.
                    </span>
                </a>

                {/* For computers */}
                <div className="hidden lg:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key}
                            href={item.href}
                            className="text-primary text-sm transition-colors duration-300 font-bold tracking-wider"
                            >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* for smaller devices */}

                <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-foreground z-110"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={cn("fixed inset-0 min-h-screen bg-background/96 backdrop-blur-3xl z-100 flex flex-col items-center justify-center",
                                       "transition-all duration-300 lg:hidden",
                                       isMenuOpen 
                                       ? "opacity-100 pointer-events-auto" 
                                       : "opacity-0 pointer-events-none"
                    )}>
                    <div className="flex flex-col space-y-8 text-xl items-center">
                            {navItems.map((item, key) => (
                                <a key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}>
                                
                                    {item.name}
                                </a>
                            ))}
                            <LightSwitch className="block lg:hidden self-center mt-2"/>
                    </div>

                </div>
            </div>
        </nav>
    );
}