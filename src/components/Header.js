import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import Navigation from "./Navigation";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    useEffect(() => {
        document.querySelector("body").style.overflow = navOpen ? "hidden" : null;
    }, [navOpen])

    return (
        <header className={navOpen ? "header active" : "header"}>
            <Logo white={navOpen} clicked={() => setNavOpen(false)} />
            <NavToggle clicked={() => setNavOpen(!navOpen)} />
            <Navigation itemClicked={() => setNavOpen(false)} />
        </header>
    );
}

export default Header;