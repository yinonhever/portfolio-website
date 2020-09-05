import React, { useState, useEffect } from "react";
import Logo from "../UI/Logo";
import NavToggle from "../UI/NavToggle";
import Navigation from "../UI/Navigation";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    useEffect(() => {
        document.querySelector("body").style.overflow = navOpen ? "hidden" : null;
        window.addEventListener("resize", () => {
            if (window.innerWidth > 700 && navOpen) {
                setNavOpen(false);
            }
        })
    }, [navOpen])

    return (
        <header className={navOpen ? "header active" : "header"}>
            <Logo clicked={() => setNavOpen(false)} />
            <NavToggle clicked={() => setNavOpen(!navOpen)} />
            <Navigation itemClicked={() => setNavOpen(false)} />
        </header>
    );
}

export default Header;