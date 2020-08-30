import React from "react";
import Fade from "react-reveal/Fade";
import illustration from "../../images/Illustrations/coding_2.svg";

const Intro = () => (
    <section className="intro">
        <div className="intro__container">
            <Fade left cascade duration={400}>
                <div className="intro__content">
                    <h1 className="intro__heading">Sed tamen intellego quid</h1>
                    <p className="paragraph intro__text">
                        I'm Yinon, a front-end web developer. I'm dedicated to building and improving
                        beautiful websites and web apps that stand out, with optimized functionality and
                        complete user experience.
                    </p>
                </div>
            </Fade>
            <Fade right duration={600}>
                <img className="intro__img" src={illustration} alt="illustration" />
            </Fade>
        </div>
    </section>
)

export default Intro;
