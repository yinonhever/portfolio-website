import React from "react";

const Button = props => {
    let classes = "button bttn-primary bttn-no-outline ";
    if (props.unite) classes += "bttn-unite ";
    if (props.pill) classes += "bttn-pill ";
    if (props.fill) classes += "bttn-fill ";
    if (props.stretch) classes += "bttn-stretch ";
    if (props.extra) classes += props.extra;

    return <button className={classes.trim()}>{props.children}</button>;
}

export default Button;