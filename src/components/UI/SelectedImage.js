import React from "react";
import InnerImageZoom from "react-inner-image-zoom";

const SelectedImage = props => {
    const { image } = props;

    return (
        <InnerImageZoom
            className="selection"
            src="/images/github-timeline/desktop-with-timeline.png"
            fullScreenOnMobile={true}
        />
    )
}

export default SelectedImage;