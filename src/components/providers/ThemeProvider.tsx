"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
    isVibrant: boolean;
    toggleVibrant: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isVibrant, setIsVibrant] = useState(false);

    useEffect(() => {
        if (isVibrant) {
            document.body.classList.add("vibrant-mode");
        } else {
            document.body.classList.remove("vibrant-mode");
        }
    }, [isVibrant]);

    const toggleVibrant = () => {
        setIsVibrant((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isVibrant, toggleVibrant }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
