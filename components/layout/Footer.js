import React from "react";
import Link from "next/link";
import Logo from "../UI/Logo";
import ExternalLink from "../UI/ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__left">
        <Logo white />
        <div className="footer__navigation">
          <Link href="/" className="footer__link">
            Home
          </Link>
          <Link href="/works" className="footer__link">
            Works
          </Link>
          <Link href="/contact" className="footer__link">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer__right">
        <ExternalLink
          link="https://github.com/yinonhever"
          classes="footer__link"
        >
          <FontAwesomeIcon icon={faGithub} className="footer__link-icon" />
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
