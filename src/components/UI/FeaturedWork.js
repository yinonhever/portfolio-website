import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Button from "./Button";

const FeaturedWork = props => {
    const [imageBoxHeight, setImageBoxHeight] = useState(null);
    const [titleMargin, setTitleMargin] = useState(null);
    const imageRef = useRef();
    const titleRef = useRef();

    useLayoutEffect(() => {
        const adjustDimensions = () => {
            if (imageRef.current) {
                const { width, height } = imageRef.current.getBoundingClientRect();
                setImageBoxHeight(() => {
                    let boxHeight = window.innerWidth > 450 ? width * 60 / 100 : width * 65 / 100;
                    return boxHeight <= height || height === 0 ? boxHeight : height;
                });
            }
            if (titleRef.current) {
                const titleHeight = titleRef.current.getBoundingClientRect().height;
                setTitleMargin(-titleHeight / 2);
            }
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
                        <Link to={"/works/" + props.id} style={{ textDecoration: "none" }}>
                            <Button unite>View Gallery</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default FeaturedWork;