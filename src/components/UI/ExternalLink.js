import React from "react";

const ExternalLink = props => (
    <a
        rel="noopener noreferrer"
        href={props.link}
        target="_blank"
        className={props.classes || null}
    >
        {props.children}
    </a>
)

export default ExternalLink;