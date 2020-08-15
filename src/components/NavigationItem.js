import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const NavigationItem = props =>
    <NavLink className="header__nav-link" to={props.link} onClick={props.clicked}>
        <Button stretch>{props.children}</Button>
    </NavLink>

export default NavigationItem;