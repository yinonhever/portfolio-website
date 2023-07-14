import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./css/bttn.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./sass/main.scss";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Works from "./containers/Works";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";
import { WorksContextProvider } from "./store/works-context";

const App = () => (
  <BrowserRouter>
    <WorksContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </WorksContextProvider>
  </BrowserRouter>
);

export default App;
