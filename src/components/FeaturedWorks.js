import React from "react";
import Fade from "react-reveal/Fade";
import works from "../data";
import FeaturedWork from "./FeaturedWork";

const featuredWorks = works.filter(work => work.featured);

const FeaturedWorks = () => (
    <section className="featured-works">
        <Fade bottom duration={800}>
            <h2 className="section-heading featured-works__heading">Featured Works</h2>
        </Fade>
        <div className="featured-works__grid">
            {featuredWorks.map((work, index) =>
                <FeaturedWork
                    img={work.mainImg}
                    title={work.title}
                    text={work.featuredText}
                    url={work.url}
                    mirror={index % 2 !== 0}
                    key={work.id}
                />)}
        </div>
    </section>
)

export default FeaturedWorks;