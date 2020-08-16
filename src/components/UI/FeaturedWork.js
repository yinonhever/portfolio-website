import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Button from "./Button";

const FeaturedWork = props => {
    const [imageBoxHeight, setImageBoxHeight] = useState(null);
    const [titleMargin, setTitleMargin] = useState(null);
    const imageRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        const adjustDimensions = () => {
            const { width, height } = imageRef.current.getBoundingClientRect();
            setImageBoxHeight(() => {
                let boxHeight = window.innerWidth > 450 ? width * 60 / 100 : width * 65 / 100;
                return boxHeight <= height || height === 0 ? boxHeight : height;
            });
            const titleHeight = titleRef.current.getBoundingClientRect().height;
            setTitleMargin(-titleHeight / 2);
        }
        adjustDimensions();
        window.addEventListener("resize", adjustDimensions);
    }, [])

    return (
        <Fade left mirror={props.mirror} duration={600}>
            <div className="featured-work">
                <a rel="noopener noreferrer" href={props.url} target="_blank">
                    <div className="featured-work__img"
                        style={{ height: imageBoxHeight || null }}>
                        <img src={props.img} alt={props.title} ref={imageRef} />
                    </div>
                    <h3 className="featured-work__title"
                        ref={titleRef}
                        style={{ marginTop: titleMargin || null }}>
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