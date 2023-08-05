import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import WorkImg from "./WorkImg";
import WorkTitle from "./FeaturedWorkTitle";
import Button from "./Button";
import ExternalLink from "./ExternalLink";

const FeaturedWork = props => (
  <Fade direction={props.mirror ? "right" : "left"} duration={600} triggerOnce>
    <div className="featured-work">
      <Link href={"/works/" + props.id}>
        <WorkImg
          classes="featured-work__img"
          src={props.img}
          alt={props.title}
        />
        <WorkTitle title={props.title} />
      </Link>
      <div className="featured-work__content">
        <p className="paragraph featured-work__text">{props.text}</p>
        <div className="featured-work__buttons">
          <ExternalLink link={props.url} classes="button">
            <Button pill>Go to website</Button>
          </ExternalLink>
          <Link href={"/works/" + props.id}>
            <Button unite>View Gallery</Button>
          </Link>
        </div>
      </div>
    </div>
  </Fade>
);

export default FeaturedWork;
