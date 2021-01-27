import React from "react";
import Aux from "./Auxilliary";
import PageHeading from "../components/layout/PageHeading";

const Page = props => {
    const { title, children } = props;
    if (title) {
        document.title = title + " – Yinon Hever";
    }
    else {
        document.title = "Yinon Hever – Portfolio Website";
    }
    window.scrollTo(0, 0);

    return (
        <Aux>
            {title && <PageHeading title={title} />}
            <main className="page-container">
                {children}
            </main>
        </Aux>
    )
}

export default Page;