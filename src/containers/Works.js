import React, { useContext } from "react";
import Work from "../components/UI/Work";
import WorksContext from "../store/works-context";
import Page from "./Page";
import Spinner from "../components/UI/Spinner";
import Error from "../components/UI/Error";

const WorksMain = () => {
  const { works, loading, error } = useContext(WorksContext);

  return (
    <Page title="Works">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
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
      )}
    </Page>
  );
};

export default WorksMain;
