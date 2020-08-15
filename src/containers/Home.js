import React from "react";
import Aux from "../hoc/Auxilliary";
import Intro from "../components/Intro";
import FeaturedWorks from "../components/FeaturedWorks";
import Features from "../components/Features";
import Tools from "../components/Tools";

const Home = () =>
    <Aux>
        <Intro />
        <FeaturedWorks />
    </Aux>

export default Home;