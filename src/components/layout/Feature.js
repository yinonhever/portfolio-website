import React from "react";
import Fade from "react-reveal/Fade";

const Feature = props => (
    <div className="feature" id={props.id}>
        <div className="feature__img" />
        <Fade duration={700} bottom={window.innerWidth > 700} left={window.innerWidth <= 700}>
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