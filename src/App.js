import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./css/bttn.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./sass/main.scss";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Works from "./containers/Works";
import Contact from "./containers/Contact";
import { WorksContextProvider } from "./store/works-context";

const App = () => (
    <BrowserRouter>
        <WorksContextProvider>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/works" component={Works} />
                    <Route path="/contact" component={Contact} />
                    <Redirect from="/" to="/" />
                </Switch>
            </Layout>
        </WorksContextProvider>
    </BrowserRouter>
)

export default App;