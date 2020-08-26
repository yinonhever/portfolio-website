import React, { useState, useRef, useLayoutEffect } from "react";
import works from "../../data";
import { Link } from "react-router-dom";

const Suggestion = props => {
    const item = works.find(work => work.id === props.id);
    const [imageHeight, setImageHeight] = useState();
    const imageRef = useRef();

    useLayoutEffect(() => {
        const adjustHeight = () => {
            if (imageRef.current) {
                const { width } = imageRef.current.getBoundingClientRect();
                setImageHeight(width * 60 / 100);
            }
        }
        adjustHeight();
        window.addEventListener("resize", adjustHeight);
    }, [])

    return (
        <div className="suggestions__item">
            <Link to={"/works/" + item.id}>
                <div ref={imageRef} className="suggestions__img" style={{ height: imageHeight || null }}>
                    <img src={item.mainImg} alt={item.title} />
                </div>
                <h4 className="suggestions__name">{item.title}</h4>
            </Link>
        </div>
    )

}

export default React.memo(Suggestion);