import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "light") {
            setTheme("light");
            document.documentElement.classList.add("light");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("light");
        }
    }, [])

    const toggleTheme = () => {
        const currentTheme = theme === "light" ? "dark" : "light";
        setTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
        document.documentElement.classList.toggle("light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const enableTheme = () => useContext(ThemeContext);