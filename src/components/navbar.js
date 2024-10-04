import { React } from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ol>
                <li>
                    <a href="#Intro">
                        <button className="button-54">Introduction</button>
                    </a>
                </li>
                <li>
                    <a href="#Skills">
                        <button className="button-54">Skills</button>
                    </a>
                </li>
                <li>
                    <a href="#Projects">
                        <button className="button-54">Projects</button>
                    </a>
                </li>
                <li>
                    <a href="#Contact">
                        <button className="button-54">Contact</button>
                    </a>
                </li>
            </ol>
        </nav>
    );
};

export default NavBar;
