import React from "react";
import works from "../../data";
import Fade from "react-reveal/Fade";
import Work from "../UI/Work";
import illustration from "../../images/Illustrations/undraw_responsive_6c8s.svg";

const WorksMain = () => (
    <main className="works">
        <Fade right duration={600}>
            <div className="works__img">
                <img src={illustration} alt="works" />
            </div>
        </Fade>
        {works.map((work, index) =>
            <Work
                key={work.id}
                id={work.id}
                img={work.mainImg}
                title={work.title}
                description={work.description}
                url={work.url}
                mirror={index % 2 !== 0}
            />)}
    </main>
)

export default WorksMain;