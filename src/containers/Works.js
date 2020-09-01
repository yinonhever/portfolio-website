import React from "react";
import { Switch, Route } from "react-router-dom";
import Page from "../hoc/Page";
import WorksMain from "../components/layout/WorksMain";
import Gallery from "../components/layout/Gallery";

const Works = () => (
    <Page title="Works">
        <Switch>
            <Route path="/works" exact component={WorksMain} />
            <Route path="/works/:id" component={Gallery} />
        </Switch>
    </Page>
)

export default Works;