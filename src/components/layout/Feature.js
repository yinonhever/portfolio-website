import React from "react";
import Fade from "react-reveal/Fade";

const Feature = props => (
    <Fade left={props.left} right={props.right} duration={600}>
        <div className="feature">
            <img className="feature__img" src={props.img} alt="illustration" />
            <h3 className="feature__title">
                {props.heading}
            </h3>
            <p className="paragraph feature__text">
                {props.children}
            </p>
        </div>
    </Fade>
)

export default Feature;