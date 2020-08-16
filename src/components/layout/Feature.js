import React from "react";

const Feature = props => (
    <div className="feature">
        <img className="feature__img" src={props.img} alt="illustration" />
        <h3 className="feature__title">
            {props.heading}
        </h3>
        <p className="paragraph feature__text">
            {props.children}
        </p>
    </div>
)

export default Feature;