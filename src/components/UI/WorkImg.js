import React, { useState, useRef, useLayoutEffect } from "react";

const WorkImg = props => {
    const [imageBoxHeight, setImageBoxHeight] = useState();
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

    return (
        <div className={props.classes}
            style={{ height: imageBoxHeight || "20rem" }}>
            <img src={props.src} alt={props.alt} ref={imageRef} />
        </div>
    )
}

export default WorkImg;