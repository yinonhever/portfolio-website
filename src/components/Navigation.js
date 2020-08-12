import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => (
    <nav className="header__navigation">
        <NavLink to="/" className="header__nav-link" onClick={props.itemClicked}>
            About
        </NavLink>
        <NavLink to="/works" className="header__nav-link" onClick={props.itemClicked}>
            Works
        </NavLink>
        <NavLink to="/contact" className="header__nav-link" onClick={props.itemClicked}>
            Contact
        </NavLink>
    </nav>
)

export default Navigation;