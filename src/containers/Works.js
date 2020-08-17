import React from "react";
import { Switch, Route } from "react-router-dom";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/layout/PageHeading";
import WorksContent from "../components/layout/WorksContent";
import Gallery from "../components/layout/Gallery";

const Works = () => (
    <Aux>
        <PageHeading title="Works" />
        <Switch>
            <Route path="/works" exact component={WorksContent} />
            <Route path="/works/:id" component={Gallery} />
        </Switch>
    </Aux>
)

export default Works;