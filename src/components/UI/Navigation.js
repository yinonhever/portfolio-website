import React from "react";
import NavigationItem from "./NavigationItem";

const navigationItems = [
    { link: "/", text: "About" },
    { link: "/works", text: "Works" },
    { link: "/contact", text: "Contact" }
]

const Navigation = props => (
    <nav className="header__navigation">
        {navigationItems.map(item =>
            <NavigationItem key={item.text} link={item.link} clicked={props.itemClicked}>
                {item.text}
            </NavigationItem>)}
    </nav>
)

export default Navigation;