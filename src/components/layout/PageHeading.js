import React from "react";
import Fade from "react-reveal/Fade";

const PageHeading = props => (
    <section className="page-heading">
        <Fade duration={600}>
            <div style={{ height: "100%" }}>
                <h1 className="page-heading__title">{props.title}</h1>
            </div>
        </Fade>
    </section>
)

export default PageHeading;