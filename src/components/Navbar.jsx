import { useState } from "react";
import { LightSwitch } from "@/components/LightSwitch.jsx";
import { Menu, X } from "lucide-react";
import NCC from "@/assets/logo.png"

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
        <nav className="fixed w-full transition-all duration-300 background/80 pt-7 pb-3">
            <div className="container flex justify-between items-center">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <img src={NCC} alt="Logo" className="w-10 h-10 mr-4" />
                    <span className="relative z-10 transition-colors">
                        <span className="text-foreground">Nature Cures</span> Naturally
                    </span>
                </a>

                {/* For computers */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                            {item.name}
                        </a>
                    ))}
                </div>
                

            </div>
        </nav>
    );
}