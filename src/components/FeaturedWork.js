import React from "react";
import useDimensions from "react-use-dimensions";
import Fade from "react-reveal/Fade";

const FeaturedWork = props => {
    const [imageRef, { width }] = useDimensions();
    const [titleRef, titleSize] = useDimensions();
    const imageHeight = window.innerWidth > 450 ? width * 60 / 100 : width * 70 / 100;

    return (
        <Fade left mirror={props.mirror} duration={800}>
            <div className="featured-work">
                <a rel="noopener noreferrer" href={props.url} target="_blank">
                    <div className="featured-work__img"
                        ref={imageRef}
                        style={{ height: imageHeight || null }}>
                        <img src={props.img} alt={props.title} />
                    </div>
                    <h3 className="featured-work__title"
                        ref={titleRef}
                        style={{ marginTop: -(titleSize.height / 2) || null }}>
                        <span>{props.title}</span>
                    </h3>
                </a>
                <div className="featured-work__content">
                    <p className="paragraph featured-work__text">
                        {props.text}
                    </p>
                </div>
            </div>
        </Fade>
    )
}

export default FeaturedWork;