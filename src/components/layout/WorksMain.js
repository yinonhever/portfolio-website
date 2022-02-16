import React, { useContext } from "react";
import Work from "../UI/Work";
import WorksContext from "../../store/works-context";

const WorksMain = () => {
  const { works } = useContext(WorksContext);

  return (
    <main className="works">
      {works.map((work, index) => (
        <Work
          key={work.id}
          id={work.id}
          img={work.mainImg}
          title={work.title}
          description={work.description}
          url={work.url}
          mirror={index % 2 !== 0}
        />
      ))}
    </main>
  );
};

export default WorksMain;
