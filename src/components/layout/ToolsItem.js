import React from "react";

const ToolsItem = props => (
    <div className="tools__item">
        <svg className="tools__item-icon">
            <use xlinkHref={"./images/symbol-defs.svg#" + props.icon} />
        </svg>
        <span className="tools__item-text">{props.text}</span>
    </div>
)

export default ToolsItem;