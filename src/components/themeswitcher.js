import { useState, useEffect } from "react";
import "./themeswitcher.css";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.body.className = theme === "light" ? "" : "dark";
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`theme-switcher ${theme}`}>
            <input
                type="range"
                min="0"
                max="1"
                value={theme === "light" ? 0 : 1}
                onClick={toggleTheme}
                className="slider"
                id="theme-slider"
            />
        </div>
    );
};

export default ThemeSwitcher;
