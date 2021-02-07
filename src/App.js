import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/bttn.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./sass/main.scss";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Works from "./containers/Works";
import Contact from "./containers/Contact";
import { loadWorks } from "./redux/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWorks());
    }, [dispatch])

    return (
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
}

export default App;