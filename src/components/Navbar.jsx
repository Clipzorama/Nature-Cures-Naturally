import { useState } from "react";

// will have to change this soon and add some new stuff
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},

]


export const NavBar = () => {
    return (
        <h2 className="text-primary text-3xl">
            Hello Friend this is a test
        </h2>
    )
}