import React from "react";
import "./herocard.css";

const HeroCard = () => {
    return (
        <div className="hero-card-wrapper">
            <pre>
                1&nbsp;&nbsp;class <b>Person</b> &#123;
            </pre>
            <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() &#123;</pre>
            <pre>
                3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
                <b>Romain Levasseur</b>";
            </pre>
            <pre>
                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
                <b>FULLSTACK DEVELOPER</b>"];
            </pre>
            <pre>
                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new
                Date().getFullYear() - 1993;
            </pre>
            <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;</pre>
            <pre>7&nbsp;&nbsp;&#125;</pre>
        </div>
    );
};
export default HeroCard;
