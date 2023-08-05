import React from "react";
import Link from "next/link";
import Button from "./Button";

const NavigationItem = props => (
  <Link className="header__nav-link" href={props.link} onClick={props.clicked}>
    <Button stretch>{props.text}</Button>
  </Link>
);

export default NavigationItem;
