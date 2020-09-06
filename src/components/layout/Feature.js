import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

const Feature = props => (
    <div className="feature" id={props.id}>
        <Reveal effect="zoom-out-bg" duration={props.id === "slide1" ? 1000 : 0}>
            <div className="feature__img" />
        </Reveal>
        <Fade bottom duration={window.innerWidth > 700 ? 700 : 0} appear spy={props.active}>
            <div className="feature__content">
                <h3 className="feature__title">
                    {props.heading}
                </h3>
                <p className="paragraph feature__text">
                    {props.children}
                </p>
            </div>
        </Fade>
    </div>
)

export default Feature;