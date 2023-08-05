import React from "react";
import Head from "next/head";
import Page from "../components/layout/Page";
import Intro from "../components/layout/Intro";
import FeaturedWorks from "../components/layout/FeaturedWorks";
import Features from "../components/layout/Features";
import Tools from "../components/layout/Tools";
import getWorks from "@/util/get-works";

export default function Home({ works }) {
  return (
    <>
      <Head>
        <title>Yinon Hever – Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page>
        <Intro />
        <FeaturedWorks works={works} />
        <Features />
        <Tools />
      </Page>
    </>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  return { props: { works } };
};
