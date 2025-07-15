import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        const currentTheme = theme === "dark" ? "light" : "dark";
        setTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
        document.documentElement.classList.toggle("dark")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const enableTheme = () => useContext(ThemeContext);