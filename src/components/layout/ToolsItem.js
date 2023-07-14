import React from "react";
import { Fade } from "react-awesome-reveal";

const ToolsItem = props => (
  <Fade direction={props.mirror ? "right" : "left"} duration={700}>
    <div className="tools__item">
      {props.altIcon ? (
        <img
          className="tools__item-icon"
          src={props.altIcon}
          alt={props.text}
        />
      ) : (
        <svg className="tools__item-icon">
          <use xlinkHref={"./images/symbol-defs.svg#" + props.icon} />
        </svg>
      )}
      <span className="tools__item-text">{props.text}</span>
    </div>
  </Fade>
);

export default ToolsItem;
