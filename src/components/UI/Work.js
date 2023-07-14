import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import WorkImg from "./WorkImg";
import Button from "./Button";
import ExternalLink from "./ExternalLink";

const Work = props => (
  <div className={!props.mirror ? "work" : "work work--reversed"}>
    <div className="work__container">
      <Fade direction={props.mirror ? "right" : "left"} duration={600}>
        <Link to={"/works/" + props.id}>
          <WorkImg classes="work__img" src={props.img} alt={props.title} />
        </Link>
      </Fade>
      <Fade direction={props.mirror ? "left" : "right"} cascade duration={500}>
        <div className="work__content">
          <h2 className="work__title">{props.title}</h2>
          <p className="paragraph work__description">{props.description}</p>
          <div className="work__buttons">
            <ExternalLink link={props.url}>
              <Button pill>Go to website</Button>
            </ExternalLink>
            <Link to={"/works/" + props.id}>
              <Button unite>View Gallery</Button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Work;
