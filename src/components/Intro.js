import React from "react";
import Fade from "react-reveal/Fade";
import illustration from "../images/Illustrations/coding_2.svg";

const Intro = () => (
    <section className="intro">
        <Fade left cascade duration={400}>
            <div className="intro__content">
                <h1 className="intro__heading">Sed tamen intellego quid</h1>
                <p className="paragraph intro__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
            </div>
        </Fade>
        <Fade right duration={600}>
            <img className="intro__img" src={illustration} alt="illustration" />
        </Fade>
    </section>
)

export default Intro;