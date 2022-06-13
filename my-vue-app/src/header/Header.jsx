import React, { useState } from "react";
import './Header.css';

function NavBar() {
    const [active, setActive] = useState('nav_menu');
    const navToggle = () => {
        active === 'nav_menu' 
        ? setActive('nav_menu nav_active') 
        : setActive('nav_menu');
    }
    return (
        <div className="nav_pai">
        <nav className="nav">
            <a href="#" className="nav_brand">Portfólio</a>
            <ul className={ active }>
                <li className="nav_item"><a href="#about-me" className="nav_link">About me</a></li>
                <li className="nav_item"><a href="#hards-skills" className="nav_link">Hards Skills</a></li>
                <li className="nav_item"><a href="#meus-projetos" className="nav_link">Projects</a></li>
                <li className="nav_item"><a href="#contact" className="nav_link">Contact</a></li>
            </ul>
            <div onClick={ navToggle } className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;
