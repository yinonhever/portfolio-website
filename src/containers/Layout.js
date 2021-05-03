import React, { Fragment } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout = props => (
    <Fragment>
        <Header />
        {props.children}
        <Footer />
    </Fragment>
)

export default Layout;