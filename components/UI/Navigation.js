import React from "react";
import NavigationItem from "./NavigationItem";

const navigationItems = [
  { link: "/", text: "Home" },
  { link: "/works", text: "Works" },
  { link: "/contact", text: "Contact" }
];

const Navigation = props => (
  <nav className="header__navigation">
    {navigationItems.map(item => (
      <NavigationItem key={item.text} clicked={props.itemClicked} {...item} />
    ))}
  </nav>
);

export default Navigation;
