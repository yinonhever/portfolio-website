import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Button from "./Button";

const Work = props => {
    const [imageBoxHeight, setImageBoxHeight] = useState(null);
    const imageRef = useRef();
    useLayoutEffect(() => {
        const adjustHeight = () => {
            if (imageRef.current) {
                const { width, height } = imageRef.current.getBoundingClientRect();
                setImageBoxHeight(() => {
                    const boxHeight = window.innerWidth > 450 ? width * 60 / 100 : width * 65 / 100;
                    return boxHeight <= height || height === 0 ? boxHeight : height;
                });
            }
        }
        adjustHeight();
        window.addEventListener("resize", adjustHeight);
    }, [])

    console.log("rendering Work");

    return (
        <div className={!props.mirror ? "work" : "work work--reversed"}>
            <div className="work__container">
                <Fade left mirror={props.mirror} duration={600}>
                    <div className="work__img" style={{ height: imageBoxHeight || null }}>
                        <img ref={imageRef} src={props.img} alt={props.title} />
                    </div>
                </Fade>
                <Fade right mirror={props.mirror} duration={600}>
                    <div className="work__content">
                        <h2 className="work__title">{props.title}</h2>
                        <p className="paragraph work__description">{props.description}</p>
                        <div className="work__buttons">
                            <a rel="noopener noreferrer" href={props.url} target="_blank"
                                style={{ textDecoration: "none" }} className="work__button">
                                <Button pill>Go to website</Button>
                            </a>
                            <Link to={"/works/" + props.id} style={{ textDecoration: "none" }}
                                className="work__button">
                                <Button unite>View Gallery</Button>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Work;