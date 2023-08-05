import React, { useState, useRef, useEffect } from "react";

const WorkImg = props => {
  const [imageBoxHeight, setImageBoxHeight] = useState();
  const imageRef = useRef();

  useEffect(() => {
    const adjustHeight = () => {
      if (imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        const boxHeight =
          window.innerWidth > 450 ? (width * 60) / 100 : (width * 65) / 100;
        setImageBoxHeight(
          boxHeight <= height || height === 0 ? boxHeight : height
        );
      }
    };
    setTimeout(adjustHeight, 100);
    window.addEventListener("resize", adjustHeight);
  }, []);

  return (
    <div
      className={props.classes}
      style={{ height: imageBoxHeight || "20rem" }}
    >
      <img src={props.src} alt={props.alt} ref={imageRef} />
    </div>
  );
};

export default WorkImg;
