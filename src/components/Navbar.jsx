import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LightSwitch } from "@/components/LightSwitch.jsx";
import NCC from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Recipes", href: "#recipes" },
    { name: "Inspiration", href: "#inspiration" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 180;
            const currentSection = [...navItems]
                .reverse()
                .find(({ href }) => {
                    const section = document.querySelector(href);
                    return section && section.offsetTop <= scrollPosition;
                });

            setActiveSection(currentSection?.href.slice(1) ?? "hero");
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const handleNavigation = (href) => {
        setActiveSection(href.slice(1));
        setMenuOpen(false);
    };

    return (
        <nav
            aria-label="Primary navigation"
            className="fixed inset-x-0 top-0 z-100 border-b border-primary/15 bg-background/90 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        >
            <div className="container flex min-h-18 items-center justify-between gap-4 py-3">
                <a
                    className="group flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href="#hero"
                    onClick={() => handleNavigation("#hero")}
                    aria-label="Nature Cures Naturally — home"
                >
                    <img
                        src={NCC}
                        alt=""
                        className="h-11 w-11 shrink-0 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="hidden min-w-0 flex-col leading-tight sm:flex">
                        <span className="truncate text-sm font-extrabold tracking-wide text-foreground md:text-base">
                            Nature Cures Naturally
                        </span>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary/75">
                            Holistic wellness
                        </span>
                    </span>
                    <span className="text-sm font-extrabold tracking-[0.12em] text-foreground sm:hidden">
                        NCN
                    </span>
                </a>

                <div className="hidden items-center gap-1 rounded-full border border-primary/10 bg-foreground/5 p-1 lg:flex">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNavigation(item.href)}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-bold tracking-wide transition-colors duration-200",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                    isActive
                                        ? "bg-primary text-background shadow-sm"
                                        : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                                )}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen((isOpen) => !isOpen)}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-primary/20 bg-foreground/5 text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
                </button>
            </div>

            <div
                id="mobile-navigation"
                aria-hidden={!isMenuOpen}
                className={cn(
                    "absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-primary/15 bg-background/98 px-4 py-5 shadow-2xl backdrop-blur-xl transition-all duration-200 lg:hidden",
                    isMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                )}
            >
                <div className="container flex flex-col gap-2 px-0 sm:px-8">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNavigation(item.href)}
                                aria-current={isActive ? "page" : undefined}
                                tabIndex={isMenuOpen ? 0 : -1}
                                className={cn(
                                    "flex min-h-12 items-center justify-between rounded-xl border px-4 text-base font-bold transition-colors",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                    isActive
                                        ? "border-primary/30 bg-primary text-background"
                                        : "border-transparent text-foreground/80 hover:border-primary/15 hover:bg-primary/10 hover:text-primary"
                                )}
                            >
                                {item.name}
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        "h-1.5 w-1.5 rounded-full",
                                        isActive ? "bg-background" : "bg-primary/40"
                                    )}
                                />
                            </a>
                        );
                    })}

                    <div className="mt-2 flex items-center justify-between border-t border-primary/15 px-4 pt-4 text-sm font-semibold text-foreground/70">
                        <span>Appearance</span>
                        <LightSwitch className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-primary/20 bg-foreground/5 hover:bg-primary/10" />
                    </div>
                </div>
            </div>
        </nav>
    );
};
