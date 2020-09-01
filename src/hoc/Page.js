import React from "react";
import Aux from "./Auxilliary";
import PageHeading from "../components/layout/PageHeading";

const Page = props => {
    window.scrollTo(0, 0);

    return (
        <Aux>
            {props.title && <PageHeading title={props.title} />}
            {props.children}
        </Aux>
    )
}

export default Page;