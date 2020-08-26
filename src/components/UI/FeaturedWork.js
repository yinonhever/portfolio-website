import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import ExternalLink from "./ExternalLink";

const FeaturedWork = props => {
    const [imageBoxHeight, setImageBoxHeight] = useState();
    const [titleMargin, setTitleMargin] = useState();
    const imageRef = useRef();
    const titleRef = useRef();

    useLayoutEffect(() => {
        const adjustDimensions = () => {
            if (imageRef.current) {
                const { width, height } = imageRef.current.getBoundingClientRect();
                setImageBoxHeight(() => {
                    const boxHeight = window.innerWidth > 450 ? width * 60 / 100 : width * 65 / 100;
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
                <Link to={"/works/" + props.id}>
                    <div className="featured-work__img"
                        style={{ height: imageBoxHeight || null }}>
                        <img src={props.img} alt={props.title} ref={imageRef} />
                    </div>
                    <h3 className="featured-work__title"
                        ref={titleRef}
                        style={{ marginTop: titleMargin || null }}>
                        <span>{props.title}</span>
                    </h3>
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
}

export default FeaturedWork;