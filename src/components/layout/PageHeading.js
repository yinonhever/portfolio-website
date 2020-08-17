import React from "react";

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const PageHeading = props => (
    <section className="page-heading" id={props.id}>
        <h1 className="page-heading__title">{capitalize(props.id)}</h1>
    </section>
)

export default PageHeading;