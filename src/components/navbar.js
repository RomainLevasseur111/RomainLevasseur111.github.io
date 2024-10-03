import { React } from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ol>
                <li>
                    <a href="#Intro" className="navlink">
                        Introduction
                    </a>
                </li>
                <li>
                    <a href="#Skills" className="navlink">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#Projects" className="navlink">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#Conctact" className="navlink">
                        Contact
                    </a>
                </li>
            </ol>
        </nav>
    );
};

export default NavBar;
