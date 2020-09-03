import React from "react";
import Flip from "react-reveal/Flip";

const PageHeading = props => (
    <section className="page-heading">
        <Flip left duration={1000}>
            <div style={{ height: "100%" }}>
                <h1 className="page-heading__title">{props.title}</h1>
            </div>
        </Flip>
    </section>
)

export default PageHeading;