import React, { useState } from "react";
import SwiperCore, { Pagination, Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import Feature from "./Feature";

SwiperCore.use([Autoplay, Pagination, Parallax]);

const slides = [
    {
        index: 1,
        heading: "Beautifully optimized, responsive designs",
        text: `I'm committed to coding beautiful and accurate designs with a wide variety of layouts, effects,
            animations and complex elements, making them as pixel-perfect as possible and ensuring
            their ultimate responsiveness for any possible screen size. I take care of every small detail
            to bring any website to its most optimal appearance.`
    },
    {
        index: 2,
        heading: "Fully functional, usable apps",
        text: `I build various web applications with full, optimized functionality and a professional,
            well-designed interface with maximum usability. I make sure to create a seamless
            user experience for any web app, allowing users to browse, navigate and use the website's
            content in the easiest and most efficient way possible.`
    }
]

const Features = () => {
    const [index, setIndex] = useState(1);

    const changeHandler = () => setIndex(currIndex => {
        if (currIndex < slides.length) return currIndex + 1;
        else return 1;
    })

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 5000 }}
            speed={500}
            parallax={true}
            onSlideChange={changeHandler}
        >
            {slides.map(slide =>
                <SwiperSlide>
                    <Feature
                        key={slide.index}
                        id={"slide" + slide.index}
                        heading={slide.heading}
                        active={index === slide.index}
                    >
                        {slide.text}
                    </Feature>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Features;