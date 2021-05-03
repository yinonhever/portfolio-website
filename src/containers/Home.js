import React from "react";
import Page from "./Page";
import Intro from "../components/layout/Intro";
import FeaturedWorks from "../components/layout/FeaturedWorks";
import Features from "../components/layout/Features";
import Tools from "../components/layout/Tools";

const Home = () => (
    <Page>
        <Intro />
        <FeaturedWorks />
        <Features />
        <Tools />
    </Page>
)

export default Home;