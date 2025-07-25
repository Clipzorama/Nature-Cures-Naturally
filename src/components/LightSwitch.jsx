import { Moon, Sun } from "lucide-react";
import { enableTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utlis"


export const LightSwitch = ({ className = "" }) => {
    const { theme, toggleTheme } = enableTheme();

    return (
        <button 
            onClick={toggleTheme} 
            className={cn("transition-colors duration-300 focus:outline-hidden",
                className
            )}
        >
            {theme === "dark" ? <Moon className="w-6 h-6 text-primary cursor-pointer" /> : <Sun className="w-6 h-6 text-primary cursor-pointer" />}
            

        </button>
    );
}