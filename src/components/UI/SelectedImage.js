import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Scrollbars } from "react-custom-scrollbars";
import Fade from "react-reveal/Fade";

const SelectedImage = props => {
    const { image } = props;

    return (
        <Fade right duration={600}>
            <div className="gallery__selected-text">
                <h4 className="gallery__selected-title">{image.caption}</h4>
                <p className="gallery__selected-subtext">Click on the image to zoom</p>
            </div>
            <Scrollbars
                className="gallery__selected-img"
                autoHeight
                autoHeightMax={1800}
                style={{
                    maxWidth: image.type === "mobile" ? "30rem" :
                        image.type === "tablet" ? "45rem" : null,
                }}>
                <InnerImageZoom
                    src={image.src}
                    fullscreenOnMobile={true}
                    mobileBreakpoint={700}
                />
            </Scrollbars>
        </Fade>
    )
}

export default SelectedImage;