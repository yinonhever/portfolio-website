import React from "react";
import { Fade } from "react-awesome-reveal";

const Intro = () => (
  <section className="intro">
    <Fade duration={600} style={{ height: "100%" }} triggerOnce>
      <div className="intro__bg" />
    </Fade>
    <div className="intro__container">
      <Fade direction="left" cascade duration={500} triggerOnce>
        <h1 className="intro__heading">Powerful Web Development</h1>
        <p className="paragraph intro__text">
          I&apos;m Yinon, a full-stack web developer. I&apos;m dedicated to
          building and improving beautiful websites and web apps that stand out,
          with advanced designs, optimized functionality and complete user
          experience.
        </p>
      </Fade>
    </div>
  </section>
);

export default Intro;
