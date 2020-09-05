import React from "react";

const Button = props => {
    const types = ["unite", "pill", "fill", "stretch"];
    let classes = "button bttn-primary bttn-no-outline";
    types.forEach(type => {
        if (props[type]) classes += " bttn-" + type;
    })
    if (props.extra) classes += " " + props.extra;

    return (
        <button className={classes} onClick={props.clicked || null}>
            {props.children}
        </button>
    )
}

export default React.memo(Button);