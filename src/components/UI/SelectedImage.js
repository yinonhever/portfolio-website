import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Fade from "react-reveal/Fade";

const SelectedImage = props => {
    const { image } = props;
    return (
        <div className="gallery__selected">
            <Fade left duration={600}>
                <div className="gallery__selected-text">
                    <h4 className="gallery__selected-title">{image.caption}</h4>
                    <p className="gallery__selected-subtext">Click on the image to zoom</p>
                </div>
            </Fade>
            <Fade right duration={600}>
                <div style={{
                    margin: "auto",
                    maxWidth: image.type === "mobile" ? "30rem" :
                        image.type === "tablet" ? "45rem" : null
                }}>
                    <InnerImageZoom
                        className="gallery__selected-img"
                        src={image.src}
                        fullscreenOnMobile={true}
                    />
                </div>
            </Fade>
        </div>
    )
}

export default SelectedImage;