import { useState, React } from "react";
import { Lamp, HeroCard } from "../import";
import "./page1.css";

const Page1 = () => {
    const [isDarkMode] = useState(false);
    return (
        <div
            className={`container ${isDarkMode ? "dark" : "light"}`}
            id="Intro"
        >
            <h2 className="name">Romain Levasseur</h2>

            <span className="computer-svg">
                <Lamp />
            </span>

            <div className="left-panel"></div>
            <div className="right-panel">
                <div className="description">
                    {" "}
                    <HeroCard />
                </div>
            </div>
        </div>
    );
};

export default Page1;
