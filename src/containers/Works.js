import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Page from "../hoc/Page";
import WorksMain from "../components/layout/WorksMain";
import Gallery from "../components/layout/Gallery";
import Spinner from "../components/UI/Spinner";
import Error from "../components/UI/Error";

const Works = () => {
    const { loading, error } = useSelector(state => state.works);

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