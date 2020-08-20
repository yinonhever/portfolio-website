import React, { useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/layout/PageHeading";
import WorksMain from "../components/layout/WorksMain";
import Gallery from "../components/layout/Gallery";

const Works = () => {
    useLayoutEffect(() => window.scrollTo(0, 0), []);
    
    return (
        <Aux>
            <PageHeading title="Works" />
            <Switch>
                <Route path="/works" exact component={WorksMain} />
                <Route path="/works/:id" component={Gallery} />
            </Switch>
        </Aux>
    )
}

export default Works;