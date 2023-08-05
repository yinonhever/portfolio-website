import React, { useState, useRef, useEffect } from "react";

const FeaturedWorkTitle = props => {
  const [marginTop, setMarginTop] = useState();
  const titleRef = useRef();

  useEffect(() => {
    const adjustHeight = () => {
      if (titleRef.current) {
        const { height } = titleRef.current.getBoundingClientRect();
        setMarginTop(-height / 2);
      }
    };
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
  }, []);

  return (
    <h3
      className="featured-work__title"
      ref={titleRef}
      style={{ marginTop: marginTop || null }}
    >
      <span>{props.title}</span>
    </h3>
  );
};

export default FeaturedWorkTitle;
