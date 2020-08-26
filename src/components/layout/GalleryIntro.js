import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../UI/Button";
import ExternalLink from "../UI/ExternalLink";

const GalleryIntro = props => {
    const { work } = props;

    return (
        <Fade left duration={600} spy={work}>
            <section className="gallery__intro">
                <h2 className="gallery__heading">{work.title}</h2>
                <p className="paragraph gallery__intro-text">{work.description}</p>
                <div className="gallery__intro-buttons">
                    <ExternalLink link={work.url}>
                        <Button fill>Go to website</Button>
                    </ExternalLink>
                    <ExternalLink link={work.githubUrl}>
                        <Button unite>View on Github</Button>
                    </ExternalLink>
                </div>
            </section>
        </Fade>
    )
}

export default GalleryIntro;