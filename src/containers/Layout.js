import React from "react";
import Aux from "../hoc/Auxilliary";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = props =>
    <Aux>
        <Header />
        {props.children}
        <Footer />
    </Aux>

export default Layout;