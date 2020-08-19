import React from "react";

const GallerySection = props => (
    <div className="gallery__section">
        <h3 className="gallery__section-title">{props.title}</h3>
        <div className="gallery__grid">
            {props.items.map(item =>
                <div
                    key={item.src}
                    className="gallery__item"
                    style={{ maxHeight: item.type === "desktop" ? "15rem" : "30rem" }}
                    onClick={() => props.itemClicked(item)}
                >
                    <img src={item.src} alt={item.caption} />
                </div>
            )}
        </div>
    </div>
)

export default React.memo(GallerySection);