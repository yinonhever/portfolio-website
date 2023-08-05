import React from "react";
import Link from "next/link";

const Logo = props => (
  <Link href="/" style={{ display: "block" }} onClick={props.clicked || null}>
    <img className="logo" src="/images/logo-white.png" alt="logo" />
  </Link>
);

export default Logo;
