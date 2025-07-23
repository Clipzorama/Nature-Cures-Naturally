import { useState } from "react";
// import { LightSwitch } from "@/components/LightSwitch.jsx";
// import { Menu, X } from "lucide-react";

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
            <div className="flex justify-between items-center md:block">
                Some text here if it works
            </div>

        </nav>
    );
}