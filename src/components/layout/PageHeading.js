import React from "react";
import { Fade } from "react-awesome-reveal";

const PageHeading = props => (
  <section className="page-heading">
    <Fade duration={600} style={{ height: "100%" }}>
      <div className="page-heading__bg" />
    </Fade>
    <h1 className="page-heading__title">
      <Fade duration={700}>
        <span>{props.title}</span>
      </Fade>
    </h1>
  </section>
);

export default PageHeading;
