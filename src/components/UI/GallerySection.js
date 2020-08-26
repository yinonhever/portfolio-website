import React from "react";
import Fade from "react-reveal/Fade";

const GallerySection = props => (
    <Fade left cascade duration={400} appear spy={props.items}>
        <div className="gallery__section">
            <h3 className="gallery__section-title">{props.title}</h3>
            <div className="gallery__grid">
                {props.items.map(item =>
                    <div
                        key={item.src}
                        className="gallery__item"
                        style={{ maxHeight: item.type === "desktop" ? "15rem" : "25rem" }}
                        onClick={() => props.itemClicked(item)}
                    >
                        <img src={item.src} alt={item.caption} />
                    </div>
                )}
            </div>
        </div>
    </Fade>
)

export default GallerySection;