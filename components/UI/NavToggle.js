import React from "react";

const NavToggle = props => (
    <span className="header__nav-toggle" onClick={props.clicked}>
        <span /><span /><span />
    </span>
)

export default NavToggle;