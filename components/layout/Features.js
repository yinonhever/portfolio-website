import React from "react";
import { Pagination, Navigation, Autoplay, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Fade } from "react-awesome-reveal";
import Feature from "./Feature";

const slides = [
  {
    img: "/images/web-dev-6.jpg",
    heading: "Beautifully optimized, responsive designs",
    text: `I'm committed to coding beautiful and accurate designs with a wide variety of layouts, effects,
            animations and complex elements, making them as pixel-perfect as possible and ensuring
            their ultimate responsiveness for any possible screen size. I take care of every small detail
            to bring any website to its most optimal appearance.`
  },
  {
    img: "/images/web-dev-3.jpg",
    heading: "Fully functional, usable apps",
    text: `I build various web applications with full, optimized functionality and a professional,
            well-designed interface with maximum usability. I make sure to create a seamless
            user experience for any web app, allowing users to browse, navigate and use the website's
            content in the easiest and most efficient way possible.`
  }
];

const Features = () => (
  <Fade direction="left" duration={700} triggerOnce>
    <section className="features">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectCube]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
        autoplay={{ delay: 8000 }}
        speed={700}
        effect="cube"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.img}>
            <Feature {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </Fade>
);

export default Features;
