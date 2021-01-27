import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import FeaturedWork from "../UI/FeaturedWork";
import Spinner from "../UI/Spinner";
import Error from "../UI/Error";

const FeaturedWorks = () => {
    const { works, loading, error } = useSelector(state => state.works);
    const featuredWorks = works.filter(work => work.featured);

    return (
        <section className="featured-works">
            <h2 className="section-heading featured-works__heading">Featured Works</h2>
            <Link to="/works" className="featured-works__view-all">
                <Button unite>View All</Button>
            </Link>
            {loading ? <Spinner /> :
                error || !works.length ? <Error /> :
                    <div className="featured-works__grid">
                        {featuredWorks.map((work, index) =>
                            <FeaturedWork
                                img={work.mainImg}
                                title={work.title}
                                text={work.featuredText}
                                url={work.url}
                                id={work.id}
                                mirror={index % 2 !== 0}
                                key={work.id}
                            />)}
                    </div>}
        </section>
    )
}

export default FeaturedWorks;