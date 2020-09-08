import React from "react";
import works from "../../data";
import Work from "../UI/Work";

const WorksMain = () => (
    <main className="works">
        {works.map((work, index) =>
            <Work
                key={work.id}
                id={work.id}
                img={work.mainImg}
                title={work.title}
                description={work.description}
                url={work.url}
                mirror={index % 2 !== 0}
            />
        )}
    </main>
)

export default WorksMain;