import React, { useEffect, useState } from "react";
import useDimensions from "react-use-dimensions";

const FeaturedWork = () => {
    const [imageHeight, setImageHeight] = useState(null);
    const [imageRef, imageSize] = useDimensions();

    useEffect(() => {
        const adjustImageHeight = () => setImageHeight(imageSize.width * 60 / 100);
        adjustImageHeight();
        window.addEventListener("resize", adjustImageHeight);
    }, [imageSize.width])

    return (
        <div className="featured-work">
            <div className="featured-work__img-container"
                ref={imageRef}
                style={{ height: imageHeight || null }}>
                    
            </div>
        </div>
    )
}

export default FeaturedWork;