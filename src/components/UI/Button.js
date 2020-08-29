import React from "react";

const Button = props => {
    let classes = "button bttn-primary bttn-no-outline ";
    ["unite", "pill", "fill", "stretch"].forEach(type => {
        if (props[type]) classes += "bttn-" + type + " ";
    })
    if (props.extra) classes += props.extra;

    return (
        <button className={classes.trim()} onClick={props.clicked || null}>
            {props.children}
        </button>
    )
}

export default React.memo(Button);