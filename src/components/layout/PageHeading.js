import React from "react";
import Zoom from "react-reveal/Zoom";

const PageHeading = props => (
    <section className="page-heading">
        <Zoom duration={0} appear spy={props.title}>
            <div style={{ height: "100%" }}>
                <h1 className="page-heading__title">{props.title}</h1>
            </div>
        </Zoom>
    </section>
)

export default PageHeading;