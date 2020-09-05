import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo-white.png";

const Logo = props => (
    <Link to="/" style={{ display: "block" }} onClick={props.clicked || null}>
        <img className="logo" src={logo} alt="logo" />
    </Link>
)

export default Logo;
