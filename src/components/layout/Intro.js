import React from "react";
import Fade from "react-reveal/Fade";

const Intro = () => (
    <section className="intro">
        <div className="intro__bg" />
        <Fade left cascade duration={400}>
            <div className="intro__content">
                <h1 className="intro__heading">Powerful Web Development</h1>
                <p className="paragraph intro__text">
                    I'm Yinon, a full-stack web developer. I'm dedicated to building and improving
                    beautiful websites and web apps that stand out, with advanced designs, optimized
                    functionality and complete user experience.
                </p>
            </div>
        </Fade>
    </section>
)

export default Intro;
