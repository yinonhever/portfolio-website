import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../UI/Button";
import ExternalLink from "../UI/ExternalLink";

const GalleryIntro = ({ work }) => (
  <Fade direction="left" duration={600} triggerOnce>
    <section className="gallery__intro">
      <div className="gallery__intro-content">
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
      </div>
    </section>
  </Fade>
);

export default GalleryIntro;
