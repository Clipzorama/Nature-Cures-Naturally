import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
};

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(getInitialTheme);

    useLayoutEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
    }, [theme])

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", nextTheme);
            return nextTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const enableTheme = () => useContext(ThemeContext);
