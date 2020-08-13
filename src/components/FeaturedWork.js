import React, { useEffect, useState } from "react";
import useDimensions from "react-use-dimensions";
import Fade from "react-reveal/Fade";

const FeaturedWork = props => {
    const [imageHeight, setImageHeight] = useState(null);
    const [imageRef, { width }] = useDimensions();
    useEffect(() => setImageHeight(width * 60 / 100), [width]);

    return (
        <Fade left mirror={props.mirror} duration={800}>
            <div className="featured-work">
                <a rel="noopener noreferrer" href={props.url} target="_blank">
                    <div className="featured-work__top">
                        <div className="featured-work__img"
                            ref={imageRef}
                            style={{ height: imageHeight || null }}>
                            <img src={props.img} alt={props.title} />
                        </div>
                        <h3 className="featured-work__title"><span>{props.title}</span></h3>
                    </div>
                </a>
            </div>
        </Fade>
    )
}

export default FeaturedWork;