import React from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__left">
                <Link to="/">
                    <Logo white />
                </Link>
                <div className="footer__navigation">
                    <Link to="/" className="footer__link">About</Link>
                    <Link to="/works" className="footer__link">Works</Link>
                    <Link to="/contact" className="footer__link">Contact</Link>
                </div>
            </div>
            <div className="footer__right">
                <a
                    className="footer__link"
                    rel="noopener noreferrer"
                    href="https://github.com/yinonhever"
                    target="_blank">
                    <i className="footer__link-icon fab fa-github" />
                    <span>View on Github</span>
                </a>
                <p className="footer__copyright">&copy; 2020 Yinon Hever. All right reserved</p>
            </div>
        </div>
    </footer>
)

export default Footer;