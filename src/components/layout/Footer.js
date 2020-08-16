import React from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

const Footer = () => (
    <footer className="footer">
        <Link to="/" style={{ display: "block" }}>
            <Logo white />
        </Link>
    </footer>
)

export default Footer;