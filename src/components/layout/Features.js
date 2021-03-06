import React from "react";
import SwiperCore, { Pagination, Navigation, Autoplay, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import Fade from "react-reveal/Fade";
import Feature from "./Feature";
import image1 from "../../images/web-dev-6.jpg";
import image2 from "../../images/web-dev-3.jpg";

SwiperCore.use([Pagination, Navigation, Autoplay, EffectCube]);

const slides = [
    {
        img: image1,
        heading: "Beautifully optimized, responsive designs",
        text: `I'm committed to coding beautiful and accurate designs with a wide variety of layouts, effects,
            animations and complex elements, making them as pixel-perfect as possible and ensuring
            their ultimate responsiveness for any possible screen size. I take care of every small detail
            to bring any website to its most optimal appearance.`
    },
    {
        img: image2,
        heading: "Fully functional, usable apps",
        text: `I build various web applications with full, optimized functionality and a professional,
            well-designed interface with maximum usability. I make sure to create a seamless
            user experience for any web app, allowing users to browse, navigate and use the website's
            content in the easiest and most efficient way possible.`
    }
]

const Features = () => (
    <Fade left duration={700}>
        <section className="features">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                loop
                autoplay={{ delay: 8000 }}
                speed={700}
                effect="cube"
            >
                {slides.map(slide =>
                    <SwiperSlide key={slide.img}>
                        <Feature {...slide} />
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    </Fade>
)

export default Features;