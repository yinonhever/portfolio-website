import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import logoWhite from "../../images/logos/logo-white.png";

const Logo = props =>
    <Link to="/" style={{ display: "block" }} onClick={props.clicked || null}>
        <img className="header__logo" src={!props.white ? logo : logoWhite} alt="logo" />
    </Link>

export default Logo;