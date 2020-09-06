import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import Feature from "./Feature";

SwiperCore.use([Autoplay, Pagination]);

const slides = [
    {
        id: "slide1",
        heading: "Beautifully optimized, responsive designs",
        text: `I'm committed to coding beautiful and accurate designs with a wide variety of layouts, effects,
            animations and complex elements, making them as pixel-perfect as possible and ensuring
            their ultimate responsiveness for any possible screen size. I take care of every small detail
            to bring any website to its most optimal appearance.`
    },
    {
        id: "slide2",
        heading: "Fully functional, usable apps",
        text: `I build various web applications with full, optimized functionality and a professional,
            well-designed interface with maximum usability. I make sure to create a seamless
            user experience for any web app, allowing users to browse, navigate and use the website's
            content in the easiest and most efficient way possible.`
    }
]

const Features = () => (
    <Swiper
        spaceBetween={window.innerWidth > 700 ? 0 : 30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 8000 }}
        speed={500}
    >
        {slides.map(slide =>
            <SwiperSlide>
                <Feature key={slide.id} id={slide.id} heading={slide.heading}>
                    {slide.text}
                </Feature>
            </SwiperSlide>
        )}
    </Swiper>
)


export default Features;