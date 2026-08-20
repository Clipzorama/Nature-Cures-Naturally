import { Moon, Sun } from "lucide-react";
import { enableTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils"


export const LightSwitch = ({ className = "" }) => {
    const { theme, toggleTheme } = enableTheme();

    return (
        <button 
            type="button"
            onClick={toggleTheme} 
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className={cn("transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                className
            )}
        >
            {theme === "dark" ? <Moon aria-hidden="true" className="w-6 h-6 text-primary cursor-pointer" /> : <Sun aria-hidden="true" className="w-6 h-6 text-primary cursor-pointer" />}
            

        </button>
    );
}
