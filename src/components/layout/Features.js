import React from "react";
import Feature from "./Feature";
import illustration1 from "../../images/Illustrations/coding_.svg";
import illustration2 from "../../images/Illustrations/illustration-15.svg";

const Features = () => (
    <section className="features">
        <h2 className="section-heading features__heading">What I Do</h2>
        <div className="features__row">
            <Feature left img={illustration1} heading="Beautifully optimized, responsive designs">
                I'm committed to coding beautiful and accurate designs with a wide variety of layouts, effects,
                animations and complex elements, making them as pixel-perfect as possible and ensuring
                their ultimate responsiveness for any possible screen size. I take care of every small detail
                to bring any website to its most optimal appearance.
            </Feature>
            <Feature right img={illustration2} heading="Fully functional, usable apps">
                I build various web applications with full, optimized functionality and a professional,
                well-designed interface with maximum usability. I make sure to create a seamless
                user experience for any web app, allowing users to browse, navigate and use the website's 
                content in the easiest and most efficient way possible.
            </Feature>
        </div>
    </section>
)

export default Features;