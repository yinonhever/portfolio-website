import React from "react";
import useDimensions from "react-use-dimensions";
import Fade from "react-reveal/Fade";
import Button from "./Button";

const FeaturedWork = props => {
    const [imageRef, imageSize] = useDimensions();
    const [titleRef, titleSize] = useDimensions();
    const imageHeight = () => {
        let height;
        if (window.innerWidth > 450) height = imageSize.width * 60 / 100;
        else height = imageSize.width * 70 / 100;
        if (height <= imageSize.height) return height;
        else return imageSize.height;
    }

    return (
        <Fade left mirror={props.mirror} duration={800}>
            <div className="featured-work">
                <a rel="noopener noreferrer" href={props.url} target="_blank">
                    <div className="featured-work__img"
                        style={{ height: imageHeight() || null }}>
                        <img src={props.img} alt={props.title} ref={imageRef} />
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
                    <div className="featured-work__buttons">
                        <a rel="noopener noreferrer" href={props.url} target="_blank"
                            style={{ textDecoration: "none" }} className="button">
                            <Button pill>Go to website</Button>
                        </a>
                        <Button fill>View Gallery</Button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default FeaturedWork;