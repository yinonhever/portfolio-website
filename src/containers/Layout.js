import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Aux from "../hoc/Auxilliary";
import Home from "./Home";
import Works from "./Works";
import Contact from "./Contact";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import HomeIntro from "../components/HomeIntro";

const Layout = () => (
    <Aux>
        <Route path="/" render={props =>
            <Intro {...props}>
                <Route path="/" exact component={HomeIntro} />
            </Intro>
        } />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" to="/" />
        </Switch>
        <Footer />
    </Aux>
)

export default Layout;