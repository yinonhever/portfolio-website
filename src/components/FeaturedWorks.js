import React from "react";
import works from "../data";
import FeaturedWork from "./FeaturedWork";

// const featuredWorks = works.filter(work => work.featured);
const featuredWorks = [{}, {}, {}, {}, {}, {}]

const FeaturedWorks = () => (
    <section className="featured-works">
        <h2 className="section-heading featured-works__heading">Featured Works</h2>
        <div className="featured-works__grid">
            {featuredWorks.map(work =>
                <FeaturedWork
                    img={work.mainImg}
                    title={work.title}
                    text={work.featuredText}
                    url={work.url}
                    key={work.id}
                />)}
        </div>
    </section>
)

export default FeaturedWorks;