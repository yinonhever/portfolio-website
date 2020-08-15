import React from "react";
import Aux from "../hoc/Auxilliary";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout = props =>
    <Aux>
        <Header />
        {props.children}
        <Footer />
    </Aux>

export default Layout;