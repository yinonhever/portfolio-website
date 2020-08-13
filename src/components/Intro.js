import React from "react";
import Header from "./Header";

const Intro = props => (
    <section className="intro">
        <Header />
        {props.children}
    </section>
)

export default Intro;