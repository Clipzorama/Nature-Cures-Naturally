import { useState } from "react";
import { LightSwitch } from "@/components/LightSwitch.jsx";
import { Menu, X } from "lucide-react";
import NCC from "@/assets/logo.png"
import { cn } from "@/lib/utlis"


// will have to change this soon and add some new stuff

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Recipes", href: "#recipes"},
    {name: "Services", href: "#services"},
    {name: "Contact", href: "#contact"},

]

export const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full transition-all duration-300 background/80 pt-7 pb-3 z-100 border-b backdrop-blur-md ">
            <div className="container flex justify-between items-center">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <img src={NCC} alt="Logo" className="w-10 h-10 mr-4 z-100" />
                    <span className="relative z-100 transition-colors">
                        <span className="text-foreground">NCC</span> Inc.
                    </span>
                </a>

                {/* For computers */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key}
                            href={item.href}
                            className="text-primary transition-colors duration-300 font-bold tracking-wider"
                            >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* for smaller devices */}

                <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                                       "transition-all duration-300 md:hidden",
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
                            <LightSwitch className="block md:hidden self-center mt-2"/>
                    </div>

                </div>
            </div>
        </nav>
    );
}