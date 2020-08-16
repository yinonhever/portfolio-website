import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import works from "../../data";
import FeaturedWork from "../UI/FeaturedWork";

const featuredWorks = works.filter(work => work.featured);

const FeaturedWorks = () => (
    <section className="featured-works">
        <h2 className="section-heading featured-works__heading">Featured Works</h2>
        <Link to="/works" style={{ textDecoration: "none" }}>
            <Button unite extra="featured-works__view-all">View All</Button>
        </Link>
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