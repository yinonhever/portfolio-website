import React from "react";
import Fade from "react-reveal/Fade";

const PageHeading = props => (
    <section className="page-heading">
        <h1 className="page-heading__title">
            <Fade duration={700}>
                <span>{props.title}</span>
            </Fade>
        </h1>
    </section>
)

export default PageHeading;