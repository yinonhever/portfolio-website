import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Fade from "react-reveal/Fade";

SwiperCore.use([Navigation, Pagination]);

const Carousel = props => {
    const slides = () => window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
    const [slidesPerView, setSlidesPerView] = useState(slides());
    useEffect(() => {
        window.addEventListener("resize", () => setSlidesPerView(slides()));
    }, [])

    return (
        <Fade left duration={600} appear spy={props.items}>
            <Swiper
                spaceBetween={window.innerWidth > 600 ? 50 : 35}
                slidesPerView={slidesPerView}
                navigation
                freeMode={window.innerWidth > 600 ? true : false}
                pagination={{ clickable: true }}
                loop
                className="swiper"
            >
                {props.items.map(item =>
                    <SwiperSlide key={item.key}>
                        {item}
                    </SwiperSlide>
                )}
            </Swiper>
        </Fade>
    );
};

export default Carousel;