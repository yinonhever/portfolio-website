import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import WorkImg from "./WorkImg";
import WorkTitle from "./FeaturedWorkTitle";
import Button from "./Button";
import ExternalLink from "./ExternalLink";

const FeaturedWork = props => (
    <Fade left mirror={props.mirror} duration={600}>
        <div className="featured-work">
            <Link to={"/works/" + props.id}>
                <WorkImg classes="featured-work__img" src={props.img} alt={props.title} />
                <WorkTitle title={props.title} />
            </Link>
            <div className="featured-work__content">
                <p className="paragraph featured-work__text">
                    {props.text}
                </p>
                <div className="featured-work__buttons">
                    <ExternalLink link={props.url} classes="button">
                        <Button pill>Go to website</Button>
                    </ExternalLink>
                    <Link to={"/works/" + props.id}>
                        <Button unite>View Gallery</Button>
                    </Link>
                </div>
            </div>
        </div>
    </Fade>
)

export default FeaturedWork;