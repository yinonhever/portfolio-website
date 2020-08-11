import React, { useState } from "react";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/PageHeading";
import Work from "../components/Work";
import Gallery from "../components/Gallery";

const Works = () => {
    const [gallery, setGallery] = useState([]);
    const [showGallery, setShowGallery] = useState(false);

    return (
        <Aux>
            <div></div>
        </Aux>
    )
}

export default Works;