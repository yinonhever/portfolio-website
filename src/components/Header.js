import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logos/logo.png";
import logoWhite from "../images/logos/logo-white.png";
import Navigation from "./Navigation";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    let iconClasses = "header__nav-toggle fas ";
    if (!navOpen) {
        iconClasses += "fa-bars";
    }
    else {
        iconClasses += "fa-times";
    }

    useEffect(() => {
        document.querySelector("body").style.overflow = navOpen ? "hidden" : null;
    }, [navOpen])
    
    return (
        <header className={navOpen ? "header active" : "header"}>
            <Link to="/" style={{ display: "block" }}>
                <img className="header__logo" src={!navOpen ? logo : logoWhite} alt="logo" />
            </Link>
            <i className={iconClasses} onClick={() => setNavOpen(!navOpen)} />
            <Navigation itemClicked={() => setNavOpen(false)} />
        </header>
    );
}

export default Header;