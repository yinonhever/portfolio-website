import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Page from "./Page";
import WorksMain from "../components/layout/WorksMain";
import Gallery from "../components/layout/Gallery";
import Spinner from "../components/UI/Spinner";
import Error from "../components/UI/Error";
import WorksContext from "../store/works-context";

const Works = () => {
    const { loading, error } = useContext(WorksContext);

    return (
        <Page title="Works">
            {loading ? <Spinner /> :
                error ? <Error /> :
                    <Switch>
                        <Route path="/works" exact component={WorksMain} />
                        <Route path="/works/:id" component={Gallery} />
                    </Switch>
            }
        </Page>
    )
}

export default Works;