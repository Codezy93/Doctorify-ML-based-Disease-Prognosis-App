"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <SunIcon className="w-5 h-5 dark:hidden" />
            <MoonIcon className="w-5 h-5 hidden dark:block" />
        </button>
    );
}