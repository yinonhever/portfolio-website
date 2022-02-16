import React from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import ExternalLink from "../UI/ExternalLink";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__left">
        <Logo white />
        <div className="footer__navigation">
          <Link to="/" className="footer__link">
            About
          </Link>
          <Link to="/works" className="footer__link">
            Works
          </Link>
          <Link to="/contact" className="footer__link">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer__right">
        <ExternalLink
          link="https://github.com/yinonhever"
          classes="footer__link"
        >
          <i className="footer__link-icon fab fa-github" />
          <span>View on Github</span>
        </ExternalLink>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Yinon Hever. All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
