import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./sass/main.scss";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Works from "./containers/Works";
import Contact from "./containers/Contact";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/works" component={Works} />
                <Route path="/contact" component={Contact} />
                <Redirect from="/" to="/" />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;