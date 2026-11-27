import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(
        () => (document.documentElement.dataset.theme as Theme) || "dark"
    );

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        try {
            localStorage.setItem("theme", theme);
        } catch { }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    return { theme, toggle }
}