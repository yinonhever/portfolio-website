import React from "react";
import Aux from "../hoc/Auxilliary";
import Intro from "../components/layout/Intro";
import FeaturedWorks from "../components/layout/FeaturedWorks";
import Features from "../components/layout/Features";
import Tools from "../components/layout/Tools";

const Home = () =>
    <Aux>
        <Intro />
        <FeaturedWorks />
        <Features />
    </Aux>

export default Home;