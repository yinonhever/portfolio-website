import React from "react";
import Feature from "./Feature";
import illustration1 from "../../images/Illustrations/coding_.svg";
import illustration2 from "../../images/Illustrations/illustration-15.svg";

const Features = () => (
    <section className="features">
        <h2 className="section-heading features__heading">What I Do</h2>
        <div className="features__row">
            <Feature left img={illustration1} heading="Lorem ipsum dolor">
                I'm committed to coding beautiful and accurate designs with a wide variety of layouts, effects,
                animations and complex elements, making them as pixel-perfect as possible and ensuring
                their ultimate responsiveness for any possible screen size. I take care of every small detail
                to bring any website to its most optimal appearance.
            </Feature>
            <Feature right img={illustration2} heading="Dolore magna aliqua">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Feature>
        </div>
    </section>
)

export default Features;