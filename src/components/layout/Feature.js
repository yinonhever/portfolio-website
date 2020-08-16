import React from "react";
import Zoom from "react-reveal/Zoom";

const Feature = props => (
    <Zoom duration={600}>
        <div className="feature">
            <img className="feature__img" src={props.img} alt="illustration" />
            <h3 className="feature__title">
                {props.heading}
            </h3>
            <p className="paragraph feature__text">
                {props.children}
            </p>
        </div>
    </Zoom>
)

export default Feature;