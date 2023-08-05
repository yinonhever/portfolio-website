import React from "react";
import Link from "next/link";
import Button from "../UI/Button";
import FeaturedWork from "../UI/FeaturedWork";

const FeaturedWorks = ({ works }) => {
  const featuredWorks = works.filter(work => work.featured);

  return (
    <section className="featured-works">
      <h2 className="section-heading featured-works__heading">
        Featured Works
      </h2>
      <Link href="/works" className="featured-works__view-all">
        <Button unite>View All</Button>
      </Link>
      <div className="featured-works__grid">
        {featuredWorks.map((work, index) => (
          <FeaturedWork
            img={work.mainImg}
            title={work.title}
            text={work.featuredText}
            url={work.url}
            id={work.id}
            mirror={index % 2 !== 0}
            key={work.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
