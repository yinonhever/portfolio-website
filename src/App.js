import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./sass/main.scss";
import Layout from "./containers/Layout";

const App = () => (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)

export default App;