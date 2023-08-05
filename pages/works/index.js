import React from "react";
import Head from "next/head";
import Work from "../../components/UI/Work";
import Page from "../../components/layout/Page";
import getWorks from "@/util/get-works";

export default function Works({ works }) {
  return (
    <>
      <Head>
        <title>Works – Yinon Hever</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page title="Works">
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
      </Page>
    </>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  return { props: { works } };
};
